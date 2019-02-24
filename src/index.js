const execSync = require('child_process').execSync
const glob = require('glob')

const factorioDataDirectory = 'E:/SteamLibrary/steamapps/common/Factorio/data/'

const rawData = '../data/raw.json'
const outputDirectory = '../data/'
const options = { stdio: 'inherit' }

process.chdir('./src')

execSync(`node exportRawData.js ${factorioDataDirectory} ${rawData}`, options)

execSync(`node recipes.js ${rawData} ${outputDirectory}prototypes/recipes.js`, options)
execSync(`node tiles.js ${rawData} ${outputDirectory}prototypes/tiles.js`, options)
execSync(`node entities.js ${rawData} ${outputDirectory}prototypes/entities.js`, options)
execSync(`node treesAndRocks.js ${rawData} ${outputDirectory}prototypes/treesAndRocks.js`, options)
execSync(`node items.js ${rawData} ${outputDirectory}prototypes/items.js`, options)
execSync(`node inventoryLayout.js ${rawData} ${outputDirectory}prototypes/inventoryLayout.js`, options)

execSync(`node sprites/entities.js ${factorioDataDirectory} ${outputDirectory}graphics/`, options)
execSync(`node sprites/treesAndRocks.js ${factorioDataDirectory} ${outputDirectory}graphics/`, options)
execSync(`node sprites/items.js ${factorioDataDirectory} ${outputDirectory}graphics/`, options)
execSync(`node sprites/tiles.js ${factorioDataDirectory} ${outputDirectory}graphics/`, options)
execSync(`node sprites/utility.js ${factorioDataDirectory} ${outputDirectory}graphics/`, options)

glob('../data/graphics/*.png', (_, files) => {
    files.forEach(f => execSync(`..\\lib\\cwebp -lossless ${f} -o ${f.replace('png', 'webp')}`, options))
})
