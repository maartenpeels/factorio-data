const fse = require('fs-extra')
const javascriptStringify = require('javascript-stringify')

const rawDataString = fse.readFileSync(process.argv[2]).toString()
    .replace(/("(?!__base__|__core__)[^"\n]+?-[^"\n]+?")/g, (_, capture) => capture.replace(/-/g, '_'))

const rawData = JSON.parse(rawDataString)
const outputFile = process.argv[3]

const RECIPES = {}
for (const k in rawData.recipe) {
    let recipe = rawData.recipe[k]
    if (recipe.normal) recipe = Object.assign(recipe, recipe.normal)

    RECIPES[recipe.name] = {
        name: recipe.name,
        category: recipe.category || 'crafting',
        hidden: recipe.hidden,
        time: recipe.energy_required || 0.5,
        ingredients: recipe.ingredients.map(ingredient => ingredient instanceof Array ? {
            name: ingredient[0],
            amount: ingredient[1]
        } : ingredient),
        results: recipe.result ? [{
            name: recipe.result,
            amount: recipe.result_count || 1
        }] : recipe.results,
        requester_paste_multiplier: recipe.requester_paste_multiplier,
        crafting_machine_tint: recipe.crafting_machine_tint
    }
}

console.log('Recipes: ' + Object.keys(rawData.recipe).length)

fse.writeFileSync(outputFile, 'module.exports = ' + javascriptStringify(JSON.parse(JSON.stringify(RECIPES)
    .replace(/"(__base__|__core__)\/(.+?)"/g, '"$2"')
), null, 2))
