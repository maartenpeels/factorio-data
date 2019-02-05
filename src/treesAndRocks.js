const fse = require('fs-extra')
const javascriptStringify = require('javascript-stringify')

const rawDataString = fse.readFileSync(process.argv[2]).toString()
    .replace(/("(?!__base__|__core__)[^"\n]+?-[^"\n]+?")/g, (_, capture) => capture.replace(/-/g, '_'))

const rawData = JSON.parse(rawDataString)
const outputFile = process.argv[3]

let treesAndRocks = {}
function findAllEntities(data) {
    if (data.constructor === Object) {
        if (data.type === 'tree' || (data.type === 'simple_entity' && data.name.includes('rock'))) {
            treesAndRocks[data.name] = data
        } else {
            for (let k in data) {
                if (data.hasOwnProperty(k)) {
                    findAllEntities(data[k])
                }
            }
        }
    }
}
findAllEntities(rawData)

for (let k in treesAndRocks) {
    e = treesAndRocks[k]

    // Size
    e.size = {
        width: Math.ceil(Math.abs(e.selection_box[0][0]) + Math.abs(e.selection_box[1][0])),
        height: Math.ceil(Math.abs(e.selection_box[0][1]) + Math.abs(e.selection_box[1][1]))
    }
}

const keysToDelete = [
    'vehicle_impact_sound',
    'resistances',
    'autoplace'
]

Object.keys(treesAndRocks).forEach(entK =>
    Object.keys(treesAndRocks[entK])
        .filter(k => keysToDelete.includes(k))
        .forEach(k => delete treesAndRocks[entK][k])
)

console.log('Trees and Rocks: ' + Object.keys(treesAndRocks).length)

fse.writeFileSync(outputFile, 'module.exports = ' + javascriptStringify(JSON.parse(JSON.stringify(treesAndRocks)
    .replace(/"(__base__|__core__)\/(.+?)"/g, '"$2"')
), null, 2))
