const fse = require('fs-extra')
const nsg = require('node-sprite-generator')
const treesAndRocks = require('../../data/prototypes/treesAndRocks')

const factorioDataDirectory = process.argv[2]
const spritesheetsOutDir = process.argv[3]

function stringMatchAll(string, regex) {
    const res = []
    let match = regex.exec(string)
    while (match !== null) {
        res.push(match[1])
        match = regex.exec(string)
    }
    return res
}

Array.prototype.unique = function () {
    return Array.from(new Set(this).values())
}

Array.prototype.diff = function(a) {
    return this.filter(i => a.indexOf(i) < 0)
}

const spritePaths = stringMatchAll(JSON.stringify(treesAndRocks), /"((__base__\/)?graphics\/(entity|decoratives)\/.+?)"/g)
    .map(p => p.replace(/__base__\//g, ''))
    .unique()
    .map(p => factorioDataDirectory + 'base/' + p)
    // keep the -a- variation
    .filter(p => !/-[b-z]-/g.test(p))
    .filter(p => fse.existsSync(p))


const LRSpritePaths = spritePaths.filter(p => !p.includes('/hr-'))
const HRSpritePaths = spritePaths.filter(p => p.includes('/hr-'))

const LROnlySpritePaths = LRSpritePaths.diff(HRSpritePaths.map(p => p.replace(/\/hr-/, '/')))
const HROnlySpritePaths = HRSpritePaths.diff(LRSpritePaths.map(p => p.replace(/\/([^/]+?\.png)/g, (_, capture) => '/hr-' + capture)))

const LRCompleteSpritePaths = LRSpritePaths.concat(HROnlySpritePaths)
const HRCompleteSpritePaths = HRSpritePaths.concat(LROnlySpritePaths)

console.log('Trees and Rocks sprites:', LRCompleteSpritePaths.length)

cropAndGenSpritesheet(LRCompleteSpritePaths, 'LRTreesAndRocksSpritesheet', 'LR_temp/')
cropAndGenSpritesheet(HRCompleteSpritePaths, 'HRTreesAndRocksSpritesheet', 'HR_temp/')

function cropAndGenSpritesheet(paths, spritesheetName, tempDir) {
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
        }
    })
}
