const fse = require('fs-extra')
const javascriptStringify = require('javascript-stringify')

function loadRawData(path) {
    return JSON.parse(fse.readFileSync(path)
        .toString()
        // pipe_to_ground uses up, right, down, left
        .replace(/"up"/g, '"north"')
        .replace(/"right"/g, '"east"')
        .replace(/"down"/g, '"south"')
        .replace(/"left"/g, '"west"')
        .replace(/("(?!__base__|__core__)[^"\n]+?-[^"\n]+?")/g, (_, capture) => capture.replace(/-/g, '_')))
}

function writeJSObject(path, object) {
    fse.writeFile(path, 'module.exports = ' + javascriptStringify(JSON.parse(JSON.stringify(object)
        .replace(/"(__base__|__core__)\/(.+?)"/g, '"$2"')
    ), null, 2))
}

function stringMatchAll(string, regex) {
    const res = []
    let match = regex.exec(string)
    while (match !== null) {
        res.push(match[1])
        match = regex.exec(string)
    }
    return res
}

module.exports = {
    loadRawData,
    writeJSObject,
    stringMatchAll
}
