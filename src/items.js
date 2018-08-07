const fse = require('fs-extra')
const javascriptStringify = require('javascript-stringify')

const rawDataString = fse.readFileSync(process.argv[2]).toString()
    .replace(/("(?!__base__|__core__)[^"\n]+?-[^"\n]+?")/g, (_, capture) => capture.replace(/-/g, '_'))

const rawData = JSON.parse(rawDataString)
const outputFile = process.argv[3]

const items = {}
function findAllItems(data) {
    if (data.constructor === Object) {
        if (data.hasOwnProperty('subgroup')) {
            addItem(data)
        } else {
            for (const k in data) {
                if (data.hasOwnProperty(k)) {
                    findAllItems(data[k])
                }
            }
        }
    }
}
findAllItems(rawData)

for (const k in rawData['fluid']) {
    const fluid = rawData['fluid'][k]
    fluid.subgroup = 'fluid'
    addItem(fluid)
}

function addItem(item) {
    if ((item.flags && (item.flags.includes('hidden') || item.flags.includes('not_on_map'))) ||
    !(item.icon || item.icons) || !item.order || item.collision_box) return

    items[item.name] = item
}

console.log('Items: ' + Object.keys(items).length)

fse.writeFileSync(outputFile, 'module.exports = ' + javascriptStringify(JSON.parse(JSON.stringify(items)
    .replace(/"(__base__|__core__)\/(.+?)"/g, '"$2"')
), null, 2))
