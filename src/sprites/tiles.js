const fse = require('fs-extra')
const nsg = require('node-sprite-generator')
const Jimp = require('jimp')
const tiles = require('../../data/prototypes/tiles')
const execFile = require('child_process').execFile
const pngquant = require('pngquant-bin')

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

const stonePathSpriteDataParts = [{
    path: 'base/graphics/terrain/stone-path/hr-stone-path-1.png',
    divisions: 16,
    size: 64,
    needed: 36,
    y: 0
}, {
    path: 'base/graphics/terrain/stone-path/hr-stone-path-2.png',
    divisions: 16,
    size: 128,
    needed: 7,
    y: 0
}]

const grassSpriteDataParts = [{
    path: 'base/graphics/terrain/hr-grass-1.png',
    divisions: 16,
    size: 64,
    needed: 20,
    y: 0
}, {
    path: 'base/graphics/terrain/hr-grass-1.png',
    divisions: 16,
    size: 128,
    needed: 7,
    y: 128
}, {
    path: 'base/graphics/terrain/hr-grass-1.png',
    divisions: 16,
    size: 256,
    needed: 1,
    y: 320
}]

function getSpriteFromDataParts(spriteDataParts, spritePath) {
    return Promise.all(spriteDataParts.map((data, index) => Promise.all(
        new Array(data.needed).fill('').map((_, i) => {
            const outPath = spritePath.split('/').slice(0, -1).join('/') + '/parts/' + index + '-' + i + '.png'
            return Jimp
                .read(factorioDataDirectory + data.path)
                .then(img => img
                    .crop((i % data.divisions) * data.size, data.y, data.size, data.size)
                    .write(outPath))
                .then(() => outPath)
        }))
    ))
    .then(p => new Promise((resolve, reject) =>
        nsg({
            src: [].concat(...p).shuffle(),
            spritePath: spritePath + '.png',
            stylesheet: './json.tpl',
            stylesheetPath: spritePath + '.json',
            compositor: 'jimp',
            layout: 'packed',
            layoutOptions: { padding: 0 }
        }, err => err ? reject(err) : resolve(spritePath + '.png')))
    )
    .catch(err => console.log(err))
}

Promise.all([
    getSpriteFromDataParts(stonePathSpriteDataParts, 'temp/graphics/terrain/stone-path/stone-path'),
    getSpriteFromDataParts(grassSpriteDataParts, 'temp/graphics/terrain/grass-1/grass-1'),
    ...Object.values(tiles)
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
]).then(paths => {
    console.log('Tile sprites: ' + paths.length)
    const spritePath = spritesheetsOutDir + 'tileSpritesheet.png'
    nsg({
        src: paths.sort(),
        spritePath: spritePath,
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

            // Removes the alpha channel
            // Jimp.read(spritePath)
            //     .then(img => new Jimp(img.getWidth(), img.getHeight(), '#000000')
            //         .composite(img, 0, 0)
            //         .colorType(2)
            //         .write(spritePath))

            execFile(pngquant, [
                '-o',
                spritePath,
                spritePath,
                '--force'
            ], err => {
                if (err) {
                    console.log(err)
                }
            })

            console.log('Tile sprite atlas generated!')
        }
    })
})
