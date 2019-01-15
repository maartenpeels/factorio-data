const fse = require('fs-extra')
const javascriptStringify = require('javascript-stringify')

const rawDataString = fse.readFileSync(process.argv[2]).toString()
    .replace(/("(?!__base__|__core__)[^"\n]+?-[^"\n]+?")/g, (_, capture) => capture.replace(/-/g, '_'))

const rawData = JSON.parse(rawDataString)
const outputFile = process.argv[3]

const keysToDelete = [
    // Needed for inventoryLayout
    // 'order',
    // 'subgroup',
    'flags',
    'limitation_message_key',
    'auto_barrel',
    'straight_rail',
    'curved_rail',
    'ammo_type',
    'capsule_action',
    'item_to_clear',
    'draw_label_for_cursor_render',
    'durability_description_key',
    'durability_description_value',
    'action',
    'damage_radius',
    'trigger_radius',
    'localised_name',
    'hide_from_stats',
    'allow_decomposition',
    'ingredients',
    'results',
    'category',
    'enabled',
    'energy_required',
    'main_product',
    'attack_parameters',
    'dark_background_icon',
    'placed_as_equipment_result',
    'resistances',
    'entity_filter_count',
    'tile_filter_count',
    'localised_description'
]

const items = {}
function findAllItems(data) {
    if (data.constructor === Object) {
        if (data.hasOwnProperty('subgroup')) {
            addItem(data)
        } else {
            for (const k in data) {
                if (data.hasOwnProperty(k)) {
                    findAllItems(data[k])
                }
            }
        }
    }
}
findAllItems(rawData)

for (const k in rawData['fluid']) {
    const fluid = rawData['fluid'][k]
    fluid.subgroup = 'fluid'
    addItem(fluid)
}

function addItem(item) {
    if ((item.flags && (item.flags.includes('hidden') || item.flags.includes('not_on_map'))) ||
    !(item.icon || item.icons) || !item.order || item.collision_box) return

    Object.keys(item)
        .filter(k => keysToDelete.includes(k))
        .forEach(k => delete item[k])

    items[item.name] = item
}

console.log('Items: ' + Object.keys(items).length)

fse.writeFileSync(outputFile, 'module.exports = ' + javascriptStringify(JSON.parse(JSON.stringify(items)
    .replace(/"(__base__|__core__)\/(.+?)"/g, '"$2"')
), null, 2))
