const fse = require('fs-extra')
const javascriptStringify = require('javascript-stringify')
const items = require('../data/prototypes/items')

const rawDataString = fse.readFileSync(process.argv[2]).toString()
    .replace(/("(?!__base__|__core__)[^"\n]+?-[^"\n]+?")/g, (_, capture) => capture.replace(/-/g, '_'))

const rawData = JSON.parse(rawDataString)
const outputFile = process.argv[3]

const blacklistedGroups = [
    'environment',
    'enemies',
    'other'
]

Array.prototype.each = function (callbackfn) {
    this.forEach(callbackfn)
    return this
}

function sortByOrder(a, b) {
    // https://forums.factorio.com/viewtopic.php?f=25&t=3236#p23818
    // https://forums.factorio.com/viewtopic.php?f=25&t=24163#p152955
    if (a.order < b.order) return -1
    if (a.order > b.order) return 1
    return 0
}

function removeExtraInfo(obj) {
    Object.keys(obj).forEach(k => { if (!['name', 'icon', 'icons'].includes(k)) delete obj[k] })
}

function objToArr(obj) {
    return Object.keys(obj).map(k => obj[k])
}

const inventory = objToArr(rawData.item_group)
    .filter(g => !blacklistedGroups.includes(g.name))
    .sort(sortByOrder)
    .each(removeExtraInfo)
    .each(g => g.subgroups =
        objToArr(rawData.item_subgroup)
        .filter(sg => sg.group === g.name)
        .sort(sortByOrder)
        .each(removeExtraInfo)
        .each(sg => sg.items =
            objToArr(items)
            .filter(i => i.subgroup === sg.name)
            .sort(sortByOrder)
            .each(removeExtraInfo)
        )
        .filter(sg => sg.items.length !== 0)
    )

fse.writeFileSync(outputFile, 'module.exports = ' + javascriptStringify(JSON.parse(JSON.stringify(inventory)
    .replace(/"(__base__|__core__)\/(.+?)"/g, '"$2"')
), null, 2))
