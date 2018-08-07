module.exports = {
  copper_plate: {
    type: 'recipe',
    name: 'copper_plate',
    category: 'smelting',
    energy_required: 3.5,
    ingredients: [
      [
        'copper_ore',
        1
      ]
    ],
    result: 'copper_plate'
  },
  iron_plate: {
    type: 'recipe',
    name: 'iron_plate',
    category: 'smelting',
    energy_required: 3.5,
    ingredients: [
      [
        'iron_ore',
        1
      ]
    ],
    result: 'iron_plate'
  },
  stone_brick: {
    type: 'recipe',
    name: 'stone_brick',
    category: 'smelting',
    energy_required: 3.5,
    enabled: true,
    ingredients: [
      [
        'stone',
        2
      ]
    ],
    result: 'stone_brick'
  },
  wood: {
    type: 'recipe',
    name: 'wood',
    ingredients: [
      [
        'raw_wood',
        1
      ]
    ],
    result: 'wood',
    result_count: 2
  },
  wooden_chest: {
    type: 'recipe',
    name: 'wooden_chest',
    ingredients: [
      [
        'wood',
        4
      ]
    ],
    result: 'wooden_chest'
  },
  iron_stick: {
    type: 'recipe',
    name: 'iron_stick',
    ingredients: [
      [
        'iron_plate',
        1
      ]
    ],
    result: 'iron_stick',
    result_count: 2
  },
  iron_axe: {
    type: 'recipe',
    name: 'iron_axe',
    ingredients: [
      [
        'iron_stick',
        2
      ],
      [
        'iron_plate',
        3
      ]
    ],
    result: 'iron_axe'
  },
  stone_furnace: {
    type: 'recipe',
    name: 'stone_furnace',
    ingredients: [
      [
        'stone',
        5
      ]
    ],
    result: 'stone_furnace'
  },
  boiler: {
    type: 'recipe',
    name: 'boiler',
    ingredients: [
      [
        'stone_furnace',
        1
      ],
      [
        'pipe',
        4
      ]
    ],
    result: 'boiler'
  },
  steam_engine: {
    type: 'recipe',
    name: 'steam_engine',
    normal: {
      ingredients: [
        [
          'iron_gear_wheel',
          8
        ],
        [
          'pipe',
          5
        ],
        [
          'iron_plate',
          10
        ]
      ],
      result: 'steam_engine'
    },
    expensive: {
      ingredients: [
        [
          'iron_gear_wheel',
          10
        ],
        [
          'pipe',
          5
        ],
        [
          'iron_plate',
          50
        ]
      ],
      result: 'steam_engine'
    }
  },
  iron_gear_wheel: {
    type: 'recipe',
    name: 'iron_gear_wheel',
    normal: {
      ingredients: [
        [
          'iron_plate',
          2
        ]
      ],
      result: 'iron_gear_wheel'
    },
    expensive: {
      ingredients: [
        [
          'iron_plate',
          4
        ]
      ],
      result: 'iron_gear_wheel'
    }
  },
  electronic_circuit: {
    type: 'recipe',
    name: 'electronic_circuit',
    normal: {
      ingredients: [
        [
          'iron_plate',
          1
        ],
        [
          'copper_cable',
          3
        ]
      ],
      result: 'electronic_circuit'
    },
    expensive: {
      ingredients: [
        [
          'iron_plate',
          2
        ],
        [
          'copper_cable',
          10
        ]
      ],
      result: 'electronic_circuit'
    }
  },
  transport_belt: {
    type: 'recipe',
    name: 'transport_belt',
    ingredients: [
      [
        'iron_plate',
        1
      ],
      [
        'iron_gear_wheel',
        1
      ]
    ],
    result: 'transport_belt',
    result_count: 2
  },
  electric_mining_drill: {
    type: 'recipe',
    name: 'electric_mining_drill',
    normal: {
      energy_required: 2,
      ingredients: [
        [
          'electronic_circuit',
          3
        ],
        [
          'iron_gear_wheel',
          5
        ],
        [
          'iron_plate',
          10
        ]
      ],
      result: 'electric_mining_drill'
    },
    expensive: {
      energy_required: 2,
      ingredients: [
        [
          'electronic_circuit',
          5
        ],
        [
          'iron_gear_wheel',
          10
        ],
        [
          'iron_plate',
          20
        ]
      ],
      result: 'electric_mining_drill'
    }
  },
  burner_mining_drill: {
    type: 'recipe',
    name: 'burner_mining_drill',
    normal: {
      energy_required: 2,
      ingredients: [
        [
          'iron_gear_wheel',
          3
        ],
        [
          'stone_furnace',
          1
        ],
        [
          'iron_plate',
          3
        ]
      ],
      result: 'burner_mining_drill'
    },
    expensive: {
      energy_required: 4,
      ingredients: [
        [
          'iron_gear_wheel',
          6
        ],
        [
          'stone_furnace',
          2
        ],
        [
          'iron_plate',
          6
        ]
      ],
      result: 'burner_mining_drill'
    }
  },
  inserter: {
    type: 'recipe',
    name: 'inserter',
    ingredients: [
      [
        'electronic_circuit',
        1
      ],
      [
        'iron_gear_wheel',
        1
      ],
      [
        'iron_plate',
        1
      ]
    ],
    result: 'inserter'
  },
  burner_inserter: {
    type: 'recipe',
    name: 'burner_inserter',
    ingredients: [
      [
        'iron_plate',
        1
      ],
      [
        'iron_gear_wheel',
        1
      ]
    ],
    result: 'burner_inserter'
  },
  pipe: {
    type: 'recipe',
    name: 'pipe',
    normal: {
      ingredients: [
        [
          'iron_plate',
          1
        ]
      ],
      result: 'pipe'
    },
    expensive: {
      ingredients: [
        [
          'iron_plate',
          2
        ]
      ],
      result: 'pipe'
    }
  },
  offshore_pump: {
    type: 'recipe',
    name: 'offshore_pump',
    ingredients: [
      [
        'electronic_circuit',
        2
      ],
      [
        'pipe',
        1
      ],
      [
        'iron_gear_wheel',
        1
      ]
    ],
    result: 'offshore_pump'
  },
  copper_cable: {
    type: 'recipe',
    name: 'copper_cable',
    ingredients: [
      [
        'copper_plate',
        1
      ]
    ],
    result: 'copper_cable',
    result_count: 2
  },
  small_electric_pole: {
    type: 'recipe',
    name: 'small_electric_pole',
    ingredients: [
      [
        'wood',
        2
      ],
      [
        'copper_cable',
        2
      ]
    ],
    result: 'small_electric_pole',
    result_count: 2
  },
  pistol: {
    type: 'recipe',
    name: 'pistol',
    energy_required: 5,
    ingredients: [
      [
        'copper_plate',
        5
      ],
      [
        'iron_plate',
        5
      ]
    ],
    result: 'pistol'
  },
  submachine_gun: {
    type: 'recipe',
    name: 'submachine_gun',
    normal: {
      enabled: false,
      energy_required: 10,
      ingredients: [
        [
          'iron_gear_wheel',
          10
        ],
        [
          'copper_plate',
          5
        ],
        [
          'iron_plate',
          10
        ]
      ],
      result: 'submachine_gun'
    },
    expensive: {
      enabled: false,
      energy_required: 10,
      ingredients: [
        [
          'iron_gear_wheel',
          15
        ],
        [
          'copper_plate',
          20
        ],
        [
          'iron_plate',
          30
        ]
      ],
      result: 'submachine_gun'
    }
  },
  firearm_magazine: {
    type: 'recipe',
    name: 'firearm_magazine',
    energy_required: 1,
    ingredients: [
      [
        'iron_plate',
        4
      ]
    ],
    result: 'firearm_magazine',
    result_count: 1
  },
  light_armor: {
    type: 'recipe',
    name: 'light_armor',
    enabled: true,
    energy_required: 3,
    ingredients: [
      [
        'iron_plate',
        40
      ]
    ],
    result: 'light_armor'
  },
  radar: {
    type: 'recipe',
    name: 'radar',
    ingredients: [
      [
        'electronic_circuit',
        5
      ],
      [
        'iron_gear_wheel',
        5
      ],
      [
        'iron_plate',
        10
      ]
    ],
    result: 'radar'
  },
  small_lamp: {
    type: 'recipe',
    name: 'small_lamp',
    enabled: false,
    ingredients: [
      [
        'electronic_circuit',
        1
      ],
      [
        'iron_stick',
        3
      ],
      [
        'iron_plate',
        1
      ]
    ],
    result: 'small_lamp'
  },
  pipe_to_ground: {
    type: 'recipe',
    name: 'pipe_to_ground',
    ingredients: [
      [
        'pipe',
        10
      ],
      [
        'iron_plate',
        5
      ]
    ],
    result_count: 2,
    result: 'pipe_to_ground'
  },
  assembling_machine_1: {
    type: 'recipe',
    name: 'assembling_machine_1',
    enabled: false,
    ingredients: [
      [
        'electronic_circuit',
        3
      ],
      [
        'iron_gear_wheel',
        5
      ],
      [
        'iron_plate',
        9
      ]
    ],
    result: 'assembling_machine_1'
  },
  repair_pack: {
    type: 'recipe',
    name: 'repair_pack',
    ingredients: [
      [
        'electronic_circuit',
        2
      ],
      [
        'iron_gear_wheel',
        2
      ]
    ],
    result: 'repair_pack'
  },
  gun_turret: {
    type: 'recipe',
    name: 'gun_turret',
    enabled: false,
    energy_required: 8,
    ingredients: [
      [
        'iron_gear_wheel',
        10
      ],
      [
        'copper_plate',
        10
      ],
      [
        'iron_plate',
        20
      ]
    ],
    result: 'gun_turret'
  },
  piercing_rounds_magazine: {
    type: 'recipe',
    name: 'piercing_rounds_magazine',
    enabled: false,
    energy_required: 3,
    ingredients: [
      [
        'firearm_magazine',
        1
      ],
      [
        'steel_plate',
        1
      ],
      [
        'copper_plate',
        5
      ]
    ],
    result: 'piercing_rounds_magazine'
  },
  uranium_rounds_magazine: {
    type: 'recipe',
    name: 'uranium_rounds_magazine',
    enabled: false,
    energy_required: 10,
    ingredients: [
      [
        'piercing_rounds_magazine',
        1
      ],
      [
        'uranium_238',
        1
      ]
    ],
    result: 'uranium_rounds_magazine'
  },
  rocket: {
    type: 'recipe',
    name: 'rocket',
    enabled: false,
    energy_required: 8,
    ingredients: [
      [
        'electronic_circuit',
        1
      ],
      [
        'explosives',
        1
      ],
      [
        'iron_plate',
        2
      ]
    ],
    result: 'rocket'
  },
  explosive_rocket: {
    type: 'recipe',
    name: 'explosive_rocket',
    enabled: false,
    energy_required: 8,
    ingredients: [
      [
        'rocket',
        1
      ],
      [
        'explosives',
        2
      ]
    ],
    result: 'explosive_rocket'
  },
  atomic_bomb: {
    type: 'recipe',
    name: 'atomic_bomb',
    enabled: false,
    energy_required: 50,
    ingredients: [
      [
        'processing_unit',
        20
      ],
      [
        'explosives',
        10
      ],
      [
        'uranium_235',
        30
      ]
    ],
    result: 'atomic_bomb'
  },
  shotgun_shell: {
    type: 'recipe',
    name: 'shotgun_shell',
    enabled: false,
    energy_required: 3,
    ingredients: [
      [
        'copper_plate',
        2
      ],
      [
        'iron_plate',
        2
      ]
    ],
    result: 'shotgun_shell'
  },
  piercing_shotgun_shell: {
    type: 'recipe',
    name: 'piercing_shotgun_shell',
    enabled: false,
    energy_required: 8,
    ingredients: [
      [
        'shotgun_shell',
        2
      ],
      [
        'copper_plate',
        5
      ],
      [
        'steel_plate',
        2
      ]
    ],
    result: 'piercing_shotgun_shell'
  },
  railgun_dart: {
    type: 'recipe',
    name: 'railgun_dart',
    enabled: false,
    energy_required: 8,
    ingredients: [
      [
        'steel_plate',
        5
      ],
      [
        'electronic_circuit',
        5
      ]
    ],
    result: 'railgun_dart'
  },
  cannon_shell: {
    type: 'recipe',
    name: 'cannon_shell',
    normal: {
      enabled: false,
      energy_required: 8,
      ingredients: [
        [
          'steel_plate',
          2
        ],
        [
          'plastic_bar',
          2
        ],
        [
          'explosives',
          1
        ]
      ],
      result: 'cannon_shell'
    },
    expensive: {
      enabled: false,
      energy_required: 8,
      ingredients: [
        [
          'steel_plate',
          4
        ],
        [
          'plastic_bar',
          4
        ],
        [
          'explosives',
          1
        ]
      ],
      result: 'cannon_shell'
    }
  },
  explosive_cannon_shell: {
    type: 'recipe',
    name: 'explosive_cannon_shell',
    normal: {
      enabled: false,
      energy_required: 8,
      ingredients: [
        [
          'steel_plate',
          2
        ],
        [
          'plastic_bar',
          2
        ],
        [
          'explosives',
          2
        ]
      ],
      result: 'explosive_cannon_shell'
    },
    expensive: {
      enabled: false,
      energy_required: 8,
      ingredients: [
        [
          'steel_plate',
          4
        ],
        [
          'plastic_bar',
          4
        ],
        [
          'explosives',
          2
        ]
      ],
      result: 'explosive_cannon_shell'
    }
  },
  uranium_cannon_shell: {
    type: 'recipe',
    name: 'uranium_cannon_shell',
    enabled: false,
    energy_required: 12,
    ingredients: [
      [
        'cannon_shell',
        1
      ],
      [
        'uranium_238',
        1
      ]
    ],
    result: 'uranium_cannon_shell'
  },
  explosive_uranium_cannon_shell: {
    type: 'recipe',
    name: 'explosive_uranium_cannon_shell',
    enabled: false,
    energy_required: 12,
    ingredients: [
      [
        'explosive_cannon_shell',
        1
      ],
      [
        'uranium_238',
        1
      ]
    ],
    result: 'explosive_uranium_cannon_shell'
  },
  artillery_shell: {
    type: 'recipe',
    name: 'artillery_shell',
    enabled: false,
    energy_required: 15,
    ingredients: [
      [
        'explosive_cannon_shell',
        4
      ],
      [
        'radar',
        1
      ],
      [
        'explosives',
        8
      ]
    ],
    result: 'artillery_shell'
  },
  flamethrower_ammo: {
    type: 'recipe',
    name: 'flamethrower_ammo',
    category: 'chemistry',
    enabled: false,
    energy_required: 6,
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
    result: 'flamethrower_ammo',
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
    type: 'recipe',
    name: 'poison_capsule',
    enabled: false,
    energy_required: 8,
    ingredients: [
      [
        'steel_plate',
        3
      ],
      [
        'electronic_circuit',
        3
      ],
      [
        'coal',
        10
      ]
    ],
    result: 'poison_capsule'
  },
  slowdown_capsule: {
    type: 'recipe',
    name: 'slowdown_capsule',
    enabled: false,
    energy_required: 8,
    ingredients: [
      [
        'steel_plate',
        2
      ],
      [
        'electronic_circuit',
        2
      ],
      [
        'coal',
        5
      ]
    ],
    result: 'slowdown_capsule'
  },
  grenade: {
    type: 'recipe',
    name: 'grenade',
    enabled: false,
    energy_required: 8,
    ingredients: [
      [
        'iron_plate',
        5
      ],
      [
        'coal',
        10
      ]
    ],
    result: 'grenade'
  },
  cluster_grenade: {
    type: 'recipe',
    name: 'cluster_grenade',
    enabled: false,
    energy_required: 8,
    ingredients: [
      [
        'grenade',
        7
      ],
      [
        'explosives',
        5
      ],
      [
        'steel_plate',
        5
      ]
    ],
    result: 'cluster_grenade'
  },
  defender_capsule: {
    type: 'recipe',
    name: 'defender_capsule',
    enabled: false,
    energy_required: 8,
    ingredients: [
      [
        'piercing_rounds_magazine',
        1
      ],
      [
        'electronic_circuit',
        2
      ],
      [
        'iron_gear_wheel',
        3
      ]
    ],
    result: 'defender_capsule'
  },
  distractor_capsule: {
    type: 'recipe',
    name: 'distractor_capsule',
    enabled: false,
    energy_required: 15,
    ingredients: [
      [
        'defender_capsule',
        4
      ],
      [
        'advanced_circuit',
        3
      ]
    ],
    result: 'distractor_capsule'
  },
  destroyer_capsule: {
    type: 'recipe',
    name: 'destroyer_capsule',
    enabled: false,
    energy_required: 15,
    ingredients: [
      [
        'distractor_capsule',
        4
      ],
      [
        'speed_module',
        1
      ]
    ],
    result: 'destroyer_capsule'
  },
  discharge_defense_remote: {
    type: 'recipe',
    name: 'discharge_defense_remote',
    enabled: false,
    ingredients: [
      [
        'electronic_circuit',
        1
      ]
    ],
    result: 'discharge_defense_remote'
  },
  cliff_explosives: {
    type: 'recipe',
    name: 'cliff_explosives',
    enabled: false,
    energy_required: 8,
    ingredients: [
      [
        'explosives',
        10
      ],
      [
        'grenade',
        1
      ],
      [
        'empty_barrel',
        1
      ]
    ],
    result: 'cliff_explosives'
  },
  artillery_targeting_remote: {
    type: 'recipe',
    name: 'artillery_targeting_remote',
    enabled: false,
    ingredients: [
      [
        'processing_unit',
        1
      ],
      [
        'radar',
        1
      ]
    ],
    result: 'artillery_targeting_remote'
  },
  night_vision_equipment: {
    type: 'recipe',
    name: 'night_vision_equipment',
    enabled: false,
    energy_required: 10,
    ingredients: [
      [
        'advanced_circuit',
        5
      ],
      [
        'steel_plate',
        10
      ]
    ],
    result: 'night_vision_equipment'
  },
  energy_shield_equipment: {
    type: 'recipe',
    name: 'energy_shield_equipment',
    enabled: false,
    energy_required: 10,
    ingredients: [
      [
        'advanced_circuit',
        5
      ],
      [
        'steel_plate',
        10
      ]
    ],
    result: 'energy_shield_equipment'
  },
  energy_shield_mk2_equipment: {
    type: 'recipe',
    name: 'energy_shield_mk2_equipment',
    enabled: false,
    energy_required: 10,
    ingredients: [
      [
        'energy_shield_equipment',
        10
      ],
      [
        'processing_unit',
        10
      ]
    ],
    result: 'energy_shield_mk2_equipment'
  },
  battery_equipment: {
    type: 'recipe',
    name: 'battery_equipment',
    enabled: false,
    energy_required: 10,
    ingredients: [
      [
        'battery',
        5
      ],
      [
        'steel_plate',
        10
      ]
    ],
    result: 'battery_equipment'
  },
  battery_mk2_equipment: {
    type: 'recipe',
    name: 'battery_mk2_equipment',
    enabled: false,
    energy_required: 10,
    ingredients: [
      [
        'battery_equipment',
        10
      ],
      [
        'processing_unit',
        20
      ]
    ],
    result: 'battery_mk2_equipment'
  },
  solar_panel_equipment: {
    type: 'recipe',
    name: 'solar_panel_equipment',
    enabled: false,
    energy_required: 10,
    ingredients: [
      [
        'solar_panel',
        5
      ],
      [
        'advanced_circuit',
        1
      ],
      [
        'steel_plate',
        5
      ]
    ],
    result: 'solar_panel_equipment'
  },
  fusion_reactor_equipment: {
    type: 'recipe',
    name: 'fusion_reactor_equipment',
    enabled: false,
    energy_required: 10,
    ingredients: [
      [
        'processing_unit',
        250
      ]
    ],
    result: 'fusion_reactor_equipment'
  },
  personal_laser_defense_equipment: {
    type: 'recipe',
    name: 'personal_laser_defense_equipment',
    enabled: false,
    energy_required: 10,
    ingredients: [
      [
        'processing_unit',
        1
      ],
      [
        'steel_plate',
        5
      ],
      [
        'laser_turret',
        5
      ]
    ],
    result: 'personal_laser_defense_equipment'
  },
  discharge_defense_equipment: {
    type: 'recipe',
    name: 'discharge_defense_equipment',
    enabled: false,
    energy_required: 10,
    ingredients: [
      [
        'processing_unit',
        5
      ],
      [
        'steel_plate',
        20
      ],
      [
        'laser_turret',
        10
      ]
    ],
    result: 'discharge_defense_equipment'
  },
  exoskeleton_equipment: {
    type: 'recipe',
    name: 'exoskeleton_equipment',
    enabled: false,
    energy_required: 10,
    ingredients: [
      [
        'processing_unit',
        10
      ],
      [
        'electric_engine_unit',
        30
      ],
      [
        'steel_plate',
        20
      ]
    ],
    result: 'exoskeleton_equipment'
  },
  personal_roboport_equipment: {
    type: 'recipe',
    name: 'personal_roboport_equipment',
    enabled: false,
    energy_required: 10,
    ingredients: [
      [
        'advanced_circuit',
        10
      ],
      [
        'iron_gear_wheel',
        40
      ],
      [
        'steel_plate',
        20
      ],
      [
        'battery',
        45
      ]
    ],
    result: 'personal_roboport_equipment'
  },
  personal_roboport_mk2_equipment: {
    type: 'recipe',
    name: 'personal_roboport_mk2_equipment',
    enabled: false,
    energy_required: 20,
    ingredients: [
      [
        'personal_roboport_equipment',
        5
      ],
      [
        'processing_unit',
        100
      ]
    ],
    result: 'personal_roboport_mk2_equipment'
  },
  steel_plate: {
    type: 'recipe',
    name: 'steel_plate',
    category: 'smelting',
    normal: {
      enabled: false,
      energy_required: 17.5,
      ingredients: [
        [
          'iron_plate',
          5
        ]
      ],
      result: 'steel_plate'
    },
    expensive: {
      enabled: false,
      energy_required: 35,
      ingredients: [
        [
          'iron_plate',
          10
        ]
      ],
      result: 'steel_plate'
    }
  },
  basic_oil_processing: {
    type: 'recipe',
    name: 'basic_oil_processing',
    category: 'oil_processing',
    enabled: false,
    energy_required: 5,
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
    icon: 'graphics/icons/fluid/basic-oil-processing.png',
    icon_size: 32,
    subgroup: 'fluid_recipes',
    order: 'a[oil_processing]_a[basic_oil_processing]'
  },
  advanced_oil_processing: {
    type: 'recipe',
    name: 'advanced_oil_processing',
    category: 'oil_processing',
    enabled: false,
    energy_required: 5,
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
    icon: 'graphics/icons/fluid/advanced-oil-processing.png',
    icon_size: 32,
    subgroup: 'fluid_recipes',
    order: 'a[oil_processing]_b[advanced_oil_processing]'
  },
  coal_liquefaction: {
    type: 'recipe',
    name: 'coal_liquefaction',
    category: 'oil_processing',
    enabled: false,
    energy_required: 5,
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
    ],
    icon: 'graphics/icons/fluid/coal-liquefaction.png',
    icon_size: 32,
    subgroup: 'fluid_recipes',
    order: 'a[oil_processing]_c[coal_liquefaction]',
    allow_decomposition: false
  },
  heavy_oil_cracking: {
    type: 'recipe',
    name: 'heavy_oil_cracking',
    category: 'chemistry',
    enabled: false,
    energy_required: 3,
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
    main_product: '',
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
    }
  },
  light_oil_cracking: {
    type: 'recipe',
    name: 'light_oil_cracking',
    category: 'chemistry',
    enabled: false,
    energy_required: 3,
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
    main_product: '',
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
    }
  },
  sulfuric_acid: {
    type: 'recipe',
    name: 'sulfuric_acid',
    category: 'chemistry',
    energy_required: 1,
    enabled: false,
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
    subgroup: 'fluid_recipes',
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
    type: 'recipe',
    name: 'plastic_bar',
    category: 'chemistry',
    energy_required: 1,
    enabled: false,
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
    type: 'recipe',
    name: 'solid_fuel_from_light_oil',
    category: 'chemistry',
    energy_required: 3,
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
    icon: 'graphics/icons/solid-fuel-from-light-oil.png',
    icon_size: 32,
    subgroup: 'fluid_recipes',
    enabled: false,
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
    }
  },
  solid_fuel_from_petroleum_gas: {
    type: 'recipe',
    name: 'solid_fuel_from_petroleum_gas',
    category: 'chemistry',
    energy_required: 3,
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
    icon: 'graphics/icons/solid-fuel-from-petroleum-gas.png',
    icon_size: 32,
    subgroup: 'fluid_recipes',
    enabled: false,
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
    }
  },
  solid_fuel_from_heavy_oil: {
    type: 'recipe',
    name: 'solid_fuel_from_heavy_oil',
    category: 'chemistry',
    energy_required: 3,
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
    icon: 'graphics/icons/solid-fuel-from-heavy-oil.png',
    icon_size: 32,
    subgroup: 'fluid_recipes',
    enabled: false,
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
    }
  },
  sulfur: {
    type: 'recipe',
    name: 'sulfur',
    category: 'chemistry',
    energy_required: 1,
    enabled: false,
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
    type: 'recipe',
    name: 'lubricant',
    category: 'chemistry',
    enabled: false,
    energy_required: 1,
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
    subgroup: 'fluid_recipes',
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
    type: 'recipe',
    name: 'empty_barrel',
    category: 'crafting',
    energy_required: 1,
    subgroup: 'intermediate_product',
    enabled: false,
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
    type: 'recipe',
    name: 'long_handed_inserter',
    enabled: false,
    ingredients: [
      [
        'iron_gear_wheel',
        1
      ],
      [
        'iron_plate',
        1
      ],
      [
        'inserter',
        1
      ]
    ],
    result: 'long_handed_inserter'
  },
  fast_inserter: {
    type: 'recipe',
    name: 'fast_inserter',
    enabled: false,
    ingredients: [
      [
        'electronic_circuit',
        2
      ],
      [
        'iron_plate',
        2
      ],
      [
        'inserter',
        1
      ]
    ],
    result: 'fast_inserter'
  },
  filter_inserter: {
    type: 'recipe',
    name: 'filter_inserter',
    enabled: false,
    ingredients: [
      [
        'fast_inserter',
        1
      ],
      [
        'electronic_circuit',
        4
      ]
    ],
    result: 'filter_inserter'
  },
  stack_inserter: {
    type: 'recipe',
    name: 'stack_inserter',
    enabled: false,
    ingredients: [
      [
        'iron_gear_wheel',
        15
      ],
      [
        'electronic_circuit',
        15
      ],
      [
        'advanced_circuit',
        1
      ],
      [
        'fast_inserter',
        1
      ]
    ],
    result: 'stack_inserter'
  },
  stack_filter_inserter: {
    type: 'recipe',
    name: 'stack_filter_inserter',
    enabled: false,
    ingredients: [
      [
        'stack_inserter',
        1
      ],
      [
        'electronic_circuit',
        5
      ]
    ],
    result: 'stack_filter_inserter'
  },
  speed_module: {
    type: 'recipe',
    name: 'speed_module',
    enabled: false,
    ingredients: [
      [
        'advanced_circuit',
        5
      ],
      [
        'electronic_circuit',
        5
      ]
    ],
    energy_required: 15,
    result: 'speed_module'
  },
  speed_module_2: {
    type: 'recipe',
    name: 'speed_module_2',
    enabled: false,
    ingredients: [
      [
        'speed_module',
        4
      ],
      [
        'advanced_circuit',
        5
      ],
      [
        'processing_unit',
        5
      ]
    ],
    energy_required: 30,
    result: 'speed_module_2'
  },
  speed_module_3: {
    type: 'recipe',
    name: 'speed_module_3',
    enabled: false,
    ingredients: [
      [
        'speed_module_2',
        5
      ],
      [
        'advanced_circuit',
        5
      ],
      [
        'processing_unit',
        5
      ]
    ],
    energy_required: 60,
    result: 'speed_module_3'
  },
  productivity_module: {
    type: 'recipe',
    name: 'productivity_module',
    enabled: false,
    ingredients: [
      [
        'advanced_circuit',
        5
      ],
      [
        'electronic_circuit',
        5
      ]
    ],
    energy_required: 15,
    result: 'productivity_module'
  },
  productivity_module_2: {
    type: 'recipe',
    name: 'productivity_module_2',
    enabled: false,
    ingredients: [
      [
        'productivity_module',
        4
      ],
      [
        'advanced_circuit',
        5
      ],
      [
        'processing_unit',
        5
      ]
    ],
    energy_required: 30,
    result: 'productivity_module_2'
  },
  productivity_module_3: {
    type: 'recipe',
    name: 'productivity_module_3',
    enabled: false,
    ingredients: [
      [
        'productivity_module_2',
        5
      ],
      [
        'advanced_circuit',
        5
      ],
      [
        'processing_unit',
        5
      ]
    ],
    energy_required: 60,
    result: 'productivity_module_3'
  },
  effectivity_module: {
    type: 'recipe',
    name: 'effectivity_module',
    enabled: false,
    ingredients: [
      [
        'advanced_circuit',
        5
      ],
      [
        'electronic_circuit',
        5
      ]
    ],
    energy_required: 15,
    result: 'effectivity_module'
  },
  effectivity_module_2: {
    type: 'recipe',
    name: 'effectivity_module_2',
    enabled: false,
    ingredients: [
      [
        'effectivity_module',
        4
      ],
      [
        'advanced_circuit',
        5
      ],
      [
        'processing_unit',
        5
      ]
    ],
    energy_required: 30,
    result: 'effectivity_module_2'
  },
  effectivity_module_3: {
    type: 'recipe',
    name: 'effectivity_module_3',
    enabled: false,
    ingredients: [
      [
        'effectivity_module_2',
        5
      ],
      [
        'advanced_circuit',
        5
      ],
      [
        'processing_unit',
        5
      ]
    ],
    energy_required: 60,
    result: 'effectivity_module_3'
  },
  player_port: {
    type: 'recipe',
    name: 'player_port',
    enabled: false,
    ingredients: [
      [
        'electronic_circuit',
        10
      ],
      [
        'iron_gear_wheel',
        5
      ],
      [
        'iron_plate',
        1
      ]
    ],
    result: 'player_port'
  },
  fast_transport_belt: {
    type: 'recipe',
    name: 'fast_transport_belt',
    enabled: false,
    ingredients: [
      [
        'iron_gear_wheel',
        5
      ],
      [
        'transport_belt',
        1
      ]
    ],
    result: 'fast_transport_belt'
  },
  express_transport_belt: {
    type: 'recipe',
    name: 'express_transport_belt',
    category: 'crafting_with_fluid',
    normal: {
      enabled: false,
      ingredients: [
        [
          'iron_gear_wheel',
          10
        ],
        [
          'fast_transport_belt',
          1
        ],
        {
          type: 'fluid',
          name: 'lubricant',
          amount: 20
        }
      ],
      result: 'express_transport_belt'
    },
    expensive: {
      enabled: false,
      ingredients: [
        [
          'iron_gear_wheel',
          20
        ],
        [
          'fast_transport_belt',
          1
        ],
        {
          type: 'fluid',
          name: 'lubricant',
          amount: 20
        }
      ],
      result: 'express_transport_belt'
    }
  },
  solar_panel: {
    type: 'recipe',
    name: 'solar_panel',
    energy_required: 10,
    enabled: false,
    ingredients: [
      [
        'steel_plate',
        5
      ],
      [
        'electronic_circuit',
        15
      ],
      [
        'copper_plate',
        5
      ]
    ],
    result: 'solar_panel'
  },
  assembling_machine_2: {
    type: 'recipe',
    name: 'assembling_machine_2',
    normal: {
      enabled: false,
      ingredients: [
        [
          'iron_plate',
          9
        ],
        [
          'electronic_circuit',
          3
        ],
        [
          'iron_gear_wheel',
          5
        ],
        [
          'assembling_machine_1',
          1
        ]
      ],
      result: 'assembling_machine_2'
    },
    expensive: {
      enabled: false,
      ingredients: [
        [
          'iron_plate',
          20
        ],
        [
          'electronic_circuit',
          5
        ],
        [
          'iron_gear_wheel',
          10
        ],
        [
          'assembling_machine_1',
          1
        ]
      ],
      result: 'assembling_machine_2'
    }
  },
  assembling_machine_3: {
    type: 'recipe',
    name: 'assembling_machine_3',
    enabled: false,
    ingredients: [
      [
        'speed_module',
        4
      ],
      [
        'assembling_machine_2',
        2
      ]
    ],
    result: 'assembling_machine_3'
  },
  car: {
    type: 'recipe',
    name: 'car',
    enabled: false,
    energy_required: 2,
    ingredients: [
      [
        'engine_unit',
        8
      ],
      [
        'iron_plate',
        20
      ],
      [
        'steel_plate',
        5
      ]
    ],
    result: 'car'
  },
  tank: {
    type: 'recipe',
    name: 'tank',
    normal: {
      enabled: false,
      energy_required: 5,
      ingredients: [
        [
          'engine_unit',
          32
        ],
        [
          'steel_plate',
          50
        ],
        [
          'iron_gear_wheel',
          15
        ],
        [
          'advanced_circuit',
          10
        ]
      ],
      result: 'tank'
    },
    expensive: {
      enabled: false,
      energy_required: 8,
      ingredients: [
        [
          'engine_unit',
          64
        ],
        [
          'steel_plate',
          100
        ],
        [
          'iron_gear_wheel',
          30
        ],
        [
          'advanced_circuit',
          20
        ]
      ],
      result: 'tank'
    }
  },
  rail: {
    type: 'recipe',
    name: 'rail',
    enabled: false,
    ingredients: [
      [
        'stone',
        1
      ],
      [
        'iron_stick',
        1
      ],
      [
        'steel_plate',
        1
      ]
    ],
    result: 'rail',
    result_count: 2
  },
  locomotive: {
    type: 'recipe',
    name: 'locomotive',
    energy_required: 4,
    enabled: false,
    ingredients: [
      [
        'engine_unit',
        20
      ],
      [
        'electronic_circuit',
        10
      ],
      [
        'steel_plate',
        30
      ]
    ],
    result: 'locomotive'
  },
  cargo_wagon: {
    type: 'recipe',
    name: 'cargo_wagon',
    energy_required: 1,
    enabled: false,
    ingredients: [
      [
        'iron_gear_wheel',
        10
      ],
      [
        'iron_plate',
        20
      ],
      [
        'steel_plate',
        20
      ]
    ],
    result: 'cargo_wagon'
  },
  fluid_wagon: {
    type: 'recipe',
    name: 'fluid_wagon',
    enabled: false,
    energy_required: 1.5,
    ingredients: [
      [
        'iron_gear_wheel',
        10
      ],
      [
        'steel_plate',
        16
      ],
      [
        'pipe',
        8
      ],
      [
        'storage_tank',
        1
      ]
    ],
    result: 'fluid_wagon'
  },
  artillery_wagon: {
    type: 'recipe',
    name: 'artillery_wagon',
    energy_required: 4,
    enabled: false,
    ingredients: [
      [
        'engine_unit',
        64
      ],
      [
        'iron_gear_wheel',
        10
      ],
      [
        'steel_plate',
        40
      ],
      [
        'pipe',
        16
      ],
      [
        'advanced_circuit',
        20
      ]
    ],
    result: 'artillery_wagon'
  },
  train_stop: {
    type: 'recipe',
    name: 'train_stop',
    enabled: false,
    ingredients: [
      [
        'electronic_circuit',
        5
      ],
      [
        'iron_plate',
        10
      ],
      [
        'steel_plate',
        3
      ]
    ],
    result: 'train_stop'
  },
  rail_signal: {
    type: 'recipe',
    name: 'rail_signal',
    enabled: false,
    ingredients: [
      [
        'electronic_circuit',
        1
      ],
      [
        'iron_plate',
        5
      ]
    ],
    result: 'rail_signal'
  },
  rail_chain_signal: {
    type: 'recipe',
    name: 'rail_chain_signal',
    enabled: false,
    ingredients: [
      [
        'electronic_circuit',
        1
      ],
      [
        'iron_plate',
        5
      ]
    ],
    result: 'rail_chain_signal'
  },
  heavy_armor: {
    type: 'recipe',
    name: 'heavy_armor',
    enabled: false,
    energy_required: 8,
    ingredients: [
      [
        'copper_plate',
        100
      ],
      [
        'steel_plate',
        50
      ]
    ],
    result: 'heavy_armor'
  },
  modular_armor: {
    type: 'recipe',
    name: 'modular_armor',
    enabled: false,
    energy_required: 15,
    ingredients: [
      [
        'advanced_circuit',
        30
      ],
      [
        'steel_plate',
        50
      ]
    ],
    result: 'modular_armor'
  },
  power_armor: {
    type: 'recipe',
    name: 'power_armor',
    enabled: false,
    energy_required: 20,
    ingredients: [
      [
        'processing_unit',
        40
      ],
      [
        'electric_engine_unit',
        20
      ],
      [
        'steel_plate',
        40
      ]
    ],
    result: 'power_armor',
    requester_paste_multiplier: 1
  },
  power_armor_mk2: {
    type: 'recipe',
    name: 'power_armor_mk2',
    enabled: false,
    energy_required: 25,
    ingredients: [
      [
        'effectivity_module_3',
        5
      ],
      [
        'speed_module_3',
        5
      ],
      [
        'processing_unit',
        40
      ],
      [
        'steel_plate',
        40
      ]
    ],
    result: 'power_armor_mk2',
    requester_paste_multiplier: 1
  },
  iron_chest: {
    type: 'recipe',
    name: 'iron_chest',
    enabled: true,
    ingredients: [
      [
        'iron_plate',
        8
      ]
    ],
    result: 'iron_chest'
  },
  steel_chest: {
    type: 'recipe',
    name: 'steel_chest',
    enabled: false,
    ingredients: [
      [
        'steel_plate',
        8
      ]
    ],
    result: 'steel_chest'
  },
  stone_wall: {
    type: 'recipe',
    name: 'stone_wall',
    enabled: false,
    ingredients: [
      [
        'stone_brick',
        5
      ]
    ],
    result: 'stone_wall'
  },
  gate: {
    type: 'recipe',
    name: 'gate',
    enabled: false,
    ingredients: [
      [
        'stone_wall',
        1
      ],
      [
        'steel_plate',
        2
      ],
      [
        'electronic_circuit',
        2
      ]
    ],
    result: 'gate'
  },
  flamethrower: {
    type: 'recipe',
    name: 'flamethrower',
    enabled: false,
    energy_required: 10,
    ingredients: [
      [
        'steel_plate',
        5
      ],
      [
        'iron_gear_wheel',
        10
      ]
    ],
    result: 'flamethrower'
  },
  land_mine: {
    type: 'recipe',
    name: 'land_mine',
    enabled: false,
    energy_required: 5,
    ingredients: [
      [
        'steel_plate',
        1
      ],
      [
        'explosives',
        2
      ]
    ],
    result: 'land_mine',
    result_count: 4
  },
  rocket_launcher: {
    type: 'recipe',
    name: 'rocket_launcher',
    enabled: false,
    energy_required: 10,
    ingredients: [
      [
        'iron_plate',
        5
      ],
      [
        'iron_gear_wheel',
        5
      ],
      [
        'electronic_circuit',
        5
      ]
    ],
    result: 'rocket_launcher'
  },
  shotgun: {
    type: 'recipe',
    name: 'shotgun',
    enabled: false,
    energy_required: 10,
    ingredients: [
      [
        'iron_plate',
        15
      ],
      [
        'iron_gear_wheel',
        5
      ],
      [
        'copper_plate',
        10
      ],
      [
        'wood',
        5
      ]
    ],
    result: 'shotgun'
  },
  combat_shotgun: {
    type: 'recipe',
    name: 'combat_shotgun',
    enabled: false,
    energy_required: 10,
    ingredients: [
      [
        'steel_plate',
        15
      ],
      [
        'iron_gear_wheel',
        5
      ],
      [
        'copper_plate',
        10
      ],
      [
        'wood',
        10
      ]
    ],
    result: 'combat_shotgun'
  },
  railgun: {
    type: 'recipe',
    name: 'railgun',
    enabled: false,
    energy_required: 8,
    ingredients: [
      [
        'steel_plate',
        15
      ],
      [
        'copper_plate',
        15
      ],
      [
        'electronic_circuit',
        10
      ],
      [
        'advanced_circuit',
        5
      ]
    ],
    result: 'railgun'
  },
  science_pack_1: {
    type: 'recipe',
    name: 'science_pack_1',
    energy_required: 5,
    ingredients: [
      [
        'copper_plate',
        1
      ],
      [
        'iron_gear_wheel',
        1
      ]
    ],
    result: 'science_pack_1'
  },
  science_pack_2: {
    type: 'recipe',
    name: 'science_pack_2',
    energy_required: 6,
    ingredients: [
      [
        'inserter',
        1
      ],
      [
        'transport_belt',
        1
      ]
    ],
    result: 'science_pack_2'
  },
  science_pack_3: {
    type: 'recipe',
    name: 'science_pack_3',
    enabled: false,
    energy_required: 12,
    ingredients: [
      [
        'advanced_circuit',
        1
      ],
      [
        'engine_unit',
        1
      ],
      [
        'electric_mining_drill',
        1
      ]
    ],
    result: 'science_pack_3'
  },
  military_science_pack: {
    type: 'recipe',
    name: 'military_science_pack',
    enabled: false,
    energy_required: 10,
    ingredients: [
      [
        'piercing_rounds_magazine',
        1
      ],
      [
        'grenade',
        1
      ],
      [
        'gun_turret',
        1
      ]
    ],
    result_count: 2,
    result: 'military_science_pack'
  },
  production_science_pack: {
    type: 'recipe',
    name: 'production_science_pack',
    enabled: false,
    energy_required: 14,
    ingredients: [
      [
        'electric_engine_unit',
        1
      ],
      [
        'electric_furnace',
        1
      ]
    ],
    result_count: 2,
    result: 'production_science_pack'
  },
  high_tech_science_pack: {
    type: 'recipe',
    name: 'high_tech_science_pack',
    enabled: false,
    energy_required: 14,
    ingredients: [
      [
        'battery',
        1
      ],
      [
        'processing_unit',
        3
      ],
      [
        'speed_module',
        1
      ],
      [
        'copper_cable',
        30
      ]
    ],
    result_count: 2,
    result: 'high_tech_science_pack'
  },
  lab: {
    type: 'recipe',
    name: 'lab',
    energy_required: 2,
    ingredients: [
      [
        'electronic_circuit',
        10
      ],
      [
        'iron_gear_wheel',
        10
      ],
      [
        'transport_belt',
        4
      ]
    ],
    result: 'lab'
  },
  red_wire: {
    type: 'recipe',
    name: 'red_wire',
    enabled: false,
    ingredients: [
      [
        'electronic_circuit',
        1
      ],
      [
        'copper_cable',
        1
      ]
    ],
    result: 'red_wire'
  },
  green_wire: {
    type: 'recipe',
    name: 'green_wire',
    enabled: false,
    ingredients: [
      [
        'electronic_circuit',
        1
      ],
      [
        'copper_cable',
        1
      ]
    ],
    result: 'green_wire'
  },
  underground_belt: {
    type: 'recipe',
    name: 'underground_belt',
    enabled: false,
    energy_required: 1,
    ingredients: [
      [
        'iron_plate',
        10
      ],
      [
        'transport_belt',
        5
      ]
    ],
    result_count: 2,
    result: 'underground_belt'
  },
  fast_underground_belt: {
    type: 'recipe',
    name: 'fast_underground_belt',
    energy_required: 2,
    enabled: false,
    ingredients: [
      [
        'iron_gear_wheel',
        40
      ],
      [
        'underground_belt',
        2
      ]
    ],
    result_count: 2,
    result: 'fast_underground_belt'
  },
  express_underground_belt: {
    type: 'recipe',
    name: 'express_underground_belt',
    energy_required: 2,
    category: 'crafting_with_fluid',
    enabled: false,
    ingredients: [
      [
        'iron_gear_wheel',
        80
      ],
      [
        'fast_underground_belt',
        2
      ],
      {
        type: 'fluid',
        name: 'lubricant',
        amount: 40
      }
    ],
    result_count: 2,
    result: 'express_underground_belt'
  },
  loader: {
    type: 'recipe',
    name: 'loader',
    enabled: false,
    energy_required: 1,
    ingredients: [
      [
        'inserter',
        5
      ],
      [
        'electronic_circuit',
        5
      ],
      [
        'iron_gear_wheel',
        5
      ],
      [
        'iron_plate',
        5
      ],
      [
        'transport_belt',
        5
      ]
    ],
    result: 'loader'
  },
  fast_loader: {
    type: 'recipe',
    name: 'fast_loader',
    enabled: false,
    energy_required: 3,
    ingredients: [
      [
        'fast_transport_belt',
        5
      ],
      [
        'loader',
        1
      ]
    ],
    result: 'fast_loader'
  },
  express_loader: {
    type: 'recipe',
    name: 'express_loader',
    enabled: false,
    energy_required: 10,
    ingredients: [
      [
        'express_transport_belt',
        5
      ],
      [
        'fast_loader',
        1
      ]
    ],
    result: 'express_loader'
  },
  splitter: {
    type: 'recipe',
    name: 'splitter',
    enabled: false,
    energy_required: 1,
    ingredients: [
      [
        'electronic_circuit',
        5
      ],
      [
        'iron_plate',
        5
      ],
      [
        'transport_belt',
        4
      ]
    ],
    result: 'splitter'
  },
  fast_splitter: {
    type: 'recipe',
    name: 'fast_splitter',
    enabled: false,
    energy_required: 2,
    ingredients: [
      [
        'splitter',
        1
      ],
      [
        'iron_gear_wheel',
        10
      ],
      [
        'electronic_circuit',
        10
      ]
    ],
    result: 'fast_splitter'
  },
  express_splitter: {
    type: 'recipe',
    name: 'express_splitter',
    category: 'crafting_with_fluid',
    enabled: false,
    energy_required: 2,
    ingredients: [
      [
        'fast_splitter',
        1
      ],
      [
        'iron_gear_wheel',
        10
      ],
      [
        'advanced_circuit',
        10
      ],
      {
        type: 'fluid',
        name: 'lubricant',
        amount: 80
      }
    ],
    result: 'express_splitter'
  },
  advanced_circuit: {
    type: 'recipe',
    name: 'advanced_circuit',
    normal: {
      enabled: false,
      energy_required: 6,
      ingredients: [
        [
          'electronic_circuit',
          2
        ],
        [
          'plastic_bar',
          2
        ],
        [
          'copper_cable',
          4
        ]
      ],
      result: 'advanced_circuit'
    },
    expensive: {
      enabled: false,
      energy_required: 6,
      ingredients: [
        [
          'electronic_circuit',
          2
        ],
        [
          'plastic_bar',
          4
        ],
        [
          'copper_cable',
          8
        ]
      ],
      result: 'advanced_circuit'
    }
  },
  processing_unit: {
    type: 'recipe',
    name: 'processing_unit',
    category: 'crafting_with_fluid',
    normal: {
      enabled: false,
      energy_required: 10,
      ingredients: [
        [
          'electronic_circuit',
          20
        ],
        [
          'advanced_circuit',
          2
        ],
        {
          type: 'fluid',
          name: 'sulfuric_acid',
          amount: 5
        }
      ],
      result: 'processing_unit'
    },
    expensive: {
      enabled: false,
      energy_required: 10,
      ingredients: [
        [
          'electronic_circuit',
          20
        ],
        [
          'advanced_circuit',
          2
        ],
        {
          type: 'fluid',
          name: 'sulfuric_acid',
          amount: 10
        }
      ],
      result: 'processing_unit'
    }
  },
  logistic_robot: {
    type: 'recipe',
    name: 'logistic_robot',
    enabled: false,
    ingredients: [
      [
        'flying_robot_frame',
        1
      ],
      [
        'advanced_circuit',
        2
      ]
    ],
    result: 'logistic_robot'
  },
  construction_robot: {
    type: 'recipe',
    name: 'construction_robot',
    enabled: false,
    ingredients: [
      [
        'flying_robot_frame',
        1
      ],
      [
        'electronic_circuit',
        2
      ]
    ],
    result: 'construction_robot'
  },
  logistic_chest_passive_provider: {
    type: 'recipe',
    name: 'logistic_chest_passive_provider',
    enabled: false,
    ingredients: [
      [
        'steel_chest',
        1
      ],
      [
        'electronic_circuit',
        3
      ],
      [
        'advanced_circuit',
        1
      ]
    ],
    result: 'logistic_chest_passive_provider'
  },
  logistic_chest_active_provider: {
    type: 'recipe',
    name: 'logistic_chest_active_provider',
    enabled: false,
    ingredients: [
      [
        'steel_chest',
        1
      ],
      [
        'electronic_circuit',
        3
      ],
      [
        'advanced_circuit',
        1
      ]
    ],
    result: 'logistic_chest_active_provider'
  },
  logistic_chest_storage: {
    type: 'recipe',
    name: 'logistic_chest_storage',
    enabled: false,
    ingredients: [
      [
        'steel_chest',
        1
      ],
      [
        'electronic_circuit',
        3
      ],
      [
        'advanced_circuit',
        1
      ]
    ],
    result: 'logistic_chest_storage'
  },
  logistic_chest_buffer: {
    type: 'recipe',
    name: 'logistic_chest_buffer',
    enabled: false,
    ingredients: [
      [
        'steel_chest',
        1
      ],
      [
        'electronic_circuit',
        3
      ],
      [
        'advanced_circuit',
        1
      ]
    ],
    result: 'logistic_chest_buffer'
  },
  logistic_chest_requester: {
    type: 'recipe',
    name: 'logistic_chest_requester',
    enabled: false,
    ingredients: [
      [
        'steel_chest',
        1
      ],
      [
        'electronic_circuit',
        3
      ],
      [
        'advanced_circuit',
        1
      ]
    ],
    result: 'logistic_chest_requester'
  },
  rocket_silo: {
    type: 'recipe',
    name: 'rocket_silo',
    enabled: false,
    ingredients: [
      [
        'steel_plate',
        1000
      ],
      [
        'concrete',
        1000
      ],
      [
        'pipe',
        100
      ],
      [
        'processing_unit',
        200
      ],
      [
        'electric_engine_unit',
        200
      ]
    ],
    energy_required: 30,
    result: 'rocket_silo',
    requester_paste_multiplier: 1
  },
  roboport: {
    type: 'recipe',
    name: 'roboport',
    enabled: false,
    energy_required: 5,
    ingredients: [
      [
        'steel_plate',
        45
      ],
      [
        'iron_gear_wheel',
        45
      ],
      [
        'advanced_circuit',
        45
      ]
    ],
    result: 'roboport'
  },
  steel_axe: {
    type: 'recipe',
    name: 'steel_axe',
    enabled: false,
    ingredients: [
      [
        'steel_plate',
        5
      ],
      [
        'iron_stick',
        2
      ]
    ],
    result: 'steel_axe'
  },
  big_electric_pole: {
    type: 'recipe',
    name: 'big_electric_pole',
    enabled: false,
    ingredients: [
      [
        'steel_plate',
        5
      ],
      [
        'copper_plate',
        5
      ]
    ],
    result: 'big_electric_pole'
  },
  substation: {
    type: 'recipe',
    name: 'substation',
    enabled: false,
    ingredients: [
      [
        'steel_plate',
        10
      ],
      [
        'advanced_circuit',
        5
      ],
      [
        'copper_plate',
        5
      ]
    ],
    result: 'substation'
  },
  medium_electric_pole: {
    type: 'recipe',
    name: 'medium_electric_pole',
    enabled: false,
    ingredients: [
      [
        'steel_plate',
        2
      ],
      [
        'copper_plate',
        2
      ]
    ],
    result: 'medium_electric_pole'
  },
  accumulator: {
    type: 'recipe',
    name: 'accumulator',
    energy_required: 10,
    enabled: false,
    ingredients: [
      [
        'iron_plate',
        2
      ],
      [
        'battery',
        5
      ]
    ],
    result: 'accumulator'
  },
  steel_furnace: {
    type: 'recipe',
    name: 'steel_furnace',
    ingredients: [
      [
        'steel_plate',
        6
      ],
      [
        'stone_brick',
        10
      ]
    ],
    result: 'steel_furnace',
    energy_required: 3,
    enabled: false
  },
  electric_furnace: {
    type: 'recipe',
    name: 'electric_furnace',
    ingredients: [
      [
        'steel_plate',
        10
      ],
      [
        'advanced_circuit',
        5
      ],
      [
        'stone_brick',
        10
      ]
    ],
    result: 'electric_furnace',
    energy_required: 5,
    enabled: false
  },
  beacon: {
    type: 'recipe',
    name: 'beacon',
    enabled: false,
    energy_required: 15,
    ingredients: [
      [
        'electronic_circuit',
        20
      ],
      [
        'advanced_circuit',
        20
      ],
      [
        'steel_plate',
        10
      ],
      [
        'copper_cable',
        10
      ]
    ],
    result: 'beacon'
  },
  pumpjack: {
    type: 'recipe',
    name: 'pumpjack',
    energy_required: 5,
    ingredients: [
      [
        'steel_plate',
        5
      ],
      [
        'iron_gear_wheel',
        10
      ],
      [
        'electronic_circuit',
        5
      ],
      [
        'pipe',
        10
      ]
    ],
    result: 'pumpjack',
    enabled: false
  },
  oil_refinery: {
    type: 'recipe',
    name: 'oil_refinery',
    energy_required: 8,
    ingredients: [
      [
        'steel_plate',
        15
      ],
      [
        'iron_gear_wheel',
        10
      ],
      [
        'stone_brick',
        10
      ],
      [
        'electronic_circuit',
        10
      ],
      [
        'pipe',
        10
      ]
    ],
    result: 'oil_refinery',
    enabled: false
  },
  engine_unit: {
    type: 'recipe',
    name: 'engine_unit',
    energy_required: 10,
    category: 'advanced_crafting',
    ingredients: [
      [
        'steel_plate',
        1
      ],
      [
        'iron_gear_wheel',
        1
      ],
      [
        'pipe',
        2
      ]
    ],
    result: 'engine_unit',
    enabled: false
  },
  electric_engine_unit: {
    type: 'recipe',
    name: 'electric_engine_unit',
    category: 'crafting_with_fluid',
    energy_required: 10,
    ingredients: [
      [
        'engine_unit',
        1
      ],
      {
        type: 'fluid',
        name: 'lubricant',
        amount: 15
      },
      [
        'electronic_circuit',
        2
      ]
    ],
    result: 'electric_engine_unit',
    enabled: false
  },
  flying_robot_frame: {
    type: 'recipe',
    name: 'flying_robot_frame',
    energy_required: 20,
    ingredients: [
      [
        'electric_engine_unit',
        1
      ],
      [
        'battery',
        2
      ],
      [
        'steel_plate',
        1
      ],
      [
        'electronic_circuit',
        3
      ]
    ],
    result: 'flying_robot_frame',
    enabled: false
  },
  explosives: {
    type: 'recipe',
    name: 'explosives',
    category: 'chemistry',
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
    normal: {
      energy_required: 5,
      enabled: false,
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
      result: 'explosives',
      result_count: 2
    },
    expensive: {
      energy_required: 5,
      enabled: false,
      ingredients: [
        {
          type: 'item',
          name: 'sulfur',
          amount: 2
        },
        {
          type: 'item',
          name: 'coal',
          amount: 2
        },
        {
          type: 'fluid',
          name: 'water',
          amount: 10
        }
      ],
      result: 'explosives',
      result_count: 2
    }
  },
  battery: {
    type: 'recipe',
    name: 'battery',
    category: 'chemistry',
    normal: {
      energy_required: 5,
      enabled: false,
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
      result: 'battery'
    },
    expensive: {
      energy_required: 5,
      enabled: false,
      ingredients: [
        {
          type: 'fluid',
          name: 'sulfuric_acid',
          amount: 40
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
      result: 'battery'
    },
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
    type: 'recipe',
    name: 'storage_tank',
    energy_required: 3,
    enabled: false,
    ingredients: [
      [
        'iron_plate',
        20
      ],
      [
        'steel_plate',
        5
      ]
    ],
    result: 'storage_tank'
  },
  pump: {
    type: 'recipe',
    name: 'pump',
    energy_required: 2,
    enabled: false,
    ingredients: [
      [
        'engine_unit',
        1
      ],
      [
        'steel_plate',
        1
      ],
      [
        'pipe',
        1
      ]
    ],
    result: 'pump'
  },
  chemical_plant: {
    type: 'recipe',
    name: 'chemical_plant',
    energy_required: 5,
    enabled: false,
    ingredients: [
      [
        'steel_plate',
        5
      ],
      [
        'iron_gear_wheel',
        5
      ],
      [
        'electronic_circuit',
        5
      ],
      [
        'pipe',
        5
      ]
    ],
    result: 'chemical_plant'
  },
  small_plane: {
    type: 'recipe',
    name: 'small_plane',
    energy_required: 30,
    enabled: false,
    category: 'crafting',
    ingredients: [
      [
        'plastic_bar',
        100
      ],
      [
        'advanced_circuit',
        200
      ],
      [
        'electric_engine_unit',
        20
      ],
      [
        'battery',
        100
      ]
    ],
    result: 'small_plane'
  },
  arithmetic_combinator: {
    type: 'recipe',
    name: 'arithmetic_combinator',
    enabled: false,
    ingredients: [
      [
        'copper_cable',
        5
      ],
      [
        'electronic_circuit',
        5
      ]
    ],
    result: 'arithmetic_combinator'
  },
  decider_combinator: {
    type: 'recipe',
    name: 'decider_combinator',
    enabled: false,
    ingredients: [
      [
        'copper_cable',
        5
      ],
      [
        'electronic_circuit',
        5
      ]
    ],
    result: 'decider_combinator'
  },
  constant_combinator: {
    type: 'recipe',
    name: 'constant_combinator',
    enabled: false,
    ingredients: [
      [
        'copper_cable',
        5
      ],
      [
        'electronic_circuit',
        2
      ]
    ],
    result: 'constant_combinator'
  },
  power_switch: {
    type: 'recipe',
    name: 'power_switch',
    enabled: false,
    energy_required: 2,
    ingredients: [
      [
        'iron_plate',
        5
      ],
      [
        'copper_cable',
        5
      ],
      [
        'electronic_circuit',
        2
      ]
    ],
    result: 'power_switch'
  },
  programmable_speaker: {
    type: 'recipe',
    name: 'programmable_speaker',
    enabled: false,
    energy_required: 2,
    ingredients: [
      [
        'iron_plate',
        5
      ],
      [
        'copper_cable',
        5
      ],
      [
        'electronic_circuit',
        4
      ]
    ],
    result: 'programmable_speaker'
  },
  low_density_structure: {
    type: 'recipe',
    name: 'low_density_structure',
    category: 'crafting',
    normal: {
      energy_required: 30,
      enabled: false,
      ingredients: [
        [
          'steel_plate',
          10
        ],
        [
          'copper_plate',
          5
        ],
        [
          'plastic_bar',
          5
        ]
      ],
      result: 'low_density_structure'
    },
    expensive: {
      energy_required: 30,
      enabled: false,
      ingredients: [
        [
          'steel_plate',
          10
        ],
        [
          'copper_plate',
          10
        ],
        [
          'plastic_bar',
          10
        ]
      ],
      result: 'low_density_structure'
    }
  },
  rocket_fuel: {
    type: 'recipe',
    name: 'rocket_fuel',
    energy_required: 30,
    enabled: false,
    category: 'crafting',
    ingredients: [
      [
        'solid_fuel',
        10
      ]
    ],
    result: 'rocket_fuel'
  },
  rocket_control_unit: {
    type: 'recipe',
    name: 'rocket_control_unit',
    energy_required: 30,
    enabled: false,
    category: 'crafting',
    ingredients: [
      [
        'processing_unit',
        1
      ],
      [
        'speed_module',
        1
      ]
    ],
    result: 'rocket_control_unit'
  },
  rocket_part: {
    type: 'recipe',
    name: 'rocket_part',
    energy_required: 3,
    enabled: false,
    hidden: true,
    category: 'rocket_building',
    ingredients: [
      [
        'rocket_control_unit',
        10
      ],
      [
        'low_density_structure',
        10
      ],
      [
        'rocket_fuel',
        10
      ]
    ],
    result: 'rocket_part'
  },
  satellite: {
    type: 'recipe',
    name: 'satellite',
    energy_required: 5,
    enabled: false,
    category: 'crafting',
    ingredients: [
      [
        'low_density_structure',
        100
      ],
      [
        'solar_panel',
        100
      ],
      [
        'accumulator',
        100
      ],
      [
        'radar',
        5
      ],
      [
        'processing_unit',
        100
      ],
      [
        'rocket_fuel',
        50
      ]
    ],
    result: 'satellite',
    requester_paste_multiplier: 1
  },
  concrete: {
    type: 'recipe',
    name: 'concrete',
    energy_required: 10,
    enabled: false,
    category: 'crafting_with_fluid',
    ingredients: [
      [
        'stone_brick',
        5
      ],
      [
        'iron_ore',
        1
      ],
      {
        type: 'fluid',
        name: 'water',
        amount: 100
      }
    ],
    result: 'concrete',
    result_count: 10
  },
  hazard_concrete: {
    type: 'recipe',
    name: 'hazard_concrete',
    energy_required: 0.25,
    enabled: false,
    category: 'crafting',
    ingredients: [
      [
        'concrete',
        10
      ]
    ],
    result: 'hazard_concrete',
    result_count: 10
  },
  refined_concrete: {
    type: 'recipe',
    name: 'refined_concrete',
    energy_required: 15,
    enabled: false,
    category: 'crafting_with_fluid',
    ingredients: [
      [
        'concrete',
        20
      ],
      [
        'iron_stick',
        8
      ],
      [
        'steel_plate',
        1
      ],
      {
        type: 'fluid',
        name: 'water',
        amount: 100
      }
    ],
    result: 'refined_concrete',
    result_count: 10
  },
  refined_hazard_concrete: {
    type: 'recipe',
    name: 'refined_hazard_concrete',
    energy_required: 0.25,
    enabled: false,
    category: 'crafting',
    ingredients: [
      [
        'refined_concrete',
        10
      ]
    ],
    result: 'refined_hazard_concrete',
    result_count: 10
  },
  landfill: {
    type: 'recipe',
    name: 'landfill',
    energy_required: 0.5,
    enabled: false,
    category: 'crafting',
    ingredients: [
      [
        'stone',
        20
      ]
    ],
    result: 'landfill',
    result_count: 1
  },
  electric_energy_interface: {
    type: 'recipe',
    name: 'electric_energy_interface',
    energy_required: 0.5,
    enabled: false,
    ingredients: [
      [
        'iron_plate',
        2
      ],
      [
        'electronic_circuit',
        5
      ]
    ],
    result: 'electric_energy_interface'
  },
  nuclear_reactor: {
    type: 'recipe',
    name: 'nuclear_reactor',
    energy_required: 8,
    enabled: false,
    ingredients: [
      [
        'concrete',
        500
      ],
      [
        'steel_plate',
        500
      ],
      [
        'advanced_circuit',
        500
      ],
      [
        'copper_plate',
        500
      ]
    ],
    result: 'nuclear_reactor',
    requester_paste_multiplier: 1
  },
  centrifuge: {
    type: 'recipe',
    name: 'centrifuge',
    energy_required: 4,
    enabled: false,
    ingredients: [
      [
        'concrete',
        100
      ],
      [
        'steel_plate',
        50
      ],
      [
        'advanced_circuit',
        100
      ],
      [
        'iron_gear_wheel',
        100
      ]
    ],
    result: 'centrifuge',
    requester_paste_multiplier: 10
  },
  uranium_processing: {
    type: 'recipe',
    name: 'uranium_processing',
    energy_required: 10,
    enabled: false,
    category: 'centrifuging',
    ingredients: [
      [
        'uranium_ore',
        10
      ]
    ],
    icon: 'graphics/icons/uranium-processing.png',
    icon_size: 32,
    subgroup: 'raw_material',
    order: 'k[uranium_processing]',
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
    type: 'recipe',
    name: 'kovarex_enrichment_process',
    energy_required: 50,
    enabled: false,
    category: 'centrifuging',
    ingredients: [
      [
        'uranium_235',
        40
      ],
      [
        'uranium_238',
        5
      ]
    ],
    icon: 'graphics/icons/kovarex-enrichment-process.png',
    icon_size: 32,
    subgroup: 'intermediate_product',
    order: 'r[uranium_processing]_c[kovarex_enrichment_process]',
    main_product: '',
    results: [
      {
        name: 'uranium_235',
        amount: 41
      },
      {
        name: 'uranium_238',
        amount: 2
      }
    ],
    allow_decomposition: false
  },
  nuclear_fuel: {
    type: 'recipe',
    name: 'nuclear_fuel',
    energy_required: 60,
    enabled: false,
    category: 'centrifuging',
    ingredients: [
      [
        'uranium_235',
        1
      ],
      [
        'rocket_fuel',
        1
      ]
    ],
    icon: 'graphics/icons/nuclear-fuel.png',
    icon_size: 32,
    result: 'nuclear_fuel'
  },
  nuclear_fuel_reprocessing: {
    type: 'recipe',
    name: 'nuclear_fuel_reprocessing',
    energy_required: 50,
    enabled: false,
    category: 'centrifuging',
    ingredients: [
      [
        'used_up_uranium_fuel_cell',
        5
      ]
    ],
    icon: 'graphics/icons/nuclear-fuel-reprocessing.png',
    icon_size: 32,
    subgroup: 'intermediate_product',
    order: 'r[uranium_processing]_b[nuclear_fuel_reprocessing]',
    main_product: '',
    results: [
      {
        name: 'uranium_238',
        amount: 3
      }
    ],
    allow_decomposition: false
  },
  uranium_fuel_cell: {
    type: 'recipe',
    name: 'uranium_fuel_cell',
    energy_required: 10,
    enabled: false,
    ingredients: [
      [
        'iron_plate',
        10
      ],
      [
        'uranium_235',
        1
      ],
      [
        'uranium_238',
        19
      ]
    ],
    result: 'uranium_fuel_cell',
    result_count: 10
  },
  heat_exchanger: {
    type: 'recipe',
    name: 'heat_exchanger',
    energy_required: 3,
    enabled: false,
    ingredients: [
      [
        'steel_plate',
        10
      ],
      [
        'copper_plate',
        100
      ],
      [
        'pipe',
        10
      ]
    ],
    result: 'heat_exchanger'
  },
  heat_pipe: {
    type: 'recipe',
    name: 'heat_pipe',
    energy_required: 1,
    enabled: false,
    ingredients: [
      [
        'steel_plate',
        10
      ],
      [
        'copper_plate',
        20
      ]
    ],
    result: 'heat_pipe'
  },
  steam_turbine: {
    type: 'recipe',
    name: 'steam_turbine',
    enabled: false,
    energy_required: 3,
    ingredients: [
      [
        'iron_gear_wheel',
        50
      ],
      [
        'copper_plate',
        50
      ],
      [
        'pipe',
        20
      ]
    ],
    result: 'steam_turbine'
  },
  laser_turret: {
    type: 'recipe',
    name: 'laser_turret',
    enabled: false,
    energy_required: 20,
    ingredients: [
      [
        'steel_plate',
        20
      ],
      [
        'electronic_circuit',
        20
      ],
      [
        'battery',
        12
      ]
    ],
    result: 'laser_turret'
  },
  flamethrower_turret: {
    type: 'recipe',
    name: 'flamethrower_turret',
    enabled: false,
    energy_required: 20,
    ingredients: [
      [
        'steel_plate',
        30
      ],
      [
        'iron_gear_wheel',
        15
      ],
      [
        'pipe',
        10
      ],
      [
        'engine_unit',
        5
      ]
    ],
    result: 'flamethrower_turret'
  },
  artillery_turret: {
    type: 'recipe',
    name: 'artillery_turret',
    enabled: false,
    energy_required: 40,
    ingredients: [
      [
        'steel_plate',
        60
      ],
      [
        'concrete',
        60
      ],
      [
        'iron_gear_wheel',
        40
      ],
      [
        'advanced_circuit',
        20
      ]
    ],
    result: 'artillery_turret'
  },
  fill_water_barrel: {
    type: 'recipe',
    name: 'fill_water_barrel',
    localised_name: [
      'recipe_name.fill_barrel',
      [
        'fluid_name.water'
      ]
    ],
    category: 'crafting_with_fluid',
    energy_required: 0.2,
    subgroup: 'fill_barrel',
    order: 'b[fill_water_barrel]',
    enabled: false,
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
    ],
    hide_from_stats: true,
    allow_decomposition: false
  },
  empty_water_barrel: {
    type: 'recipe',
    name: 'empty_water_barrel',
    localised_name: [
      'recipe_name.empty_filled_barrel',
      [
        'fluid_name.water'
      ]
    ],
    category: 'crafting_with_fluid',
    energy_required: 0.2,
    subgroup: 'empty_barrel',
    order: 'c[empty_water_barrel]',
    enabled: false,
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
    ],
    hide_from_stats: true,
    allow_decomposition: false
  },
  fill_crude_oil_barrel: {
    type: 'recipe',
    name: 'fill_crude_oil_barrel',
    localised_name: [
      'recipe_name.fill_barrel',
      [
        'fluid_name.crude_oil'
      ]
    ],
    category: 'crafting_with_fluid',
    energy_required: 0.2,
    subgroup: 'fill_barrel',
    order: 'b[fill_crude_oil_barrel]',
    enabled: false,
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
    ],
    hide_from_stats: true,
    allow_decomposition: false
  },
  empty_crude_oil_barrel: {
    type: 'recipe',
    name: 'empty_crude_oil_barrel',
    localised_name: [
      'recipe_name.empty_filled_barrel',
      [
        'fluid_name.crude_oil'
      ]
    ],
    category: 'crafting_with_fluid',
    energy_required: 0.2,
    subgroup: 'empty_barrel',
    order: 'c[empty_crude_oil_barrel]',
    enabled: false,
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
    ],
    hide_from_stats: true,
    allow_decomposition: false
  },
  fill_heavy_oil_barrel: {
    type: 'recipe',
    name: 'fill_heavy_oil_barrel',
    localised_name: [
      'recipe_name.fill_barrel',
      [
        'fluid_name.heavy_oil'
      ]
    ],
    category: 'crafting_with_fluid',
    energy_required: 0.2,
    subgroup: 'fill_barrel',
    order: 'b[fill_heavy_oil_barrel]',
    enabled: false,
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
    ],
    hide_from_stats: true,
    allow_decomposition: false
  },
  empty_heavy_oil_barrel: {
    type: 'recipe',
    name: 'empty_heavy_oil_barrel',
    localised_name: [
      'recipe_name.empty_filled_barrel',
      [
        'fluid_name.heavy_oil'
      ]
    ],
    category: 'crafting_with_fluid',
    energy_required: 0.2,
    subgroup: 'empty_barrel',
    order: 'c[empty_heavy_oil_barrel]',
    enabled: false,
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
    ],
    hide_from_stats: true,
    allow_decomposition: false
  },
  fill_light_oil_barrel: {
    type: 'recipe',
    name: 'fill_light_oil_barrel',
    localised_name: [
      'recipe_name.fill_barrel',
      [
        'fluid_name.light_oil'
      ]
    ],
    category: 'crafting_with_fluid',
    energy_required: 0.2,
    subgroup: 'fill_barrel',
    order: 'b[fill_light_oil_barrel]',
    enabled: false,
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
    ],
    hide_from_stats: true,
    allow_decomposition: false
  },
  empty_light_oil_barrel: {
    type: 'recipe',
    name: 'empty_light_oil_barrel',
    localised_name: [
      'recipe_name.empty_filled_barrel',
      [
        'fluid_name.light_oil'
      ]
    ],
    category: 'crafting_with_fluid',
    energy_required: 0.2,
    subgroup: 'empty_barrel',
    order: 'c[empty_light_oil_barrel]',
    enabled: false,
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
    ],
    hide_from_stats: true,
    allow_decomposition: false
  },
  fill_petroleum_gas_barrel: {
    type: 'recipe',
    name: 'fill_petroleum_gas_barrel',
    localised_name: [
      'recipe_name.fill_barrel',
      [
        'fluid_name.petroleum_gas'
      ]
    ],
    category: 'crafting_with_fluid',
    energy_required: 0.2,
    subgroup: 'fill_barrel',
    order: 'b[fill_petroleum_gas_barrel]',
    enabled: false,
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
    ],
    hide_from_stats: true,
    allow_decomposition: false
  },
  empty_petroleum_gas_barrel: {
    type: 'recipe',
    name: 'empty_petroleum_gas_barrel',
    localised_name: [
      'recipe_name.empty_filled_barrel',
      [
        'fluid_name.petroleum_gas'
      ]
    ],
    category: 'crafting_with_fluid',
    energy_required: 0.2,
    subgroup: 'empty_barrel',
    order: 'c[empty_petroleum_gas_barrel]',
    enabled: false,
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
    ],
    hide_from_stats: true,
    allow_decomposition: false
  },
  fill_lubricant_barrel: {
    type: 'recipe',
    name: 'fill_lubricant_barrel',
    localised_name: [
      'recipe_name.fill_barrel',
      [
        'fluid_name.lubricant'
      ]
    ],
    category: 'crafting_with_fluid',
    energy_required: 0.2,
    subgroup: 'fill_barrel',
    order: 'b[fill_lubricant_barrel]',
    enabled: false,
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
    ],
    hide_from_stats: true,
    allow_decomposition: false
  },
  empty_lubricant_barrel: {
    type: 'recipe',
    name: 'empty_lubricant_barrel',
    localised_name: [
      'recipe_name.empty_filled_barrel',
      [
        'fluid_name.lubricant'
      ]
    ],
    category: 'crafting_with_fluid',
    energy_required: 0.2,
    subgroup: 'empty_barrel',
    order: 'c[empty_lubricant_barrel]',
    enabled: false,
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
    ],
    hide_from_stats: true,
    allow_decomposition: false
  },
  fill_sulfuric_acid_barrel: {
    type: 'recipe',
    name: 'fill_sulfuric_acid_barrel',
    localised_name: [
      'recipe_name.fill_barrel',
      [
        'fluid_name.sulfuric_acid'
      ]
    ],
    category: 'crafting_with_fluid',
    energy_required: 0.2,
    subgroup: 'fill_barrel',
    order: 'b[fill_sulfuric_acid_barrel]',
    enabled: false,
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
    ],
    hide_from_stats: true,
    allow_decomposition: false
  },
  empty_sulfuric_acid_barrel: {
    type: 'recipe',
    name: 'empty_sulfuric_acid_barrel',
    localised_name: [
      'recipe_name.empty_filled_barrel',
      [
        'fluid_name.sulfuric_acid'
      ]
    ],
    category: 'crafting_with_fluid',
    energy_required: 0.2,
    subgroup: 'empty_barrel',
    order: 'c[empty_sulfuric_acid_barrel]',
    enabled: false,
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
    ],
    hide_from_stats: true,
    allow_decomposition: false
  }
}