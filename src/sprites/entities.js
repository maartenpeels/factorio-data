const fse = require('fs-extra')
const nsg = require('node-sprite-generator')
const Jimp = require('jimp')
const utils = require('../utils')
const execFile = require('child_process').execFile
const pngquant = require('pngquant-bin')
const entities = require('../../data/prototypes/entities')

const factorioDataDirectory = process.argv[2]
const spritesheetsOutDir = process.argv[3]

Array.prototype.unique = function () {
    return Array.from(new Set(this).values())
}

Array.prototype.diff = function(a) {
    return this.filter(i => a.indexOf(i) < 0)
}

const spritePaths = utils.stringMatchAll(JSON.stringify(entities), /"((__base__\/)?graphics\/entity\/.+?)"/g)
    .map(p => p.replace(/__base__\//g, ''))
    .unique()
    .map(p => factorioDataDirectory + 'base/' + p)
    .filter(p => fse.existsSync(p))


const LRSpritePaths = spritePaths.filter(p => !p.includes('/hr-'))
const HRSpritePaths = spritePaths.filter(p => p.includes('/hr-'))

const LROnlySpritePaths = LRSpritePaths.diff(HRSpritePaths.map(p => {
    const pS = p.split('/')
    pS[pS.length - 1] = pS[pS.length - 1] === 'hr-electric-furnace.png' ? 'electric-furnace-base.png' : pS[pS.length - 1]
    return pS.join('/').replace(/\/hr-/, '/')
}))
const HROnlySpritePaths = HRSpritePaths.diff(LRSpritePaths.map(p => {
    const pS = p.split('/')
    pS[pS.length - 1] = 'hr-' + (pS[pS.length - 1] === 'electric-furnace-base.png' ? 'electric-furnace.png' : pS[pS.length - 1])
    return pS.join('/')
}))

const LRCompleteSpritePaths = LRSpritePaths.concat(HROnlySpritePaths)
const HRCompleteSpritePaths = HRSpritePaths.concat(LROnlySpritePaths)

console.log('Entity sprites:', LRCompleteSpritePaths.length)

cropAndGenSpritesheet(LRCompleteSpritePaths, 'LREntitySpritesheet', 'LR_temp/')
cropAndGenSpritesheet(HRCompleteSpritePaths, 'HREntitySpritesheet', 'HR_temp/')

function cropAndGenSpritesheet(paths, spritesheetName, tempDir) {
    const excludeKeywordsRegex = new RegExp([
        'explosion',
        'cloud',
        'smoke',
        'fire',
        'muzzle-flash',
        '-light\.padding',
        'steam\.png',
        '-shadow\.png',
        '-shadow-',
        'load-standup',
        'flamethrower-turret-gun(-[^e]|[^-])',
        'pump-[a-z]+?-liquid',
        'pump-[a-z]+?-glass',
        'accumulator-(dis)*charge',
        'connector\/(hr-)?.-.-',
        'heated',
        'gun-turret-shooting',
        'laser-turret-shooting',
        'roboport-recharging',
        'segment-visualisation',
        'graphics\/[^/]*$',
        '-light\.png',
        '-lights-color',
        'boiling-green',
        'power-switch-electricity',
        'electric-furnace-heater',
        'integration',
        'arrows',
        'hole',
        'rocket-over',
        'working',
        'hand-closed',
        'electric-mining-drill-.[^.]'
    ].join('|'), 'g')

    const cropImages = [
        ['artillery-wagon-cannon', 4, 4],
        ['flamethrower-turret-gun-extension', 5, 1],
        ['gun-turret-raising', 5, 1],
        ['laser-turret-raising', 15, 1],
        ['burner-mining-drill', 4, 8],
        ['electric-mining-drill', 8, 8],
        ['pumpjack-horsehead', 8, 5],
        ['assembling-machine-[1-3]\.png', 8, 4],
        ['centrifuge', 8, 8],
        ['lab.png', 11, 3],
        ['pump-', 8, 4],
        ['splitter', 8, 4],
        ['radar', 8, 8],
        ['steam-engine', 8, 4],
        ['steam-turbine', 4, 2],
        ['^(hr-)*transport-belt', 16, 1],
        ['^(hr-)*(fast|express)-transport-belt', 32, 1],
        ['beacon-antenna.png', 8, 4],
        ['roboport-door-', 16, 1],
        ['gate', 8, 2],
        ['rocket-silo-arms', 32, 1],
        ['rocket-silo-turbine', 8, 4],
        ['rail-signal\.png', 3, 1],
        ['rail-chain-signal\.png', 5, 1, 3],
        ['power-switch', 2, 3],
        ['logistic-chest', 7, 1]
    ].map(cI => { return { regex: cI[0], x: cI[1], y: cI[2], xOffset: cI[3] || 0 } })

    Promise.all(
        paths
        .filter(p => p.search(excludeKeywordsRegex) === -1)
        .map(path => {
            for (const cropImage of cropImages) {
                if (new RegExp(cropImage.regex).test(path.split('/').pop())) {
                    return {
                        path: path,
                        outPath: tempDir + path.replace(factorioDataDirectory + 'base/', ''),
                        x: cropImage.x,
                        y: cropImage.y,
                        xOffset: cropImage.xOffset
                    }
                }
            }
            return path
        })
        .map(data => {
            if (typeof data === 'string') return data
            return Jimp
                .read(data.path)
                .then(img => img
                    .crop(
                        data.xOffset * (img.bitmap.width / data.x),
                        0,
                        img.bitmap.width / data.x,
                        img.bitmap.height / data.y
                    )
                    .write(data.outPath))
                .then(() => data.outPath)
        }
    )).then(paths =>
        nsg({
            src: paths,
            spritePath: spritesheetsOutDir + spritesheetName + '.png',
            stylesheet: './json.tpl',
            stylesheetPath: spritesheetsOutDir + spritesheetName + '.json',
            stylesheetOptions: { nameMapping: path => path.includes(tempDir) ?
                path.replace(tempDir, '') :
                path.replace(factorioDataDirectory + 'base/', '') },
            compositor: 'jimp',
            layout: 'packed',
            layoutOptions: { padding: 2 }
        }, err => {
            if (err) {
                console.log(err)
            } else {
                fse.remove(tempDir)
                console.log(spritesheetName, 'sprite atlas generated!')

                execFile(pngquant, [
                    '-o',
                    spritesheetsOutDir + spritesheetName + 'Compressed.png',
                    spritesheetsOutDir + spritesheetName + '.png',
                    '--force'
                ], err => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log(spritesheetName, 'sprite atlas compressed!')
                    }
                })
            }
        })
    )
}
