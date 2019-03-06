module.exports = {
  copper_plate: {
    name: 'copper_plate',
    category: 'smelting',
    time: 3.2,
    ingredients: [
      {
        name: 'copper_ore',
        amount: 1
      }
    ],
    results: [
      {
        name: 'copper_plate',
        amount: 1
      }
    ],
    ui_name: 'Copper plate'
  },
  iron_plate: {
    name: 'iron_plate',
    category: 'smelting',
    time: 3.2,
    ingredients: [
      {
        name: 'iron_ore',
        amount: 1
      }
    ],
    results: [
      {
        name: 'iron_plate',
        amount: 1
      }
    ],
    ui_name: 'Iron plate'
  },
  stone_brick: {
    name: 'stone_brick',
    category: 'smelting',
    time: 3.2,
    ingredients: [
      {
        name: 'stone',
        amount: 2
      }
    ],
    results: [
      {
        name: 'stone_brick',
        amount: 1
      }
    ],
    ui_name: 'Stone brick'
  },
  wooden_chest: {
    name: 'wooden_chest',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'wood',
        amount: 2
      }
    ],
    results: [
      {
        name: 'wooden_chest',
        amount: 1
      }
    ],
    ui_name: 'Wooden chest'
  },
  iron_stick: {
    name: 'iron_stick',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'iron_plate',
        amount: 1
      }
    ],
    results: [
      {
        name: 'iron_stick',
        amount: 2
      }
    ],
    ui_name: 'Iron stick'
  },
  stone_furnace: {
    name: 'stone_furnace',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'stone',
        amount: 5
      }
    ],
    results: [
      {
        name: 'stone_furnace',
        amount: 1
      }
    ],
    ui_name: 'Stone furnace'
  },
  boiler: {
    name: 'boiler',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'stone_furnace',
        amount: 1
      },
      {
        name: 'pipe',
        amount: 4
      }
    ],
    results: [
      {
        name: 'boiler',
        amount: 1
      }
    ],
    ui_name: 'Boiler',
    description: 'Burns fuel to heat fluids.'
  },
  steam_engine: {
    name: 'steam_engine',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'iron_gear_wheel',
        amount: 8
      },
      {
        name: 'pipe',
        amount: 5
      },
      {
        name: 'iron_plate',
        amount: 10
      }
    ],
    results: [
      {
        name: 'steam_engine',
        amount: 1
      }
    ],
    ui_name: 'Steam engine',
    description: 'Consumes steam to create electric energy.'
  },
  iron_gear_wheel: {
    name: 'iron_gear_wheel',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'iron_plate',
        amount: 2
      }
    ],
    results: [
      {
        name: 'iron_gear_wheel',
        amount: 1
      }
    ],
    ui_name: 'Iron gear wheel'
  },
  electronic_circuit: {
    name: 'electronic_circuit',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'iron_plate',
        amount: 1
      },
      {
        name: 'copper_cable',
        amount: 3
      }
    ],
    results: [
      {
        name: 'electronic_circuit',
        amount: 1
      }
    ],
    ui_name: 'Electronic circuit'
  },
  transport_belt: {
    name: 'transport_belt',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'iron_plate',
        amount: 1
      },
      {
        name: 'iron_gear_wheel',
        amount: 1
      }
    ],
    results: [
      {
        name: 'transport_belt',
        amount: 2
      }
    ],
    ui_name: 'Transport belt'
  },
  electric_mining_drill: {
    name: 'electric_mining_drill',
    category: 'crafting',
    time: 2,
    ingredients: [
      {
        name: 'electronic_circuit',
        amount: 3
      },
      {
        name: 'iron_gear_wheel',
        amount: 5
      },
      {
        name: 'iron_plate',
        amount: 10
      }
    ],
    results: [
      {
        name: 'electric_mining_drill',
        amount: 1
      }
    ],
    ui_name: 'Electric mining drill'
  },
  burner_mining_drill: {
    name: 'burner_mining_drill',
    category: 'crafting',
    time: 2,
    ingredients: [
      {
        name: 'iron_gear_wheel',
        amount: 3
      },
      {
        name: 'stone_furnace',
        amount: 1
      },
      {
        name: 'iron_plate',
        amount: 3
      }
    ],
    results: [
      {
        name: 'burner_mining_drill',
        amount: 1
      }
    ],
    ui_name: 'Burner mining drill'
  },
  inserter: {
    name: 'inserter',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'electronic_circuit',
        amount: 1
      },
      {
        name: 'iron_gear_wheel',
        amount: 1
      },
      {
        name: 'iron_plate',
        amount: 1
      }
    ],
    results: [
      {
        name: 'inserter',
        amount: 1
      }
    ],
    ui_name: 'Inserter'
  },
  burner_inserter: {
    name: 'burner_inserter',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'iron_plate',
        amount: 1
      },
      {
        name: 'iron_gear_wheel',
        amount: 1
      }
    ],
    results: [
      {
        name: 'burner_inserter',
        amount: 1
      }
    ],
    ui_name: 'Burner inserter',
    description: 'Burns fuel for energy.'
  },
  pipe: {
    name: 'pipe',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'iron_plate',
        amount: 1
      }
    ],
    results: [
      {
        name: 'pipe',
        amount: 1
      }
    ],
    ui_name: 'Pipe'
  },
  offshore_pump: {
    name: 'offshore_pump',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'electronic_circuit',
        amount: 2
      },
      {
        name: 'pipe',
        amount: 1
      },
      {
        name: 'iron_gear_wheel',
        amount: 1
      }
    ],
    results: [
      {
        name: 'offshore_pump',
        amount: 1
      }
    ],
    ui_name: 'Offshore pump',
    description: 'Pumps fluid from a body of water.'
  },
  copper_cable: {
    name: 'copper_cable',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'copper_plate',
        amount: 1
      }
    ],
    results: [
      {
        name: 'copper_cable',
        amount: 2
      }
    ],
    ui_name: 'Copper cable',
    description: 'Can be used to connect and disconnect electric poles and power switches with __CONTROL__build__.'
  },
  small_electric_pole: {
    name: 'small_electric_pole',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'wood',
        amount: 1
      },
      {
        name: 'copper_cable',
        amount: 2
      }
    ],
    results: [
      {
        name: 'small_electric_pole',
        amount: 2
      }
    ],
    ui_name: 'Small electric pole'
  },
  pistol: {
    name: 'pistol',
    category: 'crafting',
    time: 5,
    ingredients: [
      {
        name: 'copper_plate',
        amount: 5
      },
      {
        name: 'iron_plate',
        amount: 5
      }
    ],
    results: [
      {
        name: 'pistol',
        amount: 1
      }
    ],
    ui_name: 'Pistol'
  },
  submachine_gun: {
    name: 'submachine_gun',
    category: 'crafting',
    time: 10,
    ingredients: [
      {
        name: 'iron_gear_wheel',
        amount: 10
      },
      {
        name: 'copper_plate',
        amount: 5
      },
      {
        name: 'iron_plate',
        amount: 10
      }
    ],
    results: [
      {
        name: 'submachine_gun',
        amount: 1
      }
    ],
    ui_name: 'Submachine gun'
  },
  firearm_magazine: {
    name: 'firearm_magazine',
    category: 'crafting',
    time: 1,
    ingredients: [
      {
        name: 'iron_plate',
        amount: 4
      }
    ],
    results: [
      {
        name: 'firearm_magazine',
        amount: 1
      }
    ],
    ui_name: 'Firearm magazine'
  },
  light_armor: {
    name: 'light_armor',
    category: 'crafting',
    time: 3,
    ingredients: [
      {
        name: 'iron_plate',
        amount: 40
      }
    ],
    results: [
      {
        name: 'light_armor',
        amount: 1
      }
    ],
    ui_name: 'Light armor'
  },
  radar: {
    name: 'radar',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'electronic_circuit',
        amount: 5
      },
      {
        name: 'iron_gear_wheel',
        amount: 5
      },
      {
        name: 'iron_plate',
        amount: 10
      }
    ],
    results: [
      {
        name: 'radar',
        amount: 1
      }
    ],
    ui_name: 'Radar',
    description: 'Scans the nearby sectors, and actively reveals an area around it.'
  },
  small_lamp: {
    name: 'small_lamp',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'electronic_circuit',
        amount: 1
      },
      {
        name: 'copper_cable',
        amount: 3
      },
      {
        name: 'iron_plate',
        amount: 1
      }
    ],
    results: [
      {
        name: 'small_lamp',
        amount: 1
      }
    ],
    ui_name: 'Lamp'
  },
  pipe_to_ground: {
    name: 'pipe_to_ground',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'pipe',
        amount: 10
      },
      {
        name: 'iron_plate',
        amount: 5
      }
    ],
    results: [
      {
        name: 'pipe_to_ground',
        amount: 2
      }
    ],
    ui_name: 'Pipe to ground'
  },
  assembling_machine_1: {
    name: 'assembling_machine_1',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'electronic_circuit',
        amount: 3
      },
      {
        name: 'iron_gear_wheel',
        amount: 5
      },
      {
        name: 'iron_plate',
        amount: 9
      }
    ],
    results: [
      {
        name: 'assembling_machine_1',
        amount: 1
      }
    ],
    ui_name: 'Assembling machine 1'
  },
  repair_pack: {
    name: 'repair_pack',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'electronic_circuit',
        amount: 2
      },
      {
        name: 'iron_gear_wheel',
        amount: 2
      }
    ],
    results: [
      {
        name: 'repair_pack',
        amount: 1
      }
    ],
    ui_name: 'Repair pack',
    description: 'Used to repair friendly entities by using __CONTROL__build__ with it in hand.'
  },
  gun_turret: {
    name: 'gun_turret',
    category: 'crafting',
    time: 8,
    ingredients: [
      {
        name: 'iron_gear_wheel',
        amount: 10
      },
      {
        name: 'copper_plate',
        amount: 10
      },
      {
        name: 'iron_plate',
        amount: 20
      }
    ],
    results: [
      {
        name: 'gun_turret',
        amount: 1
      }
    ],
    ui_name: 'Gun turret'
  },
  piercing_rounds_magazine: {
    name: 'piercing_rounds_magazine',
    category: 'crafting',
    time: 3,
    ingredients: [
      {
        name: 'firearm_magazine',
        amount: 1
      },
      {
        name: 'steel_plate',
        amount: 1
      },
      {
        name: 'copper_plate',
        amount: 5
      }
    ],
    results: [
      {
        name: 'piercing_rounds_magazine',
        amount: 1
      }
    ],
    ui_name: 'Piercing rounds magazine'
  },
  uranium_rounds_magazine: {
    name: 'uranium_rounds_magazine',
    category: 'crafting',
    time: 10,
    ingredients: [
      {
        name: 'piercing_rounds_magazine',
        amount: 1
      },
      {
        name: 'uranium_238',
        amount: 1
      }
    ],
    results: [
      {
        name: 'uranium_rounds_magazine',
        amount: 1
      }
    ],
    ui_name: 'Uranium rounds magazine'
  },
  rocket: {
    name: 'rocket',
    category: 'crafting',
    time: 8,
    ingredients: [
      {
        name: 'electronic_circuit',
        amount: 1
      },
      {
        name: 'explosives',
        amount: 1
      },
      {
        name: 'iron_plate',
        amount: 2
      }
    ],
    results: [
      {
        name: 'rocket',
        amount: 1
      }
    ],
    ui_name: 'Rocket'
  },
  explosive_rocket: {
    name: 'explosive_rocket',
    category: 'crafting',
    time: 8,
    ingredients: [
      {
        name: 'rocket',
        amount: 1
      },
      {
        name: 'explosives',
        amount: 2
      }
    ],
    results: [
      {
        name: 'explosive_rocket',
        amount: 1
      }
    ],
    ui_name: 'Explosive rocket'
  },
  atomic_bomb: {
    name: 'atomic_bomb',
    category: 'crafting',
    time: 50,
    ingredients: [
      {
        name: 'rocket_control_unit',
        amount: 10
      },
      {
        name: 'explosives',
        amount: 10
      },
      {
        name: 'uranium_235',
        amount: 30
      }
    ],
    results: [
      {
        name: 'atomic_bomb',
        amount: 1
      }
    ],
    ui_name: 'Atomic bomb',
    description: 'Devastating form of rockets used to eradicate anything in huge areas at a time.'
  },
  shotgun_shell: {
    name: 'shotgun_shell',
    category: 'crafting',
    time: 3,
    ingredients: [
      {
        name: 'copper_plate',
        amount: 2
      },
      {
        name: 'iron_plate',
        amount: 2
      }
    ],
    results: [
      {
        name: 'shotgun_shell',
        amount: 1
      }
    ],
    ui_name: 'Shotgun shells'
  },
  piercing_shotgun_shell: {
    name: 'piercing_shotgun_shell',
    category: 'crafting',
    time: 8,
    ingredients: [
      {
        name: 'shotgun_shell',
        amount: 2
      },
      {
        name: 'copper_plate',
        amount: 5
      },
      {
        name: 'steel_plate',
        amount: 2
      }
    ],
    results: [
      {
        name: 'piercing_shotgun_shell',
        amount: 1
      }
    ],
    ui_name: 'Piercing shotgun shells'
  },
  railgun_dart: {
    name: 'railgun_dart',
    category: 'crafting',
    time: 8,
    ingredients: [
      {
        name: 'steel_plate',
        amount: 5
      },
      {
        name: 'electronic_circuit',
        amount: 5
      }
    ],
    results: [
      {
        name: 'railgun_dart',
        amount: 1
      }
    ],
    ui_name: 'Railgun darts'
  },
  cannon_shell: {
    name: 'cannon_shell',
    category: 'crafting',
    time: 8,
    ingredients: [
      {
        name: 'steel_plate',
        amount: 2
      },
      {
        name: 'plastic_bar',
        amount: 2
      },
      {
        name: 'explosives',
        amount: 1
      }
    ],
    results: [
      {
        name: 'cannon_shell',
        amount: 1
      }
    ],
    ui_name: 'Cannon shell'
  },
  explosive_cannon_shell: {
    name: 'explosive_cannon_shell',
    category: 'crafting',
    time: 8,
    ingredients: [
      {
        name: 'steel_plate',
        amount: 2
      },
      {
        name: 'plastic_bar',
        amount: 2
      },
      {
        name: 'explosives',
        amount: 2
      }
    ],
    results: [
      {
        name: 'explosive_cannon_shell',
        amount: 1
      }
    ],
    ui_name: 'Explosive cannon shell'
  },
  uranium_cannon_shell: {
    name: 'uranium_cannon_shell',
    category: 'crafting',
    time: 12,
    ingredients: [
      {
        name: 'cannon_shell',
        amount: 1
      },
      {
        name: 'uranium_238',
        amount: 1
      }
    ],
    results: [
      {
        name: 'uranium_cannon_shell',
        amount: 1
      }
    ],
    ui_name: 'Uranium cannon shell'
  },
  explosive_uranium_cannon_shell: {
    name: 'explosive_uranium_cannon_shell',
    category: 'crafting',
    time: 12,
    ingredients: [
      {
        name: 'explosive_cannon_shell',
        amount: 1
      },
      {
        name: 'uranium_238',
        amount: 1
      }
    ],
    results: [
      {
        name: 'explosive_uranium_cannon_shell',
        amount: 1
      }
    ],
    ui_name: 'Explosive uranium cannon shell'
  },
  artillery_shell: {
    name: 'artillery_shell',
    category: 'crafting',
    time: 15,
    ingredients: [
      {
        name: 'explosive_cannon_shell',
        amount: 4
      },
      {
        name: 'radar',
        amount: 1
      },
      {
        name: 'explosives',
        amount: 8
      }
    ],
    results: [
      {
        name: 'artillery_shell',
        amount: 1
      }
    ],
    ui_name: 'Artillery shell'
  },
  flamethrower_ammo: {
    name: 'flamethrower_ammo',
    category: 'chemistry',
    time: 6,
    ingredients: [
      {
        type: 'item',
        name: 'steel_plate',
        amount: 5
      },
      {
        type: 'fluid',
        name: 'light_oil',
        amount: 50
      },
      {
        type: 'fluid',
        name: 'heavy_oil',
        amount: 50
      }
    ],
    results: [
      {
        name: 'flamethrower_ammo',
        amount: 1
      }
    ],
    crafting_machine_tint: {
      primary: {
        r: 0.845,
        g: 0.533,
        b: 0,
        a: 0
      },
      secondary: {
        r: 0.655,
        g: 0,
        b: 0,
        a: 0
      },
      tertiary: {
        r: 0.685,
        g: 0.329,
        b: 0,
        a: 0
      }
    },
    ui_name: 'Flamethrower ammo'
  },
  poison_capsule: {
    name: 'poison_capsule',
    category: 'crafting',
    time: 8,
    ingredients: [
      {
        name: 'steel_plate',
        amount: 3
      },
      {
        name: 'electronic_circuit',
        amount: 3
      },
      {
        name: 'coal',
        amount: 10
      }
    ],
    results: [
      {
        name: 'poison_capsule',
        amount: 1
      }
    ],
    ui_name: 'Poison capsule'
  },
  slowdown_capsule: {
    name: 'slowdown_capsule',
    category: 'crafting',
    time: 8,
    ingredients: [
      {
        name: 'steel_plate',
        amount: 2
      },
      {
        name: 'electronic_circuit',
        amount: 2
      },
      {
        name: 'coal',
        amount: 5
      }
    ],
    results: [
      {
        name: 'slowdown_capsule',
        amount: 1
      }
    ],
    ui_name: 'Slowdown capsule',
    description: 'Reduces the movement speed of affected units.'
  },
  grenade: {
    name: 'grenade',
    category: 'crafting',
    time: 8,
    ingredients: [
      {
        name: 'iron_plate',
        amount: 5
      },
      {
        name: 'coal',
        amount: 10
      }
    ],
    results: [
      {
        name: 'grenade',
        amount: 1
      }
    ],
    ui_name: 'Grenade'
  },
  cluster_grenade: {
    name: 'cluster_grenade',
    category: 'crafting',
    time: 8,
    ingredients: [
      {
        name: 'grenade',
        amount: 7
      },
      {
        name: 'explosives',
        amount: 5
      },
      {
        name: 'steel_plate',
        amount: 5
      }
    ],
    results: [
      {
        name: 'cluster_grenade',
        amount: 1
      }
    ],
    ui_name: 'Cluster grenade'
  },
  defender_capsule: {
    name: 'defender_capsule',
    category: 'crafting',
    time: 8,
    ingredients: [
      {
        name: 'piercing_rounds_magazine',
        amount: 1
      },
      {
        name: 'flying_robot_frame',
        amount: 1
      },
      {
        name: 'iron_gear_wheel',
        amount: 3
      }
    ],
    results: [
      {
        name: 'defender_capsule',
        amount: 1
      }
    ],
    ui_name: 'Defender capsule'
  },
  distractor_capsule: {
    name: 'distractor_capsule',
    category: 'crafting',
    time: 15,
    ingredients: [
      {
        name: 'defender_capsule',
        amount: 4
      },
      {
        name: 'advanced_circuit',
        amount: 3
      }
    ],
    results: [
      {
        name: 'distractor_capsule',
        amount: 1
      }
    ],
    ui_name: 'Distractor capsule'
  },
  destroyer_capsule: {
    name: 'destroyer_capsule',
    category: 'crafting',
    time: 15,
    ingredients: [
      {
        name: 'distractor_capsule',
        amount: 4
      },
      {
        name: 'speed_module',
        amount: 1
      }
    ],
    results: [
      {
        name: 'destroyer_capsule',
        amount: 1
      }
    ],
    ui_name: 'Destroyer capsule'
  },
  discharge_defense_remote: {
    name: 'discharge_defense_remote',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'electronic_circuit',
        amount: 1
      }
    ],
    results: [
      {
        name: 'discharge_defense_remote',
        amount: 1
      }
    ],
    ui_name: 'Discharge defense remote'
  },
  cliff_explosives: {
    name: 'cliff_explosives',
    category: 'crafting',
    time: 8,
    ingredients: [
      {
        name: 'explosives',
        amount: 10
      },
      {
        name: 'grenade',
        amount: 1
      },
      {
        name: 'empty_barrel',
        amount: 1
      }
    ],
    results: [
      {
        name: 'cliff_explosives',
        amount: 1
      }
    ],
    ui_name: 'Cliff explosives',
    description: 'Barrels filled with enough explosives to tear down cliffs.'
  },
  artillery_targeting_remote: {
    name: 'artillery_targeting_remote',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'processing_unit',
        amount: 1
      },
      {
        name: 'radar',
        amount: 1
      }
    ],
    results: [
      {
        name: 'artillery_targeting_remote',
        amount: 1
      }
    ],
    ui_name: 'Artillery targeting remote',
    description: 'Allows firing artillery manually from the map or the world.'
  },
  night_vision_equipment: {
    name: 'night_vision_equipment',
    category: 'crafting',
    time: 10,
    ingredients: [
      {
        name: 'advanced_circuit',
        amount: 5
      },
      {
        name: 'steel_plate',
        amount: 10
      }
    ],
    results: [
      {
        name: 'night_vision_equipment',
        amount: 1
      }
    ],
    ui_name: 'Nightvision',
    description: 'Allows you to see more clearly in darkness.'
  },
  belt_immunity_equipment: {
    name: 'belt_immunity_equipment',
    category: 'crafting',
    time: 10,
    ingredients: [
      {
        name: 'advanced_circuit',
        amount: 5
      },
      {
        name: 'steel_plate',
        amount: 10
      }
    ],
    results: [
      {
        name: 'belt_immunity_equipment',
        amount: 1
      }
    ],
    ui_name: 'Belt immunity equipment',
    description: 'Prevents belts from moving you while it has power.'
  },
  energy_shield_equipment: {
    name: 'energy_shield_equipment',
    category: 'crafting',
    time: 10,
    ingredients: [
      {
        name: 'advanced_circuit',
        amount: 5
      },
      {
        name: 'steel_plate',
        amount: 10
      }
    ],
    results: [
      {
        name: 'energy_shield_equipment',
        amount: 1
      }
    ],
    ui_name: 'Energy shield',
    description: 'Provides an energy shield to protect the player.'
  },
  energy_shield_mk2_equipment: {
    name: 'energy_shield_mk2_equipment',
    category: 'crafting',
    time: 10,
    ingredients: [
      {
        name: 'energy_shield_equipment',
        amount: 10
      },
      {
        name: 'processing_unit',
        amount: 5
      },
      {
        name: 'low_density_structure',
        amount: 5
      }
    ],
    results: [
      {
        name: 'energy_shield_mk2_equipment',
        amount: 1
      }
    ],
    ui_name: 'Energy shield MK2',
    description: 'Inserted into armor to absorb a large amount of damage.'
  },
  battery_equipment: {
    name: 'battery_equipment',
    category: 'crafting',
    time: 10,
    ingredients: [
      {
        name: 'battery',
        amount: 5
      },
      {
        name: 'steel_plate',
        amount: 10
      }
    ],
    results: [
      {
        name: 'battery_equipment',
        amount: 1
      }
    ],
    ui_name: 'Personal battery',
    description: 'Stores electric energy for equipment modules.'
  },
  battery_mk2_equipment: {
    name: 'battery_mk2_equipment',
    category: 'crafting',
    time: 10,
    ingredients: [
      {
        name: 'battery_equipment',
        amount: 10
      },
      {
        name: 'processing_unit',
        amount: 15
      },
      {
        name: 'low_density_structure',
        amount: 5
      }
    ],
    results: [
      {
        name: 'battery_mk2_equipment',
        amount: 1
      }
    ],
    ui_name: 'Personal battery MK2',
    description: 'Inserted into armor to store a lot of energy for later.'
  },
  solar_panel_equipment: {
    name: 'solar_panel_equipment',
    category: 'crafting',
    time: 10,
    ingredients: [
      {
        name: 'solar_panel',
        amount: 1
      },
      {
        name: 'advanced_circuit',
        amount: 2
      },
      {
        name: 'steel_plate',
        amount: 5
      }
    ],
    results: [
      {
        name: 'solar_panel_equipment',
        amount: 1
      }
    ],
    ui_name: 'Portable solar panel',
    description: 'Provides power for equipment modules.'
  },
  fusion_reactor_equipment: {
    name: 'fusion_reactor_equipment',
    category: 'crafting',
    time: 10,
    ingredients: [
      {
        name: 'processing_unit',
        amount: 200
      },
      {
        name: 'low_density_structure',
        amount: 50
      }
    ],
    results: [
      {
        name: 'fusion_reactor_equipment',
        amount: 1
      }
    ],
    ui_name: 'Portable fusion reactor',
    description: 'Provides power for equipment modules.'
  },
  personal_laser_defense_equipment: {
    name: 'personal_laser_defense_equipment',
    category: 'crafting',
    time: 10,
    ingredients: [
      {
        name: 'processing_unit',
        amount: 20
      },
      {
        name: 'low_density_structure',
        amount: 5
      },
      {
        name: 'laser_turret',
        amount: 5
      }
    ],
    results: [
      {
        name: 'personal_laser_defense_equipment',
        amount: 1
      }
    ],
    ui_name: 'Personal laser defense',
    description: 'Inserted into armor to automatically fire at nearby enemies.'
  },
  discharge_defense_equipment: {
    name: 'discharge_defense_equipment',
    category: 'crafting',
    time: 10,
    ingredients: [
      {
        name: 'processing_unit',
        amount: 5
      },
      {
        name: 'steel_plate',
        amount: 20
      },
      {
        name: 'laser_turret',
        amount: 10
      }
    ],
    results: [
      {
        name: 'discharge_defense_equipment',
        amount: 1
      }
    ],
    ui_name: 'Discharge defense',
    description: 'Damages, pushes back and stuns nearby enemies when activated using the remote.'
  },
  exoskeleton_equipment: {
    name: 'exoskeleton_equipment',
    category: 'crafting',
    time: 10,
    ingredients: [
      {
        name: 'processing_unit',
        amount: 10
      },
      {
        name: 'electric_engine_unit',
        amount: 30
      },
      {
        name: 'steel_plate',
        amount: 20
      }
    ],
    results: [
      {
        name: 'exoskeleton_equipment',
        amount: 1
      }
    ],
    ui_name: 'Exoskeleton',
    description: 'Increases your movement speed.'
  },
  personal_roboport_equipment: {
    name: 'personal_roboport_equipment',
    category: 'crafting',
    time: 10,
    ingredients: [
      {
        name: 'advanced_circuit',
        amount: 10
      },
      {
        name: 'iron_gear_wheel',
        amount: 40
      },
      {
        name: 'steel_plate',
        amount: 20
      },
      {
        name: 'battery',
        amount: 45
      }
    ],
    results: [
      {
        name: 'personal_roboport_equipment',
        amount: 1
      }
    ],
    ui_name: 'Personal roboport',
    description: 'Allows construction bots to work from your inventory.'
  },
  personal_roboport_mk2_equipment: {
    name: 'personal_roboport_mk2_equipment',
    category: 'crafting',
    time: 20,
    ingredients: [
      {
        name: 'personal_roboport_equipment',
        amount: 5
      },
      {
        name: 'processing_unit',
        amount: 100
      },
      {
        name: 'low_density_structure',
        amount: 20
      }
    ],
    results: [
      {
        name: 'personal_roboport_mk2_equipment',
        amount: 1
      }
    ],
    ui_name: 'Personal roboport MK2'
  },
  steel_plate: {
    name: 'steel_plate',
    category: 'smelting',
    time: 16,
    ingredients: [
      {
        name: 'iron_plate',
        amount: 5
      }
    ],
    results: [
      {
        name: 'steel_plate',
        amount: 1
      }
    ],
    ui_name: 'Steel plate'
  },
  basic_oil_processing: {
    name: 'basic_oil_processing',
    category: 'oil_processing',
    time: 5,
    ingredients: [
      {
        type: 'fluid',
        name: 'crude_oil',
        amount: 100
      }
    ],
    results: [
      {
        type: 'fluid',
        name: 'heavy_oil',
        amount: 30
      },
      {
        type: 'fluid',
        name: 'light_oil',
        amount: 30
      },
      {
        type: 'fluid',
        name: 'petroleum_gas',
        amount: 40
      }
    ],
    ui_name: 'Basic oil processing'
  },
  advanced_oil_processing: {
    name: 'advanced_oil_processing',
    category: 'oil_processing',
    time: 5,
    ingredients: [
      {
        type: 'fluid',
        name: 'water',
        amount: 50
      },
      {
        type: 'fluid',
        name: 'crude_oil',
        amount: 100
      }
    ],
    results: [
      {
        type: 'fluid',
        name: 'heavy_oil',
        amount: 10
      },
      {
        type: 'fluid',
        name: 'light_oil',
        amount: 45
      },
      {
        type: 'fluid',
        name: 'petroleum_gas',
        amount: 55
      }
    ],
    ui_name: 'Advanced oil processing',
    description: 'Allows you to crack heavier crude oil fractions into lighter, more useful products.'
  },
  coal_liquefaction: {
    name: 'coal_liquefaction',
    category: 'oil_processing',
    time: 5,
    ingredients: [
      {
        type: 'item',
        name: 'coal',
        amount: 10
      },
      {
        type: 'fluid',
        name: 'heavy_oil',
        amount: 25
      },
      {
        type: 'fluid',
        name: 'steam',
        amount: 50
      }
    ],
    results: [
      {
        type: 'fluid',
        name: 'heavy_oil',
        amount: 90
      },
      {
        type: 'fluid',
        name: 'light_oil',
        amount: 20
      },
      {
        type: 'fluid',
        name: 'petroleum_gas',
        amount: 10
      }
    ],
    ui_name: 'Coal liquefaction',
    description: 'A processing technique to turn coal into oil products with the use of steam and heavy oil.'
  },
  heavy_oil_cracking: {
    name: 'heavy_oil_cracking',
    category: 'chemistry',
    time: 2,
    ingredients: [
      {
        type: 'fluid',
        name: 'water',
        amount: 30
      },
      {
        type: 'fluid',
        name: 'heavy_oil',
        amount: 40
      }
    ],
    results: [
      {
        type: 'fluid',
        name: 'light_oil',
        amount: 30
      }
    ],
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
    name: 'light_oil_cracking',
    category: 'chemistry',
    time: 2,
    ingredients: [
      {
        type: 'fluid',
        name: 'water',
        amount: 30
      },
      {
        type: 'fluid',
        name: 'light_oil',
        amount: 30
      }
    ],
    results: [
      {
        type: 'fluid',
        name: 'petroleum_gas',
        amount: 20
      }
    ],
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
  sulfuric_acid: {
    name: 'sulfuric_acid',
    category: 'chemistry',
    time: 1,
    ingredients: [
      {
        type: 'item',
        name: 'sulfur',
        amount: 5
      },
      {
        type: 'item',
        name: 'iron_plate',
        amount: 1
      },
      {
        type: 'fluid',
        name: 'water',
        amount: 100
      }
    ],
    results: [
      {
        type: 'fluid',
        name: 'sulfuric_acid',
        amount: 50
      }
    ],
    crafting_machine_tint: {
      primary: {
        r: 0.875,
        g: 0.735,
        b: 0,
        a: 0
      },
      secondary: {
        r: 0.103,
        g: 0.94,
        b: 0,
        a: 0
      },
      tertiary: {
        r: 0.564,
        g: 0.795,
        b: 0,
        a: 0
      }
    },
    ui_name: 'Sulfuric acid'
  },
  plastic_bar: {
    name: 'plastic_bar',
    category: 'chemistry',
    time: 1,
    ingredients: [
      {
        type: 'fluid',
        name: 'petroleum_gas',
        amount: 20
      },
      {
        type: 'item',
        name: 'coal',
        amount: 1
      }
    ],
    results: [
      {
        type: 'item',
        name: 'plastic_bar',
        amount: 2
      }
    ],
    crafting_machine_tint: {
      primary: {
        r: 0.498,
        g: 0.498,
        b: 0.498,
        a: 0
      },
      secondary: {
        r: 0.4,
        g: 0.4,
        b: 0.4,
        a: 0
      },
      tertiary: {
        r: 0.305,
        g: 0.305,
        b: 0.305,
        a: 0
      }
    },
    ui_name: 'Plastic bar'
  },
  solid_fuel_from_light_oil: {
    name: 'solid_fuel_from_light_oil',
    category: 'chemistry',
    time: 2,
    ingredients: [
      {
        type: 'fluid',
        name: 'light_oil',
        amount: 10
      }
    ],
    results: [
      {
        type: 'item',
        name: 'solid_fuel',
        amount: 1
      }
    ],
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
    name: 'solid_fuel_from_petroleum_gas',
    category: 'chemistry',
    time: 2,
    ingredients: [
      {
        type: 'fluid',
        name: 'petroleum_gas',
        amount: 20
      }
    ],
    results: [
      {
        type: 'item',
        name: 'solid_fuel',
        amount: 1
      }
    ],
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
    name: 'solid_fuel_from_heavy_oil',
    category: 'chemistry',
    time: 2,
    ingredients: [
      {
        type: 'fluid',
        name: 'heavy_oil',
        amount: 20
      }
    ],
    results: [
      {
        type: 'item',
        name: 'solid_fuel',
        amount: 1
      }
    ],
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
  sulfur: {
    name: 'sulfur',
    category: 'chemistry',
    time: 1,
    ingredients: [
      {
        type: 'fluid',
        name: 'water',
        amount: 30
      },
      {
        type: 'fluid',
        name: 'petroleum_gas',
        amount: 30
      }
    ],
    results: [
      {
        type: 'item',
        name: 'sulfur',
        amount: 2
      }
    ],
    crafting_machine_tint: {
      primary: {
        r: 1,
        g: 0.659,
        b: 0,
        a: 0
      },
      secondary: {
        r: 0.812,
        g: 1,
        b: 0,
        a: 0
      },
      tertiary: {
        r: 0.96,
        g: 0.806,
        b: 0,
        a: 0
      }
    },
    ui_name: 'Sulfur'
  },
  lubricant: {
    name: 'lubricant',
    category: 'chemistry',
    time: 1,
    ingredients: [
      {
        type: 'fluid',
        name: 'heavy_oil',
        amount: 10
      }
    ],
    results: [
      {
        type: 'fluid',
        name: 'lubricant',
        amount: 10
      }
    ],
    crafting_machine_tint: {
      primary: {
        r: 0,
        g: 0.26,
        b: 0.01,
        a: 0
      },
      secondary: {
        r: 0.071,
        g: 0.64,
        b: 0,
        a: 0
      },
      tertiary: {
        r: 0.026,
        g: 0.52,
        b: 0,
        a: 0
      }
    },
    ui_name: 'Lubricant',
    description: 'Converting heavy oils into lubricant, used to reduce friction in high speed machines.'
  },
  empty_barrel: {
    name: 'empty_barrel',
    category: 'crafting',
    time: 1,
    ingredients: [
      {
        type: 'item',
        name: 'steel_plate',
        amount: 1
      }
    ],
    results: [
      {
        type: 'item',
        name: 'empty_barrel',
        amount: 1
      }
    ],
    ui_name: 'Empty barrel'
  },
  long_handed_inserter: {
    name: 'long_handed_inserter',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'iron_gear_wheel',
        amount: 1
      },
      {
        name: 'iron_plate',
        amount: 1
      },
      {
        name: 'inserter',
        amount: 1
      }
    ],
    results: [
      {
        name: 'long_handed_inserter',
        amount: 1
      }
    ],
    ui_name: 'Long handed inserter'
  },
  fast_inserter: {
    name: 'fast_inserter',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'electronic_circuit',
        amount: 2
      },
      {
        name: 'iron_plate',
        amount: 2
      },
      {
        name: 'inserter',
        amount: 1
      }
    ],
    results: [
      {
        name: 'fast_inserter',
        amount: 1
      }
    ],
    ui_name: 'Fast inserter',
    description: 'Inserters capable of faster motion and item filtering through improved electronics.'
  },
  filter_inserter: {
    name: 'filter_inserter',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'fast_inserter',
        amount: 1
      },
      {
        name: 'electronic_circuit',
        amount: 4
      }
    ],
    results: [
      {
        name: 'filter_inserter',
        amount: 1
      }
    ],
    ui_name: 'Filter inserter'
  },
  stack_inserter: {
    name: 'stack_inserter',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'iron_gear_wheel',
        amount: 15
      },
      {
        name: 'electronic_circuit',
        amount: 15
      },
      {
        name: 'advanced_circuit',
        amount: 1
      },
      {
        name: 'fast_inserter',
        amount: 1
      }
    ],
    results: [
      {
        name: 'stack_inserter',
        amount: 1
      }
    ],
    ui_name: 'Stack inserter',
    description: 'Stack inserters can move multiple items at the same time.'
  },
  stack_filter_inserter: {
    name: 'stack_filter_inserter',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'stack_inserter',
        amount: 1
      },
      {
        name: 'electronic_circuit',
        amount: 5
      }
    ],
    results: [
      {
        name: 'stack_filter_inserter',
        amount: 1
      }
    ],
    ui_name: 'Stack filter inserter'
  },
  speed_module: {
    name: 'speed_module',
    category: 'crafting',
    time: 15,
    ingredients: [
      {
        name: 'advanced_circuit',
        amount: 5
      },
      {
        name: 'electronic_circuit',
        amount: 5
      }
    ],
    results: [
      {
        name: 'speed_module',
        amount: 1
      }
    ],
    ui_name: 'Speed module',
    description: 'Increases machine speed at a cost of increased energy consumption.'
  },
  speed_module_2: {
    name: 'speed_module_2',
    category: 'crafting',
    time: 30,
    ingredients: [
      {
        name: 'speed_module',
        amount: 4
      },
      {
        name: 'advanced_circuit',
        amount: 5
      },
      {
        name: 'processing_unit',
        amount: 5
      }
    ],
    results: [
      {
        name: 'speed_module_2',
        amount: 1
      }
    ],
    ui_name: 'Speed module 2'
  },
  speed_module_3: {
    name: 'speed_module_3',
    category: 'crafting',
    time: 60,
    ingredients: [
      {
        name: 'speed_module_2',
        amount: 5
      },
      {
        name: 'advanced_circuit',
        amount: 5
      },
      {
        name: 'processing_unit',
        amount: 5
      }
    ],
    results: [
      {
        name: 'speed_module_3',
        amount: 1
      }
    ],
    ui_name: 'Speed module 3'
  },
  productivity_module: {
    name: 'productivity_module',
    category: 'crafting',
    time: 15,
    ingredients: [
      {
        name: 'advanced_circuit',
        amount: 5
      },
      {
        name: 'electronic_circuit',
        amount: 5
      }
    ],
    results: [
      {
        name: 'productivity_module',
        amount: 1
      }
    ],
    ui_name: 'Productivity module',
    description: 'Machine will create extra products at a cost of increased energy consumption and reduced speed.'
  },
  productivity_module_2: {
    name: 'productivity_module_2',
    category: 'crafting',
    time: 30,
    ingredients: [
      {
        name: 'productivity_module',
        amount: 4
      },
      {
        name: 'advanced_circuit',
        amount: 5
      },
      {
        name: 'processing_unit',
        amount: 5
      }
    ],
    results: [
      {
        name: 'productivity_module_2',
        amount: 1
      }
    ],
    ui_name: 'Productivity module 2'
  },
  productivity_module_3: {
    name: 'productivity_module_3',
    category: 'crafting',
    time: 60,
    ingredients: [
      {
        name: 'productivity_module_2',
        amount: 5
      },
      {
        name: 'advanced_circuit',
        amount: 5
      },
      {
        name: 'processing_unit',
        amount: 5
      }
    ],
    results: [
      {
        name: 'productivity_module_3',
        amount: 1
      }
    ],
    ui_name: 'Productivity module 3'
  },
  effectivity_module: {
    name: 'effectivity_module',
    category: 'crafting',
    time: 15,
    ingredients: [
      {
        name: 'advanced_circuit',
        amount: 5
      },
      {
        name: 'electronic_circuit',
        amount: 5
      }
    ],
    results: [
      {
        name: 'effectivity_module',
        amount: 1
      }
    ],
    ui_name: 'Efficiency module',
    description: 'Decreases machine energy consumption. Minimum energy consumption is 20%.'
  },
  effectivity_module_2: {
    name: 'effectivity_module_2',
    category: 'crafting',
    time: 30,
    ingredients: [
      {
        name: 'effectivity_module',
        amount: 4
      },
      {
        name: 'advanced_circuit',
        amount: 5
      },
      {
        name: 'processing_unit',
        amount: 5
      }
    ],
    results: [
      {
        name: 'effectivity_module_2',
        amount: 1
      }
    ],
    ui_name: 'Efficiency module 2'
  },
  effectivity_module_3: {
    name: 'effectivity_module_3',
    category: 'crafting',
    time: 60,
    ingredients: [
      {
        name: 'effectivity_module_2',
        amount: 5
      },
      {
        name: 'advanced_circuit',
        amount: 5
      },
      {
        name: 'processing_unit',
        amount: 5
      }
    ],
    results: [
      {
        name: 'effectivity_module_3',
        amount: 1
      }
    ],
    ui_name: 'Efficiency module 3'
  },
  player_port: {
    name: 'player_port',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'electronic_circuit',
        amount: 10
      },
      {
        name: 'iron_gear_wheel',
        amount: 5
      },
      {
        name: 'iron_plate',
        amount: 1
      }
    ],
    results: [
      {
        name: 'player_port',
        amount: 1
      }
    ],
    ui_name: 'Player port'
  },
  fast_transport_belt: {
    name: 'fast_transport_belt',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'iron_gear_wheel',
        amount: 5
      },
      {
        name: 'transport_belt',
        amount: 1
      }
    ],
    results: [
      {
        name: 'fast_transport_belt',
        amount: 1
      }
    ],
    ui_name: 'Fast transport belt'
  },
  express_transport_belt: {
    name: 'express_transport_belt',
    category: 'crafting_with_fluid',
    time: 0.5,
    ingredients: [
      {
        name: 'iron_gear_wheel',
        amount: 10
      },
      {
        name: 'fast_transport_belt',
        amount: 1
      },
      {
        type: 'fluid',
        name: 'lubricant',
        amount: 20
      }
    ],
    results: [
      {
        name: 'express_transport_belt',
        amount: 1
      }
    ],
    ui_name: 'Express transport belt'
  },
  solar_panel: {
    name: 'solar_panel',
    category: 'crafting',
    time: 10,
    ingredients: [
      {
        name: 'steel_plate',
        amount: 5
      },
      {
        name: 'electronic_circuit',
        amount: 15
      },
      {
        name: 'copper_plate',
        amount: 5
      }
    ],
    results: [
      {
        name: 'solar_panel',
        amount: 1
      }
    ],
    ui_name: 'Solar panel'
  },
  assembling_machine_2: {
    name: 'assembling_machine_2',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'steel_plate',
        amount: 2
      },
      {
        name: 'electronic_circuit',
        amount: 3
      },
      {
        name: 'iron_gear_wheel',
        amount: 5
      },
      {
        name: 'assembling_machine_1',
        amount: 1
      }
    ],
    results: [
      {
        name: 'assembling_machine_2',
        amount: 1
      }
    ],
    ui_name: 'Assembling machine 2'
  },
  assembling_machine_3: {
    name: 'assembling_machine_3',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'speed_module',
        amount: 4
      },
      {
        name: 'assembling_machine_2',
        amount: 2
      }
    ],
    results: [
      {
        name: 'assembling_machine_3',
        amount: 1
      }
    ],
    ui_name: 'Assembling machine 3'
  },
  car: {
    name: 'car',
    category: 'crafting',
    time: 2,
    ingredients: [
      {
        name: 'engine_unit',
        amount: 8
      },
      {
        name: 'iron_plate',
        amount: 20
      },
      {
        name: 'steel_plate',
        amount: 5
      }
    ],
    results: [
      {
        name: 'car',
        amount: 1
      }
    ],
    ui_name: 'Car',
    description: 'Enter the car using __CONTROL__toggle-driving__.'
  },
  tank: {
    name: 'tank',
    category: 'crafting',
    time: 5,
    ingredients: [
      {
        name: 'engine_unit',
        amount: 32
      },
      {
        name: 'steel_plate',
        amount: 50
      },
      {
        name: 'iron_gear_wheel',
        amount: 15
      },
      {
        name: 'advanced_circuit',
        amount: 10
      }
    ],
    results: [
      {
        name: 'tank',
        amount: 1
      }
    ],
    ui_name: 'Tank',
    description: 'Enter the tank using __CONTROL__toggle-driving__.'
  },
  rail: {
    name: 'rail',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'stone',
        amount: 1
      },
      {
        name: 'iron_stick',
        amount: 1
      },
      {
        name: 'steel_plate',
        amount: 1
      }
    ],
    results: [
      {
        name: 'rail',
        amount: 2
      }
    ],
    ui_name: 'Rail',
    description: 'Use to build straight rails manually or through the rail planner.\\nThe rail planner can build short paths directly using __CONTROL__build__ or long ghost paths using __CONTROL__build-ghost__.'
  },
  locomotive: {
    name: 'locomotive',
    category: 'crafting',
    time: 4,
    ingredients: [
      {
        name: 'engine_unit',
        amount: 20
      },
      {
        name: 'electronic_circuit',
        amount: 10
      },
      {
        name: 'steel_plate',
        amount: 30
      }
    ],
    results: [
      {
        name: 'locomotive',
        amount: 1
      }
    ],
    ui_name: 'Locomotive',
    description: 'Runs automated schedules and pulls cargo wagons. Enter the train with __CONTROL__toggle-driving__, and open the train menu with __CONTROL__build__.'
  },
  cargo_wagon: {
    name: 'cargo_wagon',
    category: 'crafting',
    time: 1,
    ingredients: [
      {
        name: 'iron_gear_wheel',
        amount: 10
      },
      {
        name: 'iron_plate',
        amount: 20
      },
      {
        name: 'steel_plate',
        amount: 20
      }
    ],
    results: [
      {
        name: 'cargo_wagon',
        amount: 1
      }
    ],
    ui_name: 'Cargo wagon'
  },
  fluid_wagon: {
    name: 'fluid_wagon',
    category: 'crafting',
    time: 1.5,
    ingredients: [
      {
        name: 'iron_gear_wheel',
        amount: 10
      },
      {
        name: 'steel_plate',
        amount: 16
      },
      {
        name: 'pipe',
        amount: 8
      },
      {
        name: 'storage_tank',
        amount: 1
      }
    ],
    results: [
      {
        name: 'fluid_wagon',
        amount: 1
      }
    ],
    ui_name: 'Fluid wagon',
    description: 'Ability to transport fluids on rails. Fluid wagons are filled and emptied by pumps adjacent to straight rail segments.'
  },
  artillery_wagon: {
    name: 'artillery_wagon',
    category: 'crafting',
    time: 4,
    ingredients: [
      {
        name: 'engine_unit',
        amount: 64
      },
      {
        name: 'iron_gear_wheel',
        amount: 10
      },
      {
        name: 'steel_plate',
        amount: 40
      },
      {
        name: 'pipe',
        amount: 16
      },
      {
        name: 'advanced_circuit',
        amount: 20
      }
    ],
    results: [
      {
        name: 'artillery_wagon',
        amount: 1
      }
    ],
    ui_name: 'Artillery wagon'
  },
  train_stop: {
    name: 'train_stop',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'electronic_circuit',
        amount: 5
      },
      {
        name: 'iron_plate',
        amount: 6
      },
      {
        name: 'iron_stick',
        amount: 6
      },
      {
        name: 'steel_plate',
        amount: 3
      }
    ],
    results: [
      {
        name: 'train_stop',
        amount: 1
      }
    ],
    ui_name: 'Train stop',
    description: 'Destinations for automated trains.'
  },
  rail_signal: {
    name: 'rail_signal',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'electronic_circuit',
        amount: 1
      },
      {
        name: 'iron_plate',
        amount: 5
      }
    ],
    results: [
      {
        name: 'rail_signal',
        amount: 1
      }
    ],
    ui_name: 'Rail signal',
    description: 'Defines the rail system into blocks, allowing multiple trains to run on the same network.'
  },
  rail_chain_signal: {
    name: 'rail_chain_signal',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'electronic_circuit',
        amount: 1
      },
      {
        name: 'iron_plate',
        amount: 5
      }
    ],
    results: [
      {
        name: 'rail_chain_signal',
        amount: 1
      }
    ],
    ui_name: 'Rail chain signal',
    description: 'Reads the next signals in the path to allow better control of the trains.'
  },
  heavy_armor: {
    name: 'heavy_armor',
    category: 'crafting',
    time: 8,
    ingredients: [
      {
        name: 'copper_plate',
        amount: 100
      },
      {
        name: 'steel_plate',
        amount: 50
      }
    ],
    results: [
      {
        name: 'heavy_armor',
        amount: 1
      }
    ],
    ui_name: 'Heavy armor',
    description: 'Heavy armor for more protection.'
  },
  modular_armor: {
    name: 'modular_armor',
    category: 'crafting',
    time: 15,
    ingredients: [
      {
        name: 'advanced_circuit',
        amount: 30
      },
      {
        name: 'steel_plate',
        amount: 50
      }
    ],
    results: [
      {
        name: 'modular_armor',
        amount: 1
      }
    ],
    ui_name: 'Modular armor',
    description: 'Armor with a small grid for equipment modules that give you unique bonuses. Wearing it also increases your inventory size.'
  },
  power_armor: {
    name: 'power_armor',
    category: 'crafting',
    time: 20,
    ingredients: [
      {
        name: 'processing_unit',
        amount: 40
      },
      {
        name: 'electric_engine_unit',
        amount: 20
      },
      {
        name: 'steel_plate',
        amount: 40
      }
    ],
    results: [
      {
        name: 'power_armor',
        amount: 1
      }
    ],
    requester_paste_multiplier: 1,
    ui_name: 'Power armor',
    description: 'Armor with a large equipment grid and inventory size bonus.'
  },
  power_armor_mk2: {
    name: 'power_armor_mk2',
    category: 'crafting',
    time: 25,
    ingredients: [
      {
        name: 'effectivity_module_2',
        amount: 25
      },
      {
        name: 'speed_module_2',
        amount: 25
      },
      {
        name: 'processing_unit',
        amount: 60
      },
      {
        name: 'electric_engine_unit',
        amount: 40
      },
      {
        name: 'low_density_structure',
        amount: 30
      }
    ],
    results: [
      {
        name: 'power_armor_mk2',
        amount: 1
      }
    ],
    requester_paste_multiplier: 1,
    ui_name: 'Power armor MK2'
  },
  iron_chest: {
    name: 'iron_chest',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'iron_plate',
        amount: 8
      }
    ],
    results: [
      {
        name: 'iron_chest',
        amount: 1
      }
    ],
    ui_name: 'Iron chest'
  },
  steel_chest: {
    name: 'steel_chest',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'steel_plate',
        amount: 8
      }
    ],
    results: [
      {
        name: 'steel_chest',
        amount: 1
      }
    ],
    ui_name: 'Steel chest'
  },
  stone_wall: {
    name: 'stone_wall',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'stone_brick',
        amount: 5
      }
    ],
    results: [
      {
        name: 'stone_wall',
        amount: 1
      }
    ],
    ui_name: 'Wall'
  },
  gate: {
    name: 'gate',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'stone_wall',
        amount: 1
      },
      {
        name: 'steel_plate',
        amount: 2
      },
      {
        name: 'electronic_circuit',
        amount: 2
      }
    ],
    results: [
      {
        name: 'gate',
        amount: 1
      }
    ],
    ui_name: 'Gate'
  },
  flamethrower: {
    name: 'flamethrower',
    category: 'crafting',
    time: 10,
    ingredients: [
      {
        name: 'steel_plate',
        amount: 5
      },
      {
        name: 'iron_gear_wheel',
        amount: 10
      }
    ],
    results: [
      {
        name: 'flamethrower',
        amount: 1
      }
    ],
    ui_name: 'Flamethrower',
    description: 'Powerful hand-held and turret flamethrowers firing aggressive liquids at enemies, setting them on fire.'
  },
  land_mine: {
    name: 'land_mine',
    category: 'crafting',
    time: 5,
    ingredients: [
      {
        name: 'steel_plate',
        amount: 1
      },
      {
        name: 'explosives',
        amount: 2
      }
    ],
    results: [
      {
        name: 'land_mine',
        amount: 4
      }
    ],
    ui_name: 'Land mine',
    description: 'Explodes when enemies are nearby, damaging and stunning them.'
  },
  rocket_launcher: {
    name: 'rocket_launcher',
    category: 'crafting',
    time: 10,
    ingredients: [
      {
        name: 'iron_plate',
        amount: 5
      },
      {
        name: 'iron_gear_wheel',
        amount: 5
      },
      {
        name: 'electronic_circuit',
        amount: 5
      }
    ],
    results: [
      {
        name: 'rocket_launcher',
        amount: 1
      }
    ],
    ui_name: 'Rocket launcher'
  },
  shotgun: {
    name: 'shotgun',
    category: 'crafting',
    time: 10,
    ingredients: [
      {
        name: 'iron_plate',
        amount: 15
      },
      {
        name: 'iron_gear_wheel',
        amount: 5
      },
      {
        name: 'copper_plate',
        amount: 10
      },
      {
        name: 'wood',
        amount: 5
      }
    ],
    results: [
      {
        name: 'shotgun',
        amount: 1
      }
    ],
    ui_name: 'Shotgun'
  },
  combat_shotgun: {
    name: 'combat_shotgun',
    category: 'crafting',
    time: 10,
    ingredients: [
      {
        name: 'steel_plate',
        amount: 15
      },
      {
        name: 'iron_gear_wheel',
        amount: 5
      },
      {
        name: 'copper_plate',
        amount: 10
      },
      {
        name: 'wood',
        amount: 10
      }
    ],
    results: [
      {
        name: 'combat_shotgun',
        amount: 1
      }
    ],
    ui_name: 'Combat shotgun'
  },
  railgun: {
    name: 'railgun',
    category: 'crafting',
    time: 8,
    ingredients: [
      {
        name: 'steel_plate',
        amount: 15
      },
      {
        name: 'copper_plate',
        amount: 15
      },
      {
        name: 'electronic_circuit',
        amount: 10
      },
      {
        name: 'advanced_circuit',
        amount: 5
      }
    ],
    results: [
      {
        name: 'railgun',
        amount: 1
      }
    ],
    ui_name: 'Railgun'
  },
  automation_science_pack: {
    name: 'automation_science_pack',
    category: 'crafting',
    time: 5,
    ingredients: [
      {
        name: 'copper_plate',
        amount: 1
      },
      {
        name: 'iron_gear_wheel',
        amount: 1
      }
    ],
    results: [
      {
        name: 'automation_science_pack',
        amount: 1
      }
    ],
    ui_name: 'Automation science pack'
  },
  logistic_science_pack: {
    name: 'logistic_science_pack',
    category: 'crafting',
    time: 6,
    ingredients: [
      {
        name: 'inserter',
        amount: 1
      },
      {
        name: 'transport_belt',
        amount: 1
      }
    ],
    results: [
      {
        name: 'logistic_science_pack',
        amount: 1
      }
    ],
    ui_name: 'Logistic science pack',
    description: 'Allows research of improved logistics, automation and simple military.'
  },
  chemical_science_pack: {
    name: 'chemical_science_pack',
    category: 'crafting',
    time: 24,
    ingredients: [
      {
        name: 'engine_unit',
        amount: 2
      },
      {
        name: 'advanced_circuit',
        amount: 3
      },
      {
        name: 'solid_fuel',
        amount: 1
      }
    ],
    results: [
      {
        name: 'chemical_science_pack',
        amount: 2
      }
    ],
    ui_name: 'Chemical science pack',
    description: 'Allows research of advanced items, making use of oil products.'
  },
  military_science_pack: {
    name: 'military_science_pack',
    category: 'crafting',
    time: 10,
    ingredients: [
      {
        name: 'piercing_rounds_magazine',
        amount: 1
      },
      {
        name: 'grenade',
        amount: 1
      },
      {
        name: 'stone_wall',
        amount: 2
      }
    ],
    results: [
      {
        name: 'military_science_pack',
        amount: 2
      }
    ],
    ui_name: 'Military science pack',
    description: 'Allows research of further military options.'
  },
  production_science_pack: {
    name: 'production_science_pack',
    category: 'crafting',
    time: 21,
    ingredients: [
      {
        name: 'electric_furnace',
        amount: 1
      },
      {
        name: 'productivity_module',
        amount: 1
      },
      {
        name: 'rail',
        amount: 30
      }
    ],
    results: [
      {
        name: 'production_science_pack',
        amount: 3
      }
    ],
    ui_name: 'Production science pack',
    description: 'Allows research of most efficient machines, modules and processes.'
  },
  utility_science_pack: {
    name: 'utility_science_pack',
    category: 'crafting',
    time: 21,
    ingredients: [
      {
        name: 'low_density_structure',
        amount: 3
      },
      {
        name: 'processing_unit',
        amount: 2
      },
      {
        name: 'flying_robot_frame',
        amount: 1
      }
    ],
    results: [
      {
        name: 'utility_science_pack',
        amount: 3
      }
    ],
    ui_name: 'Utility science pack',
    description: 'Allows research of most powerful weaponry, personal equipment and robot coordination.'
  },
  lab: {
    name: 'lab',
    category: 'crafting',
    time: 2,
    ingredients: [
      {
        name: 'electronic_circuit',
        amount: 10
      },
      {
        name: 'iron_gear_wheel',
        amount: 10
      },
      {
        name: 'transport_belt',
        amount: 4
      }
    ],
    results: [
      {
        name: 'lab',
        amount: 1
      }
    ],
    ui_name: 'Lab'
  },
  red_wire: {
    name: 'red_wire',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'electronic_circuit',
        amount: 1
      },
      {
        name: 'copper_cable',
        amount: 1
      }
    ],
    results: [
      {
        name: 'red_wire',
        amount: 1
      }
    ],
    ui_name: 'Red wire',
    description: 'Used to connect machines to the circuit network using __CONTROL__build__.'
  },
  green_wire: {
    name: 'green_wire',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'electronic_circuit',
        amount: 1
      },
      {
        name: 'copper_cable',
        amount: 1
      }
    ],
    results: [
      {
        name: 'green_wire',
        amount: 1
      }
    ],
    ui_name: 'Green wire',
    description: 'Used to connect machines to the circuit network using __CONTROL__build__.'
  },
  underground_belt: {
    name: 'underground_belt',
    category: 'crafting',
    time: 1,
    ingredients: [
      {
        name: 'iron_plate',
        amount: 10
      },
      {
        name: 'transport_belt',
        amount: 5
      }
    ],
    results: [
      {
        name: 'underground_belt',
        amount: 2
      }
    ],
    ui_name: 'Underground belt'
  },
  fast_underground_belt: {
    name: 'fast_underground_belt',
    category: 'crafting',
    time: 2,
    ingredients: [
      {
        name: 'iron_gear_wheel',
        amount: 40
      },
      {
        name: 'underground_belt',
        amount: 2
      }
    ],
    results: [
      {
        name: 'fast_underground_belt',
        amount: 2
      }
    ],
    ui_name: 'Fast underground belt'
  },
  express_underground_belt: {
    name: 'express_underground_belt',
    category: 'crafting_with_fluid',
    time: 2,
    ingredients: [
      {
        name: 'iron_gear_wheel',
        amount: 80
      },
      {
        name: 'fast_underground_belt',
        amount: 2
      },
      {
        type: 'fluid',
        name: 'lubricant',
        amount: 40
      }
    ],
    results: [
      {
        name: 'express_underground_belt',
        amount: 2
      }
    ],
    ui_name: 'Express underground belt'
  },
  splitter: {
    name: 'splitter',
    category: 'crafting',
    time: 1,
    ingredients: [
      {
        name: 'electronic_circuit',
        amount: 5
      },
      {
        name: 'iron_plate',
        amount: 5
      },
      {
        name: 'transport_belt',
        amount: 4
      }
    ],
    results: [
      {
        name: 'splitter',
        amount: 1
      }
    ],
    ui_name: 'Splitter',
    description: 'Splits incoming transport belts\' cargo 1:1'
  },
  fast_splitter: {
    name: 'fast_splitter',
    category: 'crafting',
    time: 2,
    ingredients: [
      {
        name: 'splitter',
        amount: 1
      },
      {
        name: 'iron_gear_wheel',
        amount: 10
      },
      {
        name: 'electronic_circuit',
        amount: 10
      }
    ],
    results: [
      {
        name: 'fast_splitter',
        amount: 1
      }
    ],
    ui_name: 'Fast splitter',
    description: 'Splits incoming transport belts\' cargo 1:1'
  },
  express_splitter: {
    name: 'express_splitter',
    category: 'crafting_with_fluid',
    time: 2,
    ingredients: [
      {
        name: 'fast_splitter',
        amount: 1
      },
      {
        name: 'iron_gear_wheel',
        amount: 10
      },
      {
        name: 'advanced_circuit',
        amount: 10
      },
      {
        type: 'fluid',
        name: 'lubricant',
        amount: 80
      }
    ],
    results: [
      {
        name: 'express_splitter',
        amount: 1
      }
    ],
    ui_name: 'Express splitter',
    description: 'Splits incoming transport belts\' cargo 1:1'
  },
  advanced_circuit: {
    name: 'advanced_circuit',
    category: 'crafting',
    time: 6,
    ingredients: [
      {
        name: 'electronic_circuit',
        amount: 2
      },
      {
        name: 'plastic_bar',
        amount: 2
      },
      {
        name: 'copper_cable',
        amount: 4
      }
    ],
    results: [
      {
        name: 'advanced_circuit',
        amount: 1
      }
    ],
    ui_name: 'Advanced circuit'
  },
  processing_unit: {
    name: 'processing_unit',
    category: 'crafting_with_fluid',
    time: 10,
    ingredients: [
      {
        name: 'electronic_circuit',
        amount: 20
      },
      {
        name: 'advanced_circuit',
        amount: 2
      },
      {
        type: 'fluid',
        name: 'sulfuric_acid',
        amount: 5
      }
    ],
    results: [
      {
        name: 'processing_unit',
        amount: 1
      }
    ],
    ui_name: 'Processing unit'
  },
  logistic_robot: {
    name: 'logistic_robot',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'flying_robot_frame',
        amount: 1
      },
      {
        name: 'advanced_circuit',
        amount: 2
      }
    ],
    results: [
      {
        name: 'logistic_robot',
        amount: 1
      }
    ],
    ui_name: 'Logistic robot',
    description: 'Transports items between logistic chests.'
  },
  construction_robot: {
    name: 'construction_robot',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'flying_robot_frame',
        amount: 1
      },
      {
        name: 'electronic_circuit',
        amount: 2
      }
    ],
    results: [
      {
        name: 'construction_robot',
        amount: 1
      }
    ],
    ui_name: 'Construction robot',
    description: 'Automatically build and repair friendly entities.'
  },
  logistic_chest_passive_provider: {
    name: 'logistic_chest_passive_provider',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'steel_chest',
        amount: 1
      },
      {
        name: 'electronic_circuit',
        amount: 3
      },
      {
        name: 'advanced_circuit',
        amount: 1
      }
    ],
    results: [
      {
        name: 'logistic_chest_passive_provider',
        amount: 1
      }
    ],
    ui_name: 'Passive provider chest',
    description: 'Makes its content available for the logistic network.'
  },
  logistic_chest_active_provider: {
    name: 'logistic_chest_active_provider',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'steel_chest',
        amount: 1
      },
      {
        name: 'electronic_circuit',
        amount: 3
      },
      {
        name: 'advanced_circuit',
        amount: 1
      }
    ],
    results: [
      {
        name: 'logistic_chest_active_provider',
        amount: 1
      }
    ],
    ui_name: 'Active provider chest',
    description: 'Sends its content to the logistic network.'
  },
  logistic_chest_storage: {
    name: 'logistic_chest_storage',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'steel_chest',
        amount: 1
      },
      {
        name: 'electronic_circuit',
        amount: 3
      },
      {
        name: 'advanced_circuit',
        amount: 1
      }
    ],
    results: [
      {
        name: 'logistic_chest_storage',
        amount: 1
      }
    ],
    ui_name: 'Storage chest',
    description: 'Long-term storage for the logistic network.'
  },
  logistic_chest_buffer: {
    name: 'logistic_chest_buffer',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'steel_chest',
        amount: 1
      },
      {
        name: 'electronic_circuit',
        amount: 3
      },
      {
        name: 'advanced_circuit',
        amount: 1
      }
    ],
    results: [
      {
        name: 'logistic_chest_buffer',
        amount: 1
      }
    ],
    ui_name: 'Buffer chest',
    description: 'Requests specified items to be available for personal logistics and automated construction.'
  },
  logistic_chest_requester: {
    name: 'logistic_chest_requester',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'steel_chest',
        amount: 1
      },
      {
        name: 'electronic_circuit',
        amount: 3
      },
      {
        name: 'advanced_circuit',
        amount: 1
      }
    ],
    results: [
      {
        name: 'logistic_chest_requester',
        amount: 1
      }
    ],
    ui_name: 'Requester chest',
    description: 'Requests specified items from the logistic network.'
  },
  rocket_silo: {
    name: 'rocket_silo',
    category: 'crafting',
    time: 30,
    ingredients: [
      {
        name: 'steel_plate',
        amount: 1000
      },
      {
        name: 'concrete',
        amount: 1000
      },
      {
        name: 'pipe',
        amount: 100
      },
      {
        name: 'processing_unit',
        amount: 200
      },
      {
        name: 'electric_engine_unit',
        amount: 200
      }
    ],
    results: [
      {
        name: 'rocket_silo',
        amount: 1
      }
    ],
    requester_paste_multiplier: 1,
    ui_name: 'Rocket silo',
    description: 'Used to build and launch a rocket to win the game.'
  },
  roboport: {
    name: 'roboport',
    category: 'crafting',
    time: 5,
    ingredients: [
      {
        name: 'steel_plate',
        amount: 45
      },
      {
        name: 'iron_gear_wheel',
        amount: 45
      },
      {
        name: 'advanced_circuit',
        amount: 45
      }
    ],
    results: [
      {
        name: 'roboport',
        amount: 1
      }
    ],
    ui_name: 'Roboport'
  },
  big_electric_pole: {
    name: 'big_electric_pole',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'iron_stick',
        amount: 8
      },
      {
        name: 'steel_plate',
        amount: 5
      },
      {
        name: 'copper_plate',
        amount: 5
      }
    ],
    results: [
      {
        name: 'big_electric_pole',
        amount: 1
      }
    ],
    ui_name: 'Big electric pole'
  },
  substation: {
    name: 'substation',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'steel_plate',
        amount: 10
      },
      {
        name: 'advanced_circuit',
        amount: 5
      },
      {
        name: 'copper_plate',
        amount: 5
      }
    ],
    results: [
      {
        name: 'substation',
        amount: 1
      }
    ],
    ui_name: 'Substation'
  },
  medium_electric_pole: {
    name: 'medium_electric_pole',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'iron_stick',
        amount: 4
      },
      {
        name: 'steel_plate',
        amount: 2
      },
      {
        name: 'copper_plate',
        amount: 2
      }
    ],
    results: [
      {
        name: 'medium_electric_pole',
        amount: 1
      }
    ],
    ui_name: 'Medium electric pole'
  },
  accumulator: {
    name: 'accumulator',
    category: 'crafting',
    time: 10,
    ingredients: [
      {
        name: 'iron_plate',
        amount: 2
      },
      {
        name: 'battery',
        amount: 5
      }
    ],
    results: [
      {
        name: 'accumulator',
        amount: 1
      }
    ],
    ui_name: 'Accumulator',
    description: 'Connects to the electric network and stores electric energy.'
  },
  steel_furnace: {
    name: 'steel_furnace',
    category: 'crafting',
    time: 3,
    ingredients: [
      {
        name: 'steel_plate',
        amount: 6
      },
      {
        name: 'stone_brick',
        amount: 10
      }
    ],
    results: [
      {
        name: 'steel_furnace',
        amount: 1
      }
    ],
    ui_name: 'Steel furnace'
  },
  electric_furnace: {
    name: 'electric_furnace',
    category: 'crafting',
    time: 5,
    ingredients: [
      {
        name: 'steel_plate',
        amount: 10
      },
      {
        name: 'advanced_circuit',
        amount: 5
      },
      {
        name: 'stone_brick',
        amount: 10
      }
    ],
    results: [
      {
        name: 'electric_furnace',
        amount: 1
      }
    ],
    ui_name: 'Electric furnace'
  },
  beacon: {
    name: 'beacon',
    category: 'crafting',
    time: 15,
    ingredients: [
      {
        name: 'electronic_circuit',
        amount: 20
      },
      {
        name: 'advanced_circuit',
        amount: 20
      },
      {
        name: 'steel_plate',
        amount: 10
      },
      {
        name: 'copper_cable',
        amount: 10
      }
    ],
    results: [
      {
        name: 'beacon',
        amount: 1
      }
    ],
    ui_name: 'Beacon',
    description: 'Transmits the effect of modules to nearby friendly entities.'
  },
  pumpjack: {
    name: 'pumpjack',
    category: 'crafting',
    time: 5,
    ingredients: [
      {
        name: 'steel_plate',
        amount: 5
      },
      {
        name: 'iron_gear_wheel',
        amount: 10
      },
      {
        name: 'electronic_circuit',
        amount: 5
      },
      {
        name: 'pipe',
        amount: 10
      }
    ],
    results: [
      {
        name: 'pumpjack',
        amount: 1
      }
    ],
    ui_name: 'Pumpjack'
  },
  oil_refinery: {
    name: 'oil_refinery',
    category: 'crafting',
    time: 8,
    ingredients: [
      {
        name: 'steel_plate',
        amount: 15
      },
      {
        name: 'iron_gear_wheel',
        amount: 10
      },
      {
        name: 'stone_brick',
        amount: 10
      },
      {
        name: 'electronic_circuit',
        amount: 10
      },
      {
        name: 'pipe',
        amount: 10
      }
    ],
    results: [
      {
        name: 'oil_refinery',
        amount: 1
      }
    ],
    ui_name: 'Oil refinery'
  },
  engine_unit: {
    name: 'engine_unit',
    category: 'advanced_crafting',
    time: 10,
    ingredients: [
      {
        name: 'steel_plate',
        amount: 1
      },
      {
        name: 'iron_gear_wheel',
        amount: 1
      },
      {
        name: 'pipe',
        amount: 2
      }
    ],
    results: [
      {
        name: 'engine_unit',
        amount: 1
      }
    ],
    ui_name: 'Engine unit'
  },
  electric_engine_unit: {
    name: 'electric_engine_unit',
    category: 'crafting_with_fluid',
    time: 10,
    ingredients: [
      {
        name: 'engine_unit',
        amount: 1
      },
      {
        type: 'fluid',
        name: 'lubricant',
        amount: 15
      },
      {
        name: 'electronic_circuit',
        amount: 2
      }
    ],
    results: [
      {
        name: 'electric_engine_unit',
        amount: 1
      }
    ],
    ui_name: 'Electric engine unit'
  },
  flying_robot_frame: {
    name: 'flying_robot_frame',
    category: 'crafting',
    time: 20,
    ingredients: [
      {
        name: 'electric_engine_unit',
        amount: 1
      },
      {
        name: 'battery',
        amount: 2
      },
      {
        name: 'steel_plate',
        amount: 1
      },
      {
        name: 'electronic_circuit',
        amount: 3
      }
    ],
    results: [
      {
        name: 'flying_robot_frame',
        amount: 1
      }
    ],
    ui_name: 'Flying robot frame'
  },
  explosives: {
    name: 'explosives',
    category: 'chemistry',
    time: 4,
    ingredients: [
      {
        type: 'item',
        name: 'sulfur',
        amount: 1
      },
      {
        type: 'item',
        name: 'coal',
        amount: 1
      },
      {
        type: 'fluid',
        name: 'water',
        amount: 10
      }
    ],
    results: [
      {
        name: 'explosives',
        amount: 2
      }
    ],
    crafting_machine_tint: {
      primary: {
        r: 0.955,
        g: 0.945,
        b: 0,
        a: 0
      },
      secondary: {
        r: 0,
        g: 0.441,
        b: 0.659,
        a: 0.898
      },
      tertiary: {
        r: 0,
        g: 0.288,
        b: 0.365,
        a: 0
      }
    },
    ui_name: 'Explosives',
    description: 'Developing dangerous yet controllable explosives.'
  },
  battery: {
    name: 'battery',
    category: 'chemistry',
    time: 4,
    ingredients: [
      {
        type: 'fluid',
        name: 'sulfuric_acid',
        amount: 20
      },
      {
        name: 'iron_plate',
        amount: 1
      },
      {
        name: 'copper_plate',
        amount: 1
      }
    ],
    results: [
      {
        name: 'battery',
        amount: 1
      }
    ],
    crafting_machine_tint: {
      primary: {
        r: 0.97,
        g: 0.611,
        b: 0,
        a: 0
      },
      secondary: {
        r: 0,
        g: 0.68,
        b: 0.894,
        a: 0.357
      },
      tertiary: {
        r: 0.43,
        g: 0.805,
        b: 0.726,
        a: 0
      }
    },
    ui_name: 'Battery',
    description: 'Electrochemical cell that stores and provides energy to electrical devices.'
  },
  storage_tank: {
    name: 'storage_tank',
    category: 'crafting',
    time: 3,
    ingredients: [
      {
        name: 'iron_plate',
        amount: 20
      },
      {
        name: 'steel_plate',
        amount: 5
      }
    ],
    results: [
      {
        name: 'storage_tank',
        amount: 1
      }
    ],
    ui_name: 'Storage tank'
  },
  pump: {
    name: 'pump',
    category: 'crafting',
    time: 2,
    ingredients: [
      {
        name: 'engine_unit',
        amount: 1
      },
      {
        name: 'steel_plate',
        amount: 1
      },
      {
        name: 'pipe',
        amount: 1
      }
    ],
    results: [
      {
        name: 'pump',
        amount: 1
      }
    ],
    ui_name: 'Pump'
  },
  chemical_plant: {
    name: 'chemical_plant',
    category: 'crafting',
    time: 5,
    ingredients: [
      {
        name: 'steel_plate',
        amount: 5
      },
      {
        name: 'iron_gear_wheel',
        amount: 5
      },
      {
        name: 'electronic_circuit',
        amount: 5
      },
      {
        name: 'pipe',
        amount: 5
      }
    ],
    results: [
      {
        name: 'chemical_plant',
        amount: 1
      }
    ],
    ui_name: 'Chemical plant'
  },
  small_plane: {
    name: 'small_plane',
    category: 'crafting',
    time: 30,
    ingredients: [
      {
        name: 'plastic_bar',
        amount: 100
      },
      {
        name: 'advanced_circuit',
        amount: 200
      },
      {
        name: 'electric_engine_unit',
        amount: 20
      },
      {
        name: 'battery',
        amount: 100
      }
    ],
    results: [
      {
        name: 'small_plane',
        amount: 1
      }
    ],
    ui_name: 'Small plane'
  },
  arithmetic_combinator: {
    name: 'arithmetic_combinator',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'copper_cable',
        amount: 5
      },
      {
        name: 'electronic_circuit',
        amount: 5
      }
    ],
    results: [
      {
        name: 'arithmetic_combinator',
        amount: 1
      }
    ],
    ui_name: 'Arithmetic combinator',
    description: 'Performs arithmetic operations on circuit network signals.'
  },
  decider_combinator: {
    name: 'decider_combinator',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'copper_cable',
        amount: 5
      },
      {
        name: 'electronic_circuit',
        amount: 5
      }
    ],
    results: [
      {
        name: 'decider_combinator',
        amount: 1
      }
    ],
    ui_name: 'Decider combinator',
    description: 'Compares circuit network signals.'
  },
  constant_combinator: {
    name: 'constant_combinator',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'copper_cable',
        amount: 5
      },
      {
        name: 'electronic_circuit',
        amount: 2
      }
    ],
    results: [
      {
        name: 'constant_combinator',
        amount: 1
      }
    ],
    ui_name: 'Constant combinator',
    description: 'Outputs constant circuit network signals.'
  },
  power_switch: {
    name: 'power_switch',
    category: 'crafting',
    time: 2,
    ingredients: [
      {
        name: 'iron_plate',
        amount: 5
      },
      {
        name: 'copper_cable',
        amount: 5
      },
      {
        name: 'electronic_circuit',
        amount: 2
      }
    ],
    results: [
      {
        name: 'power_switch',
        amount: 1
      }
    ],
    ui_name: 'Power switch',
    description: 'Used to control the connections of the electric network. Can also be controlled by the circuit network.'
  },
  programmable_speaker: {
    name: 'programmable_speaker',
    category: 'crafting',
    time: 2,
    ingredients: [
      {
        name: 'iron_plate',
        amount: 3
      },
      {
        name: 'iron_stick',
        amount: 4
      },
      {
        name: 'copper_cable',
        amount: 5
      },
      {
        name: 'electronic_circuit',
        amount: 4
      }
    ],
    results: [
      {
        name: 'programmable_speaker',
        amount: 1
      }
    ],
    ui_name: 'Programmable speaker'
  },
  low_density_structure: {
    name: 'low_density_structure',
    category: 'crafting',
    time: 20,
    ingredients: [
      {
        name: 'steel_plate',
        amount: 2
      },
      {
        name: 'copper_plate',
        amount: 20
      },
      {
        name: 'plastic_bar',
        amount: 5
      }
    ],
    results: [
      {
        name: 'low_density_structure',
        amount: 1
      }
    ],
    ui_name: 'Low density structure',
    description: 'Light yet sturdy material, very useful for space ships and personal equipment.'
  },
  rocket_fuel: {
    name: 'rocket_fuel',
    category: 'crafting',
    time: 30,
    ingredients: [
      {
        name: 'solid_fuel',
        amount: 10
      }
    ],
    results: [
      {
        name: 'rocket_fuel',
        amount: 1
      }
    ],
    ui_name: 'Rocket fuel',
    description: 'Sophisticated multipurpose fuel.'
  },
  rocket_control_unit: {
    name: 'rocket_control_unit',
    category: 'crafting',
    time: 30,
    ingredients: [
      {
        name: 'processing_unit',
        amount: 1
      },
      {
        name: 'speed_module',
        amount: 1
      }
    ],
    results: [
      {
        name: 'rocket_control_unit',
        amount: 1
      }
    ],
    ui_name: 'Rocket control unit',
    description: 'Advanced computing unit capable of controlling rocket systems.'
  },
  rocket_part: {
    name: 'rocket_part',
    category: 'rocket_building',
    hidden: true,
    time: 3,
    ingredients: [
      {
        name: 'rocket_control_unit',
        amount: 10
      },
      {
        name: 'low_density_structure',
        amount: 10
      },
      {
        name: 'rocket_fuel',
        amount: 10
      }
    ],
    results: [
      {
        name: 'rocket_part',
        amount: 1
      }
    ],
    ui_name: 'Rocket part'
  },
  satellite: {
    name: 'satellite',
    category: 'crafting',
    time: 5,
    ingredients: [
      {
        name: 'low_density_structure',
        amount: 100
      },
      {
        name: 'solar_panel',
        amount: 100
      },
      {
        name: 'accumulator',
        amount: 100
      },
      {
        name: 'radar',
        amount: 5
      },
      {
        name: 'processing_unit',
        amount: 100
      },
      {
        name: 'rocket_fuel',
        amount: 50
      }
    ],
    results: [
      {
        name: 'satellite',
        amount: 1
      }
    ],
    requester_paste_multiplier: 1,
    ui_name: 'Satellite',
    description: 'The satellite should be put into the rocket.'
  },
  concrete: {
    name: 'concrete',
    category: 'crafting_with_fluid',
    time: 10,
    ingredients: [
      {
        name: 'stone_brick',
        amount: 5
      },
      {
        name: 'iron_ore',
        amount: 1
      },
      {
        type: 'fluid',
        name: 'water',
        amount: 100
      }
    ],
    results: [
      {
        name: 'concrete',
        amount: 10
      }
    ],
    ui_name: 'Concrete',
    description: 'Advanced building material also used for flooring.'
  },
  hazard_concrete: {
    name: 'hazard_concrete',
    category: 'crafting',
    time: 0.25,
    ingredients: [
      {
        name: 'concrete',
        amount: 10
      }
    ],
    results: [
      {
        name: 'hazard_concrete',
        amount: 10
      }
    ],
    ui_name: 'Hazard concrete'
  },
  refined_concrete: {
    name: 'refined_concrete',
    category: 'crafting_with_fluid',
    time: 15,
    ingredients: [
      {
        name: 'concrete',
        amount: 20
      },
      {
        name: 'iron_stick',
        amount: 8
      },
      {
        name: 'steel_plate',
        amount: 1
      },
      {
        type: 'fluid',
        name: 'water',
        amount: 100
      }
    ],
    results: [
      {
        name: 'refined_concrete',
        amount: 10
      }
    ],
    ui_name: 'Refined concrete'
  },
  refined_hazard_concrete: {
    name: 'refined_hazard_concrete',
    category: 'crafting',
    time: 0.25,
    ingredients: [
      {
        name: 'refined_concrete',
        amount: 10
      }
    ],
    results: [
      {
        name: 'refined_hazard_concrete',
        amount: 10
      }
    ],
    ui_name: 'Refined hazard concrete'
  },
  landfill: {
    name: 'landfill',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'stone',
        amount: 20
      }
    ],
    results: [
      {
        name: 'landfill',
        amount: 1
      }
    ],
    ui_name: 'Landfill',
    description: 'Used to fill in water that\'s in the way.'
  },
  nuclear_reactor: {
    name: 'nuclear_reactor',
    category: 'crafting',
    time: 8,
    ingredients: [
      {
        name: 'concrete',
        amount: 500
      },
      {
        name: 'steel_plate',
        amount: 500
      },
      {
        name: 'advanced_circuit',
        amount: 500
      },
      {
        name: 'copper_plate',
        amount: 500
      }
    ],
    results: [
      {
        name: 'nuclear_reactor',
        amount: 1
      }
    ],
    requester_paste_multiplier: 1,
    ui_name: 'Nuclear reactor'
  },
  centrifuge: {
    name: 'centrifuge',
    category: 'crafting',
    time: 4,
    ingredients: [
      {
        name: 'concrete',
        amount: 100
      },
      {
        name: 'steel_plate',
        amount: 50
      },
      {
        name: 'advanced_circuit',
        amount: 100
      },
      {
        name: 'iron_gear_wheel',
        amount: 100
      }
    ],
    results: [
      {
        name: 'centrifuge',
        amount: 1
      }
    ],
    requester_paste_multiplier: 10,
    ui_name: 'Centrifuge',
    description: 'Processes uranium ore and splits it into uranium 235 and uranium 238.'
  },
  uranium_processing: {
    name: 'uranium_processing',
    category: 'centrifuging',
    time: 12,
    ingredients: [
      {
        name: 'uranium_ore',
        amount: 10
      }
    ],
    results: [
      {
        name: 'uranium_235',
        probability: 0.007,
        amount: 1
      },
      {
        name: 'uranium_238',
        probability: 0.993,
        amount: 1
      }
    ],
    ui_name: 'Uranium processing',
    description: 'Uranium ore is processed in centrifuges into uranium-238, with a chance to result in a richer uranium-235. Both are needed to create uranium fuel cells.'
  },
  kovarex_enrichment_process: {
    name: 'kovarex_enrichment_process',
    category: 'centrifuging',
    time: 60,
    ingredients: [
      {
        name: 'uranium_235',
        amount: 40
      },
      {
        name: 'uranium_238',
        amount: 5
      }
    ],
    results: [
      [
        'uranium_235',
        41
      ],
      [
        'uranium_238',
        2
      ]
    ],
    ui_name: 'Kovarex enrichment process',
    description: 'The process to create uranium-235 from uranium-238. It requires a large amount of uranium-235 as a catalyst.'
  },
  nuclear_fuel: {
    name: 'nuclear_fuel',
    category: 'centrifuging',
    time: 90,
    ingredients: [
      {
        name: 'uranium_235',
        amount: 1
      },
      {
        name: 'rocket_fuel',
        amount: 1
      }
    ],
    results: [
      {
        name: 'nuclear_fuel',
        amount: 1
      }
    ],
    ui_name: 'Nuclear fuel'
  },
  nuclear_fuel_reprocessing: {
    name: 'nuclear_fuel_reprocessing',
    category: 'centrifuging',
    time: 60,
    ingredients: [
      {
        name: 'used_up_uranium_fuel_cell',
        amount: 5
      }
    ],
    results: [
      [
        'uranium_238',
        3
      ]
    ],
    ui_name: 'Nuclear fuel reprocessing',
    description: 'The process of reprocessing used nuclear fuel to create uranium-238.'
  },
  uranium_fuel_cell: {
    name: 'uranium_fuel_cell',
    category: 'crafting',
    time: 10,
    ingredients: [
      {
        name: 'iron_plate',
        amount: 10
      },
      {
        name: 'uranium_235',
        amount: 1
      },
      {
        name: 'uranium_238',
        amount: 19
      }
    ],
    results: [
      {
        name: 'uranium_fuel_cell',
        amount: 10
      }
    ],
    ui_name: 'Uranium fuel cell'
  },
  heat_exchanger: {
    name: 'heat_exchanger',
    category: 'crafting',
    time: 3,
    ingredients: [
      {
        name: 'steel_plate',
        amount: 10
      },
      {
        name: 'copper_plate',
        amount: 100
      },
      {
        name: 'pipe',
        amount: 10
      }
    ],
    results: [
      {
        name: 'heat_exchanger',
        amount: 1
      }
    ],
    ui_name: 'Heat exchanger',
    description: 'Exchanges heat between a heat source and a fluid.'
  },
  heat_pipe: {
    name: 'heat_pipe',
    category: 'crafting',
    time: 1,
    ingredients: [
      {
        name: 'steel_plate',
        amount: 10
      },
      {
        name: 'copper_plate',
        amount: 20
      }
    ],
    results: [
      {
        name: 'heat_pipe',
        amount: 1
      }
    ],
    ui_name: 'Heat pipe'
  },
  steam_turbine: {
    name: 'steam_turbine',
    category: 'crafting',
    time: 3,
    ingredients: [
      {
        name: 'iron_gear_wheel',
        amount: 50
      },
      {
        name: 'copper_plate',
        amount: 50
      },
      {
        name: 'pipe',
        amount: 20
      }
    ],
    results: [
      {
        name: 'steam_turbine',
        amount: 1
      }
    ],
    ui_name: 'Steam turbine',
    description: 'Consumes steam to create electric energy.'
  },
  laser_turret: {
    name: 'laser_turret',
    category: 'crafting',
    time: 20,
    ingredients: [
      {
        name: 'steel_plate',
        amount: 20
      },
      {
        name: 'electronic_circuit',
        amount: 20
      },
      {
        name: 'battery',
        amount: 12
      }
    ],
    results: [
      {
        name: 'laser_turret',
        amount: 1
      }
    ],
    ui_name: 'Laser turret'
  },
  flamethrower_turret: {
    name: 'flamethrower_turret',
    category: 'crafting',
    time: 20,
    ingredients: [
      {
        name: 'steel_plate',
        amount: 30
      },
      {
        name: 'iron_gear_wheel',
        amount: 15
      },
      {
        name: 'pipe',
        amount: 10
      },
      {
        name: 'engine_unit',
        amount: 5
      }
    ],
    results: [
      {
        name: 'flamethrower_turret',
        amount: 1
      }
    ],
    ui_name: 'Flamethrower turret',
    description: 'Fires a stream of burning liquid at enemies.'
  },
  artillery_turret: {
    name: 'artillery_turret',
    category: 'crafting',
    time: 40,
    ingredients: [
      {
        name: 'steel_plate',
        amount: 60
      },
      {
        name: 'concrete',
        amount: 60
      },
      {
        name: 'iron_gear_wheel',
        amount: 40
      },
      {
        name: 'advanced_circuit',
        amount: 20
      }
    ],
    results: [
      {
        name: 'artillery_turret',
        amount: 1
      }
    ],
    ui_name: 'Artillery turret',
    description: 'Long range cannon targeting enemy bases.'
  },
  fill_water_barrel: {
    name: 'fill_water_barrel',
    category: 'crafting_with_fluid',
    time: 0.2,
    ingredients: [
      {
        type: 'fluid',
        name: 'water',
        amount: 50,
        catalyst_amount: 50
      },
      {
        type: 'item',
        name: 'empty_barrel',
        amount: 1,
        catalyst_amount: 1
      }
    ],
    results: [
      {
        type: 'item',
        name: 'water_barrel',
        amount: 1,
        catalyst_amount: 1
      }
    ],
    ui_name: 'Fill water barrel'
  },
  empty_water_barrel: {
    name: 'empty_water_barrel',
    category: 'crafting_with_fluid',
    time: 0.2,
    ingredients: [
      {
        type: 'item',
        name: 'water_barrel',
        amount: 1,
        catalyst_amount: 1
      }
    ],
    results: [
      {
        type: 'fluid',
        name: 'water',
        amount: 50,
        catalyst_amount: 50
      },
      {
        type: 'item',
        name: 'empty_barrel',
        amount: 1,
        catalyst_amount: 1
      }
    ],
    ui_name: 'Empty water barrel'
  },
  fill_crude_oil_barrel: {
    name: 'fill_crude_oil_barrel',
    category: 'crafting_with_fluid',
    time: 0.2,
    ingredients: [
      {
        type: 'fluid',
        name: 'crude_oil',
        amount: 50,
        catalyst_amount: 50
      },
      {
        type: 'item',
        name: 'empty_barrel',
        amount: 1,
        catalyst_amount: 1
      }
    ],
    results: [
      {
        type: 'item',
        name: 'crude_oil_barrel',
        amount: 1,
        catalyst_amount: 1
      }
    ],
    ui_name: 'Fill crude oil barrel'
  },
  empty_crude_oil_barrel: {
    name: 'empty_crude_oil_barrel',
    category: 'crafting_with_fluid',
    time: 0.2,
    ingredients: [
      {
        type: 'item',
        name: 'crude_oil_barrel',
        amount: 1,
        catalyst_amount: 1
      }
    ],
    results: [
      {
        type: 'fluid',
        name: 'crude_oil',
        amount: 50,
        catalyst_amount: 50
      },
      {
        type: 'item',
        name: 'empty_barrel',
        amount: 1,
        catalyst_amount: 1
      }
    ],
    ui_name: 'Empty crude oil barrel'
  },
  fill_heavy_oil_barrel: {
    name: 'fill_heavy_oil_barrel',
    category: 'crafting_with_fluid',
    time: 0.2,
    ingredients: [
      {
        type: 'fluid',
        name: 'heavy_oil',
        amount: 50,
        catalyst_amount: 50
      },
      {
        type: 'item',
        name: 'empty_barrel',
        amount: 1,
        catalyst_amount: 1
      }
    ],
    results: [
      {
        type: 'item',
        name: 'heavy_oil_barrel',
        amount: 1,
        catalyst_amount: 1
      }
    ],
    ui_name: 'Fill heavy oil barrel'
  },
  empty_heavy_oil_barrel: {
    name: 'empty_heavy_oil_barrel',
    category: 'crafting_with_fluid',
    time: 0.2,
    ingredients: [
      {
        type: 'item',
        name: 'heavy_oil_barrel',
        amount: 1,
        catalyst_amount: 1
      }
    ],
    results: [
      {
        type: 'fluid',
        name: 'heavy_oil',
        amount: 50,
        catalyst_amount: 50
      },
      {
        type: 'item',
        name: 'empty_barrel',
        amount: 1,
        catalyst_amount: 1
      }
    ],
    ui_name: 'Empty heavy oil barrel'
  },
  fill_light_oil_barrel: {
    name: 'fill_light_oil_barrel',
    category: 'crafting_with_fluid',
    time: 0.2,
    ingredients: [
      {
        type: 'fluid',
        name: 'light_oil',
        amount: 50,
        catalyst_amount: 50
      },
      {
        type: 'item',
        name: 'empty_barrel',
        amount: 1,
        catalyst_amount: 1
      }
    ],
    results: [
      {
        type: 'item',
        name: 'light_oil_barrel',
        amount: 1,
        catalyst_amount: 1
      }
    ],
    ui_name: 'Fill light oil barrel'
  },
  empty_light_oil_barrel: {
    name: 'empty_light_oil_barrel',
    category: 'crafting_with_fluid',
    time: 0.2,
    ingredients: [
      {
        type: 'item',
        name: 'light_oil_barrel',
        amount: 1,
        catalyst_amount: 1
      }
    ],
    results: [
      {
        type: 'fluid',
        name: 'light_oil',
        amount: 50,
        catalyst_amount: 50
      },
      {
        type: 'item',
        name: 'empty_barrel',
        amount: 1,
        catalyst_amount: 1
      }
    ],
    ui_name: 'Empty light oil barrel'
  },
  fill_petroleum_gas_barrel: {
    name: 'fill_petroleum_gas_barrel',
    category: 'crafting_with_fluid',
    time: 0.2,
    ingredients: [
      {
        type: 'fluid',
        name: 'petroleum_gas',
        amount: 50,
        catalyst_amount: 50
      },
      {
        type: 'item',
        name: 'empty_barrel',
        amount: 1,
        catalyst_amount: 1
      }
    ],
    results: [
      {
        type: 'item',
        name: 'petroleum_gas_barrel',
        amount: 1,
        catalyst_amount: 1
      }
    ],
    ui_name: 'Fill petroleum gas barrel'
  },
  empty_petroleum_gas_barrel: {
    name: 'empty_petroleum_gas_barrel',
    category: 'crafting_with_fluid',
    time: 0.2,
    ingredients: [
      {
        type: 'item',
        name: 'petroleum_gas_barrel',
        amount: 1,
        catalyst_amount: 1
      }
    ],
    results: [
      {
        type: 'fluid',
        name: 'petroleum_gas',
        amount: 50,
        catalyst_amount: 50
      },
      {
        type: 'item',
        name: 'empty_barrel',
        amount: 1,
        catalyst_amount: 1
      }
    ],
    ui_name: 'Empty petroleum gas barrel'
  },
  fill_lubricant_barrel: {
    name: 'fill_lubricant_barrel',
    category: 'crafting_with_fluid',
    time: 0.2,
    ingredients: [
      {
        type: 'fluid',
        name: 'lubricant',
        amount: 50,
        catalyst_amount: 50
      },
      {
        type: 'item',
        name: 'empty_barrel',
        amount: 1,
        catalyst_amount: 1
      }
    ],
    results: [
      {
        type: 'item',
        name: 'lubricant_barrel',
        amount: 1,
        catalyst_amount: 1
      }
    ],
    ui_name: 'Fill lubricant barrel'
  },
  empty_lubricant_barrel: {
    name: 'empty_lubricant_barrel',
    category: 'crafting_with_fluid',
    time: 0.2,
    ingredients: [
      {
        type: 'item',
        name: 'lubricant_barrel',
        amount: 1,
        catalyst_amount: 1
      }
    ],
    results: [
      {
        type: 'fluid',
        name: 'lubricant',
        amount: 50,
        catalyst_amount: 50
      },
      {
        type: 'item',
        name: 'empty_barrel',
        amount: 1,
        catalyst_amount: 1
      }
    ],
    ui_name: 'Empty lubricant barrel'
  },
  fill_sulfuric_acid_barrel: {
    name: 'fill_sulfuric_acid_barrel',
    category: 'crafting_with_fluid',
    time: 0.2,
    ingredients: [
      {
        type: 'fluid',
        name: 'sulfuric_acid',
        amount: 50,
        catalyst_amount: 50
      },
      {
        type: 'item',
        name: 'empty_barrel',
        amount: 1,
        catalyst_amount: 1
      }
    ],
    results: [
      {
        type: 'item',
        name: 'sulfuric_acid_barrel',
        amount: 1,
        catalyst_amount: 1
      }
    ],
    ui_name: 'Fill sulfuric acid barrel'
  },
  empty_sulfuric_acid_barrel: {
    name: 'empty_sulfuric_acid_barrel',
    category: 'crafting_with_fluid',
    time: 0.2,
    ingredients: [
      {
        type: 'item',
        name: 'sulfuric_acid_barrel',
        amount: 1,
        catalyst_amount: 1
      }
    ],
    results: [
      {
        type: 'fluid',
        name: 'sulfuric_acid',
        amount: 50,
        catalyst_amount: 50
      },
      {
        type: 'item',
        name: 'empty_barrel',
        amount: 1,
        catalyst_amount: 1
      }
    ],
    ui_name: 'Empty sulfuric acid barrel'
  }
}