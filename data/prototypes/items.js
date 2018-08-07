module.exports = {
  firearm_magazine: {
    type: 'ammo',
    name: 'firearm_magazine',
    icon: 'graphics/icons/firearm-magazine.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    ammo_type: {
      category: 'bullet',
      action: [
        {
          type: 'direct',
          action_delivery: [
            {
              type: 'instant',
              source_effects: [
                {
                  type: 'create_explosion',
                  entity_name: 'explosion_gunshot'
                }
              ],
              target_effects: [
                {
                  type: 'create_entity',
                  entity_name: 'explosion_hit'
                },
                {
                  type: 'damage',
                  damage: {
                    amount: 5,
                    type: 'physical'
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    magazine_size: 10,
    subgroup: 'ammo',
    order: 'a[basic_clips]_a[firearm_magazine]',
    stack_size: 200
  },
  piercing_rounds_magazine: {
    type: 'ammo',
    name: 'piercing_rounds_magazine',
    icon: 'graphics/icons/piercing-rounds-magazine.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    ammo_type: {
      category: 'bullet',
      action: {
        type: 'direct',
        action_delivery: {
          type: 'instant',
          source_effects: {
            type: 'create_explosion',
            entity_name: 'explosion_gunshot'
          },
          target_effects: [
            {
              type: 'create_entity',
              entity_name: 'explosion_hit'
            },
            {
              type: 'damage',
              damage: {
                amount: 8,
                type: 'physical'
              }
            }
          ]
        }
      }
    },
    magazine_size: 10,
    subgroup: 'ammo',
    order: 'a[basic_clips]_b[piercing_rounds_magazine]',
    stack_size: 200
  },
  uranium_rounds_magazine: {
    type: 'ammo',
    name: 'uranium_rounds_magazine',
    icon: 'graphics/icons/uranium-rounds-magazine.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    ammo_type: {
      category: 'bullet',
      action: {
        type: 'direct',
        action_delivery: {
          type: 'instant',
          source_effects: {
            type: 'create_explosion',
            entity_name: 'explosion_gunshot'
          },
          target_effects: [
            {
              type: 'create_entity',
              entity_name: 'explosion_hit'
            },
            {
              type: 'damage',
              damage: {
                amount: 24,
                type: 'physical'
              }
            }
          ]
        }
      }
    },
    magazine_size: 10,
    subgroup: 'ammo',
    order: 'a[basic_clips]_c[uranium_rounds_magazine]',
    stack_size: 200
  },
  flamethrower_ammo: {
    type: 'ammo',
    name: 'flamethrower_ammo',
    icon: 'graphics/icons/flamethrower-ammo.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    ammo_type: [
      {
        source_type: 'default',
        category: 'flamethrower',
        target_type: 'position',
        clamp_position: true,
        action: {
          type: 'direct',
          action_delivery: {
            type: 'stream',
            stream: 'handheld_flamethrower_fire_stream',
            max_length: 15,
            duration: 160
          }
        }
      },
      {
        source_type: 'vehicle',
        consumption_modifier: 1.125,
        category: 'flamethrower',
        target_type: 'position',
        clamp_position: true,
        action: {
          type: 'direct',
          action_delivery: {
            type: 'stream',
            stream: 'tank_flamethrower_fire_stream',
            max_length: 9,
            duration: 160
          }
        }
      }
    ],
    magazine_size: 100,
    subgroup: 'ammo',
    order: 'e[flamethrower]',
    stack_size: 100
  },
  rocket: {
    type: 'ammo',
    name: 'rocket',
    icon: 'graphics/icons/rocket.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    ammo_type: {
      category: 'rocket',
      action: {
        type: 'direct',
        action_delivery: {
          type: 'projectile',
          projectile: 'rocket',
          starting_speed: 0.1,
          source_effects: {
            type: 'create_entity',
            entity_name: 'explosion_hit'
          }
        }
      }
    },
    subgroup: 'ammo',
    order: 'd[rocket_launcher]_a[basic]',
    stack_size: 200
  },
  explosive_rocket: {
    type: 'ammo',
    name: 'explosive_rocket',
    icon: 'graphics/icons/explosive-rocket.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    ammo_type: {
      category: 'rocket',
      action: {
        type: 'direct',
        action_delivery: {
          type: 'projectile',
          projectile: 'explosive_rocket',
          starting_speed: 0.1,
          source_effects: {
            type: 'create_entity',
            entity_name: 'explosion_hit'
          }
        }
      }
    },
    subgroup: 'ammo',
    order: 'd[rocket_launcher]_b[explosive]',
    stack_size: 200
  },
  atomic_bomb: {
    type: 'ammo',
    name: 'atomic_bomb',
    icon: 'graphics/icons/atomic-bomb.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    ammo_type: {
      range_modifier: 3,
      cooldown_modifier: 3,
      target_type: 'position',
      category: 'rocket',
      action: {
        type: 'direct',
        action_delivery: {
          type: 'projectile',
          projectile: 'atomic_rocket',
          starting_speed: 0.05,
          source_effects: {
            type: 'create_entity',
            entity_name: 'explosion_hit'
          }
        }
      }
    },
    subgroup: 'ammo',
    order: 'd[rocket_launcher]_c[atomic_bomb]',
    stack_size: 10
  },
  shotgun_shell: {
    type: 'ammo',
    name: 'shotgun_shell',
    icon: 'graphics/icons/shotgun-shell.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    ammo_type: {
      category: 'shotgun_shell',
      target_type: 'direction',
      clamp_position: true,
      action: [
        {
          type: 'direct',
          action_delivery: {
            type: 'instant',
            source_effects: [
              {
                type: 'create_explosion',
                entity_name: 'explosion_gunshot'
              }
            ]
          }
        },
        {
          type: 'direct',
          repeat_count: 12,
          action_delivery: {
            type: 'projectile',
            projectile: 'shotgun_pellet',
            starting_speed: 1,
            direction_deviation: 0.3,
            range_deviation: 0.3,
            max_range: 15
          }
        }
      ]
    },
    magazine_size: 10,
    subgroup: 'ammo',
    order: 'b[shotgun]_a[basic]',
    stack_size: 200
  },
  piercing_shotgun_shell: {
    type: 'ammo',
    name: 'piercing_shotgun_shell',
    icon: 'graphics/icons/piercing-shotgun-shell.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    ammo_type: {
      category: 'shotgun_shell',
      target_type: 'direction',
      clamp_position: true,
      action: [
        {
          type: 'direct',
          action_delivery: {
            type: 'instant',
            source_effects: [
              {
                type: 'create_explosion',
                entity_name: 'explosion_gunshot'
              }
            ]
          }
        },
        {
          type: 'direct',
          repeat_count: 16,
          action_delivery: {
            type: 'projectile',
            projectile: 'piercing_shotgun_pellet',
            starting_speed: 1,
            direction_deviation: 0.3,
            range_deviation: 0.3,
            max_range: 15
          }
        }
      ]
    },
    magazine_size: 10,
    subgroup: 'ammo',
    order: 'b[shotgun]_b[piercing]',
    stack_size: 200
  },
  cannon_shell: {
    type: 'ammo',
    name: 'cannon_shell',
    icon: 'graphics/icons/cannon-shell.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    ammo_type: {
      category: 'cannon_shell',
      target_type: 'direction',
      action: {
        type: 'direct',
        action_delivery: {
          type: 'projectile',
          projectile: 'cannon_projectile',
          starting_speed: 1,
          direction_deviation: 0.1,
          range_deviation: 0.1,
          max_range: 30,
          min_range: 5,
          source_effects: {
            type: 'create_explosion',
            entity_name: 'explosion_gunshot'
          }
        }
      }
    },
    subgroup: 'ammo',
    order: 'd[cannon_shell]_a[basic]',
    stack_size: 200
  },
  explosive_cannon_shell: {
    type: 'ammo',
    name: 'explosive_cannon_shell',
    icon: 'graphics/icons/explosive-cannon-shell.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    ammo_type: {
      category: 'cannon_shell',
      target_type: 'direction',
      action: {
        type: 'direct',
        action_delivery: {
          type: 'projectile',
          projectile: 'explosive_cannon_projectile',
          starting_speed: 1,
          direction_deviation: 0.1,
          range_deviation: 0.1,
          max_range: 30,
          min_range: 5,
          source_effects: {
            type: 'create_explosion',
            entity_name: 'explosion_gunshot'
          }
        }
      }
    },
    subgroup: 'ammo',
    order: 'd[cannon_shell]_c[explosive]',
    stack_size: 200
  },
  uranium_cannon_shell: {
    type: 'ammo',
    name: 'uranium_cannon_shell',
    icon: 'graphics/icons/uranium-cannon-shell.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    ammo_type: {
      category: 'cannon_shell',
      target_type: 'direction',
      action: {
        type: 'direct',
        action_delivery: {
          type: 'projectile',
          projectile: 'uranium_cannon_projectile',
          starting_speed: 1,
          direction_deviation: 0.1,
          range_deviation: 0.1,
          max_range: 30,
          source_effects: {
            type: 'create_explosion',
            entity_name: 'explosion_gunshot'
          }
        }
      }
    },
    subgroup: 'ammo',
    order: 'd[cannon_shell]_c[uranium]',
    stack_size: 200
  },
  explosive_uranium_cannon_shell: {
    type: 'ammo',
    name: 'explosive_uranium_cannon_shell',
    icon: 'graphics/icons/explosive-uranium-cannon-shell.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    ammo_type: {
      category: 'cannon_shell',
      target_type: 'direction',
      action: {
        type: 'direct',
        action_delivery: {
          type: 'projectile',
          projectile: 'explosive_uranium_cannon_projectile',
          starting_speed: 1,
          direction_deviation: 0.1,
          range_deviation: 0.1,
          max_range: 30,
          source_effects: {
            type: 'create_explosion',
            entity_name: 'explosion_gunshot'
          }
        }
      }
    },
    subgroup: 'ammo',
    order: 'd[explosive_cannon_shell]_c[uranium]',
    stack_size: 200
  },
  artillery_shell: {
    type: 'ammo',
    name: 'artillery_shell',
    icon: 'graphics/icons/artillery-shell.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    ammo_type: {
      category: 'artillery_shell',
      target_type: 'position',
      action: {
        type: 'direct',
        action_delivery: {
          type: 'artillery',
          projectile: 'artillery_projectile',
          starting_speed: 1,
          direction_deviation: 0,
          range_deviation: 0,
          source_effects: {
            type: 'create_explosion',
            entity_name: 'artillery_cannon_muzzle_flash'
          }
        }
      }
    },
    subgroup: 'ammo',
    order: 'd[explosive_cannon_shell]_d[artillery]',
    stack_size: 1
  },
  light_armor: {
    type: 'armor',
    name: 'light_armor',
    icon: 'graphics/icons/light-armor.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    resistances: [
      {
        type: 'physical',
        decrease: 3,
        percent: 20
      },
      {
        type: 'acid',
        decrease: 0,
        percent: 10
      },
      {
        type: 'explosion',
        decrease: 2,
        percent: 20
      },
      {
        type: 'fire',
        decrease: 0,
        percent: 10
      }
    ],
    durability: 1000,
    subgroup: 'armor',
    order: 'a[light_armor]',
    stack_size: 10
  },
  heavy_armor: {
    type: 'armor',
    name: 'heavy_armor',
    icon: 'graphics/icons/heavy-armor.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    resistances: [
      {
        type: 'physical',
        decrease: 6,
        percent: 30
      },
      {
        type: 'explosion',
        decrease: 20,
        percent: 30
      },
      {
        type: 'acid',
        decrease: 3,
        percent: 30
      },
      {
        type: 'fire',
        decrease: 0,
        percent: 30
      }
    ],
    durability: 5000,
    subgroup: 'armor',
    order: 'b[heavy_armor]',
    stack_size: 10
  },
  modular_armor: {
    type: 'armor',
    name: 'modular_armor',
    icon: 'graphics/icons/modular-armor.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    resistances: [
      {
        type: 'physical',
        decrease: 6,
        percent: 30
      },
      {
        type: 'acid',
        decrease: 5,
        percent: 30
      },
      {
        type: 'explosion',
        decrease: 30,
        percent: 35
      },
      {
        type: 'fire',
        decrease: 0,
        percent: 40
      }
    ],
    durability: 10000,
    subgroup: 'armor',
    order: 'c[modular_armor]',
    stack_size: 1,
    equipment_grid: 'small_equipment_grid',
    inventory_size_bonus: 10
  },
  power_armor: {
    type: 'armor',
    name: 'power_armor',
    icon: 'graphics/icons/power-armor.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    resistances: [
      {
        type: 'physical',
        decrease: 8,
        percent: 30
      },
      {
        type: 'acid',
        decrease: 7,
        percent: 30
      },
      {
        type: 'explosion',
        decrease: 40,
        percent: 40
      },
      {
        type: 'fire',
        decrease: 0,
        percent: 60
      }
    ],
    durability: 15000,
    subgroup: 'armor',
    order: 'd[power_armor]',
    stack_size: 1,
    equipment_grid: 'medium_equipment_grid',
    inventory_size_bonus: 20
  },
  power_armor_mk2: {
    type: 'armor',
    name: 'power_armor_mk2',
    icon: 'graphics/icons/power-armor-mk2.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    resistances: [
      {
        type: 'physical',
        decrease: 10,
        percent: 40
      },
      {
        type: 'acid',
        decrease: 10,
        percent: 40
      },
      {
        type: 'explosion',
        decrease: 60,
        percent: 50
      },
      {
        type: 'fire',
        decrease: 0,
        percent: 70
      }
    ],
    durability: 20000,
    subgroup: 'armor',
    order: 'e[power_armor_mk2]',
    stack_size: 1,
    equipment_grid: 'large_equipment_grid',
    inventory_size_bonus: 30
  },
  pistol: {
    type: 'gun',
    name: 'pistol',
    icon: 'graphics/icons/pistol.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'gun',
    order: 'a[basic_clips]_a[pistol]',
    attack_parameters: {
      type: 'projectile',
      ammo_category: 'bullet',
      cooldown: 15,
      movement_slow_down_factor: 0.2,
      shell_particle: {
        name: 'shell_particle',
        direction_deviation: 0.1,
        speed: 0.1,
        speed_deviation: 0.03,
        center: [
          0,
          0.1
        ],
        creation_distance: -0.5,
        starting_frame_speed: 0.4,
        starting_frame_speed_deviation: 0.1
      },
      projectile_creation_distance: 1.125,
      range: 15,
      sound: [
        {
          filename: 'sound/fight/light-gunshot-1.ogg',
          volume: 0.3
        },
        {
          filename: 'sound/fight/light-gunshot-2.ogg',
          volume: 0.3
        },
        {
          filename: 'sound/fight/light-gunshot-3.ogg',
          volume: 0.3
        }
      ]
    },
    stack_size: 5
  },
  submachine_gun: {
    type: 'gun',
    name: 'submachine_gun',
    icon: 'graphics/icons/submachine-gun.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'gun',
    order: 'a[basic_clips]_b[submachine_gun]',
    attack_parameters: {
      type: 'projectile',
      ammo_category: 'bullet',
      cooldown: 6,
      movement_slow_down_factor: 0.7,
      shell_particle: {
        name: 'shell_particle',
        direction_deviation: 0.1,
        speed: 0.1,
        speed_deviation: 0.03,
        center: [
          0,
          0.1
        ],
        creation_distance: -0.5,
        starting_frame_speed: 0.4,
        starting_frame_speed_deviation: 0.1
      },
      projectile_creation_distance: 1.125,
      range: 18,
      sound: [
        {
          filename: 'sound/fight/light-gunshot-1.ogg',
          volume: 0.3
        },
        {
          filename: 'sound/fight/light-gunshot-2.ogg',
          volume: 0.3
        },
        {
          filename: 'sound/fight/light-gunshot-3.ogg',
          volume: 0.3
        }
      ]
    },
    stack_size: 5
  },
  flamethrower: {
    type: 'gun',
    name: 'flamethrower',
    icon: 'graphics/icons/flamethrower.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'gun',
    order: 'e[flamethrower]',
    attack_parameters: {
      type: 'stream',
      ammo_category: 'flamethrower',
      cooldown: 1,
      movement_slow_down_factor: 0.4,
      projectile_creation_distance: 0.6,
      gun_barrel_length: 0.8,
      gun_center_shift: [
        0,
        -1
      ],
      range: 15,
      min_range: 3,
      cyclic_sound: {
        begin_sound: [
          {
            filename: 'sound/fight/flamethrower-start.ogg',
            volume: 0.7
          }
        ],
        middle_sound: [
          {
            filename: 'sound/fight/flamethrower-mid.ogg',
            volume: 0.7
          }
        ],
        end_sound: [
          {
            filename: 'sound/fight/flamethrower-end.ogg',
            volume: 0.7
          }
        ]
      }
    },
    stack_size: 5
  },
  rocket_launcher: {
    type: 'gun',
    name: 'rocket_launcher',
    icon: 'graphics/icons/rocket-launcher.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'gun',
    order: 'd[rocket_launcher]',
    attack_parameters: {
      type: 'projectile',
      ammo_category: 'rocket',
      movement_slow_down_factor: 0.8,
      cooldown: 60,
      projectile_creation_distance: 0.6,
      range: 22,
      projectile_center: [
        -0.17,
        0
      ],
      sound: [
        {
          filename: 'sound/fight/rocket-launcher.ogg',
          volume: 0.7
        }
      ]
    },
    stack_size: 5
  },
  shotgun: {
    type: 'gun',
    name: 'shotgun',
    icon: 'graphics/icons/shotgun.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'gun',
    order: 'b[shotgun]_a[basic]',
    attack_parameters: {
      type: 'projectile',
      ammo_category: 'shotgun_shell',
      cooldown: 60,
      movement_slow_down_factor: 0.6,
      projectile_creation_distance: 1.125,
      range: 20,
      min_range: 1,
      sound: [
        {
          filename: 'sound/pump-shotgun.ogg',
          volume: 0.5
        }
      ]
    },
    stack_size: 5
  },
  combat_shotgun: {
    type: 'gun',
    name: 'combat_shotgun',
    icon: 'graphics/icons/combat-shotgun.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'gun',
    order: 'b[shotgun]_a[combat]',
    attack_parameters: {
      type: 'projectile',
      ammo_category: 'shotgun_shell',
      cooldown: 30,
      movement_slow_down_factor: 0.5,
      damage_modifier: 1.2,
      projectile_creation_distance: 1.125,
      range: 20,
      sound: [
        {
          filename: 'sound/pump-shotgun.ogg',
          volume: 0.5
        }
      ]
    },
    stack_size: 5
  },
  stone_brick: {
    type: 'item',
    name: 'stone_brick',
    icon: 'graphics/icons/stone-brick.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'terrain',
    order: 'a[stone_brick]',
    stack_size: 100,
    place_as_tile: {
      result: 'stone_path',
      condition_size: 1,
      condition: [
        'water_tile'
      ]
    }
  },
  raw_wood: {
    type: 'item',
    name: 'raw_wood',
    icon: 'graphics/icons/raw-wood.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    fuel_value: '4MJ',
    fuel_category: 'chemical',
    subgroup: 'raw_resource',
    order: 'a[raw_wood]',
    stack_size: 100
  },
  coal: {
    type: 'item',
    name: 'coal',
    icon: 'graphics/icons/coal.png',
    icon_size: 32,
    dark_background_icon: 'graphics/icons/coal-dark-background.png',
    flags: [
      'goes_to_main_inventory'
    ],
    fuel_category: 'chemical',
    fuel_value: '8MJ',
    subgroup: 'raw_resource',
    order: 'b[coal]',
    stack_size: 50
  },
  stone: {
    type: 'item',
    name: 'stone',
    icon: 'graphics/icons/stone.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'raw_resource',
    order: 'd[stone]',
    stack_size: 50
  },
  iron_ore: {
    type: 'item',
    name: 'iron_ore',
    icon: 'graphics/icons/iron-ore.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'raw_resource',
    order: 'e[iron_ore]',
    stack_size: 50
  },
  copper_ore: {
    type: 'item',
    name: 'copper_ore',
    icon: 'graphics/icons/copper-ore.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'raw_resource',
    order: 'f[copper_ore]',
    stack_size: 50
  },
  wood: {
    type: 'item',
    name: 'wood',
    icon: 'graphics/icons/wood.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    fuel_category: 'chemical',
    fuel_value: '2MJ',
    subgroup: 'raw_material',
    order: 'a[wood]',
    stack_size: 50
  },
  iron_plate: {
    type: 'item',
    name: 'iron_plate',
    icon: 'graphics/icons/iron-plate.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'raw_material',
    order: 'b[iron_plate]',
    stack_size: 100
  },
  copper_plate: {
    type: 'item',
    name: 'copper_plate',
    icon: 'graphics/icons/copper-plate.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'raw_material',
    order: 'c[copper_plate]',
    stack_size: 100
  },
  copper_cable: {
    type: 'item',
    name: 'copper_cable',
    icon: 'graphics/icons/copper-cable.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'intermediate_product',
    order: 'a[copper_cable]',
    stack_size: 200
  },
  iron_stick: {
    type: 'item',
    name: 'iron_stick',
    icon: 'graphics/icons/iron-stick.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'intermediate_product',
    order: 'b[iron_stick]',
    stack_size: 100
  },
  iron_gear_wheel: {
    type: 'item',
    name: 'iron_gear_wheel',
    icon: 'graphics/icons/iron-gear-wheel.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'intermediate_product',
    order: 'c[iron_gear_wheel]',
    stack_size: 100
  },
  electronic_circuit: {
    type: 'item',
    name: 'electronic_circuit',
    icon: 'graphics/icons/electronic-circuit.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'intermediate_product',
    order: 'e[electronic_circuit]',
    stack_size: 200
  },
  wooden_chest: {
    type: 'item',
    name: 'wooden_chest',
    icon: 'graphics/icons/wooden-chest.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    fuel_category: 'chemical',
    fuel_value: '4MJ',
    subgroup: 'storage',
    order: 'a[items]_a[wooden_chest]',
    place_result: 'wooden_chest',
    stack_size: 50
  },
  stone_furnace: {
    type: 'item',
    name: 'stone_furnace',
    icon: 'graphics/icons/stone-furnace.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'smelting_machine',
    order: 'a[stone_furnace]',
    place_result: 'stone_furnace',
    stack_size: 50
  },
  burner_mining_drill: {
    type: 'item',
    name: 'burner_mining_drill',
    icon: 'graphics/icons/burner-mining-drill.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'extraction_machine',
    order: 'a[items]_a[burner_mining_drill]',
    place_result: 'burner_mining_drill',
    stack_size: 50
  },
  electric_mining_drill: {
    type: 'item',
    name: 'electric_mining_drill',
    icon: 'graphics/icons/electric-mining-drill.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'extraction_machine',
    order: 'a[items]_b[electric_mining_drill]',
    place_result: 'electric_mining_drill',
    stack_size: 50
  },
  transport_belt: {
    type: 'item',
    name: 'transport_belt',
    icon: 'graphics/icons/transport-belt.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'belt',
    order: 'a[transport_belt]_a[transport_belt]',
    place_result: 'transport_belt',
    stack_size: 100
  },
  burner_inserter: {
    type: 'item',
    name: 'burner_inserter',
    icon: 'graphics/icons/burner-inserter.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'inserter',
    order: 'a[burner_inserter]',
    place_result: 'burner_inserter',
    stack_size: 50
  },
  inserter: {
    type: 'item',
    name: 'inserter',
    icon: 'graphics/icons/inserter.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'inserter',
    order: 'b[inserter]',
    place_result: 'inserter',
    stack_size: 50
  },
  offshore_pump: {
    type: 'item',
    name: 'offshore_pump',
    icon: 'graphics/icons/offshore-pump.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'extraction_machine',
    order: 'b[fluids]_a[offshore_pump]',
    place_result: 'offshore_pump',
    stack_size: 20
  },
  pipe: {
    type: 'item',
    name: 'pipe',
    icon: 'graphics/icons/pipe.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'energy_pipe_distribution',
    order: 'a[pipe]_a[pipe]',
    place_result: 'pipe',
    stack_size: 100
  },
  boiler: {
    type: 'item',
    name: 'boiler',
    icon: 'graphics/icons/boiler.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'energy',
    order: 'b[steam_power]_a[boiler]',
    place_result: 'boiler',
    stack_size: 50
  },
  steam_engine: {
    type: 'item',
    name: 'steam_engine',
    icon: 'graphics/icons/steam-engine.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'energy',
    order: 'b[steam_power]_b[steam_engine]',
    place_result: 'steam_engine',
    stack_size: 10
  },
  small_electric_pole: {
    type: 'item',
    name: 'small_electric_pole',
    icon: 'graphics/icons/small-electric-pole.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'energy_pipe_distribution',
    order: 'a[energy]_a[small_electric_pole]',
    place_result: 'small_electric_pole',
    fuel_category: 'chemical',
    fuel_value: '4MJ',
    stack_size: 50
  },
  radar: {
    type: 'item',
    name: 'radar',
    icon: 'graphics/icons/radar.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'defensive_structure',
    order: 'd[radar]_a[radar]',
    place_result: 'radar',
    stack_size: 50
  },
  small_lamp: {
    type: 'item',
    name: 'small_lamp',
    icon: 'graphics/icons/small-lamp.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'circuit_network',
    order: 'a[light]_a[small_lamp]',
    place_result: 'small_lamp',
    stack_size: 50
  },
  pipe_to_ground: {
    type: 'item',
    name: 'pipe_to_ground',
    icon: 'graphics/icons/pipe-to-ground.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'energy_pipe_distribution',
    order: 'a[pipe]_b[pipe_to_ground]',
    place_result: 'pipe_to_ground',
    stack_size: 50
  },
  assembling_machine_1: {
    type: 'item',
    name: 'assembling_machine_1',
    icon: 'graphics/icons/assembling-machine-1.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'production_machine',
    order: 'a[assembling_machine_1]',
    place_result: 'assembling_machine_1',
    stack_size: 50
  },
  red_wire: {
    type: 'item',
    name: 'red_wire',
    icon: 'graphics/icons/red-wire.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'circuit_network',
    order: 'b[wires]_a[red_wire]',
    stack_size: 200
  },
  green_wire: {
    type: 'item',
    name: 'green_wire',
    icon: 'graphics/icons/green-wire.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'circuit_network',
    order: 'b[wires]_b[green_wire]',
    stack_size: 200
  },
  stone_wall: {
    type: 'item',
    name: 'stone_wall',
    icon: 'graphics/icons/stone-wall.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'defensive_structure',
    order: 'a[stone_wall]_a[stone_wall]',
    place_result: 'stone_wall',
    stack_size: 100
  },
  gun_turret: {
    type: 'item',
    name: 'gun_turret',
    icon: 'graphics/icons/gun-turret.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'defensive_structure',
    order: 'b[turret]_a[gun_turret]',
    place_result: 'gun_turret',
    stack_size: 50
  },
  solar_panel_equipment: {
    type: 'item',
    name: 'solar_panel_equipment',
    icon: 'graphics/icons/solar-panel-equipment.png',
    icon_size: 32,
    placed_as_equipment_result: 'solar_panel_equipment',
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'equipment',
    order: 'a[energy_source]_a[solar_panel]',
    stack_size: 20
  },
  fusion_reactor_equipment: {
    type: 'item',
    name: 'fusion_reactor_equipment',
    icon: 'graphics/icons/fusion-reactor-equipment.png',
    icon_size: 32,
    placed_as_equipment_result: 'fusion_reactor_equipment',
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'equipment',
    order: 'a[energy_source]_b[fusion_reactor]',
    stack_size: 20
  },
  energy_shield_equipment: {
    type: 'item',
    name: 'energy_shield_equipment',
    icon: 'graphics/icons/energy-shield-equipment.png',
    icon_size: 32,
    placed_as_equipment_result: 'energy_shield_equipment',
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'equipment',
    order: 'b[shield]_a[energy_shield_equipment]',
    stack_size: 50,
    default_request_amount: 10
  },
  energy_shield_mk2_equipment: {
    type: 'item',
    name: 'energy_shield_mk2_equipment',
    localised_description: [
      'item_description.energy_shield_equipment'
    ],
    icon: 'graphics/icons/energy-shield-mk2-equipment.png',
    icon_size: 32,
    placed_as_equipment_result: 'energy_shield_mk2_equipment',
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'equipment',
    order: 'b[shield]_b[energy_shield_equipment_mk2]',
    stack_size: 50,
    default_request_amount: 10
  },
  battery_equipment: {
    type: 'item',
    name: 'battery_equipment',
    icon: 'graphics/icons/battery-equipment.png',
    icon_size: 32,
    placed_as_equipment_result: 'battery_equipment',
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'equipment',
    order: 'c[battery]_a[battery_equipment]',
    stack_size: 50,
    default_request_amount: 10
  },
  battery_mk2_equipment: {
    type: 'item',
    name: 'battery_mk2_equipment',
    localised_description: [
      'item_description.battery_equipment'
    ],
    icon: 'graphics/icons/battery-mk2-equipment.png',
    icon_size: 32,
    placed_as_equipment_result: 'battery_mk2_equipment',
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'equipment',
    order: 'c[battery]_b[battery_equipment_mk2]',
    stack_size: 50,
    default_request_amount: 10
  },
  personal_laser_defense_equipment: {
    type: 'item',
    name: 'personal_laser_defense_equipment',
    icon: 'graphics/icons/personal-laser-defense-equipment.png',
    icon_size: 32,
    placed_as_equipment_result: 'personal_laser_defense_equipment',
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'equipment',
    order: 'd[active_defense]_a[personal_laser_defense_equipment]',
    stack_size: 20
  },
  discharge_defense_equipment: {
    type: 'item',
    name: 'discharge_defense_equipment',
    icon: 'graphics/icons/discharge-defense-equipment.png',
    icon_size: 32,
    placed_as_equipment_result: 'discharge_defense_equipment',
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'equipment',
    order: 'd[active_defense]_b[discharge_defense_equipment]',
    stack_size: 20
  },
  exoskeleton_equipment: {
    type: 'item',
    name: 'exoskeleton_equipment',
    icon: 'graphics/icons/exoskeleton-equipment.png',
    icon_size: 32,
    placed_as_equipment_result: 'exoskeleton_equipment',
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'equipment',
    order: 'e[exoskeleton]_a[exoskeleton_equipment]',
    stack_size: 10
  },
  personal_roboport_equipment: {
    type: 'item',
    name: 'personal_roboport_equipment',
    icon: 'graphics/icons/personal-roboport-equipment.png',
    icon_size: 32,
    placed_as_equipment_result: 'personal_roboport_equipment',
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'equipment',
    order: 'e[robotics]_a[personal_roboport_equipment]',
    stack_size: 5
  },
  personal_roboport_mk2_equipment: {
    type: 'item',
    name: 'personal_roboport_mk2_equipment',
    localised_description: [
      'item_description.personal_roboport_equipment'
    ],
    icon: 'graphics/icons/personal-roboport-mk2-equipment.png',
    icon_size: 32,
    placed_as_equipment_result: 'personal_roboport_mk2_equipment',
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'equipment',
    order: 'e[robotics]_b[personal_roboport_mk2_equipment]',
    stack_size: 5
  },
  night_vision_equipment: {
    type: 'item',
    name: 'night_vision_equipment',
    icon: 'graphics/icons/night-vision-equipment.png',
    icon_size: 32,
    placed_as_equipment_result: 'night_vision_equipment',
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'equipment',
    order: 'f[night_vision]_a[night_vision_equipment]',
    stack_size: 20
  },
  land_mine: {
    type: 'item',
    name: 'land_mine',
    icon: 'graphics/icons/land-mine.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    damage_radius: 5,
    subgroup: 'gun',
    order: 'f[land_mine]',
    place_result: 'land_mine',
    stack_size: 100,
    trigger_radius: 1
  },
  iron_chest: {
    type: 'item',
    name: 'iron_chest',
    icon: 'graphics/icons/iron-chest.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'storage',
    order: 'a[items]_b[iron_chest]',
    place_result: 'iron_chest',
    stack_size: 50
  },
  steel_chest: {
    type: 'item',
    name: 'steel_chest',
    icon: 'graphics/icons/steel-chest.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'storage',
    order: 'a[items]_c[steel_chest]',
    place_result: 'steel_chest',
    stack_size: 50
  },
  fast_transport_belt: {
    type: 'item',
    name: 'fast_transport_belt',
    icon: 'graphics/icons/fast-transport-belt.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'belt',
    order: 'a[transport_belt]_b[fast_transport_belt]',
    place_result: 'fast_transport_belt',
    stack_size: 100
  },
  express_transport_belt: {
    type: 'item',
    name: 'express_transport_belt',
    icon: 'graphics/icons/express-transport-belt.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'belt',
    order: 'a[transport_belt]_c[express_transport_belt]',
    place_result: 'express_transport_belt',
    stack_size: 100
  },
  long_handed_inserter: {
    type: 'item',
    name: 'long_handed_inserter',
    icon: 'graphics/icons/long-handed-inserter.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'inserter',
    order: 'c[long_handed_inserter]',
    place_result: 'long_handed_inserter',
    stack_size: 50
  },
  fast_inserter: {
    type: 'item',
    name: 'fast_inserter',
    icon: 'graphics/icons/fast-inserter.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'inserter',
    order: 'd[fast_inserter]',
    place_result: 'fast_inserter',
    stack_size: 50
  },
  filter_inserter: {
    type: 'item',
    name: 'filter_inserter',
    icon: 'graphics/icons/filter-inserter.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'inserter',
    order: 'e[filter_inserter]',
    place_result: 'filter_inserter',
    stack_size: 50
  },
  stack_inserter: {
    type: 'item',
    name: 'stack_inserter',
    icon: 'graphics/icons/stack-inserter.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'inserter',
    order: 'f[stack_inserter]',
    place_result: 'stack_inserter',
    stack_size: 50
  },
  stack_filter_inserter: {
    type: 'item',
    name: 'stack_filter_inserter',
    icon: 'graphics/icons/stack-filter-inserter.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'inserter',
    order: 'g[stack_filter_inserter]',
    place_result: 'stack_filter_inserter',
    stack_size: 50
  },
  assembling_machine_2: {
    type: 'item',
    name: 'assembling_machine_2',
    icon: 'graphics/icons/assembling-machine-2.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'production_machine',
    order: 'b[assembling_machine_2]',
    place_result: 'assembling_machine_2',
    stack_size: 50
  },
  assembling_machine_3: {
    type: 'item',
    name: 'assembling_machine_3',
    icon: 'graphics/icons/assembling-machine-3.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'production_machine',
    order: 'c[assembling_machine_3]',
    place_result: 'assembling_machine_3',
    stack_size: 50
  },
  solar_panel: {
    type: 'item',
    name: 'solar_panel',
    icon: 'graphics/icons/solar-panel.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'energy',
    order: 'd[solar_panel]_a[solar_panel]',
    place_result: 'solar_panel',
    stack_size: 50
  },
  gate: {
    type: 'item',
    name: 'gate',
    icon: 'graphics/icons/gate.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'defensive_structure',
    order: 'a[wall]_b[gate]',
    place_result: 'gate',
    stack_size: 50
  },
  lab: {
    type: 'item',
    name: 'lab',
    icon: 'graphics/icons/lab.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'production_machine',
    order: 'g[lab]',
    place_result: 'lab',
    stack_size: 10
  },
  train_stop: {
    type: 'item',
    name: 'train_stop',
    icon: 'graphics/icons/train-stop.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'transport',
    order: 'a[train_system]_c[train_stop]',
    place_result: 'train_stop',
    stack_size: 10
  },
  rail_signal: {
    type: 'item',
    name: 'rail_signal',
    icon: 'graphics/icons/rail-signal.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'transport',
    order: 'a[train_system]_d[rail_signal]',
    place_result: 'rail_signal',
    stack_size: 50
  },
  rail_chain_signal: {
    type: 'item',
    name: 'rail_chain_signal',
    icon: 'graphics/icons/rail-chain-signal.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'transport',
    order: 'a[train_system]_e[rail_signal_chain]',
    place_result: 'rail_chain_signal',
    stack_size: 50
  },
  steel_plate: {
    type: 'item',
    name: 'steel_plate',
    icon: 'graphics/icons/steel-plate.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'raw_material',
    order: 'd[steel_plate]',
    stack_size: 100
  },
  underground_belt: {
    type: 'item',
    name: 'underground_belt',
    icon: 'graphics/icons/underground-belt.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'belt',
    order: 'b[underground_belt]_a[underground_belt]',
    place_result: 'underground_belt',
    stack_size: 50
  },
  fast_underground_belt: {
    type: 'item',
    name: 'fast_underground_belt',
    icon: 'graphics/icons/fast-underground-belt.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'belt',
    order: 'b[underground_belt]_b[fast_underground_belt]',
    place_result: 'fast_underground_belt',
    stack_size: 50
  },
  express_underground_belt: {
    type: 'item',
    name: 'express_underground_belt',
    icon: 'graphics/icons/express-underground-belt.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'belt',
    order: 'b[underground_belt]_c[express_underground_belt]',
    place_result: 'express_underground_belt',
    stack_size: 50
  },
  splitter: {
    type: 'item',
    name: 'splitter',
    icon: 'graphics/icons/splitter.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'belt',
    order: 'c[splitter]_a[splitter]',
    place_result: 'splitter',
    stack_size: 50
  },
  fast_splitter: {
    type: 'item',
    name: 'fast_splitter',
    icon: 'graphics/icons/fast-splitter.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'belt',
    order: 'c[splitter]_b[fast_splitter]',
    place_result: 'fast_splitter',
    stack_size: 50
  },
  express_splitter: {
    type: 'item',
    name: 'express_splitter',
    icon: 'graphics/icons/express-splitter.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'belt',
    order: 'c[splitter]_c[express_splitter]',
    place_result: 'express_splitter',
    stack_size: 50
  },
  advanced_circuit: {
    type: 'item',
    name: 'advanced_circuit',
    icon: 'graphics/icons/advanced-circuit.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'intermediate_product',
    order: 'f[advanced_circuit]',
    stack_size: 200
  },
  processing_unit: {
    type: 'item',
    name: 'processing_unit',
    icon: 'graphics/icons/processing-unit.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'intermediate_product',
    order: 'g[processing_unit]',
    stack_size: 100
  },
  logistic_robot: {
    type: 'item',
    name: 'logistic_robot',
    icon: 'graphics/icons/logistic-robot.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'logistic_network',
    order: 'a[robot]_a[logistic_robot]',
    place_result: 'logistic_robot',
    stack_size: 50
  },
  construction_robot: {
    type: 'item',
    name: 'construction_robot',
    icon: 'graphics/icons/construction-robot.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'logistic_network',
    order: 'a[robot]_b[construction_robot]',
    place_result: 'construction_robot',
    stack_size: 50
  },
  logistic_chest_passive_provider: {
    type: 'item',
    name: 'logistic_chest_passive_provider',
    icon: 'graphics/icons/logistic-chest-passive-provider.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'logistic_network',
    order: 'b[storage]_c[logistic_chest_passive_provider]',
    place_result: 'logistic_chest_passive_provider',
    stack_size: 50
  },
  logistic_chest_active_provider: {
    type: 'item',
    name: 'logistic_chest_active_provider',
    icon: 'graphics/icons/logistic-chest-active-provider.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'logistic_network',
    order: 'b[storage]_c[logistic_chest_active_provider]',
    place_result: 'logistic_chest_active_provider',
    stack_size: 50
  },
  logistic_chest_storage: {
    type: 'item',
    name: 'logistic_chest_storage',
    icon: 'graphics/icons/logistic-chest-storage.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'logistic_network',
    order: 'b[storage]_c[logistic_chest_storage]',
    place_result: 'logistic_chest_storage',
    stack_size: 50
  },
  logistic_chest_buffer: {
    type: 'item',
    name: 'logistic_chest_buffer',
    icon: 'graphics/icons/logistic-chest-buffer.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'logistic_network',
    order: 'b[storage]_d[logistic_chest_buffer]',
    place_result: 'logistic_chest_buffer',
    stack_size: 50
  },
  logistic_chest_requester: {
    type: 'item',
    name: 'logistic_chest_requester',
    icon: 'graphics/icons/logistic-chest-requester.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'logistic_network',
    order: 'b[storage]_e[logistic_chest_requester]',
    place_result: 'logistic_chest_requester',
    stack_size: 50
  },
  rocket_silo: {
    type: 'item',
    name: 'rocket_silo',
    icon: 'graphics/icons/rocket-silo.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'defensive_structure',
    order: 'e[rocket_silo]',
    place_result: 'rocket_silo',
    stack_size: 1
  },
  roboport: {
    type: 'item',
    name: 'roboport',
    icon: 'graphics/icons/roboport.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'logistic_network',
    order: 'c[signal]_a[roboport]',
    place_result: 'roboport',
    stack_size: 10
  },
  big_electric_pole: {
    type: 'item',
    name: 'big_electric_pole',
    icon: 'graphics/icons/big-electric-pole.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'energy_pipe_distribution',
    order: 'a[energy]_c[big_electric_pole]',
    place_result: 'big_electric_pole',
    stack_size: 50
  },
  medium_electric_pole: {
    type: 'item',
    name: 'medium_electric_pole',
    icon: 'graphics/icons/medium-electric-pole.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'energy_pipe_distribution',
    order: 'a[energy]_b[medium_electric_pole]',
    place_result: 'medium_electric_pole',
    stack_size: 50
  },
  substation: {
    type: 'item',
    name: 'substation',
    icon: 'graphics/icons/substation.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'energy_pipe_distribution',
    order: 'a[energy]_d[substation]',
    place_result: 'substation',
    stack_size: 50
  },
  accumulator: {
    type: 'item',
    name: 'accumulator',
    icon: 'graphics/icons/accumulator.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'energy',
    order: 'e[accumulator]_a[accumulator]',
    place_result: 'accumulator',
    stack_size: 50
  },
  steel_furnace: {
    type: 'item',
    name: 'steel_furnace',
    icon: 'graphics/icons/steel-furnace.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'smelting_machine',
    order: 'b[steel_furnace]',
    place_result: 'steel_furnace',
    stack_size: 50
  },
  electric_furnace: {
    type: 'item',
    name: 'electric_furnace',
    icon: 'graphics/icons/electric-furnace.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'smelting_machine',
    order: 'c[electric_furnace]',
    place_result: 'electric_furnace',
    stack_size: 50
  },
  beacon: {
    type: 'item',
    name: 'beacon',
    icon: 'graphics/icons/beacon.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'module',
    order: 'a[beacon]',
    place_result: 'beacon',
    stack_size: 10
  },
  storage_tank: {
    type: 'item',
    name: 'storage_tank',
    icon: 'graphics/icons/storage-tank.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'storage',
    order: 'b[fluid]_a[storage_tank]',
    place_result: 'storage_tank',
    stack_size: 50
  },
  pump: {
    type: 'item',
    name: 'pump',
    icon: 'graphics/icons/pump.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'energy_pipe_distribution',
    order: 'b[pipe]_c[pump]',
    place_result: 'pump',
    stack_size: 50
  },
  pumpjack: {
    type: 'item',
    name: 'pumpjack',
    icon: 'graphics/icons/pumpjack.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'extraction_machine',
    order: 'b[fluids]_b[pumpjack]',
    place_result: 'pumpjack',
    stack_size: 20
  },
  oil_refinery: {
    type: 'item',
    name: 'oil_refinery',
    icon: 'graphics/icons/oil-refinery.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'production_machine',
    order: 'd[refinery]',
    place_result: 'oil_refinery',
    stack_size: 10
  },
  chemical_plant: {
    type: 'item',
    name: 'chemical_plant',
    icon: 'graphics/icons/chemical-plant.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'production_machine',
    order: 'e[chemical_plant]',
    place_result: 'chemical_plant',
    stack_size: 10
  },
  sulfur: {
    type: 'item',
    name: 'sulfur',
    icon: 'graphics/icons/sulfur.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'raw_material',
    order: 'g[sulfur]',
    stack_size: 50
  },
  empty_barrel: {
    type: 'item',
    name: 'empty_barrel',
    icon: 'graphics/icons/fluid/barreling/empty-barrel.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'intermediate_product',
    order: 'd[empty_barrel]',
    stack_size: 10
  },
  solid_fuel: {
    type: 'item',
    name: 'solid_fuel',
    icon: 'graphics/icons/solid-fuel.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    fuel_category: 'chemical',
    fuel_value: '25MJ',
    fuel_acceleration_multiplier: 1.2,
    fuel_top_speed_multiplier: 1.05,
    subgroup: 'raw_material',
    order: 'c[solid_fuel]',
    stack_size: 50
  },
  plastic_bar: {
    type: 'item',
    name: 'plastic_bar',
    icon: 'graphics/icons/plastic-bar.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'raw_material',
    order: 'f[plastic_bar]',
    stack_size: 100
  },
  engine_unit: {
    type: 'item',
    name: 'engine_unit',
    icon: 'graphics/icons/engine-unit.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'intermediate_product',
    order: 'h[engine_unit]',
    stack_size: 50
  },
  electric_engine_unit: {
    type: 'item',
    name: 'electric_engine_unit',
    icon: 'graphics/icons/electric-engine-unit.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'intermediate_product',
    order: 'i[electric_engine_unit]',
    stack_size: 50
  },
  explosives: {
    type: 'item',
    name: 'explosives',
    icon: 'graphics/icons/explosives.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'raw_material',
    order: 'j[explosives]',
    stack_size: 50
  },
  battery: {
    type: 'item',
    name: 'battery',
    icon: 'graphics/icons/battery.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'raw_material',
    order: 'h[battery]',
    stack_size: 200
  },
  flying_robot_frame: {
    type: 'item',
    name: 'flying_robot_frame',
    icon: 'graphics/icons/flying-robot-frame.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'intermediate_product',
    order: 'l[flying_robot_frame]',
    stack_size: 50
  },
  arithmetic_combinator: {
    type: 'item',
    name: 'arithmetic_combinator',
    icon: 'graphics/icons/arithmetic-combinator.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'circuit_network',
    place_result: 'arithmetic_combinator',
    order: 'c[combinators]_a[arithmetic_combinator]',
    stack_size: 50
  },
  decider_combinator: {
    type: 'item',
    name: 'decider_combinator',
    icon: 'graphics/icons/decider-combinator.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'circuit_network',
    place_result: 'decider_combinator',
    order: 'c[combinators]_b[decider_combinator]',
    stack_size: 50
  },
  constant_combinator: {
    type: 'item',
    name: 'constant_combinator',
    icon: 'graphics/icons/constant-combinator.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'circuit_network',
    place_result: 'constant_combinator',
    order: 'c[combinators]_c[constant_combinator]',
    stack_size: 50
  },
  power_switch: {
    type: 'item',
    name: 'power_switch',
    icon: 'graphics/icons/power-switch.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'circuit_network',
    place_result: 'power_switch',
    order: 'd[other]_a[power_switch]',
    stack_size: 50
  },
  programmable_speaker: {
    type: 'item',
    name: 'programmable_speaker',
    icon: 'graphics/icons/programmable-speaker.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'circuit_network',
    order: 'd[other]_b[programmable_speaker]',
    place_result: 'programmable_speaker',
    stack_size: 50
  },
  low_density_structure: {
    type: 'item',
    name: 'low_density_structure',
    icon: 'graphics/icons/rocket-structure.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'intermediate_product',
    order: 'o[rocket_structure]',
    stack_size: 10
  },
  rocket_fuel: {
    type: 'item',
    name: 'rocket_fuel',
    icon: 'graphics/icons/rocket-fuel.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    fuel_category: 'chemical',
    fuel_value: '225MJ',
    fuel_acceleration_multiplier: 1.8,
    fuel_top_speed_multiplier: 1.15,
    subgroup: 'intermediate_product',
    order: 'p[rocket_fuel]',
    stack_size: 10
  },
  nuclear_fuel: {
    type: 'item',
    name: 'nuclear_fuel',
    icon: 'graphics/icons/nuclear-fuel.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    fuel_category: 'chemical',
    fuel_value: '1.21GJ',
    fuel_acceleration_multiplier: 2.5,
    fuel_top_speed_multiplier: 1.15,
    subgroup: 'intermediate_product',
    order: 'q[uranium_rocket_fuel]',
    stack_size: 1
  },
  rocket_control_unit: {
    type: 'item',
    name: 'rocket_control_unit',
    icon: 'graphics/icons/rocket-control-unit.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'intermediate_product',
    order: 'n[rocket_control_unit]',
    stack_size: 10
  },
  satellite: {
    type: 'item',
    name: 'satellite',
    icon: 'graphics/icons/satellite.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'intermediate_product',
    order: 'm[satellite]',
    stack_size: 1,
    rocket_launch_product: [
      'space_science_pack',
      1000
    ]
  },
  concrete: {
    type: 'item',
    name: 'concrete',
    icon: 'graphics/icons/concrete.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'terrain',
    order: 'b[concrete]_a[plain]',
    stack_size: 100,
    place_as_tile: {
      result: 'concrete',
      condition_size: 1,
      condition: [
        'water_tile'
      ]
    }
  },
  refined_concrete: {
    type: 'item',
    name: 'refined_concrete',
    icon: 'graphics/icons/refined-concrete.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'terrain',
    order: 'b[concrete]_c[refined]',
    stack_size: 100,
    place_as_tile: {
      result: 'refined_concrete',
      condition_size: 1,
      condition: [
        'water_tile'
      ]
    }
  },
  hazard_concrete: {
    type: 'item',
    name: 'hazard_concrete',
    icon: 'graphics/icons/hazard-concrete.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'terrain',
    order: 'b[concrete]_b[hazard]',
    stack_size: 100,
    place_as_tile: {
      result: 'hazard_concrete_left',
      condition_size: 1,
      condition: [
        'water_tile'
      ]
    }
  },
  refined_hazard_concrete: {
    type: 'item',
    name: 'refined_hazard_concrete',
    icon: 'graphics/icons/refined-hazard-concrete.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'terrain',
    order: 'b[concrete]_d[refined_hazard]',
    stack_size: 100,
    place_as_tile: {
      result: 'refined_hazard_concrete_left',
      condition_size: 1,
      condition: [
        'water_tile'
      ]
    }
  },
  landfill: {
    type: 'item',
    name: 'landfill',
    icon: 'graphics/icons/landfill.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'terrain',
    order: 'c[landfill]_a[dirt]',
    stack_size: 100,
    place_as_tile: {
      result: 'grass_1',
      condition_size: 1,
      condition: [
        'ground_tile'
      ]
    }
  },
  uranium_ore: {
    type: 'item',
    name: 'uranium_ore',
    icon: 'graphics/icons/uranium-ore.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'raw_resource',
    order: 'g[uranium_ore]',
    stack_size: 50
  },
  nuclear_reactor: {
    type: 'item',
    name: 'nuclear_reactor',
    icon: 'graphics/icons/nuclear-reactor.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'energy',
    order: 'f[nuclear_energy]_a[reactor]',
    place_result: 'nuclear_reactor',
    stack_size: 10
  },
  uranium_235: {
    type: 'item',
    name: 'uranium_235',
    icon: 'graphics/icons/uranium-235.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'intermediate_product',
    order: 'r[uranium_235]',
    stack_size: 100
  },
  uranium_238: {
    type: 'item',
    name: 'uranium_238',
    icon: 'graphics/icons/uranium-238.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'intermediate_product',
    order: 'r[uranium_238]',
    stack_size: 100
  },
  centrifuge: {
    type: 'item',
    name: 'centrifuge',
    icon: 'graphics/icons/centrifuge.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'production_machine',
    order: 'g[centrifuge]',
    place_result: 'centrifuge',
    stack_size: 50
  },
  uranium_fuel_cell: {
    type: 'item',
    name: 'uranium_fuel_cell',
    icon: 'graphics/icons/uranium-fuel-cell.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'intermediate_product',
    order: 'r[uranium_processing]_a[uranium_fuel_cell]',
    fuel_category: 'nuclear',
    burnt_result: 'used_up_uranium_fuel_cell',
    fuel_value: '8GJ',
    stack_size: 50
  },
  used_up_uranium_fuel_cell: {
    type: 'item',
    name: 'used_up_uranium_fuel_cell',
    icon: 'graphics/icons/used-up-uranium-fuel-cell.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'intermediate_product',
    order: 'r[used_up_uranium_fuel_cell]',
    stack_size: 50
  },
  heat_exchanger: {
    type: 'item',
    name: 'heat_exchanger',
    icon: 'graphics/icons/heat-boiler.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'energy',
    order: 'f[nuclear_energy]_b[heat_exchanger]',
    place_result: 'heat_exchanger',
    stack_size: 50
  },
  steam_turbine: {
    type: 'item',
    name: 'steam_turbine',
    icon: 'graphics/icons/steam-turbine.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'energy',
    order: 'b[steam_power]_c[steam_turbine]',
    place_result: 'steam_turbine',
    stack_size: 10
  },
  heat_pipe: {
    type: 'item',
    name: 'heat_pipe',
    icon: 'graphics/icons/heat-pipe.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'energy',
    order: 'f[nuclear_energy]_c[heat_pipe]',
    place_result: 'heat_pipe',
    stack_size: 50
  },
  laser_turret: {
    type: 'item',
    name: 'laser_turret',
    icon: 'graphics/icons/laser-turret.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'defensive_structure',
    order: 'b[turret]_b[laser_turret]',
    place_result: 'laser_turret',
    stack_size: 50
  },
  flamethrower_turret: {
    type: 'item',
    name: 'flamethrower_turret',
    icon: 'graphics/icons/flamethrower-turret.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'defensive_structure',
    order: 'b[turret]_c[flamethrower_turret]',
    place_result: 'flamethrower_turret',
    stack_size: 50
  },
  artillery_turret: {
    type: 'item',
    name: 'artillery_turret',
    icon: 'graphics/icons/artillery-turret.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'defensive_structure',
    order: 'b[turret]_d[artillery_turret]',
    place_result: 'artillery_turret',
    stack_size: 10
  },
  water_barrel: {
    type: 'item',
    name: 'water_barrel',
    localised_name: [
      'item_name.filled_barrel',
      [
        'fluid_name.water'
      ]
    ],
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
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'fill_barrel',
    order: 'b[water_barrel]',
    stack_size: 10
  },
  crude_oil_barrel: {
    type: 'item',
    name: 'crude_oil_barrel',
    localised_name: [
      'item_name.filled_barrel',
      [
        'fluid_name.crude_oil'
      ]
    ],
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
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'fill_barrel',
    order: 'b[crude_oil_barrel]',
    stack_size: 10
  },
  heavy_oil_barrel: {
    type: 'item',
    name: 'heavy_oil_barrel',
    localised_name: [
      'item_name.filled_barrel',
      [
        'fluid_name.heavy_oil'
      ]
    ],
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
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'fill_barrel',
    order: 'b[heavy_oil_barrel]',
    stack_size: 10
  },
  light_oil_barrel: {
    type: 'item',
    name: 'light_oil_barrel',
    localised_name: [
      'item_name.filled_barrel',
      [
        'fluid_name.light_oil'
      ]
    ],
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
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'fill_barrel',
    order: 'b[light_oil_barrel]',
    stack_size: 10
  },
  petroleum_gas_barrel: {
    type: 'item',
    name: 'petroleum_gas_barrel',
    localised_name: [
      'item_name.filled_barrel',
      [
        'fluid_name.petroleum_gas'
      ]
    ],
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
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'fill_barrel',
    order: 'b[petroleum_gas_barrel]',
    stack_size: 10
  },
  lubricant_barrel: {
    type: 'item',
    name: 'lubricant_barrel',
    localised_name: [
      'item_name.filled_barrel',
      [
        'fluid_name.lubricant'
      ]
    ],
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
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'fill_barrel',
    order: 'b[lubricant_barrel]',
    stack_size: 10
  },
  sulfuric_acid_barrel: {
    type: 'item',
    name: 'sulfuric_acid_barrel',
    localised_name: [
      'item_name.filled_barrel',
      [
        'fluid_name.sulfuric_acid'
      ]
    ],
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
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'fill_barrel',
    order: 'b[sulfuric_acid_barrel]',
    stack_size: 10
  },
  raw_fish: {
    type: 'capsule',
    name: 'raw_fish',
    icon: 'graphics/icons/fish.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'raw_resource',
    capsule_action: {
      type: 'use_on_self',
      attack_parameters: {
        type: 'projectile',
        ammo_category: 'capsule',
        cooldown: 30,
        range: 0,
        ammo_type: {
          category: 'capsule',
          target_type: 'position',
          action: {
            type: 'direct',
            action_delivery: {
              type: 'instant',
              target_effects: {
                type: 'damage',
                damage: {
                  type: 'physical',
                  amount: -80
                }
              }
            }
          }
        }
      }
    },
    order: 'h[raw_fish]',
    stack_size: 100
  },
  grenade: {
    type: 'capsule',
    name: 'grenade',
    icon: 'graphics/icons/grenade.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    capsule_action: {
      type: 'throw',
      attack_parameters: {
        type: 'projectile',
        ammo_category: 'grenade',
        cooldown: 30,
        projectile_creation_distance: 0.6,
        range: 15,
        ammo_type: {
          category: 'grenade',
          target_type: 'position',
          action: {
            type: 'direct',
            action_delivery: {
              type: 'projectile',
              projectile: 'grenade',
              starting_speed: 0.3
            }
          }
        }
      }
    },
    subgroup: 'capsule',
    order: 'a[grenade]_a[normal]',
    stack_size: 100
  },
  cluster_grenade: {
    type: 'capsule',
    name: 'cluster_grenade',
    icon: 'graphics/icons/cluster-grenade.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    capsule_action: {
      type: 'throw',
      attack_parameters: {
        type: 'projectile',
        ammo_category: 'grenade',
        cooldown: 30,
        projectile_creation_distance: 0.6,
        range: 20,
        ammo_type: {
          category: 'grenade',
          target_type: 'position',
          action: {
            type: 'direct',
            action_delivery: {
              type: 'projectile',
              projectile: 'cluster_grenade',
              starting_speed: 0.3
            }
          }
        }
      }
    },
    subgroup: 'capsule',
    order: 'a[grenade]_b[cluster]',
    stack_size: 100
  },
  poison_capsule: {
    type: 'capsule',
    name: 'poison_capsule',
    icon: 'graphics/icons/poison-capsule.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    capsule_action: {
      type: 'throw',
      attack_parameters: {
        type: 'projectile',
        ammo_category: 'capsule',
        cooldown: 30,
        projectile_creation_distance: 0.6,
        range: 25,
        ammo_type: {
          category: 'capsule',
          target_type: 'position',
          action: {
            type: 'direct',
            action_delivery: {
              type: 'projectile',
              projectile: 'poison_capsule',
              starting_speed: 0.3
            }
          }
        }
      }
    },
    subgroup: 'capsule',
    order: 'b[poison_capsule]',
    stack_size: 100
  },
  slowdown_capsule: {
    type: 'capsule',
    name: 'slowdown_capsule',
    icon: 'graphics/icons/slowdown-capsule.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    capsule_action: {
      type: 'throw',
      attack_parameters: {
        type: 'projectile',
        ammo_category: 'capsule',
        cooldown: 30,
        projectile_creation_distance: 0.6,
        range: 25,
        ammo_type: {
          category: 'capsule',
          target_type: 'position',
          action: {
            type: 'direct',
            action_delivery: {
              type: 'projectile',
              projectile: 'slowdown_capsule',
              starting_speed: 0.3
            }
          }
        }
      }
    },
    subgroup: 'capsule',
    order: 'c[slowdown_capsule]',
    stack_size: 100
  },
  defender_capsule: {
    type: 'capsule',
    name: 'defender_capsule',
    icon: 'graphics/icons/defender.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    capsule_action: {
      type: 'throw',
      attack_parameters: {
        type: 'projectile',
        ammo_category: 'capsule',
        cooldown: 15,
        projectile_creation_distance: 0.6,
        range: 20,
        ammo_type: {
          category: 'capsule',
          target_type: 'position',
          action: {
            type: 'direct',
            action_delivery: {
              type: 'projectile',
              projectile: 'defender_capsule',
              starting_speed: 0.3
            }
          }
        }
      }
    },
    subgroup: 'capsule',
    order: 'd[defender_capsule]',
    stack_size: 100
  },
  distractor_capsule: {
    type: 'capsule',
    name: 'distractor_capsule',
    icon: 'graphics/icons/distractor.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    capsule_action: {
      type: 'throw',
      attack_parameters: {
        type: 'projectile',
        ammo_category: 'capsule',
        cooldown: 30,
        projectile_creation_distance: 0.6,
        range: 25,
        ammo_type: {
          category: 'capsule',
          target_type: 'position',
          action: {
            type: 'direct',
            action_delivery: {
              type: 'projectile',
              projectile: 'distractor_capsule',
              starting_speed: 0.3
            }
          }
        }
      }
    },
    subgroup: 'capsule',
    order: 'e[defender_capsule]',
    stack_size: 100
  },
  destroyer_capsule: {
    type: 'capsule',
    name: 'destroyer_capsule',
    icon: 'graphics/icons/destroyer.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    capsule_action: {
      type: 'throw',
      attack_parameters: {
        type: 'projectile',
        ammo_category: 'capsule',
        cooldown: 30,
        projectile_creation_distance: 0.6,
        range: 25,
        ammo_type: {
          category: 'capsule',
          target_type: 'position',
          action: {
            type: 'direct',
            action_delivery: {
              type: 'projectile',
              projectile: 'destroyer_capsule',
              starting_speed: 0.3
            }
          }
        }
      }
    },
    subgroup: 'capsule',
    order: 'f[destroyer_capsule]',
    stack_size: 100
  },
  discharge_defense_remote: {
    type: 'capsule',
    name: 'discharge_defense_remote',
    icon: 'graphics/equipment/discharge-defense-equipment-ability.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    capsule_action: {
      type: 'equipment_remote',
      equipment: 'discharge_defense_equipment'
    },
    subgroup: 'capsule',
    order: 'z',
    stack_size: 1
  },
  cliff_explosives: {
    type: 'capsule',
    name: 'cliff_explosives',
    icon: 'graphics/icons/cliff-explosives.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar',
      'hide_from_bonus_gui'
    ],
    capsule_action: {
      type: 'destroy_cliffs',
      radius: 1.5,
      attack_parameters: {
        type: 'projectile',
        ammo_category: 'grenade',
        cooldown: 30,
        projectile_creation_distance: 0.6,
        range: 10,
        ammo_type: {
          category: 'grenade',
          target_type: 'position',
          action: {
            type: 'direct',
            action_delivery: {
              type: 'projectile',
              projectile: 'cliff_explosives',
              starting_speed: 0.3
            }
          }
        }
      }
    },
    subgroup: 'terrain',
    order: 'd[cliff_explosives]',
    stack_size: 20
  },
  artillery_targeting_remote: {
    type: 'capsule',
    name: 'artillery_targeting_remote',
    icon: 'graphics/icons/artillery-targeting-remote.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    capsule_action: {
      type: 'artillery_remote',
      flare: 'artillery_flare'
    },
    subgroup: 'capsule',
    order: 'zz',
    stack_size: 1
  },
  repair_pack: {
    type: 'repair_tool',
    name: 'repair_pack',
    icon: 'graphics/icons/repair-pack.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'tool',
    order: 'b[repair]_a[repair_pack]',
    speed: 2,
    durability: 300,
    stack_size: 100
  },
  iron_axe: {
    type: 'mining_tool',
    name: 'iron_axe',
    localised_description: [
      'item_description.mining_tool'
    ],
    icon: 'graphics/icons/iron-axe.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    action: {
      type: 'direct',
      action_delivery: {
        type: 'instant',
        target_effects: {
          type: 'damage',
          damage: {
            amount: 5,
            type: 'physical'
          }
        }
      }
    },
    durability: 4000,
    subgroup: 'tool',
    order: 'a[mining]_a[iron_axe]',
    speed: 2.5,
    stack_size: 20
  },
  steel_axe: {
    type: 'mining_tool',
    name: 'steel_axe',
    localised_description: [
      'item_description.mining_tool'
    ],
    icon: 'graphics/icons/steel-axe.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    action: {
      type: 'direct',
      action_delivery: {
        type: 'instant',
        target_effects: {
          type: 'damage',
          damage: {
            amount: 8,
            type: 'physical'
          }
        }
      }
    },
    durability: 5000,
    subgroup: 'tool',
    order: 'a[mining]_b[steel_axe]',
    speed: 4,
    stack_size: 20
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
  },
  signal_everything: {
    type: 'virtual_signal',
    name: 'signal_everything',
    special_signal: true,
    icon: 'graphics/icons/signal/signal_everything.png',
    icon_size: 32,
    subgroup: 'virtual_signal_special',
    order: 'a[special]_[1everything]'
  },
  signal_anything: {
    type: 'virtual_signal',
    name: 'signal_anything',
    special_signal: true,
    icon: 'graphics/icons/signal/signal_anything.png',
    icon_size: 32,
    subgroup: 'virtual_signal_special',
    order: 'a[special]_[2anything]'
  },
  signal_each: {
    type: 'virtual_signal',
    name: 'signal_each',
    special_signal: true,
    icon: 'graphics/icons/signal/signal_each.png',
    icon_size: 32,
    subgroup: 'virtual_signal_special',
    order: 'a[special]_[3each]'
  },
  signal_red: {
    type: 'virtual_signal',
    name: 'signal_red',
    icon: 'graphics/icons/signal/signal_red.png',
    icon_size: 32,
    subgroup: 'virtual_signal_color',
    order: 'd[colors]_[1red]'
  },
  signal_green: {
    type: 'virtual_signal',
    name: 'signal_green',
    icon: 'graphics/icons/signal/signal_green.png',
    icon_size: 32,
    subgroup: 'virtual_signal_color',
    order: 'd[colors]_[2green]'
  },
  signal_blue: {
    type: 'virtual_signal',
    name: 'signal_blue',
    icon: 'graphics/icons/signal/signal_blue.png',
    icon_size: 32,
    subgroup: 'virtual_signal_color',
    order: 'd[colors]_[3blue]'
  },
  signal_yellow: {
    type: 'virtual_signal',
    name: 'signal_yellow',
    icon: 'graphics/icons/signal/signal_yellow.png',
    icon_size: 32,
    subgroup: 'virtual_signal_color',
    order: 'd[colors]_[4yellow]'
  },
  signal_pink: {
    type: 'virtual_signal',
    name: 'signal_pink',
    icon: 'graphics/icons/signal/signal_pink.png',
    icon_size: 32,
    subgroup: 'virtual_signal_color',
    order: 'd[colors]_[5pink]'
  },
  signal_cyan: {
    type: 'virtual_signal',
    name: 'signal_cyan',
    icon: 'graphics/icons/signal/signal_cyan.png',
    icon_size: 32,
    subgroup: 'virtual_signal_color',
    order: 'd[colors]_[6cyan]'
  },
  signal_white: {
    type: 'virtual_signal',
    name: 'signal_white',
    icon: 'graphics/icons/signal/signal_white.png',
    icon_size: 32,
    subgroup: 'virtual_signal_color',
    order: 'd[colors]_[7white]'
  },
  signal_grey: {
    type: 'virtual_signal',
    name: 'signal_grey',
    icon: 'graphics/icons/signal/signal_grey.png',
    icon_size: 32,
    subgroup: 'virtual_signal_color',
    order: 'd[colors]_[8grey]'
  },
  signal_black: {
    type: 'virtual_signal',
    name: 'signal_black',
    icon: 'graphics/icons/signal/signal_black.png',
    icon_size: 32,
    subgroup: 'virtual_signal_color',
    order: 'd[colors]_[9black]'
  },
  signal_1: {
    type: 'virtual_signal',
    name: 'signal_1',
    icon: 'graphics/icons/signal/signal_1.png',
    icon_size: 32,
    subgroup: 'virtual_signal_number',
    order: 'b[numbers]_[1]'
  },
  signal_2: {
    type: 'virtual_signal',
    name: 'signal_2',
    icon: 'graphics/icons/signal/signal_2.png',
    icon_size: 32,
    subgroup: 'virtual_signal_number',
    order: 'b[numbers]_[2]'
  },
  signal_3: {
    type: 'virtual_signal',
    name: 'signal_3',
    icon: 'graphics/icons/signal/signal_3.png',
    icon_size: 32,
    subgroup: 'virtual_signal_number',
    order: 'b[numbers]_[3]'
  },
  signal_4: {
    type: 'virtual_signal',
    name: 'signal_4',
    icon: 'graphics/icons/signal/signal_4.png',
    icon_size: 32,
    subgroup: 'virtual_signal_number',
    order: 'b[numbers]_[4]'
  },
  signal_5: {
    type: 'virtual_signal',
    name: 'signal_5',
    icon: 'graphics/icons/signal/signal_5.png',
    icon_size: 32,
    subgroup: 'virtual_signal_number',
    order: 'b[numbers]_[5]'
  },
  signal_6: {
    type: 'virtual_signal',
    name: 'signal_6',
    icon: 'graphics/icons/signal/signal_6.png',
    icon_size: 32,
    subgroup: 'virtual_signal_number',
    order: 'b[numbers]_[6]'
  },
  signal_7: {
    type: 'virtual_signal',
    name: 'signal_7',
    icon: 'graphics/icons/signal/signal_7.png',
    icon_size: 32,
    subgroup: 'virtual_signal_number',
    order: 'b[numbers]_[7]'
  },
  signal_8: {
    type: 'virtual_signal',
    name: 'signal_8',
    icon: 'graphics/icons/signal/signal_8.png',
    icon_size: 32,
    subgroup: 'virtual_signal_number',
    order: 'b[numbers]_[8]'
  },
  signal_9: {
    type: 'virtual_signal',
    name: 'signal_9',
    icon: 'graphics/icons/signal/signal_9.png',
    icon_size: 32,
    subgroup: 'virtual_signal_number',
    order: 'b[numbers]_[9]'
  },
  signal_0: {
    type: 'virtual_signal',
    name: 'signal_0',
    icon: 'graphics/icons/signal/signal_0.png',
    icon_size: 32,
    subgroup: 'virtual_signal_number',
    order: 'b[numbers]_[0]'
  },
  signal_A: {
    type: 'virtual_signal',
    name: 'signal_A',
    icon: 'graphics/icons/signal/signal_A.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[A]'
  },
  signal_B: {
    type: 'virtual_signal',
    name: 'signal_B',
    icon: 'graphics/icons/signal/signal_B.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[B]'
  },
  signal_C: {
    type: 'virtual_signal',
    name: 'signal_C',
    icon: 'graphics/icons/signal/signal_C.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[C]'
  },
  signal_D: {
    type: 'virtual_signal',
    name: 'signal_D',
    icon: 'graphics/icons/signal/signal_D.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[D]'
  },
  signal_E: {
    type: 'virtual_signal',
    name: 'signal_E',
    icon: 'graphics/icons/signal/signal_E.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[E]'
  },
  signal_F: {
    type: 'virtual_signal',
    name: 'signal_F',
    icon: 'graphics/icons/signal/signal_F.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[F]'
  },
  signal_G: {
    type: 'virtual_signal',
    name: 'signal_G',
    icon: 'graphics/icons/signal/signal_G.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[G]'
  },
  signal_H: {
    type: 'virtual_signal',
    name: 'signal_H',
    icon: 'graphics/icons/signal/signal_H.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[H]'
  },
  signal_I: {
    type: 'virtual_signal',
    name: 'signal_I',
    icon: 'graphics/icons/signal/signal_I.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[I]'
  },
  signal_J: {
    type: 'virtual_signal',
    name: 'signal_J',
    icon: 'graphics/icons/signal/signal_J.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[J]'
  },
  signal_K: {
    type: 'virtual_signal',
    name: 'signal_K',
    icon: 'graphics/icons/signal/signal_K.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[K]'
  },
  signal_L: {
    type: 'virtual_signal',
    name: 'signal_L',
    icon: 'graphics/icons/signal/signal_L.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[L]'
  },
  signal_M: {
    type: 'virtual_signal',
    name: 'signal_M',
    icon: 'graphics/icons/signal/signal_M.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[M]'
  },
  signal_N: {
    type: 'virtual_signal',
    name: 'signal_N',
    icon: 'graphics/icons/signal/signal_N.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[N]'
  },
  signal_O: {
    type: 'virtual_signal',
    name: 'signal_O',
    icon: 'graphics/icons/signal/signal_O.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[O]'
  },
  signal_P: {
    type: 'virtual_signal',
    name: 'signal_P',
    icon: 'graphics/icons/signal/signal_P.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[P]'
  },
  signal_Q: {
    type: 'virtual_signal',
    name: 'signal_Q',
    icon: 'graphics/icons/signal/signal_Q.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[Q]'
  },
  signal_R: {
    type: 'virtual_signal',
    name: 'signal_R',
    icon: 'graphics/icons/signal/signal_R.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[R]'
  },
  signal_S: {
    type: 'virtual_signal',
    name: 'signal_S',
    icon: 'graphics/icons/signal/signal_S.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[S]'
  },
  signal_T: {
    type: 'virtual_signal',
    name: 'signal_T',
    icon: 'graphics/icons/signal/signal_T.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[T]'
  },
  signal_U: {
    type: 'virtual_signal',
    name: 'signal_U',
    icon: 'graphics/icons/signal/signal_U.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[U]'
  },
  signal_V: {
    type: 'virtual_signal',
    name: 'signal_V',
    icon: 'graphics/icons/signal/signal_V.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[V]'
  },
  signal_W: {
    type: 'virtual_signal',
    name: 'signal_W',
    icon: 'graphics/icons/signal/signal_W.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[W]'
  },
  signal_X: {
    type: 'virtual_signal',
    name: 'signal_X',
    icon: 'graphics/icons/signal/signal_X.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[X]'
  },
  signal_Y: {
    type: 'virtual_signal',
    name: 'signal_Y',
    icon: 'graphics/icons/signal/signal_Y.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[Y]'
  },
  signal_Z: {
    type: 'virtual_signal',
    name: 'signal_Z',
    icon: 'graphics/icons/signal/signal_Z.png',
    icon_size: 32,
    subgroup: 'virtual_signal_letter',
    order: 'c[letters]_[Z]'
  },
  locomotive: {
    type: 'item_with_entity_data',
    name: 'locomotive',
    icon: 'graphics/icons/diesel-locomotive.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'transport',
    order: 'a[train_system]_f[diesel_locomotive]',
    place_result: 'locomotive',
    stack_size: 5
  },
  cargo_wagon: {
    type: 'item_with_entity_data',
    name: 'cargo_wagon',
    icon: 'graphics/icons/cargo-wagon.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'transport',
    order: 'a[train_system]_g[cargo_wagon]',
    place_result: 'cargo_wagon',
    stack_size: 5
  },
  fluid_wagon: {
    type: 'item_with_entity_data',
    name: 'fluid_wagon',
    icon: 'graphics/icons/fluid-wagon.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'transport',
    order: 'a[train_system]_h[fluid_wagon]',
    place_result: 'fluid_wagon',
    stack_size: 5
  },
  artillery_wagon: {
    type: 'item_with_entity_data',
    name: 'artillery_wagon',
    icon: 'graphics/icons/artillery-wagon.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'transport',
    order: 'a[train_system]_i[artillery_wagon]',
    place_result: 'artillery_wagon',
    stack_size: 5
  },
  car: {
    type: 'item_with_entity_data',
    name: 'car',
    icon: 'graphics/icons/car.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'transport',
    order: 'b[personal_transport]_a[car]',
    place_result: 'car',
    stack_size: 1
  },
  tank: {
    type: 'item_with_entity_data',
    name: 'tank',
    icon: 'graphics/icons/tank.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'transport',
    order: 'b[personal_transport]_b[tank]',
    place_result: 'tank',
    stack_size: 1
  },
  rail: {
    type: 'rail_planner',
    name: 'rail',
    icon: 'graphics/icons/rail.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'transport',
    order: 'a[train_system]_a[rail]',
    place_result: 'straight_rail',
    stack_size: 100,
    straight_rail: 'straight_rail',
    curved_rail: 'curved_rail'
  },
  science_pack_1: {
    type: 'tool',
    name: 'science_pack_1',
    localised_description: [
      'item_description.science_pack'
    ],
    icon: 'graphics/icons/science-pack-1.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'science_pack',
    order: 'a[science_pack_1]',
    stack_size: 200,
    durability: 1,
    durability_description_key: 'description.science_pack_remaining_amount_key',
    durability_description_value: 'description.science_pack_remaining_amount_value'
  },
  science_pack_2: {
    type: 'tool',
    name: 'science_pack_2',
    localised_description: [
      'item_description.science_pack'
    ],
    icon: 'graphics/icons/science-pack-2.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'science_pack',
    order: 'b[science_pack_2]',
    stack_size: 200,
    durability: 1,
    durability_description_key: 'description.science_pack_remaining_amount_key',
    durability_description_value: 'description.science_pack_remaining_amount_value'
  },
  science_pack_3: {
    type: 'tool',
    name: 'science_pack_3',
    localised_description: [
      'item_description.science_pack'
    ],
    icon: 'graphics/icons/science-pack-3.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'science_pack',
    order: 'c[science_pack_3]',
    stack_size: 200,
    durability: 1,
    durability_description_key: 'description.science_pack_remaining_amount_key',
    durability_description_value: 'description.science_pack_remaining_amount_value'
  },
  military_science_pack: {
    type: 'tool',
    name: 'military_science_pack',
    localised_description: [
      'item_description.science_pack'
    ],
    icon: 'graphics/icons/military-science-pack.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'science_pack',
    order: 'd[military_science_pack]',
    stack_size: 200,
    durability: 1,
    durability_description_key: 'description.science_pack_remaining_amount_key',
    durability_description_value: 'description.science_pack_remaining_amount_value'
  },
  production_science_pack: {
    type: 'tool',
    name: 'production_science_pack',
    localised_description: [
      'item_description.science_pack'
    ],
    icon: 'graphics/icons/production-science-pack.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'science_pack',
    order: 'e[production_science_pack]',
    stack_size: 200,
    durability: 1,
    durability_description_key: 'description.science_pack_remaining_amount_key',
    durability_description_value: 'description.science_pack_remaining_amount_value'
  },
  high_tech_science_pack: {
    type: 'tool',
    name: 'high_tech_science_pack',
    localised_description: [
      'item_description.science_pack'
    ],
    icon: 'graphics/icons/high-tech-science-pack.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'science_pack',
    order: 'f[high_tech_science_pack]',
    stack_size: 200,
    durability: 1,
    durability_description_key: 'description.science_pack_remaining_amount_key',
    durability_description_value: 'description.science_pack_remaining_amount_value'
  },
  space_science_pack: {
    type: 'tool',
    name: 'space_science_pack',
    icon: 'graphics/icons/space-science-pack.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'science_pack',
    order: 'g[space_science_pack]',
    stack_size: 2000,
    durability: 1,
    durability_description_key: 'description.science_pack_remaining_amount_key',
    durability_description_value: 'description.science_pack_remaining_amount_value'
  },
  blueprint: {
    type: 'blueprint',
    name: 'blueprint',
    icon: 'graphics/icons/blueprint.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'tool',
    order: 'c[automated_construction]_a[blueprint]',
    stack_size: 1,
    stackable: false,
    draw_label_for_cursor_render: true,
    item_to_clear: 'electronic_circuit',
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
    alt_selection_cursor_box_type: 'copy'
  },
  deconstruction_planner: {
    type: 'deconstruction_item',
    name: 'deconstruction_planner',
    icon: 'graphics/icons/deconstruction-planner.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'tool',
    order: 'c[automated_construction]_b[deconstruction_planner]',
    stack_size: 1,
    entity_filter_count: 30,
    tile_filter_count: 30,
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
    alt_selection_cursor_box_type: 'not_allowed'
  },
  blueprint_book: {
    type: 'blueprint_book',
    name: 'blueprint_book',
    icon: 'graphics/icons/blueprint-book.png',
    icon_size: 32,
    flags: [
      'goes_to_quickbar'
    ],
    subgroup: 'tool',
    order: 'c[automated_construction]_c[blueprint_book]',
    stack_size: 1,
    inventory_size: 1000
  },
  speed_module: {
    type: 'module',
    name: 'speed_module',
    localised_description: [
      'item_description.speed_module'
    ],
    icon: 'graphics/icons/speed-module.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'module',
    category: 'speed',
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
    }
  },
  speed_module_2: {
    type: 'module',
    name: 'speed_module_2',
    localised_description: [
      'item_description.speed_module'
    ],
    icon: 'graphics/icons/speed-module-2.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'module',
    category: 'speed',
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
    }
  },
  speed_module_3: {
    type: 'module',
    name: 'speed_module_3',
    localised_description: [
      'item_description.speed_module'
    ],
    icon: 'graphics/icons/speed-module-3.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'module',
    category: 'speed',
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
    }
  },
  effectivity_module: {
    type: 'module',
    name: 'effectivity_module',
    localised_description: [
      'item_description.effectivity_module'
    ],
    icon: 'graphics/icons/effectivity-module.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'module',
    category: 'effectivity',
    tier: 1,
    order: 'c[effectivity]_a[effectivity_module_1]',
    stack_size: 50,
    default_request_amount: 10,
    effect: {
      consumption: {
        bonus: -0.3
      }
    }
  },
  effectivity_module_2: {
    type: 'module',
    name: 'effectivity_module_2',
    localised_description: [
      'item_description.effectivity_module'
    ],
    icon: 'graphics/icons/effectivity-module-2.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'module',
    category: 'effectivity',
    tier: 2,
    order: 'c[effectivity]_b[effectivity_module_2]',
    stack_size: 50,
    default_request_amount: 10,
    effect: {
      consumption: {
        bonus: -0.4
      }
    }
  },
  effectivity_module_3: {
    type: 'module',
    name: 'effectivity_module_3',
    localised_description: [
      'item_description.effectivity_module'
    ],
    icon: 'graphics/icons/effectivity-module-3.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'module',
    category: 'effectivity',
    tier: 3,
    order: 'c[effectivity]_c[effectivity_module_3]',
    stack_size: 50,
    default_request_amount: 10,
    effect: {
      consumption: {
        bonus: -0.5
      }
    }
  },
  productivity_module: {
    type: 'module',
    name: 'productivity_module',
    localised_description: [
      'item_description.productivity_module'
    ],
    icon: 'graphics/icons/productivity-module.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'module',
    category: 'productivity',
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
    limitation_message_key: 'production_module_usable_only_on_intermediates'
  },
  productivity_module_2: {
    type: 'module',
    name: 'productivity_module_2',
    localised_description: [
      'item_description.productivity_module'
    ],
    icon: 'graphics/icons/productivity-module-2.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'module',
    category: 'productivity',
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
    limitation_message_key: 'production_module_usable_only_on_intermediates'
  },
  productivity_module_3: {
    type: 'module',
    name: 'productivity_module_3',
    localised_description: [
      'item_description.productivity_module'
    ],
    icon: 'graphics/icons/productivity-module-3.png',
    icon_size: 32,
    flags: [
      'goes_to_main_inventory'
    ],
    subgroup: 'module',
    category: 'productivity',
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
    limitation_message_key: 'production_module_usable_only_on_intermediates'
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
    subgroup: 'fluid'
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
    auto_barrel: false,
    subgroup: 'fluid'
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
    subgroup: 'fluid'
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
    subgroup: 'fluid'
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
    subgroup: 'fluid'
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
    subgroup: 'fluid'
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
    subgroup: 'fluid'
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
    subgroup: 'fluid'
  }
}