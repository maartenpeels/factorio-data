const fse = require('fs-extra')
const glob = require('glob')
const luainjs = require('lua-in-js')
const execSync = require('child_process').execSync

const factorioDirectory = process.argv[2]
const outputFile = process.argv[3]

const baseModules = [
    '__core__.lualib.dataloader',
    '__core__.data',
    '__base__.data',
    '__base__.data-updates'
]

const lualibFolder = factorioDirectory + 'core/lualib/'
const lualibModules = glob
    .sync(lualibFolder + '**/*.lua')
    .map(path => path
        .replace(lualibFolder, '')
        .replace(/\.lua/g, '')
        .replace(/\//g, '.'))

const loadedModules = []
const modulesContent = []

const getModuleName = (moduleName) =>
    '__' + moduleName.replace(/__/g, '').replace(/\.|-/g, '_') + '__'

function addModuleFrom(moduleName) {
    const modName = moduleName.split('.')[0]

    const originalModuleContent = fse.readFileSync(
        factorioDirectory +
        moduleName
            .replace('__base__', 'base')
            .replace('__core__', 'core')
            .replace(/\./g, '/') +
        '.lua'
    ).toString()

    let moduleContent = originalModuleContent
        .replace(/require\s*\(*['"](.+?)['"]\)*/g, (_, capture) => {
            const mod = lualibModules.includes(capture)
                ? ('__core__.lualib.' + capture)
                : (modName + '.' + capture)

            if (!loadedModules.includes(mod)) {
                addModuleFrom(mod)
                loadedModules.push(mod)
            }

            return getModuleName(mod) + '()'
        })

    const mN = getModuleName(moduleName)
    moduleContent =
        '\nfunction ' + mN + '()\n' +
        '\tlocal function wrapper()\n' +
        '\n' + moduleContent.split('\n').map(line => '\t\t' + line).join('\n') + '\n' +
        '\tend\n' +
        '\tif LOADED_MODULES.' + mN + ' == nil then\n' +
        '\t\tlocal ret = wrapper()\n' +
        '\t\tif ret == nil then\n' +
        '\t\t\tret = true\n' +
        '\t\tend\n' +
        '\t\tLOADED_MODULES.' + mN + ' = ret\n' +
        '\tend\n' +
        '\treturn LOADED_MODULES.' + mN + '\n' +
        'end\n'

    modulesContent.push(moduleContent)
}

baseModules.forEach(addModuleFrom)

const luaFileData =
    'LOADED_MODULES = {}\n' +
    'defines = ' + fse.readFileSync('./defines.lua').toString() + '\n' +
    modulesContent.join('\n') + '\n' +
    // call base modules
    baseModules.map(m => getModuleName(m) + '()').join('\n')

// fse.writeFileSync('./temp.lua', luaFileData)

const data = luainjs.parser.parse(luaFileData)
fse.writeFileSync('./temp.js', `
const fs = require("fs");
require("lua-in-js").runtime;
${data}
fs.writeFileSync('${outputFile}', JSON.stringify(Tget($get($, 'data'), 'raw').toObject(), null, 2));
fs.unlinkSync('./temp.js');
`)
execSync('node temp.js')
