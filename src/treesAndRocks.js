const utils = require('./utils')

const rawData = utils.loadRawData(process.argv[2])
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
utils.writeJSObject(outputFile, treesAndRocks)
