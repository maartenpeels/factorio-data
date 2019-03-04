const utils = require('./utils')

const rawData = utils.loadRawData(process.argv[2])
const outputFile = process.argv[3]

const blacklistedEntities = [
    'escape_pod_assembler',
    'escape_pod_lab',
    'escape_pod_power',
    'compilatron_chest',
    'player_port'
]

let entities = {}
const placeableEntities = utils.stringMatchAll(JSON.stringify(rawData), /"place_result":"(.+?)"/g).concat(['curved_rail'])
function findAllEntities(data) {
    if (data.constructor === Object) {
        if (
            placeableEntities.includes(data.name) &&
            !blacklistedEntities.includes(data.name) &&
            data.hasOwnProperty('collision_box') &&
            (!data.flags.includes('placeable_off_grid') || data.name === 'land_mine')
        ) {
            entities[data.name] = data
        } else {
            for (let k in data) {
                if (data.hasOwnProperty(k)) {
                    findAllEntities(data[k])
                }
            }
        }
    }
}
findAllEntities(rawData)


for (let k in entities) {
    e = entities[k]

    // Size
    if (e.name === 'offshore_pump') {
        e.size = { width: 1, height: 1 }
    } else {
        e.size = {
            width: Math.ceil(Math.abs(e.selection_box[0][0]) + Math.abs(e.selection_box[1][0])),
            height: Math.ceil(Math.abs(e.selection_box[0][1]) + Math.abs(e.selection_box[1][1]))
        }
    }

    // Move out splitters and underground_belts from transport_belt fast_replaceable_group
    if (e.type === 'splitter') e.fast_replaceable_group = 'splitter'
    if (e.type === 'underground_belt') e.fast_replaceable_group = 'underground_belt'

    // Possible Rotations
    if ([
        'pipe_to_ground',
        'train_stop',
        'arithmetic_combinator',
        'decider_combinator',
        'constant_combinator',
        'gun_turret',
        'artillery_turret',
        'laser_turret',
        'flamethrower_turret',
        'offshore_pump',
        'pump'
    ].includes(e.name) || [
        'underground_belt',
        'transport_belt',
        'splitter',
        'inserter',
        'boiler',
        'mining_drill',
        'assembling_machine',
        'loader'
    ].includes(e.type)) e.possible_rotations = [0, 2, 4, 6]
    if ([
        'storage_tank',
        'gate',
        'straight_rail'
    ].includes(e.name) || e.type === 'generator') e.possible_rotations = [0, 2]
    if ([
        'rail_signal',
        'rail_chain_signal'
    ].includes(e.name)) e.possible_rotations = [0, 1, 2, 3, 4, 5, 6, 7]
    if ([
        'centrifuge',
        'assembling_machine_1'
    ].includes(e.name)) delete e.possible_rotations
}

// fix shifts
entities.storage_tank.pictures.window_background.shift = [0, 1]
entities.storage_tank.pictures.window_background.hr_version.shift = [0, 1]

add_to_Y_shift(-0.6875, entities.artillery_turret.base_picture.layers[0])
add_to_Y_shift(-0.6875, entities.artillery_turret.cannon_barrel_pictures.layers[0])
add_to_Y_shift(-0.6875, entities.artillery_turret.cannon_base_pictures.layers[0])

function add_to_Y_shift(y_shift, layer) {
    layer.shift[1] += y_shift
    if (layer.hr_version) layer.hr_version.shift[1] += y_shift
}

// Fix inconsistent radius
entities.beacon.supply_area_distance += 1

const keysToDelete = [
    'repair_sound',
    'vehicle_impact_sound',
    'resistances',
    'action',
    'meltdown_action',
    'ammo_type',
    'attack_parameters',
    'fluid_wagon_connector_graphics',
    'cannon_base_shiftings',
    'cannon_barrel_recoil_shiftings',
    'folded_muzzle_animation_shift',
    'preparing_muzzle_animation_shift',
    'prepared_muzzle_animation_shift',
    'attacking_muzzle_animation_shift',
    'ending_attack_muzzle_animation_shift',
    'folding_muzzle_animation_shift'
]

Object.keys(entities).forEach(entK =>
    Object.keys(entities[entK])
        .filter(k => keysToDelete.includes(k))
        .forEach(k => delete entities[entK][k])
)

console.log('Entities: ' + Object.keys(entities).length)
utils.writeJSObject(outputFile, entities)
