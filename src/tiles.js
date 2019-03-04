const utils = require('./utils')

const rawData = utils.loadRawData(process.argv[2])
const outputFile = process.argv[3]

const tiles = Object.keys(rawData.tile)
    .map(k => rawData.tile[k])
    .filter(t => t.minable || t.name === 'grass_1')
    .map(t => { delete t.autoplace; return t })
    .reduce((acc, t) => { acc[t.name] = t; return acc }, {})

console.log('Tiles: ' + Object.keys(tiles).length)
utils.writeJSObject(outputFile, tiles)
