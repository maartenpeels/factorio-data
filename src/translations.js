const fse = require('fs-extra')
const utils = require('./utils')

const translationFile = process.argv[2] + 'base/locale/en/base.cfg'
const file = process.argv[3]

const translationData = fse.readFileSync(translationFile).toString()

function stringMatchAll(string, regex) {
    const indexes = []
    let match = regex.exec(string)
    while (match !== null) {
        indexes.push(match.index)
        match = regex.exec(string)
    }
    return indexes
}

const emptyLines = stringMatchAll(translationData, /(^\s)/gm)

const namesOnly = stringMatchAll(translationData, /\[(.+?)-name\]/gm)
    .map(start => {
        const end = emptyLines.find(i => i > start)
        return translationData.substring(start, end)
    })
    .join('\n')

const descriptionsOnly = stringMatchAll(translationData, /\[(.+?)-description\]/gm)
    .map(start => {
        const end = emptyLines.find(i => i > start)
        return translationData.substring(start, end)
    })
    .join('\n')

const fileObj = require(file)

Object.keys(fileObj).forEach(k => {
    const name = fileObj[k].name.replace(/_/g, '-')

    const ui_name = new RegExp('^' + name + '=(.+?)$', 'gm').exec(namesOnly)
    const description = new RegExp('^' + name + '=(.+?)$', 'gm').exec(descriptionsOnly)

    fileObj[k].ui_name = ui_name
        ? ui_name[1]
        : fileObj[k].name.replace(/_/g, ' ').replace(/\b\w/, l => l.toUpperCase())

    if (description) fileObj[k].description = description[1]
})

utils.writeJSObject(file + '.js', fileObj)
