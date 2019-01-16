const fs = require('fs')
const luainjs = require('lua-in-js')
const execSync = require('child_process').execSync

const factorioDirectory = process.argv[2]
const outputFile = process.argv[3]

const reqLualibRegex = /.*?require\s*\(*['"]([^.]+?)['"]\)*/g
const reqRegex = /require\s*\(*['"](.+?)['"]\)*/g

const loadedModules = []

function searchLoadRemoveDependencies(contents, regex, baseFolder) {
    const newModules = []
    let match = regex.exec(contents)
    while (match !== null) {
        const dep = match[1]
        if (!loadedModules.includes(dep)) {
            //load module
            loadedModules.push(dep)
            newModules.push({
                index: match.index,
                name: dep
            })
        }
        match = regex.exec(contents)
    }

    let offset = 0
    for (let i = 0; i < newModules.length; i++) {
        const startPart = contents.slice(0, newModules[i].index + offset)
        const endPart = contents.slice(newModules[i].index + offset)
        const depData = readRequireOfFile(baseFolder, newModules[i].name.replace(/\./g, '/') + '.lua') + '\n'
        contents = startPart + depData + endPart
        offset += depData.length
    }

    // remove all requires
    contents = contents.replace(regex, '')

    return contents
}

function readRequireOfFile(baseFolder, pathCon) {
    let contents = fs.readFileSync(factorioDirectory + baseFolder + pathCon).toString()

    contents = searchLoadRemoveDependencies(contents, reqLualibRegex, 'core/lualib/')
    contents = searchLoadRemoveDependencies(contents, reqRegex, baseFolder)

    contents = contents
        // remove last return
        .replace(/return\s*\b.+?\b\s*$/g, '')

        // if a return is an obj, convert the return with the filename
        .replace(/return\s(\{(.|\n)+?\})\s*$/g, (_, capture) =>
            [...pathCon.split('/')].pop().replace('.lua', '') + ' = ' + capture
        )

    if (pathCon.includes('autoplace_utils')) {
        contents = contents.replace(/M/g, 'autoplace_utils')
    }

    return contents
}

const fileOrder = [
    'core/lualib/dataloader.lua',
    'core/data.lua',
    'base/data.lua',
    'base/data-updates.lua'
]

const luaFileData =
    'defines = ' + fs.readFileSync('./defines.lua').toString() +
    fileOrder
        .map(path => readRequireOfFile(path.split('/')[0] + '/', path.split('/').slice(1).join('/')))
        .reduce((acc, data) => acc + data + '\n')
        // var = require(...) results in var = var = {}
        .replace(/\b[a-zA-Z_-]+?\b\s*(=\s*\b[a-zA-Z_-]+?\b\s*)=\s*\{/g, (match, capture) => match.replace(capture, ''))

// fs.writeFileSync('./temp.lua', luaFileData)

const data = luainjs.parser.parse(luaFileData)
fs.writeFileSync('./temp.js', `
const fs = require("fs");
require("lua-in-js").runtime;
${data}
fs.writeFileSync('${outputFile}', JSON.stringify(Tget($get($, 'data'), 'raw').toObject(), null, 2));
fs.unlinkSync('./temp.js');
`)
execSync('node temp.js')
