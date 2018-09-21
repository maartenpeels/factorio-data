const execSync = require('child_process').execSync

const factorioDataDirectory = 'B:/SteamLibrary/steamapps/common/Factorio/data/'

const rawData = '../data/raw.json'
const outputDirectory = '../data/'

process.chdir('./src')

execSync(`node exportRawData.js ${factorioDataDirectory} ${rawData}`, { stdio: 'inherit' })

execSync(`node recipes.js ${rawData} ${outputDirectory}prototypes/recipes.js`, { stdio: 'inherit' })
execSync(`node tiles.js ${rawData} ${outputDirectory}prototypes/tiles.js`, { stdio: 'inherit' })
execSync(`node entities.js ${rawData} ${outputDirectory}prototypes/entities.js`, { stdio: 'inherit' })
execSync(`node items.js ${rawData} ${outputDirectory}prototypes/items.js`, { stdio: 'inherit' })
execSync(`node inventoryLayout.js ${rawData} ${outputDirectory}prototypes/inventoryLayout.js`, { stdio: 'inherit' })

execSync(`node entitySprites.js ${factorioDataDirectory} ${outputDirectory}graphics/`, { stdio: 'inherit' })
execSync(`node itemSprites.js ${factorioDataDirectory} ${outputDirectory}graphics/`, { stdio: 'inherit' })
execSync(`node utilitySprites.js ${factorioDataDirectory} ${outputDirectory}graphics/`, { stdio: 'inherit' })
