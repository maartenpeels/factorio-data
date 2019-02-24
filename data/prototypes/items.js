module.exports = {
  firearm_magazine: {
    type: 'ammo',
    name: 'firearm_magazine',
    icon: 'graphics/icons/firearm-magazine.png',
    icon_size: 32,
    magazine_size: 10,
    subgroup: 'ammo',
    order: 'a[basic_clips]_a[firearm_magazine]',
    stack_size: 200,
    ui_name: 'Firearm magazine'
  },
  piercing_rounds_magazine: {
    type: 'ammo',
    name: 'piercing_rounds_magazine',
    icon: 'graphics/icons/piercing-rounds-magazine.png',
    icon_size: 32,
    magazine_size: 10,
    subgroup: 'ammo',
    order: 'a[basic_clips]_b[piercing_rounds_magazine]',
    stack_size: 200,
    ui_name: 'Piercing rounds magazine'
  },
  uranium_rounds_magazine: {
    type: 'ammo',
    name: 'uranium_rounds_magazine',
    icon: 'graphics/icons/uranium-rounds-magazine.png',
    icon_size: 32,
    magazine_size: 10,
    subgroup: 'ammo',
    order: 'a[basic_clips]_c[uranium_rounds_magazine]',
    stack_size: 200,
    ui_name: 'Uranium rounds magazine'
  },
  flamethrower_ammo: {
    type: 'ammo',
    name: 'flamethrower_ammo',
    icon: 'graphics/icons/flamethrower-ammo.png',
    icon_size: 32,
    magazine_size: 100,
    subgroup: 'ammo',
    order: 'e[flamethrower]',
    stack_size: 100,
    ui_name: 'Flamethrower ammo'
  },
  rocket: {
    type: 'ammo',
    name: 'rocket',
    icon: 'graphics/icons/rocket.png',
    icon_size: 32,
    subgroup: 'ammo',
    order: 'd[rocket_launcher]_a[basic]',
    stack_size: 200,
    ui_name: 'Rocket'
  },
  explosive_rocket: {
    type: 'ammo',
    name: 'explosive_rocket',
    icon: 'graphics/icons/explosive-rocket.png',
    icon_size: 32,
    subgroup: 'ammo',
    order: 'd[rocket_launcher]_b[explosive]',
    stack_size: 200,
    ui_name: 'Explosive rocket'
  },
  atomic_bomb: {
    type: 'ammo',
    name: 'atomic_bomb',
    icon: 'graphics/icons/atomic-bomb.png',
    icon_size: 32,
    subgroup: 'ammo',
    order: 'd[rocket_launcher]_c[atomic_bomb]',
    stack_size: 10,
    ui_name: 'Atomic bomb'
  },
  shotgun_shell: {
    type: 'ammo',
    name: 'shotgun_shell',
    icon: 'graphics/icons/shotgun-shell.png',
    icon_size: 32,
    magazine_size: 10,
    subgroup: 'ammo',
    order: 'b[shotgun]_a[basic]',
    stack_size: 200,
    ui_name: 'Shotgun shells'
  },
  piercing_shotgun_shell: {
    type: 'ammo',
    name: 'piercing_shotgun_shell',
    icon: 'graphics/icons/piercing-shotgun-shell.png',
    icon_size: 32,
    magazine_size: 10,
    subgroup: 'ammo',
    order: 'b[shotgun]_b[piercing]',
    stack_size: 200,
    ui_name: 'Piercing shotgun shells'
  },
  cannon_shell: {
    type: 'ammo',
    name: 'cannon_shell',
    icon: 'graphics/icons/cannon-shell.png',
    icon_size: 32,
    subgroup: 'ammo',
    order: 'd[cannon_shell]_a[basic]',
    stack_size: 200,
    ui_name: 'Cannon shell'
  },
  explosive_cannon_shell: {
    type: 'ammo',
    name: 'explosive_cannon_shell',
    icon: 'graphics/icons/explosive-cannon-shell.png',
    icon_size: 32,
    subgroup: 'ammo',
    order: 'd[cannon_shell]_c[explosive]',
    stack_size: 200,
    ui_name: 'Explosive cannon shell'
  },
  uranium_cannon_shell: {
    type: 'ammo',
    name: 'uranium_cannon_shell',
    icon: 'graphics/icons/uranium-cannon-shell.png',
    icon_size: 32,
    subgroup: 'ammo',
    order: 'd[cannon_shell]_c[uranium]',
    stack_size: 200,
    ui_name: 'Uranium cannon shell'
  },
  explosive_uranium_cannon_shell: {
    type: 'ammo',
    name: 'explosive_uranium_cannon_shell',
    icon: 'graphics/icons/explosive-uranium-cannon-shell.png',
    icon_size: 32,
    subgroup: 'ammo',
    order: 'd[explosive_cannon_shell]_c[uranium]',
    stack_size: 200,
    ui_name: 'Explosive uranium cannon shell'
  },
  artillery_shell: {
    type: 'ammo',
    name: 'artillery_shell',
    icon: 'graphics/icons/artillery-shell.png',
    icon_size: 32,
    subgroup: 'ammo',
    order: 'd[explosive_cannon_shell]_d[artillery]',
    stack_size: 1,
    ui_name: 'Artillery shell'
  },
  light_armor: {
    type: 'armor',
    name: 'light_armor',
    icon: 'graphics/icons/light-armor.png',
    icon_size: 32,
    durability: 1000,
    subgroup: 'armor',
    order: 'a[light_armor]',
    stack_size: 10,
    ui_name: 'Light armor'
  },
  heavy_armor: {
    type: 'armor',
    name: 'heavy_armor',
    icon: 'graphics/icons/heavy-armor.png',
    icon_size: 32,
    durability: 5000,
    subgroup: 'armor',
    order: 'b[heavy_armor]',
    stack_size: 10,
    ui_name: 'Heavy armor',
    description: 'Heavy armor for more protection.'
  },
  modular_armor: {
    type: 'armor',
    name: 'modular_armor',
    icon: 'graphics/icons/modular-armor.png',
    icon_size: 32,
    durability: 10000,
    subgroup: 'armor',
    order: 'c[modular_armor]',
    stack_size: 1,
    equipment_grid: 'small_equipment_grid',
    inventory_size_bonus: 10,
    ui_name: 'Modular armor',
    description: 'Armor with a small grid for equipment modules that give you unique bonuses. Wearing it also increases your inventory size.'
  },
  power_armor: {
    type: 'armor',
    name: 'power_armor',
    icon: 'graphics/icons/power-armor.png',
    icon_size: 32,
    durability: 15000,
    subgroup: 'armor',
    order: 'd[power_armor]',
    stack_size: 1,
    equipment_grid: 'medium_equipment_grid',
    inventory_size_bonus: 20,
    ui_name: 'Power armor',
    description: 'Armor with a large equipment grid and inventory size bonus.'
  },
  power_armor_mk2: {
    type: 'armor',
    name: 'power_armor_mk2',
    icon: 'graphics/icons/power-armor-mk2.png',
    icon_size: 32,
    durability: 20000,
    subgroup: 'armor',
    order: 'e[power_armor_mk2]',
    stack_size: 1,
    equipment_grid: 'large_equipment_grid',
    inventory_size_bonus: 30,
    ui_name: 'Power armor MK2'
  },
  pistol: {
    type: 'gun',
    name: 'pistol',
    icon: 'graphics/icons/pistol.png',
    icon_size: 32,
    subgroup: 'gun',
    order: 'a[basic_clips]_a[pistol]',
    stack_size: 5,
    ui_name: 'Pistol'
  },
  submachine_gun: {
    type: 'gun',
    name: 'submachine_gun',
    icon: 'graphics/icons/submachine-gun.png',
    icon_size: 32,
    subgroup: 'gun',
    order: 'a[basic_clips]_b[submachine_gun]',
    stack_size: 5,
    ui_name: 'Submachine gun'
  },
  flamethrower: {
    type: 'gun',
    name: 'flamethrower',
    icon: 'graphics/icons/flamethrower.png',
    icon_size: 32,
    subgroup: 'gun',
    order: 'e[flamethrower]',
    stack_size: 5,
    ui_name: 'Flamethrower'
  },
  rocket_launcher: {
    type: 'gun',
    name: 'rocket_launcher',
    icon: 'graphics/icons/rocket-launcher.png',
    icon_size: 32,
    subgroup: 'gun',
    order: 'd[rocket_launcher]',
    stack_size: 5,
    ui_name: 'Rocket launcher'
  },
  shotgun: {
    type: 'gun',
    name: 'shotgun',
    icon: 'graphics/icons/shotgun.png',
    icon_size: 32,
    subgroup: 'gun',
    order: 'b[shotgun]_a[basic]',
    stack_size: 5,
    ui_name: 'Shotgun'
  },
  combat_shotgun: {
    type: 'gun',
    name: 'combat_shotgun',
    icon: 'graphics/icons/combat-shotgun.png',
    icon_size: 32,
    subgroup: 'gun',
    order: 'b[shotgun]_a[combat]',
    stack_size: 5,
    ui_name: 'Combat shotgun'
  },
  stone_brick: {
    type: 'item',
    name: 'stone_brick',
    icon: 'graphics/icons/stone-brick.png',
    icon_size: 32,
    subgroup: 'terrain',
    order: 'a[stone_brick]',
    stack_size: 100,
    place_as_tile: {
      result: 'stone_path',
      condition_size: 1,
      condition: [
        'water_tile'
      ]
    },
    ui_name: 'Stone brick'
  },
  raw_wood: {
    type: 'item',
    name: 'raw_wood',
    icon: 'graphics/icons/raw-wood.png',
    icon_size: 32,
    fuel_value: '4MJ',
    fuel_category: 'chemical',
    subgroup: 'raw_resource',
    order: 'a[raw_wood]',
    stack_size: 100,
    ui_name: 'Raw wood'
  },
  coal: {
    type: 'item',
    name: 'coal',
    icon: 'graphics/icons/coal.png',
    icon_size: 32,
    fuel_category: 'chemical',
    fuel_value: '8MJ',
    subgroup: 'raw_resource',
    order: 'b[coal]',
    stack_size: 50,
    ui_name: 'Coal'
  },
  stone: {
    type: 'item',
    name: 'stone',
    icon: 'graphics/icons/stone.png',
    icon_size: 32,
    subgroup: 'raw_resource',
    order: 'd[stone]',
    stack_size: 50,
    ui_name: 'Stone'
  },
  iron_ore: {
    type: 'item',
    name: 'iron_ore',
    icon: 'graphics/icons/iron-ore.png',
    icon_size: 32,
    subgroup: 'raw_resource',
    order: 'e[iron_ore]',
    stack_size: 50,
    ui_name: 'Iron ore'
  },
  copper_ore: {
    type: 'item',
    name: 'copper_ore',
    icon: 'graphics/icons/copper-ore.png',
    icon_size: 32,
    subgroup: 'raw_resource',
    order: 'f[copper_ore]',
    stack_size: 50,
    ui_name: 'Copper ore'
  },
  wood: {
    type: 'item',
    name: 'wood',
    icon: 'graphics/icons/wood.png',
    icon_size: 32,
    fuel_category: 'chemical',
    fuel_value: '2MJ',
    subgroup: 'raw_material',
    order: 'a[wood]',
    stack_size: 50,
    ui_name: 'Wood'
  },
  iron_plate: {
    type: 'item',
    name: 'iron_plate',
    icon: 'graphics/icons/iron-plate.png',
    icon_size: 32,
    subgroup: 'raw_material',
    order: 'b[iron_plate]',
    stack_size: 100,
    ui_name: 'Iron plate'
  },
  copper_plate: {
    type: 'item',
    name: 'copper_plate',
    icon: 'graphics/icons/copper-plate.png',
    icon_size: 32,
    subgroup: 'raw_material',
    order: 'c[copper_plate]',
    stack_size: 100,
    ui_name: 'Copper plate'
  },
  copper_cable: {
    type: 'item',
    name: 'copper_cable',
    icon: 'graphics/icons/copper-cable.png',
    icon_size: 32,
    subgroup: 'intermediate_product',
    order: 'a[copper_cable]',
    stack_size: 200,
    ui_name: 'Copper cable',
    description: 'Can be used to connect and disconnect electric poles and power switches with __CONTROL__build__.'
  },
  iron_stick: {
    type: 'item',
    name: 'iron_stick',
    icon: 'graphics/icons/iron-stick.png',
    icon_size: 32,
    subgroup: 'intermediate_product',
    order: 'b[iron_stick]',
    stack_size: 100,
    ui_name: 'Iron stick'
  },
  iron_gear_wheel: {
    type: 'item',
    name: 'iron_gear_wheel',
    icon: 'graphics/icons/iron-gear-wheel.png',
    icon_size: 32,
    subgroup: 'intermediate_product',
    order: 'c[iron_gear_wheel]',
    stack_size: 100,
    ui_name: 'Iron gear wheel'
  },
  electronic_circuit: {
    type: 'item',
    name: 'electronic_circuit',
    icon: 'graphics/icons/electronic-circuit.png',
    icon_size: 32,
    subgroup: 'intermediate_product',
    order: 'e[electronic_circuit]',
    stack_size: 200,
    ui_name: 'Electronic circuit'
  },
  wooden_chest: {
    type: 'item',
    name: 'wooden_chest',
    icon: 'graphics/icons/wooden-chest.png',
    icon_size: 32,
    fuel_category: 'chemical',
    fuel_value: '4MJ',
    subgroup: 'storage',
    order: 'a[items]_a[wooden_chest]',
    place_result: 'wooden_chest',
    stack_size: 50,
    ui_name: 'Wooden chest'
  },
  stone_furnace: {
    type: 'item',
    name: 'stone_furnace',
    icon: 'graphics/icons/stone-furnace.png',
    icon_size: 32,
    subgroup: 'smelting_machine',
    order: 'a[stone_furnace]',
    place_result: 'stone_furnace',
    stack_size: 50,
    ui_name: 'Stone furnace'
  },
  burner_mining_drill: {
    type: 'item',
    name: 'burner_mining_drill',
    icon: 'graphics/icons/burner-mining-drill.png',
    icon_size: 32,
    subgroup: 'extraction_machine',
    order: 'a[items]_a[burner_mining_drill]',
    place_result: 'burner_mining_drill',
    stack_size: 50,
    ui_name: 'Burner mining drill'
  },
  electric_mining_drill: {
    type: 'item',
    name: 'electric_mining_drill',
    icon: 'graphics/icons/electric-mining-drill.png',
    icon_size: 32,
    subgroup: 'extraction_machine',
    order: 'a[items]_b[electric_mining_drill]',
    place_result: 'electric_mining_drill',
    stack_size: 50,
    ui_name: 'Electric mining drill'
  },
  transport_belt: {
    type: 'item',
    name: 'transport_belt',
    icon: 'graphics/icons/transport-belt.png',
    icon_size: 32,
    subgroup: 'belt',
    order: 'a[transport_belt]_a[transport_belt]',
    place_result: 'transport_belt',
    stack_size: 100,
    ui_name: 'Transport belt'
  },
  burner_inserter: {
    type: 'item',
    name: 'burner_inserter',
    icon: 'graphics/icons/burner-inserter.png',
    icon_size: 32,
    subgroup: 'inserter',
    order: 'a[burner_inserter]',
    place_result: 'burner_inserter',
    stack_size: 50,
    ui_name: 'Burner inserter',
    description: 'Burns fuel for energy.'
  },
  inserter: {
    type: 'item',
    name: 'inserter',
    icon: 'graphics/icons/inserter.png',
    icon_size: 32,
    subgroup: 'inserter',
    order: 'b[inserter]',
    place_result: 'inserter',
    stack_size: 50,
    ui_name: 'Inserter'
  },
  offshore_pump: {
    type: 'item',
    name: 'offshore_pump',
    icon: 'graphics/icons/offshore-pump.png',
    icon_size: 32,
    subgroup: 'extraction_machine',
    order: 'b[fluids]_a[offshore_pump]',
    place_result: 'offshore_pump',
    stack_size: 20,
    ui_name: 'Offshore pump',
    description: 'Pumps fluid from a body of water.'
  },
  pipe: {
    type: 'item',
    name: 'pipe',
    icon: 'graphics/icons/pipe.png',
    icon_size: 32,
    subgroup: 'energy_pipe_distribution',
    order: 'a[pipe]_a[pipe]',
    place_result: 'pipe',
    stack_size: 100,
    ui_name: 'Pipe'
  },
  boiler: {
    type: 'item',
    name: 'boiler',
    icon: 'graphics/icons/boiler.png',
    icon_size: 32,
    subgroup: 'energy',
    order: 'b[steam_power]_a[boiler]',
    place_result: 'boiler',
    stack_size: 50,
    ui_name: 'Boiler',
    description: 'Burns fuel to heat fluids.'
  },
  steam_engine: {
    type: 'item',
    name: 'steam_engine',
    icon: 'graphics/icons/steam-engine.png',
    icon_size: 32,
    subgroup: 'energy',
    order: 'b[steam_power]_b[steam_engine]',
    place_result: 'steam_engine',
    stack_size: 10,
    ui_name: 'Steam engine',
    description: 'Consumes steam to create electric energy.'
  },
  small_electric_pole: {
    type: 'item',
    name: 'small_electric_pole',
    icon: 'graphics/icons/small-electric-pole.png',
    icon_size: 32,
    subgroup: 'energy_pipe_distribution',
    order: 'a[energy]_a[small_electric_pole]',
    place_result: 'small_electric_pole',
    fuel_category: 'chemical',
    fuel_value: '4MJ',
    stack_size: 50,
    ui_name: 'Small electric pole'
  },
  radar: {
    type: 'item',
    name: 'radar',
    icon: 'graphics/icons/radar.png',
    icon_size: 32,
    subgroup: 'defensive_structure',
    order: 'd[radar]_a[radar]',
    place_result: 'radar',
    stack_size: 50,
    ui_name: 'Radar',
    description: 'Scans the nearby sectors, and actively reveals an area around it.'
  },
  small_lamp: {
    type: 'item',
    name: 'small_lamp',
    icon: 'graphics/icons/small-lamp.png',
    icon_size: 32,
    subgroup: 'circuit_network',
    order: 'a[light]_a[small_lamp]',
    place_result: 'small_lamp',
    stack_size: 50,
    ui_name: 'Lamp'
  },
  pipe_to_ground: {
    type: 'item',
    name: 'pipe_to_ground',
    icon: 'graphics/icons/pipe-to-ground.png',
    icon_size: 32,
    subgroup: 'energy_pipe_distribution',
    order: 'a[pipe]_b[pipe_to_ground]',
    place_result: 'pipe_to_ground',
    stack_size: 50,
    ui_name: 'Pipe to ground'
  },
  assembling_machine_1: {
    type: 'item',
    name: 'assembling_machine_1',
    icon: 'graphics/icons/assembling-machine-1.png',
    icon_size: 32,
    subgroup: 'production_machine',
    order: 'a[assembling_machine_1]',
    place_result: 'assembling_machine_1',
    stack_size: 50,
    ui_name: 'Assembling machine 1',
    description: 'Crafts items that require up to 2 ingredients.'
  },
  red_wire: {
    type: 'item',
    name: 'red_wire',
    icon: 'graphics/icons/red-wire.png',
    icon_size: 32,
    subgroup: 'circuit_network',
    order: 'b[wires]_a[red_wire]',
    stack_size: 200,
    ui_name: 'Red wire',
    description: 'Used to connect machines to the circuit network using __CONTROL__build__.'
  },
  green_wire: {
    type: 'item',
    name: 'green_wire',
    icon: 'graphics/icons/green-wire.png',
    icon_size: 32,
    subgroup: 'circuit_network',
    order: 'b[wires]_b[green_wire]',
    stack_size: 200,
    ui_name: 'Green wire',
    description: 'Used to connect machines to the circuit network using __CONTROL__build__.'
  },
  stone_wall: {
    type: 'item',
    name: 'stone_wall',
    icon: 'graphics/icons/stone-wall.png',
    icon_size: 32,
    subgroup: 'defensive_structure',
    order: 'a[stone_wall]_a[stone_wall]',
    place_result: 'stone_wall',
    stack_size: 100,
    ui_name: 'Stone wall'
  },
  gun_turret: {
    type: 'item',
    name: 'gun_turret',
    icon: 'graphics/icons/gun-turret.png',
    icon_size: 32,
    subgroup: 'defensive_structure',
    order: 'b[turret]_a[gun_turret]',
    place_result: 'gun_turret',
    stack_size: 50,
    ui_name: 'Gun turret'
  },
  solar_panel_equipment: {
    type: 'item',
    name: 'solar_panel_equipment',
    icon: 'graphics/icons/solar-panel-equipment.png',
    icon_size: 32,
    subgroup: 'equipment',
    order: 'a[energy_source]_a[solar_panel]',
    stack_size: 20,
    ui_name: 'Portable solar panel',
    description: 'Provides power for equipment modules.'
  },
  fusion_reactor_equipment: {
    type: 'item',
    name: 'fusion_reactor_equipment',
    icon: 'graphics/icons/fusion-reactor-equipment.png',
    icon_size: 32,
    subgroup: 'equipment',
    order: 'a[energy_source]_b[fusion_reactor]',
    stack_size: 20,
    ui_name: 'Portable fusion reactor',
    description: 'Provides power for equipment modules.'
  },
  energy_shield_equipment: {
    type: 'item',
    name: 'energy_shield_equipment',
    icon: 'graphics/icons/energy-shield-equipment.png',
    icon_size: 32,
    subgroup: 'equipment',
    order: 'b[shield]_a[energy_shield_equipment]',
    stack_size: 50,
    default_request_amount: 10,
    ui_name: 'Energy shield',
    description: 'Provides an energy shield to protect the player.'
  },
  energy_shield_mk2_equipment: {
    type: 'item',
    name: 'energy_shield_mk2_equipment',
    icon: 'graphics/icons/energy-shield-mk2-equipment.png',
    icon_size: 32,
    subgroup: 'equipment',
    order: 'b[shield]_b[energy_shield_equipment_mk2]',
    stack_size: 50,
    default_request_amount: 10,
    ui_name: 'Energy shield MK2',
    description: 'Inserted into armor to absorb a large amount of damage.'
  },
  battery_equipment: {
    type: 'item',
    name: 'battery_equipment',
    icon: 'graphics/icons/battery-equipment.png',
    icon_size: 32,
    subgroup: 'equipment',
    order: 'c[battery]_a[battery_equipment]',
    stack_size: 50,
    default_request_amount: 10,
    ui_name: 'Battery',
    description: 'Stores electric energy for equipment modules.'
  },
  battery_mk2_equipment: {
    type: 'item',
    name: 'battery_mk2_equipment',
    icon: 'graphics/icons/battery-mk2-equipment.png',
    icon_size: 32,
    subgroup: 'equipment',
    order: 'c[battery]_b[battery_equipment_mk2]',
    stack_size: 50,
    default_request_amount: 10,
    ui_name: 'Battery MK2',
    description: 'Inserted into armor to store a lot of energy for later.'
  },
  personal_laser_defense_equipment: {
    type: 'item',
    name: 'personal_laser_defense_equipment',
    icon: 'graphics/icons/personal-laser-defense-equipment.png',
    icon_size: 32,
    subgroup: 'equipment',
    order: 'd[active_defense]_a[personal_laser_defense_equipment]',
    stack_size: 20,
    ui_name: 'Personal laser defense',
    description: 'Inserted into armor to automatically fire at nearby enemies.'
  },
  discharge_defense_equipment: {
    type: 'item',
    name: 'discharge_defense_equipment',
    icon: 'graphics/icons/discharge-defense-equipment.png',
    icon_size: 32,
    subgroup: 'equipment',
    order: 'd[active_defense]_b[discharge_defense_equipment]',
    stack_size: 20,
    ui_name: 'Discharge defense',
    description: 'Damages, pushes back and stuns nearby enemies when activated using the remote.'
  },
  exoskeleton_equipment: {
    type: 'item',
    name: 'exoskeleton_equipment',
    icon: 'graphics/icons/exoskeleton-equipment.png',
    icon_size: 32,
    subgroup: 'equipment',
    order: 'e[exoskeleton]_a[exoskeleton_equipment]',
    stack_size: 10,
    ui_name: 'Exoskeleton',
    description: 'Increases your movement speed.'
  },
  personal_roboport_equipment: {
    type: 'item',
    name: 'personal_roboport_equipment',
    icon: 'graphics/icons/personal-roboport-equipment.png',
    icon_size: 32,
    subgroup: 'equipment',
    order: 'e[robotics]_a[personal_roboport_equipment]',
    stack_size: 5,
    ui_name: 'Personal roboport',
    description: 'Allows construction bots to work from your inventory.'
  },
  personal_roboport_mk2_equipment: {
    type: 'item',
    name: 'personal_roboport_mk2_equipment',
    icon: 'graphics/icons/personal-roboport-mk2-equipment.png',
    icon_size: 32,
    subgroup: 'equipment',
    order: 'e[robotics]_b[personal_roboport_mk2_equipment]',
    stack_size: 5,
    ui_name: 'Personal roboport MK2'
  },
  night_vision_equipment: {
    type: 'item',
    name: 'night_vision_equipment',
    icon: 'graphics/icons/night-vision-equipment.png',
    icon_size: 32,
    subgroup: 'equipment',
    order: 'f[night_vision]_a[night_vision_equipment]',
    stack_size: 20,
    ui_name: 'Nightvision',
    description: 'Allows you to see more clearly in darkness.'
  },
  land_mine: {
    type: 'item',
    name: 'land_mine',
    icon: 'graphics/icons/land-mine.png',
    icon_size: 32,
    subgroup: 'gun',
    order: 'f[land_mine]',
    place_result: 'land_mine',
    stack_size: 100,
    ui_name: 'Land mine',
    description: 'Explodes when enemies are nearby, damaging and stunning them.'
  },
  iron_chest: {
    type: 'item',
    name: 'iron_chest',
    icon: 'graphics/icons/iron-chest.png',
    icon_size: 32,
    subgroup: 'storage',
    order: 'a[items]_b[iron_chest]',
    place_result: 'iron_chest',
    stack_size: 50,
    ui_name: 'Iron chest'
  },
  steel_chest: {
    type: 'item',
    name: 'steel_chest',
    icon: 'graphics/icons/steel-chest.png',
    icon_size: 32,
    subgroup: 'storage',
    order: 'a[items]_c[steel_chest]',
    place_result: 'steel_chest',
    stack_size: 50,
    ui_name: 'Steel chest'
  },
  fast_transport_belt: {
    type: 'item',
    name: 'fast_transport_belt',
    icon: 'graphics/icons/fast-transport-belt.png',
    icon_size: 32,
    subgroup: 'belt',
    order: 'a[transport_belt]_b[fast_transport_belt]',
    place_result: 'fast_transport_belt',
    stack_size: 100,
    ui_name: 'Fast transport belt'
  },
  express_transport_belt: {
    type: 'item',
    name: 'express_transport_belt',
    icon: 'graphics/icons/express-transport-belt.png',
    icon_size: 32,
    subgroup: 'belt',
    order: 'a[transport_belt]_c[express_transport_belt]',
    place_result: 'express_transport_belt',
    stack_size: 100,
    ui_name: 'Express transport belt'
  },
  long_handed_inserter: {
    type: 'item',
    name: 'long_handed_inserter',
    icon: 'graphics/icons/long-handed-inserter.png',
    icon_size: 32,
    subgroup: 'inserter',
    order: 'c[long_handed_inserter]',
    place_result: 'long_handed_inserter',
    stack_size: 50,
    ui_name: 'Long handed inserter'
  },
  fast_inserter: {
    type: 'item',
    name: 'fast_inserter',
    icon: 'graphics/icons/fast-inserter.png',
    icon_size: 32,
    subgroup: 'inserter',
    order: 'd[fast_inserter]',
    place_result: 'fast_inserter',
    stack_size: 50,
    ui_name: 'Fast inserter'
  },
  filter_inserter: {
    type: 'item',
    name: 'filter_inserter',
    icon: 'graphics/icons/filter-inserter.png',
    icon_size: 32,
    subgroup: 'inserter',
    order: 'e[filter_inserter]',
    place_result: 'filter_inserter',
    stack_size: 50,
    ui_name: 'Filter inserter'
  },
  stack_inserter: {
    type: 'item',
    name: 'stack_inserter',
    icon: 'graphics/icons/stack-inserter.png',
    icon_size: 32,
    subgroup: 'inserter',
    order: 'f[stack_inserter]',
    place_result: 'stack_inserter',
    stack_size: 50,
    ui_name: 'Stack inserter',
    description: 'Stack inserters can move multiple items at the same time.'
  },
  stack_filter_inserter: {
    type: 'item',
    name: 'stack_filter_inserter',
    icon: 'graphics/icons/stack-filter-inserter.png',
    icon_size: 32,
    subgroup: 'inserter',
    order: 'g[stack_filter_inserter]',
    place_result: 'stack_filter_inserter',
    stack_size: 50,
    ui_name: 'Stack filter inserter'
  },
  assembling_machine_2: {
    type: 'item',
    name: 'assembling_machine_2',
    icon: 'graphics/icons/assembling-machine-2.png',
    icon_size: 32,
    subgroup: 'production_machine',
    order: 'b[assembling_machine_2]',
    place_result: 'assembling_machine_2',
    stack_size: 50,
    ui_name: 'Assembling machine 2',
    description: 'Crafts items that require up to 4 ingredients.'
  },
  assembling_machine_3: {
    type: 'item',
    name: 'assembling_machine_3',
    icon: 'graphics/icons/assembling-machine-3.png',
    icon_size: 32,
    subgroup: 'production_machine',
    order: 'c[assembling_machine_3]',
    place_result: 'assembling_machine_3',
    stack_size: 50,
    ui_name: 'Assembling machine 3',
    description: 'Crafts items that require up to 6 ingredients.'
  },
  solar_panel: {
    type: 'item',
    name: 'solar_panel',
    icon: 'graphics/icons/solar-panel.png',
    icon_size: 32,
    subgroup: 'energy',
    order: 'd[solar_panel]_a[solar_panel]',
    place_result: 'solar_panel',
    stack_size: 50,
    ui_name: 'Solar panel'
  },
  gate: {
    type: 'item',
    name: 'gate',
    icon: 'graphics/icons/gate.png',
    icon_size: 32,
    subgroup: 'defensive_structure',
    order: 'a[wall]_b[gate]',
    place_result: 'gate',
    stack_size: 50,
    ui_name: 'Gate'
  },
  lab: {
    type: 'item',
    name: 'lab',
    icon: 'graphics/icons/lab.png',
    icon_size: 32,
    subgroup: 'production_machine',
    order: 'g[lab]',
    place_result: 'lab',
    stack_size: 10,
    ui_name: 'Lab'
  },
  train_stop: {
    type: 'item',
    name: 'train_stop',
    icon: 'graphics/icons/train-stop.png',
    icon_size: 32,
    subgroup: 'transport',
    order: 'a[train_system]_c[train_stop]',
    place_result: 'train_stop',
    stack_size: 10,
    ui_name: 'Train stop',
    description: 'Destinations for automated trains.'
  },
  rail_signal: {
    type: 'item',
    name: 'rail_signal',
    icon: 'graphics/icons/rail-signal.png',
    icon_size: 32,
    subgroup: 'transport',
    order: 'a[train_system]_d[rail_signal]',
    place_result: 'rail_signal',
    stack_size: 50,
    ui_name: 'Rail signal',
    description: 'Defines the rail system into blocks, allowing multiple trains to run on the same network.'
  },
  rail_chain_signal: {
    type: 'item',
    name: 'rail_chain_signal',
    icon: 'graphics/icons/rail-chain-signal.png',
    icon_size: 32,
    subgroup: 'transport',
    order: 'a[train_system]_e[rail_signal_chain]',
    place_result: 'rail_chain_signal',
    stack_size: 50,
    ui_name: 'Rail chain signal',
    description: 'Reads the next signals in the path to allow better control of the trains.'
  },
  steel_plate: {
    type: 'item',
    name: 'steel_plate',
    icon: 'graphics/icons/steel-plate.png',
    icon_size: 32,
    subgroup: 'raw_material',
    order: 'd[steel_plate]',
    stack_size: 100,
    ui_name: 'Steel plate'
  },
  underground_belt: {
    type: 'item',
    name: 'underground_belt',
    icon: 'graphics/icons/underground-belt.png',
    icon_size: 32,
    subgroup: 'belt',
    order: 'b[underground_belt]_a[underground_belt]',
    place_result: 'underground_belt',
    stack_size: 50,
    ui_name: 'Underground belt'
  },
  fast_underground_belt: {
    type: 'item',
    name: 'fast_underground_belt',
    icon: 'graphics/icons/fast-underground-belt.png',
    icon_size: 32,
    subgroup: 'belt',
    order: 'b[underground_belt]_b[fast_underground_belt]',
    place_result: 'fast_underground_belt',
    stack_size: 50,
    ui_name: 'Fast underground belt'
  },
  express_underground_belt: {
    type: 'item',
    name: 'express_underground_belt',
    icon: 'graphics/icons/express-underground-belt.png',
    icon_size: 32,
    subgroup: 'belt',
    order: 'b[underground_belt]_c[express_underground_belt]',
    place_result: 'express_underground_belt',
    stack_size: 50,
    ui_name: 'Express underground belt'
  },
  splitter: {
    type: 'item',
    name: 'splitter',
    icon: 'graphics/icons/splitter.png',
    icon_size: 32,
    subgroup: 'belt',
    order: 'c[splitter]_a[splitter]',
    place_result: 'splitter',
    stack_size: 50,
    ui_name: 'Splitter',
    description: 'Splits incoming transport belts\' cargo 1:1'
  },
  fast_splitter: {
    type: 'item',
    name: 'fast_splitter',
    icon: 'graphics/icons/fast-splitter.png',
    icon_size: 32,
    subgroup: 'belt',
    order: 'c[splitter]_b[fast_splitter]',
    place_result: 'fast_splitter',
    stack_size: 50,
    ui_name: 'Fast splitter',
    description: 'Splits incoming transport belts\' cargo 1:1'
  },
  express_splitter: {
    type: 'item',
    name: 'express_splitter',
    icon: 'graphics/icons/express-splitter.png',
    icon_size: 32,
    subgroup: 'belt',
    order: 'c[splitter]_c[express_splitter]',
    place_result: 'express_splitter',
    stack_size: 50,
    ui_name: 'Express splitter',
    description: 'Splits incoming transport belts\' cargo 1:1'
  },
  advanced_circuit: {
    type: 'item',
    name: 'advanced_circuit',
    icon: 'graphics/icons/advanced-circuit.png',
    icon_size: 32,
    subgroup: 'intermediate_product',
    order: 'f[advanced_circuit]',
    stack_size: 200,
    ui_name: 'Advanced circuit'
  },
  processing_unit: {
    type: 'item',
    name: 'processing_unit',
    icon: 'graphics/icons/processing-unit.png',
    icon_size: 32,
    subgroup: 'intermediate_product',
    order: 'g[processing_unit]',
    stack_size: 100,
    ui_name: 'Processing unit'
  },
  logistic_robot: {
    type: 'item',
    name: 'logistic_robot',
    icon: 'graphics/icons/logistic-robot.png',
    icon_size: 32,
    subgroup: 'logistic_network',
    order: 'a[robot]_a[logistic_robot]',
    place_result: 'logistic_robot',
    stack_size: 50,
    ui_name: 'Logistic robot',
    description: 'Transports items between logistic chests.'
  },
  construction_robot: {
    type: 'item',
    name: 'construction_robot',
    icon: 'graphics/icons/construction-robot.png',
    icon_size: 32,
    subgroup: 'logistic_network',
    order: 'a[robot]_b[construction_robot]',
    place_result: 'construction_robot',
    stack_size: 50,
    ui_name: 'Construction robot',
    description: 'Automatically build and repair friendly entities.'
  },
  logistic_chest_passive_provider: {
    type: 'item',
    name: 'logistic_chest_passive_provider',
    icon: 'graphics/icons/logistic-chest-passive-provider.png',
    icon_size: 32,
    subgroup: 'logistic_network',
    order: 'b[storage]_c[logistic_chest_passive_provider]',
    place_result: 'logistic_chest_passive_provider',
    stack_size: 50,
    ui_name: 'Passive provider chest',
    description: 'Makes its content available for the logistic network.'
  },
  logistic_chest_active_provider: {
    type: 'item',
    name: 'logistic_chest_active_provider',
    icon: 'graphics/icons/logistic-chest-active-provider.png',
    icon_size: 32,
    subgroup: 'logistic_network',
    order: 'b[storage]_c[logistic_chest_active_provider]',
    place_result: 'logistic_chest_active_provider',
    stack_size: 50,
    ui_name: 'Active provider chest',
    description: 'Sends its content to the logistic network.'
  },
  logistic_chest_storage: {
    type: 'item',
    name: 'logistic_chest_storage',
    icon: 'graphics/icons/logistic-chest-storage.png',
    icon_size: 32,
    subgroup: 'logistic_network',
    order: 'b[storage]_c[logistic_chest_storage]',
    place_result: 'logistic_chest_storage',
    stack_size: 50,
    ui_name: 'Storage chest',
    description: 'Long-term storage for the logistic network.'
  },
  logistic_chest_buffer: {
    type: 'item',
    name: 'logistic_chest_buffer',
    icon: 'graphics/icons/logistic-chest-buffer.png',
    icon_size: 32,
    subgroup: 'logistic_network',
    order: 'b[storage]_d[logistic_chest_buffer]',
    place_result: 'logistic_chest_buffer',
    stack_size: 50,
    ui_name: 'Buffer chest',
    description: 'Requests specified items to be available for personal logistics and automated construction.'
  },
  logistic_chest_requester: {
    type: 'item',
    name: 'logistic_chest_requester',
    icon: 'graphics/icons/logistic-chest-requester.png',
    icon_size: 32,
    subgroup: 'logistic_network',
    order: 'b[storage]_e[logistic_chest_requester]',
    place_result: 'logistic_chest_requester',
    stack_size: 50,
    ui_name: 'Requester chest',
    description: 'Requests specified items from the logistic network.'
  },
  rocket_silo: {
    type: 'item',
    name: 'rocket_silo',
    icon: 'graphics/icons/rocket-silo.png',
    icon_size: 32,
    subgroup: 'defensive_structure',
    order: 'e[rocket_silo]',
    place_result: 'rocket_silo',
    stack_size: 1,
    ui_name: 'Rocket silo',
    description: 'Used to build and launch a rocket to win the game.'
  },
  roboport: {
    type: 'item',
    name: 'roboport',
    icon: 'graphics/icons/roboport.png',
    icon_size: 32,
    subgroup: 'logistic_network',
    order: 'c[signal]_a[roboport]',
    place_result: 'roboport',
    stack_size: 10,
    ui_name: 'Roboport'
  },
  big_electric_pole: {
    type: 'item',
    name: 'big_electric_pole',
    icon: 'graphics/icons/big-electric-pole.png',
    icon_size: 32,
    subgroup: 'energy_pipe_distribution',
    order: 'a[energy]_c[big_electric_pole]',
    place_result: 'big_electric_pole',
    stack_size: 50,
    ui_name: 'Big electric pole'
  },
  medium_electric_pole: {
    type: 'item',
    name: 'medium_electric_pole',
    icon: 'graphics/icons/medium-electric-pole.png',
    icon_size: 32,
    subgroup: 'energy_pipe_distribution',
    order: 'a[energy]_b[medium_electric_pole]',
    place_result: 'medium_electric_pole',
    stack_size: 50,
    ui_name: 'Medium electric pole'
  },
  substation: {
    type: 'item',
    name: 'substation',
    icon: 'graphics/icons/substation.png',
    icon_size: 32,
    subgroup: 'energy_pipe_distribution',
    order: 'a[energy]_d[substation]',
    place_result: 'substation',
    stack_size: 50,
    ui_name: 'Substation'
  },
  accumulator: {
    type: 'item',
    name: 'accumulator',
    icon: 'graphics/icons/accumulator.png',
    icon_size: 32,
    subgroup: 'energy',
    order: 'e[accumulator]_a[accumulator]',
    place_result: 'accumulator',
    stack_size: 50,
    ui_name: 'Accumulator',
    description: 'Connects to the electric network and stores electric energy.'
  },
  steel_furnace: {
    type: 'item',
    name: 'steel_furnace',
    icon: 'graphics/icons/steel-furnace.png',
    icon_size: 32,
    subgroup: 'smelting_machine',
    order: 'b[steel_furnace]',
    place_result: 'steel_furnace',
    stack_size: 50,
    ui_name: 'Steel furnace'
  },
  electric_furnace: {
    type: 'item',
    name: 'electric_furnace',
    icon: 'graphics/icons/electric-furnace.png',
    icon_size: 32,
    subgroup: 'smelting_machine',
    order: 'c[electric_furnace]',
    place_result: 'electric_furnace',
    stack_size: 50,
    ui_name: 'Electric furnace'
  },
  beacon: {
    type: 'item',
    name: 'beacon',
    icon: 'graphics/icons/beacon.png',
    icon_size: 32,
    subgroup: 'module',
    order: 'a[beacon]',
    place_result: 'beacon',
    stack_size: 10,
    ui_name: 'Beacon',
    description: 'Transmits the effect of modules to nearby friendly entities.'
  },
  storage_tank: {
    type: 'item',
    name: 'storage_tank',
    icon: 'graphics/icons/storage-tank.png',
    icon_size: 32,
    subgroup: 'storage',
    order: 'b[fluid]_a[storage_tank]',
    place_result: 'storage_tank',
    stack_size: 50,
    ui_name: 'Storage tank'
  },
  pump: {
    type: 'item',
    name: 'pump',
    icon: 'graphics/icons/pump.png',
    icon_size: 32,
    subgroup: 'energy_pipe_distribution',
    order: 'b[pipe]_c[pump]',
    place_result: 'pump',
    stack_size: 50,
    ui_name: 'Pump'
  },
  pumpjack: {
    type: 'item',
    name: 'pumpjack',
    icon: 'graphics/icons/pumpjack.png',
    icon_size: 32,
    subgroup: 'extraction_machine',
    order: 'b[fluids]_b[pumpjack]',
    place_result: 'pumpjack',
    stack_size: 20,
    ui_name: 'Pumpjack'
  },
  oil_refinery: {
    type: 'item',
    name: 'oil_refinery',
    icon: 'graphics/icons/oil-refinery.png',
    icon_size: 32,
    subgroup: 'production_machine',
    order: 'd[refinery]',
    place_result: 'oil_refinery',
    stack_size: 10,
    ui_name: 'Oil refinery'
  },
  chemical_plant: {
    type: 'item',
    name: 'chemical_plant',
    icon: 'graphics/icons/chemical-plant.png',
    icon_size: 32,
    subgroup: 'production_machine',
    order: 'e[chemical_plant]',
    place_result: 'chemical_plant',
    stack_size: 10,
    ui_name: 'Chemical plant'
  },
  sulfur: {
    type: 'item',
    name: 'sulfur',
    icon: 'graphics/icons/sulfur.png',
    icon_size: 32,
    subgroup: 'raw_material',
    order: 'g[sulfur]',
    stack_size: 50,
    ui_name: 'Sulfur'
  },
  empty_barrel: {
    type: 'item',
    name: 'empty_barrel',
    icon: 'graphics/icons/fluid/barreling/empty-barrel.png',
    icon_size: 32,
    subgroup: 'intermediate_product',
    order: 'd[empty_barrel]',
    stack_size: 10,
    ui_name: 'Empty barrel'
  },
  solid_fuel: {
    type: 'item',
    name: 'solid_fuel',
    icon: 'graphics/icons/solid-fuel.png',
    icon_size: 32,
    fuel_category: 'chemical',
    fuel_value: '25MJ',
    fuel_acceleration_multiplier: 1.2,
    fuel_top_speed_multiplier: 1.05,
    subgroup: 'raw_material',
    order: 'c[solid_fuel]',
    stack_size: 50,
    ui_name: 'Solid fuel'
  },
  plastic_bar: {
    type: 'item',
    name: 'plastic_bar',
    icon: 'graphics/icons/plastic-bar.png',
    icon_size: 32,
    subgroup: 'raw_material',
    order: 'f[plastic_bar]',
    stack_size: 100,
    ui_name: 'Plastic bar'
  },
  engine_unit: {
    type: 'item',
    name: 'engine_unit',
    icon: 'graphics/icons/engine-unit.png',
    icon_size: 32,
    subgroup: 'intermediate_product',
    order: 'h[engine_unit]',
    stack_size: 50,
    ui_name: 'Engine unit'
  },
  electric_engine_unit: {
    type: 'item',
    name: 'electric_engine_unit',
    icon: 'graphics/icons/electric-engine-unit.png',
    icon_size: 32,
    subgroup: 'intermediate_product',
    order: 'i[electric_engine_unit]',
    stack_size: 50,
    ui_name: 'Electric engine unit'
  },
  explosives: {
    type: 'item',
    name: 'explosives',
    icon: 'graphics/icons/explosives.png',
    icon_size: 32,
    subgroup: 'raw_material',
    order: 'j[explosives]',
    stack_size: 50,
    ui_name: 'Explosives'
  },
  battery: {
    type: 'item',
    name: 'battery',
    icon: 'graphics/icons/battery.png',
    icon_size: 32,
    subgroup: 'raw_material',
    order: 'h[battery]',
    stack_size: 200,
    ui_name: 'Battery',
    description: 'Electrochemical cell that stores and provides energy to electrical devices.'
  },
  flying_robot_frame: {
    type: 'item',
    name: 'flying_robot_frame',
    icon: 'graphics/icons/flying-robot-frame.png',
    icon_size: 32,
    subgroup: 'intermediate_product',
    order: 'l[flying_robot_frame]',
    stack_size: 50,
    ui_name: 'Flying robot frame'
  },
  arithmetic_combinator: {
    type: 'item',
    name: 'arithmetic_combinator',
    icon: 'graphics/icons/arithmetic-combinator.png',
    icon_size: 32,
    subgroup: 'circuit_network',
    place_result: 'arithmetic_combinator',
    order: 'c[combinators]_a[arithmetic_combinator]',
    stack_size: 50,
    ui_name: 'Arithmetic combinator',
    description: 'Performs arithmetic operations on circuit network signals.'
  },
  decider_combinator: {
    type: 'item',
    name: 'decider_combinator',
    icon: 'graphics/icons/decider-combinator.png',
    icon_size: 32,
    subgroup: 'circuit_network',
    place_result: 'decider_combinator',
    order: 'c[combinators]_b[decider_combinator]',
    stack_size: 50,
    ui_name: 'Decider combinator',
    description: 'Compares circuit network signals.'
  },
  constant_combinator: {
    type: 'item',
    name: 'constant_combinator',
    icon: 'graphics/icons/constant-combinator.png',
    icon_size: 32,
    subgroup: 'circuit_network',
    place_result: 'constant_combinator',
    order: 'c[combinators]_c[constant_combinator]',
    stack_size: 50,
    ui_name: 'Constant combinator',
    description: 'Outputs constant circuit network signals.'
  },
  power_switch: {
    type: 'item',
    name: 'power_switch',
    icon: 'graphics/icons/power-switch.png',
    icon_size: 32,
    subgroup: 'circuit_network',
    place_result: 'power_switch',
    order: 'd[other]_a[power_switch]',
    stack_size: 50,
    ui_name: 'Power switch',
    description: 'Used to control the connections of the electric network. Can also be controlled by the circuit network.'
  },
  programmable_speaker: {
    type: 'item',
    name: 'programmable_speaker',
    icon: 'graphics/icons/programmable-speaker.png',
    icon_size: 32,
    subgroup: 'circuit_network',
    order: 'd[other]_b[programmable_speaker]',
    place_result: 'programmable_speaker',
    stack_size: 50,
    ui_name: 'Programmable Speaker'
  },
  low_density_structure: {
    type: 'item',
    name: 'low_density_structure',
    icon: 'graphics/icons/rocket-structure.png',
    icon_size: 32,
    subgroup: 'intermediate_product',
    order: 'o[rocket_structure]',
    stack_size: 10,
    ui_name: 'Low density structure'
  },
  rocket_fuel: {
    type: 'item',
    name: 'rocket_fuel',
    icon: 'graphics/icons/rocket-fuel.png',
    icon_size: 32,
    fuel_category: 'chemical',
    fuel_value: '225MJ',
    fuel_acceleration_multiplier: 1.8,
    fuel_top_speed_multiplier: 1.15,
    subgroup: 'intermediate_product',
    order: 'p[rocket_fuel]',
    stack_size: 10,
    ui_name: 'Rocket fuel'
  },
  nuclear_fuel: {
    type: 'item',
    name: 'nuclear_fuel',
    icon: 'graphics/icons/nuclear-fuel.png',
    icon_size: 32,
    fuel_category: 'chemical',
    fuel_value: '1.21GJ',
    fuel_acceleration_multiplier: 2.5,
    fuel_top_speed_multiplier: 1.15,
    subgroup: 'intermediate_product',
    order: 'q[uranium_rocket_fuel]',
    stack_size: 1,
    ui_name: 'Nuclear fuel'
  },
  rocket_control_unit: {
    type: 'item',
    name: 'rocket_control_unit',
    icon: 'graphics/icons/rocket-control-unit.png',
    icon_size: 32,
    subgroup: 'intermediate_product',
    order: 'n[rocket_control_unit]',
    stack_size: 10,
    ui_name: 'Rocket control unit'
  },
  satellite: {
    type: 'item',
    name: 'satellite',
    icon: 'graphics/icons/satellite.png',
    icon_size: 32,
    subgroup: 'intermediate_product',
    order: 'm[satellite]',
    stack_size: 1,
    rocket_launch_product: [
      'space_science_pack',
      1000
    ],
    ui_name: 'Satellite',
    description: 'The satellite should be put into the rocket.'
  },
  concrete: {
    type: 'item',
    name: 'concrete',
    icon: 'graphics/icons/concrete.png',
    icon_size: 32,
    subgroup: 'terrain',
    order: 'b[concrete]_a[plain]',
    stack_size: 100,
    place_as_tile: {
      result: 'concrete',
      condition_size: 1,
      condition: [
        'water_tile'
      ]
    },
    ui_name: 'Concrete'
  },
  refined_concrete: {
    type: 'item',
    name: 'refined_concrete',
    icon: 'graphics/icons/refined-concrete.png',
    icon_size: 32,
    subgroup: 'terrain',
    order: 'b[concrete]_c[refined]',
    stack_size: 100,
    place_as_tile: {
      result: 'refined_concrete',
      condition_size: 1,
      condition: [
        'water_tile'
      ]
    },
    ui_name: 'Refined concrete'
  },
  hazard_concrete: {
    type: 'item',
    name: 'hazard_concrete',
    icon: 'graphics/icons/hazard-concrete.png',
    icon_size: 32,
    subgroup: 'terrain',
    order: 'b[concrete]_b[hazard]',
    stack_size: 100,
    place_as_tile: {
      result: 'hazard_concrete_left',
      condition_size: 1,
      condition: [
        'water_tile'
      ]
    },
    ui_name: 'Hazard concrete'
  },
  refined_hazard_concrete: {
    type: 'item',
    name: 'refined_hazard_concrete',
    icon: 'graphics/icons/refined-hazard-concrete.png',
    icon_size: 32,
    subgroup: 'terrain',
    order: 'b[concrete]_d[refined_hazard]',
    stack_size: 100,
    place_as_tile: {
      result: 'refined_hazard_concrete_left',
      condition_size: 1,
      condition: [
        'water_tile'
      ]
    },
    ui_name: 'Refined hazard concrete'
  },
  landfill: {
    type: 'item',
    name: 'landfill',
    icon: 'graphics/icons/landfill.png',
    icon_size: 32,
    subgroup: 'terrain',
    order: 'c[landfill]_a[dirt]',
    stack_size: 100,
    place_as_tile: {
      result: 'grass_1',
      condition_size: 1,
      condition: [
        'ground_tile'
      ]
    },
    ui_name: 'Landfill',
    description: 'Used to fill in water that\'s in the way.'
  },
  uranium_ore: {
    type: 'item',
    name: 'uranium_ore',
    icon: 'graphics/icons/uranium-ore.png',
    icon_size: 32,
    subgroup: 'raw_resource',
    order: 'g[uranium_ore]',
    stack_size: 50,
    ui_name: 'Uranium ore'
  },
  nuclear_reactor: {
    type: 'item',
    name: 'nuclear_reactor',
    icon: 'graphics/icons/nuclear-reactor.png',
    icon_size: 32,
    subgroup: 'energy',
    order: 'f[nuclear_energy]_a[reactor]',
    place_result: 'nuclear_reactor',
    stack_size: 10,
    ui_name: 'Nuclear reactor'
  },
  uranium_235: {
    type: 'item',
    name: 'uranium_235',
    icon: 'graphics/icons/uranium-235.png',
    icon_size: 32,
    subgroup: 'intermediate_product',
    order: 'r[uranium_235]',
    stack_size: 100,
    ui_name: 'Uranium-235'
  },
  uranium_238: {
    type: 'item',
    name: 'uranium_238',
    icon: 'graphics/icons/uranium-238.png',
    icon_size: 32,
    subgroup: 'intermediate_product',
    order: 'r[uranium_238]',
    stack_size: 100,
    ui_name: 'Uranium-238'
  },
  centrifuge: {
    type: 'item',
    name: 'centrifuge',
    icon: 'graphics/icons/centrifuge.png',
    icon_size: 32,
    subgroup: 'production_machine',
    order: 'g[centrifuge]',
    place_result: 'centrifuge',
    stack_size: 50,
    ui_name: 'Centrifuge',
    description: 'Processes uranium ore and splits it into uranium 235 and uranium 238.'
  },
  uranium_fuel_cell: {
    type: 'item',
    name: 'uranium_fuel_cell',
    icon: 'graphics/icons/uranium-fuel-cell.png',
    icon_size: 32,
    subgroup: 'intermediate_product',
    order: 'r[uranium_processing]_a[uranium_fuel_cell]',
    fuel_category: 'nuclear',
    burnt_result: 'used_up_uranium_fuel_cell',
    fuel_value: '8GJ',
    stack_size: 50,
    ui_name: 'Uranium fuel cell'
  },
  used_up_uranium_fuel_cell: {
    type: 'item',
    name: 'used_up_uranium_fuel_cell',
    icon: 'graphics/icons/used-up-uranium-fuel-cell.png',
    icon_size: 32,
    subgroup: 'intermediate_product',
    order: 'r[used_up_uranium_fuel_cell]',
    stack_size: 50,
    ui_name: 'Used up uranium fuel cell'
  },
  heat_exchanger: {
    type: 'item',
    name: 'heat_exchanger',
    icon: 'graphics/icons/heat-boiler.png',
    icon_size: 32,
    subgroup: 'energy',
    order: 'f[nuclear_energy]_b[heat_exchanger]',
    place_result: 'heat_exchanger',
    stack_size: 50,
    ui_name: 'Heat exchanger',
    description: 'Exchanges heat between a heat source and a fluid.'
  },
  steam_turbine: {
    type: 'item',
    name: 'steam_turbine',
    icon: 'graphics/icons/steam-turbine.png',
    icon_size: 32,
    subgroup: 'energy',
    order: 'b[steam_power]_c[steam_turbine]',
    place_result: 'steam_turbine',
    stack_size: 10,
    ui_name: 'Steam turbine',
    description: 'Consumes steam to create electric energy.'
  },
  heat_pipe: {
    type: 'item',
    name: 'heat_pipe',
    icon: 'graphics/icons/heat-pipe.png',
    icon_size: 32,
    subgroup: 'energy',
    order: 'f[nuclear_energy]_c[heat_pipe]',
    place_result: 'heat_pipe',
    stack_size: 50,
    ui_name: 'Heat pipe'
  },
  laser_turret: {
    type: 'item',
    name: 'laser_turret',
    icon: 'graphics/icons/laser-turret.png',
    icon_size: 32,
    subgroup: 'defensive_structure',
    order: 'b[turret]_b[laser_turret]',
    place_result: 'laser_turret',
    stack_size: 50,
    ui_name: 'Laser turret'
  },
  flamethrower_turret: {
    type: 'item',
    name: 'flamethrower_turret',
    icon: 'graphics/icons/flamethrower-turret.png',
    icon_size: 32,
    subgroup: 'defensive_structure',
    order: 'b[turret]_c[flamethrower_turret]',
    place_result: 'flamethrower_turret',
    stack_size: 50,
    ui_name: 'Flamethrower turret',
    description: 'Fires a stream of burning liquid at enemies.'
  },
  artillery_turret: {
    type: 'item',
    name: 'artillery_turret',
    icon: 'graphics/icons/artillery-turret.png',
    icon_size: 32,
    subgroup: 'defensive_structure',
    order: 'b[turret]_d[artillery_turret]',
    place_result: 'artillery_turret',
    stack_size: 10,
    ui_name: 'Artillery turret',
    description: 'Long range cannon targeting enemy bases.'
  },
  water_barrel: {
    type: 'item',
    name: 'water_barrel',
    icons: [
      {
        icon: 'graphics/icons/fluid/barreling/empty-barrel.png'
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-side-mask.png',
        tint: {
          r: 0,
          g: 0.34,
          b: 0.6,
          a: 0.75
        }
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-hoop-top-mask.png',
        tint: {
          r: 0.7,
          g: 0.7,
          b: 0.7,
          a: 0.75
        }
      }
    ],
    icon_size: 32,
    subgroup: 'fill_barrel',
    order: 'b[water_barrel]',
    stack_size: 10,
    ui_name: 'Water barrel'
  },
  crude_oil_barrel: {
    type: 'item',
    name: 'crude_oil_barrel',
    icons: [
      {
        icon: 'graphics/icons/fluid/barreling/empty-barrel.png'
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-side-mask.png',
        tint: {
          r: 0,
          g: 0,
          b: 0,
          a: 0.75
        }
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-hoop-top-mask.png',
        tint: {
          r: 0.5,
          g: 0.5,
          b: 0.5,
          a: 0.75
        }
      }
    ],
    icon_size: 32,
    subgroup: 'fill_barrel',
    order: 'b[crude_oil_barrel]',
    stack_size: 10,
    ui_name: 'Crude oil barrel'
  },
  heavy_oil_barrel: {
    type: 'item',
    name: 'heavy_oil_barrel',
    icons: [
      {
        icon: 'graphics/icons/fluid/barreling/empty-barrel.png'
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-side-mask.png',
        tint: {
          r: 0.5,
          g: 0.04,
          b: 0,
          a: 0.75
        }
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-hoop-top-mask.png',
        tint: {
          r: 0.85,
          g: 0.6,
          b: 0.3,
          a: 0.75
        }
      }
    ],
    icon_size: 32,
    subgroup: 'fill_barrel',
    order: 'b[heavy_oil_barrel]',
    stack_size: 10,
    ui_name: 'Heavy oil barrel'
  },
  light_oil_barrel: {
    type: 'item',
    name: 'light_oil_barrel',
    icons: [
      {
        icon: 'graphics/icons/fluid/barreling/empty-barrel.png'
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-side-mask.png',
        tint: {
          r: 0.57,
          g: 0.33,
          b: 0,
          a: 0.75
        }
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-hoop-top-mask.png',
        tint: {
          r: 1,
          g: 0.73,
          b: 0.07,
          a: 0.75
        }
      }
    ],
    icon_size: 32,
    subgroup: 'fill_barrel',
    order: 'b[light_oil_barrel]',
    stack_size: 10,
    ui_name: 'Light oil barrel'
  },
  petroleum_gas_barrel: {
    type: 'item',
    name: 'petroleum_gas_barrel',
    icons: [
      {
        icon: 'graphics/icons/fluid/barreling/empty-barrel.png'
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-side-mask.png',
        tint: {
          r: 0.3,
          g: 0.1,
          b: 0.3,
          a: 0.75
        }
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-hoop-top-mask.png',
        tint: {
          r: 0.8,
          g: 0.8,
          b: 0.8,
          a: 0.75
        }
      }
    ],
    icon_size: 32,
    subgroup: 'fill_barrel',
    order: 'b[petroleum_gas_barrel]',
    stack_size: 10,
    ui_name: 'Petroleum gas barrel'
  },
  lubricant_barrel: {
    type: 'item',
    name: 'lubricant_barrel',
    icons: [
      {
        icon: 'graphics/icons/fluid/barreling/empty-barrel.png'
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-side-mask.png',
        tint: {
          r: 0.15,
          g: 0.32,
          b: 0.03,
          a: 0.75
        }
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-hoop-top-mask.png',
        tint: {
          r: 0.43,
          g: 0.75,
          b: 0.31,
          a: 0.75
        }
      }
    ],
    icon_size: 32,
    subgroup: 'fill_barrel',
    order: 'b[lubricant_barrel]',
    stack_size: 10,
    ui_name: 'Lubricant barrel'
  },
  sulfuric_acid_barrel: {
    type: 'item',
    name: 'sulfuric_acid_barrel',
    icons: [
      {
        icon: 'graphics/icons/fluid/barreling/empty-barrel.png'
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-side-mask.png',
        tint: {
          r: 0.75,
          g: 0.65,
          b: 0.1,
          a: 0.75
        }
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-hoop-top-mask.png',
        tint: {
          r: 0.7,
          g: 1,
          b: 0.1,
          a: 0.75
        }
      }
    ],
    icon_size: 32,
    subgroup: 'fill_barrel',
    order: 'b[sulfuric_acid_barrel]',
    stack_size: 10,
    ui_name: 'Sulfuric acid barrel'
  },
  raw_fish: {
    type: 'capsule',
    name: 'raw_fish',
    icon: 'graphics/icons/fish.png',
    icon_size: 32,
    subgroup: 'raw_resource',
    order: 'h[raw_fish]',
    stack_size: 100,
    ui_name: 'Raw fish'
  },
  grenade: {
    type: 'capsule',
    name: 'grenade',
    icon: 'graphics/icons/grenade.png',
    icon_size: 32,
    subgroup: 'capsule',
    order: 'a[grenade]_a[normal]',
    stack_size: 100,
    ui_name: 'Grenade'
  },
  cluster_grenade: {
    type: 'capsule',
    name: 'cluster_grenade',
    icon: 'graphics/icons/cluster-grenade.png',
    icon_size: 32,
    subgroup: 'capsule',
    order: 'a[grenade]_b[cluster]',
    stack_size: 100,
    ui_name: 'Cluster grenade'
  },
  poison_capsule: {
    type: 'capsule',
    name: 'poison_capsule',
    icon: 'graphics/icons/poison-capsule.png',
    icon_size: 32,
    subgroup: 'capsule',
    order: 'b[poison_capsule]',
    stack_size: 100,
    ui_name: 'Poison capsule'
  },
  slowdown_capsule: {
    type: 'capsule',
    name: 'slowdown_capsule',
    icon: 'graphics/icons/slowdown-capsule.png',
    icon_size: 32,
    subgroup: 'capsule',
    order: 'c[slowdown_capsule]',
    stack_size: 100,
    ui_name: 'Slowdown capsule',
    description: 'Reduces the movement speed of affected units.'
  },
  defender_capsule: {
    type: 'capsule',
    name: 'defender_capsule',
    icon: 'graphics/icons/defender.png',
    icon_size: 32,
    subgroup: 'capsule',
    order: 'd[defender_capsule]',
    stack_size: 100,
    ui_name: 'Defender capsule'
  },
  distractor_capsule: {
    type: 'capsule',
    name: 'distractor_capsule',
    icon: 'graphics/icons/distractor.png',
    icon_size: 32,
    subgroup: 'capsule',
    order: 'e[defender_capsule]',
    stack_size: 100,
    ui_name: 'Distractor capsule'
  },
  destroyer_capsule: {
    type: 'capsule',
    name: 'destroyer_capsule',
    icon: 'graphics/icons/destroyer.png',
    icon_size: 32,
    subgroup: 'capsule',
    order: 'f[destroyer_capsule]',
    stack_size: 100,
    ui_name: 'Destroyer capsule'
  },
  discharge_defense_remote: {
    type: 'capsule',
    name: 'discharge_defense_remote',
    icon: 'graphics/equipment/discharge-defense-equipment-ability.png',
    icon_size: 32,
    subgroup: 'capsule',
    order: 'z',
    stack_size: 1,
    ui_name: 'Discharge defense remote'
  },
  cliff_explosives: {
    type: 'capsule',
    name: 'cliff_explosives',
    icon: 'graphics/icons/cliff-explosives.png',
    icon_size: 32,
    subgroup: 'terrain',
    order: 'd[cliff_explosives]',
    stack_size: 20,
    ui_name: 'Cliff explosives'
  },
  artillery_targeting_remote: {
    type: 'capsule',
    name: 'artillery_targeting_remote',
    icon: 'graphics/icons/artillery-targeting-remote.png',
    icon_size: 32,
    subgroup: 'capsule',
    order: 'zz',
    stack_size: 1,
    ui_name: 'Artillery targeting remote',
    description: 'Allows firing artillery manually from the map or the world.'
  },
  repair_pack: {
    type: 'repair_tool',
    name: 'repair_pack',
    icon: 'graphics/icons/repair-pack.png',
    icon_size: 32,
    subgroup: 'tool',
    order: 'b[repair]_a[repair_pack]',
    speed: 2,
    durability: 300,
    stack_size: 100,
    ui_name: 'Repair pack',
    description: 'Used to repair friendly entities by using __CONTROL__build__ with it in hand.'
  },
  iron_axe: {
    type: 'mining_tool',
    name: 'iron_axe',
    icon: 'graphics/icons/iron-axe.png',
    icon_size: 32,
    durability: 4000,
    subgroup: 'tool',
    order: 'a[mining]_a[iron_axe]',
    speed: 2.5,
    stack_size: 20,
    ui_name: 'Iron axe'
  },
  steel_axe: {
    type: 'mining_tool',
    name: 'steel_axe',
    icon: 'graphics/icons/steel-axe.png',
    icon_size: 32,
    durability: 5000,
    subgroup: 'tool',
    order: 'a[mining]_b[steel_axe]',
    speed: 4,
    stack_size: 20,
    ui_name: 'Steel axe'
  },
  basic_oil_processing: {
    type: 'recipe',
    name: 'basic_oil_processing',
    icon: 'graphics/icons/fluid/basic-oil-processing.png',
    icon_size: 32,
    subgroup: 'fluid_recipes',
    order: 'a[oil_processing]_a[basic_oil_processing]',
    ui_name: 'Basic oil processing'
  },
  advanced_oil_processing: {
    type: 'recipe',
    name: 'advanced_oil_processing',
    icon: 'graphics/icons/fluid/advanced-oil-processing.png',
    icon_size: 32,
    subgroup: 'fluid_recipes',
    order: 'a[oil_processing]_b[advanced_oil_processing]',
    ui_name: 'Advanced oil processing',
    description: 'Allows you to crack heavier crude oil fractions into lighter, more useful products.'
  },
  coal_liquefaction: {
    type: 'recipe',
    name: 'coal_liquefaction',
    icon: 'graphics/icons/fluid/coal-liquefaction.png',
    icon_size: 32,
    subgroup: 'fluid_recipes',
    order: 'a[oil_processing]_c[coal_liquefaction]',
    ui_name: 'Coal liquefaction',
    description: 'Unlocks a processing technique to turn coal into oil products with the use of steam and heavy oil.'
  },
  heavy_oil_cracking: {
    type: 'recipe',
    name: 'heavy_oil_cracking',
    icon: 'graphics/icons/fluid/heavy-oil-cracking.png',
    icon_size: 32,
    subgroup: 'fluid_recipes',
    order: 'b[fluid_chemistry]_a[heavy_oil_cracking]',
    crafting_machine_tint: {
      primary: {
        r: 0.29,
        g: 0.027,
        b: 0,
        a: 0
      },
      secondary: {
        r: 0.722,
        g: 0.465,
        b: 0.19,
        a: 0
      },
      tertiary: {
        r: 0.87,
        g: 0.365,
        b: 0,
        a: 0
      }
    },
    ui_name: 'Heavy oil cracking to light oil'
  },
  light_oil_cracking: {
    type: 'recipe',
    name: 'light_oil_cracking',
    icon: 'graphics/icons/fluid/light-oil-cracking.png',
    icon_size: 32,
    subgroup: 'fluid_recipes',
    order: 'b[fluid_chemistry]_b[light_oil_cracking]',
    crafting_machine_tint: {
      primary: {
        r: 0.785,
        g: 0.406,
        b: 0,
        a: 0
      },
      secondary: {
        r: 0.795,
        g: 0.805,
        b: 0.605,
        a: 0
      },
      tertiary: {
        r: 0.835,
        g: 0.551,
        b: 0,
        a: 0
      }
    },
    ui_name: 'Light oil cracking to petroleum gas'
  },
  solid_fuel_from_light_oil: {
    type: 'recipe',
    name: 'solid_fuel_from_light_oil',
    icon: 'graphics/icons/solid-fuel-from-light-oil.png',
    icon_size: 32,
    subgroup: 'fluid_recipes',
    order: 'b[fluid_chemistry]_c[solid_fuel_from_light_oil]',
    crafting_machine_tint: {
      primary: {
        r: 0.27,
        g: 0.122,
        b: 0,
        a: 0
      },
      secondary: {
        r: 0.735,
        g: 0.546,
        b: 0.325,
        a: 0
      },
      tertiary: {
        r: 0.61,
        g: 0.348,
        b: 0,
        a: 0
      }
    },
    ui_name: 'Solid fuel from light oil'
  },
  solid_fuel_from_petroleum_gas: {
    type: 'recipe',
    name: 'solid_fuel_from_petroleum_gas',
    icon: 'graphics/icons/solid-fuel-from-petroleum-gas.png',
    icon_size: 32,
    subgroup: 'fluid_recipes',
    order: 'b[fluid_chemistry]_d[solid_fuel_from_petroleum_gas]',
    crafting_machine_tint: {
      primary: {
        r: 0.331,
        g: 0.075,
        b: 0.51,
        a: 0
      },
      secondary: {
        r: 0.589,
        g: 0.54,
        b: 0.615,
        a: 0.361
      },
      tertiary: {
        r: 0.469,
        g: 0.145,
        b: 0.695,
        a: 0
      }
    },
    ui_name: 'Solid fuel from petroleum gas'
  },
  solid_fuel_from_heavy_oil: {
    type: 'recipe',
    name: 'solid_fuel_from_heavy_oil',
    icon: 'graphics/icons/solid-fuel-from-heavy-oil.png',
    icon_size: 32,
    subgroup: 'fluid_recipes',
    order: 'b[fluid_chemistry]_e[solid_fuel_from_heavy_oil]',
    crafting_machine_tint: {
      primary: {
        r: 0.16,
        g: 0.095,
        b: 0.095,
        a: 0
      },
      secondary: {
        r: 0.47,
        g: 0.215,
        b: 0.19,
        a: 0
      },
      tertiary: {
        r: 0.435,
        g: 0.144,
        b: 0.135,
        a: 0
      }
    },
    ui_name: 'Solid fuel from heavy oil'
  },
  uranium_processing: {
    type: 'recipe',
    name: 'uranium_processing',
    icon: 'graphics/icons/uranium-processing.png',
    icon_size: 32,
    subgroup: 'raw_material',
    order: 'k[uranium_processing]',
    ui_name: 'Uranium processing'
  },
  kovarex_enrichment_process: {
    type: 'recipe',
    name: 'kovarex_enrichment_process',
    icon: 'graphics/icons/kovarex-enrichment-process.png',
    icon_size: 32,
    subgroup: 'intermediate_product',
    order: 'r[uranium_processing]_c[kovarex_enrichment_process]',
    ui_name: 'Kovarex enrichment process',
    description: 'The process to create uranium-235 from uranium-238. It requires a large amount of uranium-235 as a catalyst.'
  },
  nuclear_fuel_reprocessing: {
    type: 'recipe',
    name: 'nuclear_fuel_reprocessing',
    icon: 'graphics/icons/nuclear-fuel-reprocessing.png',
    icon_size: 32,
    subgroup: 'intermediate_product',
    order: 'r[uranium_processing]_b[nuclear_fuel_reprocessing]',
    ui_name: 'Nuclear fuel reprocessing',
    description: 'The process of reprocessing used nuclear fuel to create uranium-238.'
  },
  fill_water_barrel: {
    type: 'recipe',
    name: 'fill_water_barrel',
    subgroup: 'fill_barrel',
    order: 'b[fill_water_barrel]',
    icons: [
      {
        icon: 'graphics/icons/fluid/barreling/barrel-fill.png'
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-fill-side-mask.png',
        tint: {
          r: 0,
          g: 0.34,
          b: 0.6,
          a: 0.75
        }
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-fill-top-mask.png',
        tint: {
          r: 0.7,
          g: 0.7,
          b: 0.7,
          a: 0.75
        }
      },
      {
        icon: 'graphics/icons/fluid/water.png',
        scale: 0.5,
        shift: [
          4,
          -8
        ]
      }
    ],
    icon_size: 32,
    ui_name: 'Fill water barrel'
  },
  empty_water_barrel: {
    type: 'recipe',
    name: 'empty_water_barrel',
    subgroup: 'empty_barrel',
    order: 'c[empty_water_barrel]',
    icons: [
      {
        icon: 'graphics/icons/fluid/barreling/barrel-empty.png'
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-empty-side-mask.png',
        tint: {
          r: 0,
          g: 0.34,
          b: 0.6,
          a: 0.75
        }
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-empty-top-mask.png',
        tint: {
          r: 0.7,
          g: 0.7,
          b: 0.7,
          a: 0.75
        }
      },
      {
        icon: 'graphics/icons/fluid/water.png',
        scale: 0.5,
        shift: [
          7,
          8
        ]
      }
    ],
    icon_size: 32,
    ui_name: 'Empty water barrel'
  },
  fill_crude_oil_barrel: {
    type: 'recipe',
    name: 'fill_crude_oil_barrel',
    subgroup: 'fill_barrel',
    order: 'b[fill_crude_oil_barrel]',
    icons: [
      {
        icon: 'graphics/icons/fluid/barreling/barrel-fill.png'
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-fill-side-mask.png',
        tint: {
          r: 0,
          g: 0,
          b: 0,
          a: 0.75
        }
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-fill-top-mask.png',
        tint: {
          r: 0.5,
          g: 0.5,
          b: 0.5,
          a: 0.75
        }
      },
      {
        icon: 'graphics/icons/fluid/crude-oil.png',
        scale: 0.5,
        shift: [
          4,
          -8
        ]
      }
    ],
    icon_size: 32,
    ui_name: 'Fill crude oil barrel'
  },
  empty_crude_oil_barrel: {
    type: 'recipe',
    name: 'empty_crude_oil_barrel',
    subgroup: 'empty_barrel',
    order: 'c[empty_crude_oil_barrel]',
    icons: [
      {
        icon: 'graphics/icons/fluid/barreling/barrel-empty.png'
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-empty-side-mask.png',
        tint: {
          r: 0,
          g: 0,
          b: 0,
          a: 0.75
        }
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-empty-top-mask.png',
        tint: {
          r: 0.5,
          g: 0.5,
          b: 0.5,
          a: 0.75
        }
      },
      {
        icon: 'graphics/icons/fluid/crude-oil.png',
        scale: 0.5,
        shift: [
          7,
          8
        ]
      }
    ],
    icon_size: 32,
    ui_name: 'Empty crude oil barrel'
  },
  fill_heavy_oil_barrel: {
    type: 'recipe',
    name: 'fill_heavy_oil_barrel',
    subgroup: 'fill_barrel',
    order: 'b[fill_heavy_oil_barrel]',
    icons: [
      {
        icon: 'graphics/icons/fluid/barreling/barrel-fill.png'
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-fill-side-mask.png',
        tint: {
          r: 0.5,
          g: 0.04,
          b: 0,
          a: 0.75
        }
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-fill-top-mask.png',
        tint: {
          r: 0.85,
          g: 0.6,
          b: 0.3,
          a: 0.75
        }
      },
      {
        icon: 'graphics/icons/fluid/heavy-oil.png',
        scale: 0.5,
        shift: [
          4,
          -8
        ]
      }
    ],
    icon_size: 32,
    ui_name: 'Fill heavy oil barrel'
  },
  empty_heavy_oil_barrel: {
    type: 'recipe',
    name: 'empty_heavy_oil_barrel',
    subgroup: 'empty_barrel',
    order: 'c[empty_heavy_oil_barrel]',
    icons: [
      {
        icon: 'graphics/icons/fluid/barreling/barrel-empty.png'
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-empty-side-mask.png',
        tint: {
          r: 0.5,
          g: 0.04,
          b: 0,
          a: 0.75
        }
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-empty-top-mask.png',
        tint: {
          r: 0.85,
          g: 0.6,
          b: 0.3,
          a: 0.75
        }
      },
      {
        icon: 'graphics/icons/fluid/heavy-oil.png',
        scale: 0.5,
        shift: [
          7,
          8
        ]
      }
    ],
    icon_size: 32,
    ui_name: 'Empty heavy oil barrel'
  },
  fill_light_oil_barrel: {
    type: 'recipe',
    name: 'fill_light_oil_barrel',
    subgroup: 'fill_barrel',
    order: 'b[fill_light_oil_barrel]',
    icons: [
      {
        icon: 'graphics/icons/fluid/barreling/barrel-fill.png'
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-fill-side-mask.png',
        tint: {
          r: 0.57,
          g: 0.33,
          b: 0,
          a: 0.75
        }
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-fill-top-mask.png',
        tint: {
          r: 1,
          g: 0.73,
          b: 0.07,
          a: 0.75
        }
      },
      {
        icon: 'graphics/icons/fluid/light-oil.png',
        scale: 0.5,
        shift: [
          4,
          -8
        ]
      }
    ],
    icon_size: 32,
    ui_name: 'Fill light oil barrel'
  },
  empty_light_oil_barrel: {
    type: 'recipe',
    name: 'empty_light_oil_barrel',
    subgroup: 'empty_barrel',
    order: 'c[empty_light_oil_barrel]',
    icons: [
      {
        icon: 'graphics/icons/fluid/barreling/barrel-empty.png'
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-empty-side-mask.png',
        tint: {
          r: 0.57,
          g: 0.33,
          b: 0,
          a: 0.75
        }
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-empty-top-mask.png',
        tint: {
          r: 1,
          g: 0.73,
          b: 0.07,
          a: 0.75
        }
      },
      {
        icon: 'graphics/icons/fluid/light-oil.png',
        scale: 0.5,
        shift: [
          7,
          8
        ]
      }
    ],
    icon_size: 32,
    ui_name: 'Empty light oil barrel'
  },
  fill_petroleum_gas_barrel: {
    type: 'recipe',
    name: 'fill_petroleum_gas_barrel',
    subgroup: 'fill_barrel',
    order: 'b[fill_petroleum_gas_barrel]',
    icons: [
      {
        icon: 'graphics/icons/fluid/barreling/barrel-fill.png'
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-fill-side-mask.png',
        tint: {
          r: 0.3,
          g: 0.1,
          b: 0.3,
          a: 0.75
        }
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-fill-top-mask.png',
        tint: {
          r: 0.8,
          g: 0.8,
          b: 0.8,
          a: 0.75
        }
      },
      {
        icon: 'graphics/icons/fluid/petroleum-gas.png',
        scale: 0.5,
        shift: [
          4,
          -8
        ]
      }
    ],
    icon_size: 32,
    ui_name: 'Fill petroleum gas barrel'
  },
  empty_petroleum_gas_barrel: {
    type: 'recipe',
    name: 'empty_petroleum_gas_barrel',
    subgroup: 'empty_barrel',
    order: 'c[empty_petroleum_gas_barrel]',
    icons: [
      {
        icon: 'graphics/icons/fluid/barreling/barrel-empty.png'
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-empty-side-mask.png',
        tint: {
          r: 0.3,
          g: 0.1,
          b: 0.3,
          a: 0.75
        }
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-empty-top-mask.png',
        tint: {
          r: 0.8,
          g: 0.8,
          b: 0.8,
          a: 0.75
        }
      },
      {
        icon: 'graphics/icons/fluid/petroleum-gas.png',
        scale: 0.5,
        shift: [
          7,
          8
        ]
      }
    ],
    icon_size: 32,
    ui_name: 'Empty petroleum gas barrel'
  },
  fill_lubricant_barrel: {
    type: 'recipe',
    name: 'fill_lubricant_barrel',
    subgroup: 'fill_barrel',
    order: 'b[fill_lubricant_barrel]',
    icons: [
      {
        icon: 'graphics/icons/fluid/barreling/barrel-fill.png'
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-fill-side-mask.png',
        tint: {
          r: 0.15,
          g: 0.32,
          b: 0.03,
          a: 0.75
        }
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-fill-top-mask.png',
        tint: {
          r: 0.43,
          g: 0.75,
          b: 0.31,
          a: 0.75
        }
      },
      {
        icon: 'graphics/icons/fluid/lubricant.png',
        scale: 0.5,
        shift: [
          4,
          -8
        ]
      }
    ],
    icon_size: 32,
    ui_name: 'Fill lubricant barrel'
  },
  empty_lubricant_barrel: {
    type: 'recipe',
    name: 'empty_lubricant_barrel',
    subgroup: 'empty_barrel',
    order: 'c[empty_lubricant_barrel]',
    icons: [
      {
        icon: 'graphics/icons/fluid/barreling/barrel-empty.png'
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-empty-side-mask.png',
        tint: {
          r: 0.15,
          g: 0.32,
          b: 0.03,
          a: 0.75
        }
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-empty-top-mask.png',
        tint: {
          r: 0.43,
          g: 0.75,
          b: 0.31,
          a: 0.75
        }
      },
      {
        icon: 'graphics/icons/fluid/lubricant.png',
        scale: 0.5,
        shift: [
          7,
          8
        ]
      }
    ],
    icon_size: 32,
    ui_name: 'Empty lubricant barrel'
  },
  fill_sulfuric_acid_barrel: {
    type: 'recipe',
    name: 'fill_sulfuric_acid_barrel',
    subgroup: 'fill_barrel',
    order: 'b[fill_sulfuric_acid_barrel]',
    icons: [
      {
        icon: 'graphics/icons/fluid/barreling/barrel-fill.png'
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-fill-side-mask.png',
        tint: {
          r: 0.75,
          g: 0.65,
          b: 0.1,
          a: 0.75
        }
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-fill-top-mask.png',
        tint: {
          r: 0.7,
          g: 1,
          b: 0.1,
          a: 0.75
        }
      },
      {
        icon: 'graphics/icons/fluid/sulfuric-acid.png',
        scale: 0.5,
        shift: [
          4,
          -8
        ]
      }
    ],
    icon_size: 32,
    ui_name: 'Fill sulfuric acid barrel'
  },
  empty_sulfuric_acid_barrel: {
    type: 'recipe',
    name: 'empty_sulfuric_acid_barrel',
    subgroup: 'empty_barrel',
    order: 'c[empty_sulfuric_acid_barrel]',
    icons: [
      {
        icon: 'graphics/icons/fluid/barreling/barrel-empty.png'
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-empty-side-mask.png',
        tint: {
          r: 0.75,
          g: 0.65,
          b: 0.1,
          a: 0.75
        }
      },
      {
        icon: 'graphics/icons/fluid/barreling/barrel-empty-top-mask.png',
        tint: {
          r: 0.7,
          g: 1,
          b: 0.1,
          a: 0.75
        }
      },
      {
        icon: 'graphics/icons/fluid/sulfuric-acid.png',
        scale: 0.5,
        shift: [
          7,
          8
        ]
      }
    ],
    icon_size: 32,
    ui_name: 'Empty sulfuric acid barrel'
  },
  signal_everything: {
    type: 'virtual_signal',
    name: 'signal_everything',
    special_signal: true,
    icon: 'graphics/icons/signal/signal_everything.png',
    icon_size: 32,
    subgroup: 'virtual_signal_special',
    order: 'a[special]_[1everything]',
    ui_name: 'Everything',
    description: 'If all input signals meet the condition, it will output true.\\nIt is true when there are no inputs.'
  },
  signal_anything: {
    type: 'virtual_signal',
    name: 'signal_anything',
    special_signal: true,
    icon: 'graphics/icons/signal/signal_anything.png',
    icon_size: 32,
    subgroup: 'virtual_signal_special',
    order: 'a[special]_[2anything]',
    ui_name: 'Anything',
    description: 'If any of the input signals meet the condition, it will output true.\\nIt is false when there are no inputs.'
  },
  signal_each: {
    type: 'virtual_signal',
    name: 'signal_each',
    special_signal: true,
    icon: 'graphics/icons/signal/signal_each.png',
    icon_size: 32,
    subgroup: 'virtual_signal_special',
    order: 'a[special]_[3each]',
    ui_name: 'Each',
    description: 'Evaluates the condition or performs the operation on all input signals.'
  },
  signal_red: {
    type: 'virtual_signal',
    name: 'signal_red',
    icon: 'graphics/icons/signal/signal_red.png',
    icon_size: 32,
    subgroup: 'virtual_signal_color',
    order: 'd[colors]_[1red]',
    ui_name: 'Red signal'
  },
  signal_green: {
    type: 'virtual_signal',
    name: 'signal_green',
    icon: 'graphics/icons/signal/signal_green.png',
    icon_size: 32,
    subgroup: 'virtual_signal_color',
    order: 'd[colors]_[2green]',
    ui_name: 'Green signal'
  },
  signal_blue: {
    type: 'virtual_signal',
    name: 'signal_blue',
    icon: 'graphics/icons/signal/signal_blue.png',
    icon_size: 32,
    subgroup: 'virtual_signal_color',
    order: 'd[colors]_[3blue]',
    ui_name: 'Blue signal'
  },
  signal_yellow: {
    type: 'virtual_signal',
    name: 'signal_yellow',
    icon: 'graphics/icons/signal/signal_yellow.png',
    icon_size: 32,
    subgroup: 'virtual_signal_color',
    order: 'd[colors]_[4yellow]',
    ui_name: 'Yellow signal'
  },
  signal_pink: {
    type: 'virtual_signal',
    name: 'signal_pink',
    icon: 'graphics/icons/signal/signal_pink.png',
    icon_size: 32,
    subgroup: 'virtual_signal_color',
    order: 'd[colors]_[5pink]',
    ui_name: 'Pink signal'
  },
  signal_cyan: {
    type: 'virtual_signal',
    name: 'signal_cyan',
    icon: 'graphics/icons/signal/signal_cyan.png',
    icon_size: 32,
    subgroup: 'virtual_signal_color',
    order: 'd[colors]_[6cyan]',
    ui_name: 'Cyan signal'
  },
  signal_white: {
    type: 'virtual_signal',
    name: 'signal_white',
    icon: 'graphics/icons/signal/signal_white.png',
    icon_size: 32,
    subgroup: 'virtual_signal_color',
    order: 'd[colors]_[7white]',
    ui_name: 'White signal'
  },
  signal_grey: {
    type: 'virtual_signal',
    name: 'signal_grey',
    icon: 'graphics/icons/signal/signal_grey.png',
    icon_size: 32,
    subgroup: 'virtual_signal_color',
    order: 'd[colors]_[8grey]',
    ui_name: 'Grey signal'
  },
  signal_black: {
    type: 'virtual_signal',
    name: 'signal_black',
    icon: 'graphics/icons/signal/signal_black.png',
    icon_size: 32,
    subgroup: 'virtual_signal_color',
    order: 'd[colors]_[9black]',
    ui_name: 'Black signal'
  },
  signal_1: {
    type: 'virtual_signal',
    name: 'signal_1',
    icon: 'graphics/icons/signal/signal_1.png',
    icon_size: 32,
    subgroup: 'virtual_signal_number',
    order: 'b[numbers]_[1]',
    ui_name: 'Signal 1'
  },
  signal_2: {
    type: 'virtual_signal',
    name: 'signal_2',
    icon: 'graphics/icons/signal/signal_2.png',
    icon_size: 32,
    subgroup: 'virtual_signal_number',
    order: 'b[numbers]_[2]',
    ui_name: 'Signal 2'
  },
  signal_3: {
    type: 'virtual_signal',
    name: 'signal_3',
    icon: 'graphics/icons/signal/signal_3.png',
    icon_size: 32,
    subgroup: 'virtual_signal_number',
    order: 'b[numbers]_[3]',
    ui_name: 'Signal 3'
  },
  signal_4: {
    type: 'virtual_signal',
    name: 'signal_4',
    icon: 'graphics/icons/signal/signal_4.png',
    icon_size: 32,
    subgroup: 'virtual_signal_number',
    order: 'b[numbers]_[4]',
    ui_name: 'Signal 4'
  },
  signal_5: {
    type: 'virtual_signal',
    name: 'signal_5',
    icon: 'graphics/icons/signal/signal_5.png',
    icon_size: 32,
    subgroup: 'virtual_signal_number',
    order: 'b[numbers]_[5]',
    ui_name: 'Signal 5'
  },
  signal_6: {
    type: 'virtual_signal',
    name: 'signal_6',
    icon: 'graphics/icons/signal/signal_6.png',
    icon_size: 32,
    subgroup: 'virtual_signal_number',
    order: 'b[numbers]_[6]',
    ui_name: 'Signal 6'
  },
  signal_7: {
    type: 'virtual_signal',
    name: 'signal_7',
    icon: 'graphics/icons/signal/signal_7.png',
    icon_size: 32,
    subgroup: 'virtual_signal_number',
    order: 'b[numbers]_[7]',
    ui_name: 'Signal 7'
  },
  signal_8: {
    type: 'virtual_signal',
    name: 'signal_8',
    icon: 'graphics/icons/signal/signal_8.png',
    icon_size: 32,
    subgroup: 'virtual_signal_number',
    order: 'b[numbers]_[8]',
    ui_name: 'Signal 8'
  },
  signal_9: {
    type: 'virtual_signal',
    name: 'signal_9',
    icon: 'graphics/icons/signal/signal_9.png',
    icon_size: 32,
    subgroup: 'virtual_signal_number',
    order: 'b[numbers]_[9]',
    ui_name: 'Signal 9'
  },
  signal_0: {
    type: 'virtual_signal',
    name: 'signal_0',
    icon: 'graphics/icons/signal/signal_0.png',
    icon_size: 32,
    subgroup: 'virtual_signal_number',
    order: 'b[numbers]_[0]',
    ui_name: 'Signal 0'
  },
  signal_A: {
    type: 'virtual_signal',
    name: 'signal_A',
    icon: 'graphics/icons/signal/signal_A.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[A]',
    ui_name: 'Signal A'
  },
  signal_B: {
    type: 'virtual_signal',
    name: 'signal_B',
    icon: 'graphics/icons/signal/signal_B.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[B]',
    ui_name: 'Signal B'
  },
  signal_C: {
    type: 'virtual_signal',
    name: 'signal_C',
    icon: 'graphics/icons/signal/signal_C.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[C]',
    ui_name: 'Signal C'
  },
  signal_D: {
    type: 'virtual_signal',
    name: 'signal_D',
    icon: 'graphics/icons/signal/signal_D.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[D]',
    ui_name: 'Signal D'
  },
  signal_E: {
    type: 'virtual_signal',
    name: 'signal_E',
    icon: 'graphics/icons/signal/signal_E.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[E]',
    ui_name: 'Signal E'
  },
  signal_F: {
    type: 'virtual_signal',
    name: 'signal_F',
    icon: 'graphics/icons/signal/signal_F.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[F]',
    ui_name: 'Signal F'
  },
  signal_G: {
    type: 'virtual_signal',
    name: 'signal_G',
    icon: 'graphics/icons/signal/signal_G.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[G]',
    ui_name: 'Signal G'
  },
  signal_H: {
    type: 'virtual_signal',
    name: 'signal_H',
    icon: 'graphics/icons/signal/signal_H.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[H]',
    ui_name: 'Signal H'
  },
  signal_I: {
    type: 'virtual_signal',
    name: 'signal_I',
    icon: 'graphics/icons/signal/signal_I.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[I]',
    ui_name: 'Signal I'
  },
  signal_J: {
    type: 'virtual_signal',
    name: 'signal_J',
    icon: 'graphics/icons/signal/signal_J.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[J]',
    ui_name: 'Signal J'
  },
  signal_K: {
    type: 'virtual_signal',
    name: 'signal_K',
    icon: 'graphics/icons/signal/signal_K.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[K]',
    ui_name: 'Signal K'
  },
  signal_L: {
    type: 'virtual_signal',
    name: 'signal_L',
    icon: 'graphics/icons/signal/signal_L.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[L]',
    ui_name: 'Signal L'
  },
  signal_M: {
    type: 'virtual_signal',
    name: 'signal_M',
    icon: 'graphics/icons/signal/signal_M.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[M]',
    ui_name: 'Signal M'
  },
  signal_N: {
    type: 'virtual_signal',
    name: 'signal_N',
    icon: 'graphics/icons/signal/signal_N.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[N]',
    ui_name: 'Signal N'
  },
  signal_O: {
    type: 'virtual_signal',
    name: 'signal_O',
    icon: 'graphics/icons/signal/signal_O.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[O]',
    ui_name: 'Signal O'
  },
  signal_P: {
    type: 'virtual_signal',
    name: 'signal_P',
    icon: 'graphics/icons/signal/signal_P.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[P]',
    ui_name: 'Signal P'
  },
  signal_Q: {
    type: 'virtual_signal',
    name: 'signal_Q',
    icon: 'graphics/icons/signal/signal_Q.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[Q]',
    ui_name: 'Signal Q'
  },
  signal_R: {
    type: 'virtual_signal',
    name: 'signal_R',
    icon: 'graphics/icons/signal/signal_R.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[R]',
    ui_name: 'Signal R'
  },
  signal_S: {
    type: 'virtual_signal',
    name: 'signal_S',
    icon: 'graphics/icons/signal/signal_S.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[S]',
    ui_name: 'Signal S'
  },
  signal_T: {
    type: 'virtual_signal',
    name: 'signal_T',
    icon: 'graphics/icons/signal/signal_T.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[T]',
    ui_name: 'Signal T'
  },
  signal_U: {
    type: 'virtual_signal',
    name: 'signal_U',
    icon: 'graphics/icons/signal/signal_U.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[U]',
    ui_name: 'Signal U'
  },
  signal_V: {
    type: 'virtual_signal',
    name: 'signal_V',
    icon: 'graphics/icons/signal/signal_V.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[V]',
    ui_name: 'Signal V'
  },
  signal_W: {
    type: 'virtual_signal',
    name: 'signal_W',
    icon: 'graphics/icons/signal/signal_W.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[W]',
    ui_name: 'Signal W'
  },
  signal_X: {
    type: 'virtual_signal',
    name: 'signal_X',
    icon: 'graphics/icons/signal/signal_X.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[X]',
    ui_name: 'Signal X'
  },
  signal_Y: {
    type: 'virtual_signal',
    name: 'signal_Y',
    icon: 'graphics/icons/signal/signal_Y.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[Y]',
    ui_name: 'Signal Y'
  },
  signal_Z: {
    type: 'virtual_signal',
    name: 'signal_Z',
    icon: 'graphics/icons/signal/signal_Z.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[Z]',
    ui_name: 'Signal Z'
  },
  locomotive: {
    type: 'item_with_entity_data',
    name: 'locomotive',
    icon: 'graphics/icons/diesel-locomotive.png',
    icon_size: 32,
    subgroup: 'transport',
    order: 'a[train_system]_f[diesel_locomotive]',
    place_result: 'locomotive',
    stack_size: 5,
    ui_name: 'Locomotive',
    description: 'Runs automated schedules and pulls cargo wagons. Enter the train with __CONTROL__toggle-driving__, and open the train menu with __CONTROL__build__.'
  },
  cargo_wagon: {
    type: 'item_with_entity_data',
    name: 'cargo_wagon',
    icon: 'graphics/icons/cargo-wagon.png',
    icon_size: 32,
    subgroup: 'transport',
    order: 'a[train_system]_g[cargo_wagon]',
    place_result: 'cargo_wagon',
    stack_size: 5,
    ui_name: 'Cargo wagon'
  },
  fluid_wagon: {
    type: 'item_with_entity_data',
    name: 'fluid_wagon',
    icon: 'graphics/icons/fluid-wagon.png',
    icon_size: 32,
    subgroup: 'transport',
    order: 'a[train_system]_h[fluid_wagon]',
    place_result: 'fluid_wagon',
    stack_size: 5,
    ui_name: 'Fluid wagon'
  },
  artillery_wagon: {
    type: 'item_with_entity_data',
    name: 'artillery_wagon',
    icon: 'graphics/icons/artillery-wagon.png',
    icon_size: 32,
    subgroup: 'transport',
    order: 'a[train_system]_i[artillery_wagon]',
    place_result: 'artillery_wagon',
    stack_size: 5,
    ui_name: 'Artillery wagon'
  },
  car: {
    type: 'item_with_entity_data',
    name: 'car',
    icon: 'graphics/icons/car.png',
    icon_size: 32,
    subgroup: 'transport',
    order: 'b[personal_transport]_a[car]',
    place_result: 'car',
    stack_size: 1,
    ui_name: 'Car',
    description: 'Enter the car using __CONTROL__toggle-driving__.'
  },
  tank: {
    type: 'item_with_entity_data',
    name: 'tank',
    icon: 'graphics/icons/tank.png',
    icon_size: 32,
    subgroup: 'transport',
    order: 'b[personal_transport]_b[tank]',
    place_result: 'tank',
    stack_size: 1,
    ui_name: 'Tank',
    description: 'Enter the tank using __CONTROL__toggle-driving__.'
  },
  rail: {
    type: 'rail_planner',
    name: 'rail',
    icon: 'graphics/icons/rail.png',
    icon_size: 32,
    subgroup: 'transport',
    order: 'a[train_system]_a[rail]',
    place_result: 'straight_rail',
    stack_size: 100,
    ui_name: 'Rail',
    description: 'Use to build straight rails manually or through the rail planner.\\nThe rail planner can build short paths directly using __CONTROL__build__ or long ghost paths using __CONTROL__build-ghost__.'
  },
  science_pack_1: {
    type: 'tool',
    name: 'science_pack_1',
    icon: 'graphics/icons/science-pack-1.png',
    icon_size: 32,
    subgroup: 'science_pack',
    order: 'a[science_pack_1]',
    stack_size: 200,
    durability: 1,
    ui_name: 'Science pack 1'
  },
  science_pack_2: {
    type: 'tool',
    name: 'science_pack_2',
    icon: 'graphics/icons/science-pack-2.png',
    icon_size: 32,
    subgroup: 'science_pack',
    order: 'b[science_pack_2]',
    stack_size: 200,
    durability: 1,
    ui_name: 'Science pack 2'
  },
  science_pack_3: {
    type: 'tool',
    name: 'science_pack_3',
    icon: 'graphics/icons/science-pack-3.png',
    icon_size: 32,
    subgroup: 'science_pack',
    order: 'c[science_pack_3]',
    stack_size: 200,
    durability: 1,
    ui_name: 'Science pack 3'
  },
  military_science_pack: {
    type: 'tool',
    name: 'military_science_pack',
    icon: 'graphics/icons/military-science-pack.png',
    icon_size: 32,
    subgroup: 'science_pack',
    order: 'd[military_science_pack]',
    stack_size: 200,
    durability: 1,
    ui_name: 'Military science pack'
  },
  production_science_pack: {
    type: 'tool',
    name: 'production_science_pack',
    icon: 'graphics/icons/production-science-pack.png',
    icon_size: 32,
    subgroup: 'science_pack',
    order: 'e[production_science_pack]',
    stack_size: 200,
    durability: 1,
    ui_name: 'Production science pack'
  },
  high_tech_science_pack: {
    type: 'tool',
    name: 'high_tech_science_pack',
    icon: 'graphics/icons/high-tech-science-pack.png',
    icon_size: 32,
    subgroup: 'science_pack',
    order: 'f[high_tech_science_pack]',
    stack_size: 200,
    durability: 1,
    ui_name: 'High tech science pack'
  },
  space_science_pack: {
    type: 'tool',
    name: 'space_science_pack',
    icon: 'graphics/icons/space-science-pack.png',
    icon_size: 32,
    subgroup: 'science_pack',
    order: 'g[space_science_pack]',
    stack_size: 2000,
    durability: 1,
    ui_name: 'Space science pack',
    description: 'Used by labs for research. Obtained by launching a rocket with a satellite.'
  },
  blueprint: {
    type: 'blueprint',
    name: 'blueprint',
    icon: 'graphics/icons/blueprint.png',
    icon_size: 32,
    subgroup: 'tool',
    order: 'c[automated_construction]_a[blueprint]',
    stack_size: 1,
    stackable: false,
    selection_color: {
      r: 0,
      g: 1,
      b: 0
    },
    alt_selection_color: {
      r: 0,
      g: 1,
      b: 0
    },
    selection_mode: [
      'blueprint'
    ],
    alt_selection_mode: [
      'blueprint'
    ],
    selection_cursor_box_type: 'copy',
    alt_selection_cursor_box_type: 'copy',
    ui_name: 'Blueprint',
    description: 'Save designs for automated construction.'
  },
  deconstruction_planner: {
    type: 'deconstruction_item',
    name: 'deconstruction_planner',
    icon: 'graphics/icons/deconstruction-planner.png',
    icon_size: 32,
    subgroup: 'tool',
    order: 'c[automated_construction]_b[deconstruction_planner]',
    stack_size: 1,
    selection_color: {
      r: 1,
      g: 0,
      b: 0
    },
    alt_selection_color: {
      r: 0,
      g: 0,
      b: 1
    },
    selection_mode: [
      'deconstruct'
    ],
    alt_selection_mode: [
      'cancel_deconstruct'
    ],
    selection_cursor_box_type: 'not_allowed',
    alt_selection_cursor_box_type: 'not_allowed',
    ui_name: 'Deconstruction planner',
    description: 'Marks items for deconstruction by construction robots.'
  },
  blueprint_book: {
    type: 'blueprint_book',
    name: 'blueprint_book',
    icon: 'graphics/icons/blueprint-book.png',
    icon_size: 32,
    subgroup: 'tool',
    order: 'c[automated_construction]_c[blueprint_book]',
    stack_size: 1,
    inventory_size: 1000,
    ui_name: 'Blueprint book'
  },
  speed_module: {
    type: 'module',
    name: 'speed_module',
    icon: 'graphics/icons/speed-module.png',
    icon_size: 32,
    subgroup: 'module',
    tier: 1,
    order: 'a[speed]_a[speed_module_1]',
    stack_size: 50,
    default_request_amount: 10,
    effect: {
      speed: {
        bonus: 0.2
      },
      consumption: {
        bonus: 0.5
      }
    },
    ui_name: 'Speed module',
    description: 'Increases machine speed at a cost of increased energy consumption.'
  },
  speed_module_2: {
    type: 'module',
    name: 'speed_module_2',
    icon: 'graphics/icons/speed-module-2.png',
    icon_size: 32,
    subgroup: 'module',
    tier: 2,
    order: 'a[speed]_b[speed_module_2]',
    stack_size: 50,
    default_request_amount: 10,
    effect: {
      speed: {
        bonus: 0.3
      },
      consumption: {
        bonus: 0.6
      }
    },
    ui_name: 'Speed module 2'
  },
  speed_module_3: {
    type: 'module',
    name: 'speed_module_3',
    icon: 'graphics/icons/speed-module-3.png',
    icon_size: 32,
    subgroup: 'module',
    tier: 3,
    order: 'a[speed]_c[speed_module_3]',
    stack_size: 50,
    default_request_amount: 10,
    effect: {
      speed: {
        bonus: 0.5
      },
      consumption: {
        bonus: 0.7
      }
    },
    ui_name: 'Speed module 3'
  },
  effectivity_module: {
    type: 'module',
    name: 'effectivity_module',
    icon: 'graphics/icons/effectivity-module.png',
    icon_size: 32,
    subgroup: 'module',
    tier: 1,
    order: 'c[effectivity]_a[effectivity_module_1]',
    stack_size: 50,
    default_request_amount: 10,
    effect: {
      consumption: {
        bonus: -0.3
      }
    },
    ui_name: 'Efficiency module',
    description: 'Decreases machine energy consumption. Minimum energy consumption is 20%.'
  },
  effectivity_module_2: {
    type: 'module',
    name: 'effectivity_module_2',
    icon: 'graphics/icons/effectivity-module-2.png',
    icon_size: 32,
    subgroup: 'module',
    tier: 2,
    order: 'c[effectivity]_b[effectivity_module_2]',
    stack_size: 50,
    default_request_amount: 10,
    effect: {
      consumption: {
        bonus: -0.4
      }
    },
    ui_name: 'Efficiency module 2'
  },
  effectivity_module_3: {
    type: 'module',
    name: 'effectivity_module_3',
    icon: 'graphics/icons/effectivity-module-3.png',
    icon_size: 32,
    subgroup: 'module',
    tier: 3,
    order: 'c[effectivity]_c[effectivity_module_3]',
    stack_size: 50,
    default_request_amount: 10,
    effect: {
      consumption: {
        bonus: -0.5
      }
    },
    ui_name: 'Efficiency module 3'
  },
  productivity_module: {
    type: 'module',
    name: 'productivity_module',
    icon: 'graphics/icons/productivity-module.png',
    icon_size: 32,
    subgroup: 'module',
    tier: 1,
    order: 'c[productivity]_a[productivity_module_1]',
    stack_size: 50,
    default_request_amount: 10,
    effect: {
      productivity: {
        bonus: 0.04
      },
      consumption: {
        bonus: 0.4
      },
      pollution: {
        bonus: 0.05
      },
      speed: {
        bonus: -0.15
      }
    },
    limitation: [
      'sulfuric_acid',
      'basic_oil_processing',
      'advanced_oil_processing',
      'coal_liquefaction',
      'heavy_oil_cracking',
      'light_oil_cracking',
      'solid_fuel_from_light_oil',
      'solid_fuel_from_heavy_oil',
      'solid_fuel_from_petroleum_gas',
      'lubricant',
      'wood',
      'iron_plate',
      'copper_plate',
      'steel_plate',
      'stone_brick',
      'sulfur',
      'plastic_bar',
      'empty_barrel',
      'uranium_processing',
      'copper_cable',
      'iron_stick',
      'iron_gear_wheel',
      'electronic_circuit',
      'advanced_circuit',
      'processing_unit',
      'engine_unit',
      'electric_engine_unit',
      'uranium_fuel_cell',
      'explosives',
      'battery',
      'flying_robot_frame',
      'low_density_structure',
      'rocket_fuel',
      'rocket_control_unit',
      'rocket_part',
      'science_pack_1',
      'science_pack_2',
      'science_pack_3',
      'military_science_pack',
      'production_science_pack',
      'high_tech_science_pack'
    ],
    ui_name: 'Productivity module',
    description: 'Machine will create extra products at a cost of increased energy consumption and reduced speed.'
  },
  productivity_module_2: {
    type: 'module',
    name: 'productivity_module_2',
    icon: 'graphics/icons/productivity-module-2.png',
    icon_size: 32,
    subgroup: 'module',
    tier: 2,
    order: 'c[productivity]_b[productivity_module_2]',
    stack_size: 50,
    default_request_amount: 10,
    effect: {
      productivity: {
        bonus: 0.06
      },
      consumption: {
        bonus: 0.6
      },
      pollution: {
        bonus: 0.075
      },
      speed: {
        bonus: -0.15
      }
    },
    limitation: [
      'sulfuric_acid',
      'basic_oil_processing',
      'advanced_oil_processing',
      'coal_liquefaction',
      'heavy_oil_cracking',
      'light_oil_cracking',
      'solid_fuel_from_light_oil',
      'solid_fuel_from_heavy_oil',
      'solid_fuel_from_petroleum_gas',
      'lubricant',
      'wood',
      'iron_plate',
      'copper_plate',
      'steel_plate',
      'stone_brick',
      'sulfur',
      'plastic_bar',
      'empty_barrel',
      'uranium_processing',
      'copper_cable',
      'iron_stick',
      'iron_gear_wheel',
      'electronic_circuit',
      'advanced_circuit',
      'processing_unit',
      'engine_unit',
      'electric_engine_unit',
      'uranium_fuel_cell',
      'explosives',
      'battery',
      'flying_robot_frame',
      'low_density_structure',
      'rocket_fuel',
      'rocket_control_unit',
      'rocket_part',
      'science_pack_1',
      'science_pack_2',
      'science_pack_3',
      'military_science_pack',
      'production_science_pack',
      'high_tech_science_pack'
    ],
    ui_name: 'Productivity module 2'
  },
  productivity_module_3: {
    type: 'module',
    name: 'productivity_module_3',
    icon: 'graphics/icons/productivity-module-3.png',
    icon_size: 32,
    subgroup: 'module',
    tier: 3,
    order: 'c[productivity]_c[productivity_module_3]',
    stack_size: 50,
    default_request_amount: 10,
    effect: {
      productivity: {
        bonus: 0.1
      },
      consumption: {
        bonus: 0.8
      },
      pollution: {
        bonus: 0.1
      },
      speed: {
        bonus: -0.15
      }
    },
    limitation: [
      'sulfuric_acid',
      'basic_oil_processing',
      'advanced_oil_processing',
      'coal_liquefaction',
      'heavy_oil_cracking',
      'light_oil_cracking',
      'solid_fuel_from_light_oil',
      'solid_fuel_from_heavy_oil',
      'solid_fuel_from_petroleum_gas',
      'lubricant',
      'wood',
      'iron_plate',
      'copper_plate',
      'steel_plate',
      'stone_brick',
      'sulfur',
      'plastic_bar',
      'empty_barrel',
      'uranium_processing',
      'copper_cable',
      'iron_stick',
      'iron_gear_wheel',
      'electronic_circuit',
      'advanced_circuit',
      'processing_unit',
      'engine_unit',
      'electric_engine_unit',
      'uranium_fuel_cell',
      'explosives',
      'battery',
      'flying_robot_frame',
      'low_density_structure',
      'rocket_fuel',
      'rocket_control_unit',
      'rocket_part',
      'science_pack_1',
      'science_pack_2',
      'science_pack_3',
      'military_science_pack',
      'production_science_pack',
      'high_tech_science_pack'
    ],
    ui_name: 'Productivity module 3'
  },
  water: {
    type: 'fluid',
    name: 'water',
    default_temperature: 15,
    max_temperature: 100,
    heat_capacity: '0.2KJ',
    base_color: {
      r: 0,
      g: 0.34,
      b: 0.6
    },
    flow_color: {
      r: 0.7,
      g: 0.7,
      b: 0.7
    },
    icon: 'graphics/icons/fluid/water.png',
    icon_size: 32,
    order: 'a[fluid]_a[water]',
    pressure_to_speed_ratio: 0.4,
    flow_to_energy_ratio: 0.59,
    subgroup: 'fluid',
    ui_name: 'Water'
  },
  steam: {
    type: 'fluid',
    name: 'steam',
    default_temperature: 15,
    max_temperature: 1000,
    heat_capacity: '0.2KJ',
    icon: 'graphics/icons/fluid/steam.png',
    icon_size: 32,
    base_color: {
      r: 0.5,
      g: 0.5,
      b: 0.5
    },
    flow_color: {
      r: 1,
      g: 1,
      b: 1
    },
    order: 'a[fluid]_b[steam]',
    pressure_to_speed_ratio: 0.4,
    flow_to_energy_ratio: 0.59,
    gas_temperature: 15,
    subgroup: 'fluid',
    ui_name: 'Steam'
  },
  crude_oil: {
    type: 'fluid',
    name: 'crude_oil',
    default_temperature: 25,
    heat_capacity: '0.1KJ',
    base_color: {
      r: 0,
      g: 0,
      b: 0
    },
    flow_color: {
      r: 0.5,
      g: 0.5,
      b: 0.5
    },
    max_temperature: 100,
    icon: 'graphics/icons/fluid/crude-oil.png',
    icon_size: 32,
    pressure_to_speed_ratio: 0.4,
    flow_to_energy_ratio: 0.59,
    order: 'a[fluid]_b[crude_oil]',
    subgroup: 'fluid',
    ui_name: 'Crude oil'
  },
  heavy_oil: {
    type: 'fluid',
    name: 'heavy_oil',
    default_temperature: 25,
    heat_capacity: '0.1KJ',
    base_color: {
      r: 0.5,
      g: 0.04,
      b: 0
    },
    flow_color: {
      r: 0.85,
      g: 0.6,
      b: 0.3
    },
    max_temperature: 100,
    icon: 'graphics/icons/fluid/heavy-oil.png',
    icon_size: 32,
    pressure_to_speed_ratio: 0.4,
    flow_to_energy_ratio: 0.59,
    order: 'a[fluid]_c[heavy_oil]',
    subgroup: 'fluid',
    ui_name: 'Heavy oil'
  },
  light_oil: {
    type: 'fluid',
    name: 'light_oil',
    default_temperature: 25,
    heat_capacity: '0.1KJ',
    base_color: {
      r: 0.57,
      g: 0.33,
      b: 0
    },
    flow_color: {
      r: 1,
      g: 0.73,
      b: 0.07
    },
    max_temperature: 100,
    icon: 'graphics/icons/fluid/light-oil.png',
    icon_size: 32,
    pressure_to_speed_ratio: 0.4,
    flow_to_energy_ratio: 0.59,
    order: 'a[fluid]_d[light_oil]',
    subgroup: 'fluid',
    ui_name: 'Light oil'
  },
  petroleum_gas: {
    type: 'fluid',
    name: 'petroleum_gas',
    default_temperature: 25,
    heat_capacity: '0.1KJ',
    base_color: {
      r: 0.3,
      g: 0.1,
      b: 0.3
    },
    flow_color: {
      r: 0.8,
      g: 0.8,
      b: 0.8
    },
    max_temperature: 100,
    icon: 'graphics/icons/fluid/petroleum-gas.png',
    icon_size: 32,
    pressure_to_speed_ratio: 0.4,
    flow_to_energy_ratio: 0.59,
    order: 'a[fluid]_e[petroleum_gas]',
    subgroup: 'fluid',
    ui_name: 'Petroleum gas'
  },
  lubricant: {
    type: 'fluid',
    name: 'lubricant',
    default_temperature: 25,
    heat_capacity: '0.1KJ',
    base_color: {
      r: 0.15,
      g: 0.32,
      b: 0.03
    },
    flow_color: {
      r: 0.43,
      g: 0.75,
      b: 0.31
    },
    max_temperature: 100,
    icon: 'graphics/icons/fluid/lubricant.png',
    icon_size: 32,
    pressure_to_speed_ratio: 0.4,
    flow_to_energy_ratio: 0.59,
    order: 'e[lubricant]',
    subgroup: 'fluid',
    ui_name: 'Lubricant'
  },
  sulfuric_acid: {
    type: 'fluid',
    name: 'sulfuric_acid',
    default_temperature: 25,
    heat_capacity: '0.1KJ',
    base_color: {
      r: 0.75,
      g: 0.65,
      b: 0.1
    },
    flow_color: {
      r: 0.7,
      g: 1,
      b: 0.1
    },
    max_temperature: 100,
    icon: 'graphics/icons/fluid/sulfuric-acid.png',
    icon_size: 32,
    pressure_to_speed_ratio: 0.4,
    flow_to_energy_ratio: 0.59,
    order: 'a[fluid]_f[sulfuric_acid]',
    subgroup: 'fluid',
    ui_name: 'Sulfuric acid'
  }
}