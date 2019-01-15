module.exports = {
  copper_plate: {
    name: 'copper_plate',
    category: 'smelting',
    time: 3.5,
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
    ]
  },
  iron_plate: {
    name: 'iron_plate',
    category: 'smelting',
    time: 3.5,
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
    ]
  },
  stone_brick: {
    name: 'stone_brick',
    category: 'smelting',
    time: 3.5,
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
    ]
  },
  wood: {
    name: 'wood',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'raw_wood',
        amount: 1
      }
    ],
    results: [
      {
        name: 'wood',
        amount: 2
      }
    ]
  },
  wooden_chest: {
    name: 'wooden_chest',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'wood',
        amount: 4
      }
    ],
    results: [
      {
        name: 'wooden_chest',
        amount: 1
      }
    ]
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
    ]
  },
  iron_axe: {
    name: 'iron_axe',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'iron_stick',
        amount: 2
      },
      {
        name: 'iron_plate',
        amount: 3
      }
    ],
    results: [
      {
        name: 'iron_axe',
        amount: 1
      }
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
  small_electric_pole: {
    name: 'small_electric_pole',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'wood',
        amount: 2
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
        name: 'iron_stick',
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
  atomic_bomb: {
    name: 'atomic_bomb',
    category: 'crafting',
    time: 50,
    ingredients: [
      {
        name: 'processing_unit',
        amount: 20
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    }
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
    ]
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
    ]
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
    ]
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
    ]
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
        name: 'electronic_circuit',
        amount: 2
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
        amount: 10
      }
    ],
    results: [
      {
        name: 'energy_shield_mk2_equipment',
        amount: 1
      }
    ]
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
    ]
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
        amount: 20
      }
    ],
    results: [
      {
        name: 'battery_mk2_equipment',
        amount: 1
      }
    ]
  },
  solar_panel_equipment: {
    name: 'solar_panel_equipment',
    category: 'crafting',
    time: 10,
    ingredients: [
      {
        name: 'solar_panel',
        amount: 5
      },
      {
        name: 'advanced_circuit',
        amount: 1
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
    ]
  },
  fusion_reactor_equipment: {
    name: 'fusion_reactor_equipment',
    category: 'crafting',
    time: 10,
    ingredients: [
      {
        name: 'processing_unit',
        amount: 250
      }
    ],
    results: [
      {
        name: 'fusion_reactor_equipment',
        amount: 1
      }
    ]
  },
  personal_laser_defense_equipment: {
    name: 'personal_laser_defense_equipment',
    category: 'crafting',
    time: 10,
    ingredients: [
      {
        name: 'processing_unit',
        amount: 1
      },
      {
        name: 'steel_plate',
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
    ]
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
    ]
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
    ]
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
    ]
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
      }
    ],
    results: [
      {
        name: 'personal_roboport_mk2_equipment',
        amount: 1
      }
    ]
  },
  steel_plate: {
    name: 'steel_plate',
    category: 'smelting',
    time: 17.5,
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
    ]
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
    ]
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
    ]
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
        amount: 35
      },
      {
        type: 'fluid',
        name: 'light_oil',
        amount: 15
      },
      {
        type: 'fluid',
        name: 'petroleum_gas',
        amount: 20
      }
    ]
  },
  heavy_oil_cracking: {
    name: 'heavy_oil_cracking',
    category: 'chemistry',
    time: 3,
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
    }
  },
  light_oil_cracking: {
    name: 'light_oil_cracking',
    category: 'chemistry',
    time: 3,
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
    }
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
    }
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
    }
  },
  solid_fuel_from_light_oil: {
    name: 'solid_fuel_from_light_oil',
    category: 'chemistry',
    time: 3,
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
    }
  },
  solid_fuel_from_petroleum_gas: {
    name: 'solid_fuel_from_petroleum_gas',
    category: 'chemistry',
    time: 3,
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
    }
  },
  solid_fuel_from_heavy_oil: {
    name: 'solid_fuel_from_heavy_oil',
    category: 'chemistry',
    time: 3,
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
    }
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
    }
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
    }
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
      {}
    ],
    results: [
      {
        name: 'express_transport_belt',
        amount: 1
      }
    ]
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
    ]
  },
  assembling_machine_2: {
    name: 'assembling_machine_2',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'iron_plate',
        amount: 9
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
        amount: 10
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    requester_paste_multiplier: 1
  },
  power_armor_mk2: {
    name: 'power_armor_mk2',
    category: 'crafting',
    time: 25,
    ingredients: [
      {
        name: 'effectivity_module_3',
        amount: 5
      },
      {
        name: 'speed_module_3',
        amount: 5
      },
      {
        name: 'processing_unit',
        amount: 40
      },
      {
        name: 'steel_plate',
        amount: 40
      }
    ],
    results: [
      {
        name: 'power_armor_mk2',
        amount: 1
      }
    ],
    requester_paste_multiplier: 1
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
  science_pack_1: {
    name: 'science_pack_1',
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
        name: 'science_pack_1',
        amount: 1
      }
    ]
  },
  science_pack_2: {
    name: 'science_pack_2',
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
        name: 'science_pack_2',
        amount: 1
      }
    ]
  },
  science_pack_3: {
    name: 'science_pack_3',
    category: 'crafting',
    time: 12,
    ingredients: [
      {
        name: 'advanced_circuit',
        amount: 1
      },
      {
        name: 'engine_unit',
        amount: 1
      },
      {
        name: 'electric_mining_drill',
        amount: 1
      }
    ],
    results: [
      {
        name: 'science_pack_3',
        amount: 1
      }
    ]
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
        name: 'gun_turret',
        amount: 1
      }
    ],
    results: [
      {
        name: 'military_science_pack',
        amount: 2
      }
    ]
  },
  production_science_pack: {
    name: 'production_science_pack',
    category: 'crafting',
    time: 14,
    ingredients: [
      {
        name: 'electric_engine_unit',
        amount: 1
      },
      {
        name: 'electric_furnace',
        amount: 1
      }
    ],
    results: [
      {
        name: 'production_science_pack',
        amount: 2
      }
    ]
  },
  high_tech_science_pack: {
    name: 'high_tech_science_pack',
    category: 'crafting',
    time: 14,
    ingredients: [
      {
        name: 'battery',
        amount: 1
      },
      {
        name: 'processing_unit',
        amount: 3
      },
      {
        name: 'speed_module',
        amount: 1
      },
      {
        name: 'copper_cable',
        amount: 30
      }
    ],
    results: [
      {
        name: 'high_tech_science_pack',
        amount: 2
      }
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
      {}
    ],
    results: [
      {
        name: 'express_underground_belt',
        amount: 2
      }
    ]
  },
  loader: {
    name: 'loader',
    category: 'crafting',
    time: 1,
    ingredients: [
      {
        name: 'inserter',
        amount: 5
      },
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
        amount: 5
      },
      {
        name: 'transport_belt',
        amount: 5
      }
    ],
    results: [
      {
        name: 'loader',
        amount: 1
      }
    ]
  },
  fast_loader: {
    name: 'fast_loader',
    category: 'crafting',
    time: 3,
    ingredients: [
      {
        name: 'fast_transport_belt',
        amount: 5
      },
      {
        name: 'loader',
        amount: 1
      }
    ],
    results: [
      {
        name: 'fast_loader',
        amount: 1
      }
    ]
  },
  express_loader: {
    name: 'express_loader',
    category: 'crafting',
    time: 10,
    ingredients: [
      {
        name: 'express_transport_belt',
        amount: 5
      },
      {
        name: 'fast_loader',
        amount: 1
      }
    ],
    results: [
      {
        name: 'express_loader',
        amount: 1
      }
    ]
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
    ]
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
    ]
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
      {}
    ],
    results: [
      {
        name: 'express_splitter',
        amount: 1
      }
    ]
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
    ]
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
      {}
    ],
    results: [
      {
        name: 'processing_unit',
        amount: 1
      }
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    requester_paste_multiplier: 1
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
    ]
  },
  steel_axe: {
    name: 'steel_axe',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'steel_plate',
        amount: 5
      },
      {
        name: 'iron_stick',
        amount: 2
      }
    ],
    results: [
      {
        name: 'steel_axe',
        amount: 1
      }
    ]
  },
  big_electric_pole: {
    name: 'big_electric_pole',
    category: 'crafting',
    time: 0.5,
    ingredients: [
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
    ]
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
    ]
  },
  medium_electric_pole: {
    name: 'medium_electric_pole',
    category: 'crafting',
    time: 0.5,
    ingredients: [
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
      {},
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
    ]
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
    ]
  },
  explosives: {
    name: 'explosives',
    category: 'chemistry',
    time: 5,
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
    }
  },
  battery: {
    name: 'battery',
    category: 'chemistry',
    time: 5,
    ingredients: [
      {
        type: 'fluid',
        name: 'sulfuric_acid',
        amount: 20
      },
      [
        'iron_plate',
        1
      ],
      [
        'copper_plate',
        1
      ]
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
    }
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
  programmable_speaker: {
    name: 'programmable_speaker',
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
        amount: 4
      }
    ],
    results: [
      {
        name: 'programmable_speaker',
        amount: 1
      }
    ]
  },
  low_density_structure: {
    name: 'low_density_structure',
    category: 'crafting',
    time: 30,
    ingredients: [
      {
        name: 'steel_plate',
        amount: 10
      },
      {
        name: 'copper_plate',
        amount: 5
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
    ]
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
    ]
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
    ]
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
    ]
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
    requester_paste_multiplier: 1
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
      {}
    ],
    results: [
      {
        name: 'concrete',
        amount: 10
      }
    ]
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
    ]
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
      {}
    ],
    results: [
      {
        name: 'refined_concrete',
        amount: 10
      }
    ]
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
    ]
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
    ]
  },
  electric_energy_interface: {
    name: 'electric_energy_interface',
    category: 'crafting',
    time: 0.5,
    ingredients: [
      {
        name: 'iron_plate',
        amount: 2
      },
      {
        name: 'electronic_circuit',
        amount: 5
      }
    ],
    results: [
      {
        name: 'electric_energy_interface',
        amount: 1
      }
    ]
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
    requester_paste_multiplier: 1
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
    requester_paste_multiplier: 10
  },
  uranium_processing: {
    name: 'uranium_processing',
    category: 'centrifuging',
    time: 10,
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
    ]
  },
  kovarex_enrichment_process: {
    name: 'kovarex_enrichment_process',
    category: 'centrifuging',
    time: 50,
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
      {
        name: 'uranium_235',
        amount: 41
      },
      {
        name: 'uranium_238',
        amount: 2
      }
    ]
  },
  nuclear_fuel: {
    name: 'nuclear_fuel',
    category: 'centrifuging',
    time: 60,
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
    ]
  },
  nuclear_fuel_reprocessing: {
    name: 'nuclear_fuel_reprocessing',
    category: 'centrifuging',
    time: 50,
    ingredients: [
      {
        name: 'used_up_uranium_fuel_cell',
        amount: 5
      }
    ],
    results: [
      {
        name: 'uranium_238',
        amount: 3
      }
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
  fill_water_barrel: {
    name: 'fill_water_barrel',
    category: 'crafting_with_fluid',
    time: 0.2,
    ingredients: [
      {
        type: 'fluid',
        name: 'water',
        amount: 50
      },
      {
        type: 'item',
        name: 'empty_barrel',
        amount: 1
      }
    ],
    results: [
      {
        type: 'item',
        name: 'water_barrel',
        amount: 1
      }
    ]
  },
  empty_water_barrel: {
    name: 'empty_water_barrel',
    category: 'crafting_with_fluid',
    time: 0.2,
    ingredients: [
      {
        type: 'item',
        name: 'water_barrel',
        amount: 1
      }
    ],
    results: [
      {
        type: 'fluid',
        name: 'water',
        amount: 50
      },
      {
        type: 'item',
        name: 'empty_barrel',
        amount: 1
      }
    ]
  },
  fill_crude_oil_barrel: {
    name: 'fill_crude_oil_barrel',
    category: 'crafting_with_fluid',
    time: 0.2,
    ingredients: [
      {
        type: 'fluid',
        name: 'crude_oil',
        amount: 50
      },
      {
        type: 'item',
        name: 'empty_barrel',
        amount: 1
      }
    ],
    results: [
      {
        type: 'item',
        name: 'crude_oil_barrel',
        amount: 1
      }
    ]
  },
  empty_crude_oil_barrel: {
    name: 'empty_crude_oil_barrel',
    category: 'crafting_with_fluid',
    time: 0.2,
    ingredients: [
      {
        type: 'item',
        name: 'crude_oil_barrel',
        amount: 1
      }
    ],
    results: [
      {
        type: 'fluid',
        name: 'crude_oil',
        amount: 50
      },
      {
        type: 'item',
        name: 'empty_barrel',
        amount: 1
      }
    ]
  },
  fill_heavy_oil_barrel: {
    name: 'fill_heavy_oil_barrel',
    category: 'crafting_with_fluid',
    time: 0.2,
    ingredients: [
      {
        type: 'fluid',
        name: 'heavy_oil',
        amount: 50
      },
      {
        type: 'item',
        name: 'empty_barrel',
        amount: 1
      }
    ],
    results: [
      {
        type: 'item',
        name: 'heavy_oil_barrel',
        amount: 1
      }
    ]
  },
  empty_heavy_oil_barrel: {
    name: 'empty_heavy_oil_barrel',
    category: 'crafting_with_fluid',
    time: 0.2,
    ingredients: [
      {
        type: 'item',
        name: 'heavy_oil_barrel',
        amount: 1
      }
    ],
    results: [
      {
        type: 'fluid',
        name: 'heavy_oil',
        amount: 50
      },
      {
        type: 'item',
        name: 'empty_barrel',
        amount: 1
      }
    ]
  },
  fill_light_oil_barrel: {
    name: 'fill_light_oil_barrel',
    category: 'crafting_with_fluid',
    time: 0.2,
    ingredients: [
      {
        type: 'fluid',
        name: 'light_oil',
        amount: 50
      },
      {
        type: 'item',
        name: 'empty_barrel',
        amount: 1
      }
    ],
    results: [
      {
        type: 'item',
        name: 'light_oil_barrel',
        amount: 1
      }
    ]
  },
  empty_light_oil_barrel: {
    name: 'empty_light_oil_barrel',
    category: 'crafting_with_fluid',
    time: 0.2,
    ingredients: [
      {
        type: 'item',
        name: 'light_oil_barrel',
        amount: 1
      }
    ],
    results: [
      {
        type: 'fluid',
        name: 'light_oil',
        amount: 50
      },
      {
        type: 'item',
        name: 'empty_barrel',
        amount: 1
      }
    ]
  },
  fill_petroleum_gas_barrel: {
    name: 'fill_petroleum_gas_barrel',
    category: 'crafting_with_fluid',
    time: 0.2,
    ingredients: [
      {
        type: 'fluid',
        name: 'petroleum_gas',
        amount: 50
      },
      {
        type: 'item',
        name: 'empty_barrel',
        amount: 1
      }
    ],
    results: [
      {
        type: 'item',
        name: 'petroleum_gas_barrel',
        amount: 1
      }
    ]
  },
  empty_petroleum_gas_barrel: {
    name: 'empty_petroleum_gas_barrel',
    category: 'crafting_with_fluid',
    time: 0.2,
    ingredients: [
      {
        type: 'item',
        name: 'petroleum_gas_barrel',
        amount: 1
      }
    ],
    results: [
      {
        type: 'fluid',
        name: 'petroleum_gas',
        amount: 50
      },
      {
        type: 'item',
        name: 'empty_barrel',
        amount: 1
      }
    ]
  },
  fill_lubricant_barrel: {
    name: 'fill_lubricant_barrel',
    category: 'crafting_with_fluid',
    time: 0.2,
    ingredients: [
      {
        type: 'fluid',
        name: 'lubricant',
        amount: 50
      },
      {
        type: 'item',
        name: 'empty_barrel',
        amount: 1
      }
    ],
    results: [
      {
        type: 'item',
        name: 'lubricant_barrel',
        amount: 1
      }
    ]
  },
  empty_lubricant_barrel: {
    name: 'empty_lubricant_barrel',
    category: 'crafting_with_fluid',
    time: 0.2,
    ingredients: [
      {
        type: 'item',
        name: 'lubricant_barrel',
        amount: 1
      }
    ],
    results: [
      {
        type: 'fluid',
        name: 'lubricant',
        amount: 50
      },
      {
        type: 'item',
        name: 'empty_barrel',
        amount: 1
      }
    ]
  },
  fill_sulfuric_acid_barrel: {
    name: 'fill_sulfuric_acid_barrel',
    category: 'crafting_with_fluid',
    time: 0.2,
    ingredients: [
      {
        type: 'fluid',
        name: 'sulfuric_acid',
        amount: 50
      },
      {
        type: 'item',
        name: 'empty_barrel',
        amount: 1
      }
    ],
    results: [
      {
        type: 'item',
        name: 'sulfuric_acid_barrel',
        amount: 1
      }
    ]
  },
  empty_sulfuric_acid_barrel: {
    name: 'empty_sulfuric_acid_barrel',
    category: 'crafting_with_fluid',
    time: 0.2,
    ingredients: [
      {
        type: 'item',
        name: 'sulfuric_acid_barrel',
        amount: 1
      }
    ],
    results: [
      {
        type: 'fluid',
        name: 'sulfuric_acid',
        amount: 50
      },
      {
        type: 'item',
        name: 'empty_barrel',
        amount: 1
      }
    ]
  }
}