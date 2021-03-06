const nsg = require('node-sprite-generator')
const inventory = require('../../data/prototypes/inventoryLayout')
const utils = require('../utils')

const factorioDataDirectory = process.argv[2]
const spritesheetsOutDir = process.argv[3]

Array.prototype.unique = function () {
    return Array.from(new Set(this).values())
}

const iconPaths = utils.stringMatchAll(JSON.stringify(inventory), /"((__base__\/)?graphics\/.+?)"/g)
    .map(p => p.replace(/__base__\//g, ''))
    .unique()
    .map(p => factorioDataDirectory + 'base/' + p)

console.log('Icon sprites: ' + iconPaths.length)
nsg({
    src: iconPaths,
    spritePath: spritesheetsOutDir + 'iconSpritesheet.png',
    stylesheet: './json.tpl',
    stylesheetPath: spritesheetsOutDir + 'iconSpritesheet.json',
    stylesheetOptions: { nameMapping: path => path.replace(factorioDataDirectory + 'base/', '') },
    compositor: 'jimp',
    layout: 'packed',
    layoutOptions: { padding: 2 }
}, err => {
    if (err)
        console.log(err)
    else
        console.log('Icon sprite atlas generated!')
})
