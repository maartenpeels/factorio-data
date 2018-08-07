const fse = require('fs-extra')
const javascriptStringify = require('javascript-stringify')

const rawDataString = fse.readFileSync(process.argv[2]).toString()
    .replace(/("(?!__base__|__core__)[^"\n]+?-[^"\n]+?")/g, (_, capture) => capture.replace(/-/g, '_'))

const rawData = JSON.parse(rawDataString)
const outputFile = process.argv[3]

console.log('Recipes: ' + Object.keys(rawData.recipe).length)

fse.writeFileSync(outputFile, 'module.exports = ' + javascriptStringify(JSON.parse(JSON.stringify(rawData.recipe)
    .replace(/"(__base__|__core__)\/(.+?)"/g, '"$2"')
), null, 2))
