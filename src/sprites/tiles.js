const fse = require('fs-extra')
const nsg = require('node-sprite-generator')
const Jimp = require('jimp')
const tiles = require('../../data/prototypes/tiles')

const factorioDataDirectory = process.argv[2]
const spritesheetsOutDir = process.argv[3]

// https://stackoverflow.com/a/2450976
Array.prototype.shuffle = function () {
    let currentIndex = this.length, temporaryValue, randomIndex
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1
        temporaryValue = this[currentIndex]
        this[currentIndex] = this[randomIndex]
        this[randomIndex] = temporaryValue
    }
    return this
}

// stone-path custom logic - generates a 512x512 tilable sprite
Promise.all([{
    path: factorioDataDirectory + 'base/graphics/terrain/stone-path/hr-stone-path-1.png',
    divisions: 16,
    size: 64,
    needed: 36
}, {
    path: factorioDataDirectory + 'base/graphics/terrain/stone-path/hr-stone-path-2.png',
    divisions: 16,
    size: 128,
    needed: 7
}].map(data => Promise.all(
    new Array(data.needed).fill('').map((_, i) => {
        const outPath = 'temp/' + data.path.replace(factorioDataDirectory + 'base/', '').replace('.png', '/' + i + '.png')
        return Jimp
            .read(data.path)
            .then(img => img
                .crop((i % data.divisions) * data.size, 0, data.size, data.size)
                .write(outPath))
            .then(() => outPath)
    }))
))
.then(p => new Promise((resolve, reject) =>
    nsg({
        src: [].concat(...p).shuffle(),
        spritePath: 'temp/graphics/terrain/stone-path/stone-path.png',
        stylesheet: './json.tpl',
        stylesheetPath: 'temp/graphics/terrain/stone-path/stone-path.json',
        compositor: 'jimp',
        layout: 'packed',
        layoutOptions: { padding: 0 }
    }, err => err ? reject(err) : resolve('temp/graphics/terrain/stone-path/stone-path.png')))
)
.catch(err => console.log(err))

.then(stonePathPath => {
    // the other tiles
    Promise.all(Object.values(tiles)
        .map(t => t.variants.material_background && t.variants.material_background.hr_version.picture)
        .filter(p => p)
        .map(p => factorioDataDirectory + 'base/' + p)
        .map(path => {
            const outPath = 'temp/' + path.replace(factorioDataDirectory + 'base/', '')
            return Jimp
                .read(path)
                .then(img => img
                    .crop(0, 0, 512, 512)
                    .write(outPath))
                .then(() => outPath)
        })
    ).then(paths => {
        console.log('Tile sprites: ' + paths.length + 1)
        nsg({
            src: paths.concat(stonePathPath),
            spritePath: spritesheetsOutDir + 'tileSpritesheet.png',
            stylesheet: './json.tpl',
            stylesheetPath: spritesheetsOutDir + 'tileSpritesheet.json',
            stylesheetOptions: { nameMapping: path => path.replace('temp/', '') },
            compositor: 'jimp',
            layout: 'packed',
            layoutOptions: { padding: 0 }
        }, err => {
            if (err) {
                console.log(err)
            } else {
                fse.remove('temp')

                Jimp.read(spritesheetsOutDir + 'tileSpritesheet.png')
                    .then(img => new Jimp(img.getWidth(), img.getHeight(), '#000000')
                        .composite(img, 0, 0)
                        .colorType(2)
                        .write(spritesheetsOutDir + 'tileSpritesheet.png'))

                console.log('Tile sprite atlas generated!')
            }
        })
    })
})
