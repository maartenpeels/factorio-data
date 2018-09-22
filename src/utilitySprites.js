const nsg = require('node-sprite-generator')

const factorioDataDirectory = process.argv[2]
const spritesheetsOutDir = process.argv[3]

const utilityPaths = [
    'cursor-boxes-32x32',
    'cursor-boxes',
    'entity-info-dark-background',
    'electricity-icon-unplugged',
    'too-far',
    'arrows/fluid-indication-arrow',
    'arrows/fluid-indication-arrow-both-ways',
    'arrows/indication-arrow',
    'arrows/underground-lines'
].map(p => factorioDataDirectory + 'core/graphics/' + p + '.png')

console.log('Utility sprites: ' + utilityPaths.length)
nsg({
    src: utilityPaths,
    spritePath: spritesheetsOutDir + 'utilitySpritesheet.png',
    stylesheet: './json.tpl',
    stylesheetPath: spritesheetsOutDir + 'utilitySpritesheet.json',
    stylesheetOptions: { nameMapping: path => path.replace(factorioDataDirectory + 'core/', '') },
    compositor: 'jimp',
    layout: 'packed',
    layoutOptions: { padding: 2 }
}, err => {
    if (err)
        console.log(err)
    else
        console.log('Utility sprite atlas generated!')
})
