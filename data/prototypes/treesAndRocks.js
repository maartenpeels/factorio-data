module.exports = {
  rock_huge: {
    name: 'rock_huge',
    type: 'simple_entity',
    flags: [
      'placeable_neutral',
      'placeable_off_grid',
      'not_on_map'
    ],
    icon: 'graphics/icons/rock-huge-icon.png',
    icon_size: 32,
    subgroup: 'grass',
    order: 'b[decorative]_l[rock]_a[huge]',
    collision_box: [
      [
        -1.5,
        -1.1
      ],
      [
        1.5,
        1.1
      ]
    ],
    selection_box: [
      [
        -1.7,
        -1.3
      ],
      [
        1.7,
        1.3
      ]
    ],
    minable: {
      mining_particle: 'stone_particle',
      mining_time: 8,
      results: [
        {
          name: 'stone',
          amount_min: 24,
          amount_max: 50
        },
        {
          name: 'coal',
          amount_min: 24,
          amount_max: 50
        }
      ]
    },
    loot: [
      {
        item: 'stone',
        probability: 1,
        count_min: 25,
        count_max: 50
      }
    ],
    count_as_rock_for_filtered_deconstruction: true,
    mined_sound: {
      filename: 'sound/deconstruct-bricks.ogg'
    },
    vehicle_impact_sound: {
      filename: 'sound/car-stone-impact.ogg',
      volume: 1
    },
    render_layer: 'object',
    max_health: 2000,
    resistances: [
      {
        type: 'fire',
        percent: 100
      }
    ],
    pictures: [
      {
        filename: 'graphics/decorative/rock-huge/rock-huge-05.png',
        width: 101,
        height: 90,
        shift: [
          0.25,
          0.0625
        ],
        hr_version: {
          filename: 'graphics/decorative/rock-huge/hr-rock-huge-05.png',
          width: 201,
          height: 179,
          scale: 0.5,
          shift: [
            0.25,
            0.0625
          ]
        }
      },
      {
        filename: 'graphics/decorative/rock-huge/rock-huge-06.png',
        width: 117,
        height: 86,
        shift: [
          0.4375,
          0.046875
        ],
        hr_version: {
          filename: 'graphics/decorative/rock-huge/hr-rock-huge-06.png',
          width: 233,
          height: 171,
          scale: 0.5,
          shift: [
            0.429688,
            0.046875
          ]
        }
      },
      {
        filename: 'graphics/decorative/rock-huge/rock-huge-07.png',
        width: 120,
        height: 96,
        shift: [
          0.390625,
          0.03125
        ],
        hr_version: {
          filename: 'graphics/decorative/rock-huge/hr-rock-huge-07.png',
          width: 240,
          height: 192,
          scale: 0.5,
          shift: [
            0.398438,
            0.03125
          ]
        }
      },
      {
        filename: 'graphics/decorative/rock-huge/rock-huge-08.png',
        width: 110,
        height: 88,
        shift: [
          0.140625,
          0.125
        ],
        hr_version: {
          filename: 'graphics/decorative/rock-huge/hr-rock-huge-08.png',
          width: 219,
          height: 175,
          scale: 0.5,
          shift: [
            0.148438,
            0.132812
          ]
        }
      },
      {
        filename: 'graphics/decorative/rock-huge/rock-huge-09.png',
        width: 120,
        height: 104,
        shift: [
          0.3125,
          0.0625
        ],
        hr_version: {
          filename: 'graphics/decorative/rock-huge/hr-rock-huge-09.png',
          width: 240,
          height: 208,
          scale: 0.5,
          shift: [
            0.3125,
            0.0625
          ]
        }
      },
      {
        filename: 'graphics/decorative/rock-huge/rock-huge-10.png',
        width: 122,
        height: 95,
        shift: [
          0.1875,
          0.046875
        ],
        hr_version: {
          filename: 'graphics/decorative/rock-huge/hr-rock-huge-10.png',
          width: 243,
          height: 190,
          scale: 0.5,
          shift: [
            0.1875,
            0.046875
          ]
        }
      },
      {
        filename: 'graphics/decorative/rock-huge/rock-huge-11.png',
        width: 125,
        height: 93,
        shift: [
          0.390625,
          0.0625
        ],
        hr_version: {
          filename: 'graphics/decorative/rock-huge/hr-rock-huge-11.png',
          width: 249,
          height: 185,
          scale: 0.5,
          shift: [
            0.398438,
            0.0546875
          ]
        }
      },
      {
        filename: 'graphics/decorative/rock-huge/rock-huge-12.png',
        width: 137,
        height: 82,
        shift: [
          0.34375,
          0.03125
        ],
        hr_version: {
          filename: 'graphics/decorative/rock-huge/hr-rock-huge-12.png',
          width: 273,
          height: 163,
          scale: 0.5,
          shift: [
            0.34375,
            0.0390625
          ]
        }
      },
      {
        filename: 'graphics/decorative/rock-huge/rock-huge-13.png',
        width: 138,
        height: 88,
        shift: [
          0.265625,
          0.03125
        ],
        hr_version: {
          filename: 'graphics/decorative/rock-huge/hr-rock-huge-13.png',
          width: 275,
          height: 175,
          scale: 0.5,
          shift: [
            0.273438,
            0.0234375
          ]
        }
      },
      {
        filename: 'graphics/decorative/rock-huge/rock-huge-14.png',
        width: 121,
        height: 108,
        shift: [
          0.203125,
          0.046875
        ],
        hr_version: {
          filename: 'graphics/decorative/rock-huge/hr-rock-huge-14.png',
          width: 241,
          height: 215,
          scale: 0.5,
          shift: [
            0.195312,
            0.0390625
          ]
        }
      },
      {
        filename: 'graphics/decorative/rock-huge/rock-huge-15.png',
        width: 159,
        height: 91,
        shift: [
          0.515625,
          0.03125
        ],
        hr_version: {
          filename: 'graphics/decorative/rock-huge/hr-rock-huge-15.png',
          width: 318,
          height: 181,
          scale: 0.5,
          shift: [
            0.523438,
            0.03125
          ]
        }
      },
      {
        filename: 'graphics/decorative/rock-huge/rock-huge-16.png',
        width: 109,
        height: 112,
        shift: [
          0.046875,
          0.015625
        ],
        hr_version: {
          filename: 'graphics/decorative/rock-huge/hr-rock-huge-16.png',
          width: 217,
          height: 224,
          scale: 0.5,
          shift: [
            0.0546875,
            0.0234375
          ]
        }
      },
      {
        filename: 'graphics/decorative/rock-huge/rock-huge-17.png',
        width: 166,
        height: 114,
        shift: [
          0.234375,
          0.046875
        ],
        hr_version: {
          filename: 'graphics/decorative/rock-huge/hr-rock-huge-17.png',
          width: 332,
          height: 228,
          scale: 0.5,
          shift: [
            0.226562,
            0.046875
          ]
        }
      },
      {
        filename: 'graphics/decorative/rock-huge/rock-huge-18.png',
        width: 145,
        height: 122,
        shift: [
          0.203125,
          0.03125
        ],
        hr_version: {
          filename: 'graphics/decorative/rock-huge/hr-rock-huge-18.png',
          width: 290,
          height: 243,
          scale: 0.5,
          shift: [
            0.195312,
            0.0390625
          ]
        }
      },
      {
        filename: 'graphics/decorative/rock-huge/rock-huge-19.png',
        width: 175,
        height: 113,
        shift: [
          0.609375,
          0.015625
        ],
        hr_version: {
          filename: 'graphics/decorative/rock-huge/hr-rock-huge-19.png',
          width: 349,
          height: 225,
          scale: 0.5,
          shift: [
            0.609375,
            0.0234375
          ]
        }
      },
      {
        filename: 'graphics/decorative/rock-huge/rock-huge-20.png',
        width: 144,
        height: 125,
        shift: [
          0.140625,
          0.03125
        ],
        hr_version: {
          filename: 'graphics/decorative/rock-huge/hr-rock-huge-20.png',
          width: 287,
          height: 250,
          scale: 0.5,
          shift: [
            0.132812,
            0.03125
          ]
        }
      }
    ],
    size: {
      width: 4,
      height: 3
    }
  },
  rock_big: {
    name: 'rock_big',
    type: 'simple_entity',
    flags: [
      'placeable_neutral',
      'placeable_off_grid',
      'not_on_map'
    ],
    icon: 'graphics/icons/rock-big-icon.png',
    icon_size: 32,
    subgroup: 'grass',
    order: 'b[decorative]_l[rock]_b[big]',
    collision_box: [
      [
        -1,
        -0.9
      ],
      [
        1,
        1
      ]
    ],
    selection_box: [
      [
        -1.2,
        -1.2
      ],
      [
        1.2,
        1.2
      ]
    ],
    minable: {
      mining_particle: 'stone_particle',
      mining_time: 5,
      result: 'stone',
      count: 20
    },
    loot: [
      {
        item: 'stone',
        probability: 1,
        count_min: 9,
        count_max: 25
      }
    ],
    count_as_rock_for_filtered_deconstruction: true,
    mined_sound: {
      filename: 'sound/deconstruct-bricks.ogg'
    },
    vehicle_impact_sound: {
      filename: 'sound/car-stone-impact.ogg',
      volume: 1
    },
    render_layer: 'object',
    max_health: 500,
    resistances: [
      {
        type: 'fire',
        percent: 100
      }
    ],
    pictures: [
      {
        filename: 'graphics/decorative/rock-big/rock-big-01.png',
        width: 94,
        height: 64,
        shift: [
          -0.046875,
          0.171875
        ],
        hr_version: {
          filename: 'graphics/decorative/rock-big/hr-rock-big-01.png',
          width: 188,
          height: 127,
          scale: 0.5,
          shift: [
            -0.046875,
            0.171875
          ]
        }
      },
      {
        filename: 'graphics/decorative/rock-big/rock-big-02.png',
        width: 98,
        height: 68,
        shift: [
          0.4375,
          0.125
        ],
        hr_version: {
          filename: 'graphics/decorative/rock-big/hr-rock-big-02.png',
          width: 195,
          height: 135,
          scale: 0.5,
          shift: [
            0.445312,
            0.125
          ]
        }
      },
      {
        filename: 'graphics/decorative/rock-big/rock-big-03.png',
        width: 103,
        height: 66,
        shift: [
          0.484375,
          0.0625
        ],
        hr_version: {
          filename: 'graphics/decorative/rock-big/hr-rock-big-03.png',
          width: 205,
          height: 132,
          scale: 0.5,
          shift: [
            0.484375,
            0.0546875
          ]
        }
      },
      {
        filename: 'graphics/decorative/rock-big/rock-big-04.png',
        width: 72,
        height: 71,
        shift: [
          0.21875,
          0.046875
        ],
        hr_version: {
          filename: 'graphics/decorative/rock-big/hr-rock-big-04.png',
          width: 144,
          height: 142,
          scale: 0.5,
          shift: [
            0.210938,
            0.0390625
          ]
        }
      },
      {
        filename: 'graphics/decorative/rock-big/rock-big-05.png',
        width: 65,
        height: 54,
        shift: [
          0.015625,
          0.21875
        ],
        hr_version: {
          filename: 'graphics/decorative/rock-big/hr-rock-big-05.png',
          width: 130,
          height: 107,
          scale: 0.5,
          shift: [
            0.0234375,
            0.226562
          ]
        }
      },
      {
        filename: 'graphics/decorative/rock-big/rock-big-06.png',
        width: 83,
        height: 55,
        shift: [
          0.15625,
          0.234375
        ],
        hr_version: {
          filename: 'graphics/decorative/rock-big/hr-rock-big-06.png',
          width: 165,
          height: 109,
          scale: 0.5,
          shift: [
            0.15625,
            0.226562
          ]
        }
      },
      {
        filename: 'graphics/decorative/rock-big/rock-big-07.png',
        width: 75,
        height: 67,
        shift: [
          0.265625,
          0.15625
        ],
        hr_version: {
          filename: 'graphics/decorative/rock-big/hr-rock-big-07.png',
          width: 150,
          height: 133,
          scale: 0.5,
          shift: [
            0.257812,
            0.148438
          ]
        }
      },
      {
        filename: 'graphics/decorative/rock-big/rock-big-08.png',
        width: 78,
        height: 56,
        shift: [
          0.09375,
          0.171875
        ],
        hr_version: {
          filename: 'graphics/decorative/rock-big/hr-rock-big-08.png',
          width: 156,
          height: 111,
          scale: 0.5,
          shift: [
            0.0859375,
            0.179688
          ]
        }
      },
      {
        filename: 'graphics/decorative/rock-big/rock-big-09.png',
        width: 94,
        height: 60,
        shift: [
          0.078125,
          0.09375
        ],
        hr_version: {
          filename: 'graphics/decorative/rock-big/hr-rock-big-09.png',
          width: 187,
          height: 120,
          scale: 0.5,
          shift: [
            0.078125,
            0.0859375
          ]
        }
      },
      {
        filename: 'graphics/decorative/rock-big/rock-big-10.png',
        width: 113,
        height: 64,
        shift: [
          -0.15625,
          0.078125
        ],
        hr_version: {
          filename: 'graphics/decorative/rock-big/hr-rock-big-10.png',
          width: 225,
          height: 128,
          scale: 0.5,
          shift: [
            -0.15625,
            0.0703125
          ]
        }
      },
      {
        filename: 'graphics/decorative/rock-big/rock-big-11.png',
        width: 92,
        height: 72,
        shift: [
          0.203125,
          0.265625
        ],
        hr_version: {
          filename: 'graphics/decorative/rock-big/hr-rock-big-11.png',
          width: 183,
          height: 144,
          scale: 0.5,
          shift: [
            0.195312,
            0.257812
          ]
        }
      },
      {
        filename: 'graphics/decorative/rock-big/rock-big-12.png',
        width: 79,
        height: 69,
        shift: [
          0.046875,
          0.15625
        ],
        hr_version: {
          filename: 'graphics/decorative/rock-big/hr-rock-big-12.png',
          width: 158,
          height: 138,
          scale: 0.5,
          shift: [
            0.0390625,
            0.15625
          ]
        }
      },
      {
        filename: 'graphics/decorative/rock-big/rock-big-13.png',
        width: 94,
        height: 75,
        shift: [
          0.21875,
          0.21875
        ],
        hr_version: {
          filename: 'graphics/decorative/rock-big/hr-rock-big-13.png',
          width: 188,
          height: 150,
          scale: 0.5,
          shift: [
            0.226562,
            0.21875
          ]
        }
      },
      {
        filename: 'graphics/decorative/rock-big/rock-big-14.png',
        width: 93,
        height: 80,
        shift: [
          0.125,
          0.0625
        ],
        hr_version: {
          filename: 'graphics/decorative/rock-big/hr-rock-big-14.png',
          width: 186,
          height: 160,
          scale: 0.5,
          shift: [
            0.132812,
            0.0625
          ]
        }
      },
      {
        filename: 'graphics/decorative/rock-big/rock-big-15.png',
        width: 91,
        height: 87,
        shift: [
          0.3125,
          -0.09375
        ],
        hr_version: {
          filename: 'graphics/decorative/rock-big/hr-rock-big-15.png',
          width: 181,
          height: 174,
          scale: 0.5,
          shift: [
            0.304688,
            -0.09375
          ]
        }
      },
      {
        filename: 'graphics/decorative/rock-big/rock-big-16.png',
        width: 106,
        height: 75,
        shift: [
          0.34375,
          0.125
        ],
        hr_version: {
          filename: 'graphics/decorative/rock-big/hr-rock-big-16.png',
          width: 212,
          height: 150,
          scale: 0.5,
          shift: [
            0.335938,
            0.117188
          ]
        }
      },
      {
        filename: 'graphics/decorative/rock-big/rock-big-17.png',
        width: 78,
        height: 59,
        shift: [
          0.25,
          0.03125
        ],
        hr_version: {
          filename: 'graphics/decorative/rock-big/hr-rock-big-17.png',
          width: 155,
          height: 117,
          scale: 0.5,
          shift: [
            0.25,
            0.0390625
          ]
        }
      },
      {
        filename: 'graphics/decorative/rock-big/rock-big-18.png',
        width: 71,
        height: 64,
        shift: [
          0.3125,
          0.046875
        ],
        hr_version: {
          filename: 'graphics/decorative/rock-big/hr-rock-big-18.png',
          width: 141,
          height: 128,
          scale: 0.5,
          shift: [
            0.304688,
            0.0390625
          ]
        }
      },
      {
        filename: 'graphics/decorative/rock-big/rock-big-19.png',
        width: 88,
        height: 57,
        shift: [
          0.390625,
          0.03125
        ],
        hr_version: {
          filename: 'graphics/decorative/rock-big/hr-rock-big-19.png',
          width: 176,
          height: 114,
          scale: 0.5,
          shift: [
            0.390625,
            0.0234375
          ]
        }
      },
      {
        filename: 'graphics/decorative/rock-big/rock-big-20.png',
        width: 60,
        height: 63,
        shift: [
          0.140625,
          0.03125
        ],
        hr_version: {
          filename: 'graphics/decorative/rock-big/hr-rock-big-20.png',
          width: 120,
          height: 125,
          scale: 0.5,
          shift: [
            0.148438,
            0.03125
          ]
        }
      }
    ],
    size: {
      width: 3,
      height: 3
    }
  },
  sand_rock_big: {
    name: 'sand_rock_big',
    type: 'simple_entity',
    flags: [
      'placeable_neutral',
      'placeable_off_grid',
      'not_on_map'
    ],
    icon: 'graphics/icons/rock-big-icon.png',
    icon_size: 32,
    subgroup: 'wrecks',
    order: 'b[decorative]_l[rock]_b[big]',
    collision_box: [
      [
        -0.75,
        -0.75
      ],
      [
        0.75,
        0.75
      ]
    ],
    selection_box: [
      [
        -1,
        -1
      ],
      [
        1,
        0.75
      ]
    ],
    render_layer: 'object',
    max_health: 500,
    minable: {
      mining_particle: 'stone_particle',
      mining_time: 5,
      results: [
        {
          name: 'stone',
          amount_min: 19,
          amount_max: 25
        }
      ]
    },
    loot: [
      {
        item: 'stone',
        probability: 1,
        count_min: 10,
        count_max: 15
      }
    ],
    resistances: [
      {
        type: 'fire',
        percent: 100
      }
    ],
    count_as_rock_for_filtered_deconstruction: true,
    mined_sound: {
      filename: 'sound/deconstruct-bricks.ogg'
    },
    vehicle_impact_sound: {
      filename: 'sound/car-stone-impact.ogg',
      volume: 1
    },
    pictures: [
      {
        filename: 'graphics/decorative/sand-rock/sand-rock-big-01.png',
        width: 105,
        height: 69,
        shift: [
          0.296875,
          -0.4
        ],
        hr_version: {
          filename: 'graphics/decorative/sand-rock/hr-sand-rock-big-01.png',
          width: 209,
          height: 138,
          shift: [
            0.304688,
            -0.4
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/decorative/sand-rock/sand-rock-big-02.png',
        width: 82,
        height: 65,
        shift: [
          0,
          0.046875
        ],
        hr_version: {
          filename: 'graphics/decorative/sand-rock/hr-sand-rock-big-02.png',
          width: 165,
          height: 129,
          shift: [
            0,
            0.0390625
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/decorative/sand-rock/sand-rock-big-03.png',
        width: 76,
        height: 69,
        shift: [
          0.14375,
          0
        ],
        hr_version: {
          filename: 'graphics/decorative/sand-rock/hr-sand-rock-big-03.png',
          width: 151,
          height: 139,
          shift: [
            0.151562,
            0
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/decorative/sand-rock/sand-rock-big-04.png',
        width: 108,
        height: 55,
        shift: [
          0.398438,
          0
        ],
        hr_version: {
          filename: 'graphics/decorative/sand-rock/hr-sand-rock-big-04.png',
          width: 216,
          height: 110,
          shift: [
            0.390625,
            0
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/decorative/sand-rock/sand-rock-big-05.png',
        width: 77,
        height: 74,
        shift: [
          0.328125,
          0.0625
        ],
        hr_version: {
          filename: 'graphics/decorative/sand-rock/hr-sand-rock-big-05.png',
          width: 154,
          height: 147,
          shift: [
            0.328125,
            0.0703125
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/decorative/sand-rock/sand-rock-big-06.png',
        width: 78,
        height: 66,
        shift: [
          0.16875,
          -0.1
        ],
        hr_version: {
          filename: 'graphics/decorative/sand-rock/hr-sand-rock-big-06.png',
          width: 154,
          height: 132,
          shift: [
            0.16875,
            -0.1
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/decorative/sand-rock/sand-rock-big-07.png',
        width: 96,
        height: 65,
        shift: [
          0.3,
          -0.2
        ],
        hr_version: {
          filename: 'graphics/decorative/sand-rock/hr-sand-rock-big-07.png',
          width: 193,
          height: 130,
          shift: [
            0.3,
            -0.2
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/decorative/sand-rock/sand-rock-big-08.png',
        width: 68,
        height: 59,
        shift: [
          0,
          0
        ],
        hr_version: {
          filename: 'graphics/decorative/sand-rock/hr-sand-rock-big-08.png',
          width: 136,
          height: 117,
          shift: [
            0,
            0
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/decorative/sand-rock/sand-rock-big-09.png',
        width: 78,
        height: 58,
        shift: [
          0.2,
          0
        ],
        hr_version: {
          filename: 'graphics/decorative/sand-rock/hr-sand-rock-big-09.png',
          width: 157,
          height: 115,
          shift: [
            0.1,
            0
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/decorative/sand-rock/sand-rock-big-10.png',
        width: 100,
        height: 77,
        shift: [
          0.325,
          -0.1
        ],
        hr_version: {
          filename: 'graphics/decorative/sand-rock/hr-sand-rock-big-10.png',
          width: 198,
          height: 153,
          shift: [
            0.325,
            -0.1
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/decorative/sand-rock/sand-rock-big-11.png',
        width: 95,
        height: 58,
        shift: [
          0.453125,
          0
        ],
        hr_version: {
          filename: 'graphics/decorative/sand-rock/hr-sand-rock-big-11.png',
          width: 190,
          height: 115,
          shift: [
            0.453125,
            0
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/decorative/sand-rock/sand-rock-big-12.png',
        width: 115,
        height: 63,
        shift: [
          0.546875,
          -0.015625
        ],
        hr_version: {
          filename: 'graphics/decorative/sand-rock/hr-sand-rock-big-12.png',
          width: 229,
          height: 126,
          shift: [
            0.539062,
            -0.015625
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/decorative/sand-rock/sand-rock-big-13.png',
        width: 75,
        height: 63,
        shift: [
          0.0625,
          0.171875
        ],
        hr_version: {
          filename: 'graphics/decorative/sand-rock/hr-sand-rock-big-13.png',
          width: 151,
          height: 125,
          shift: [
            0.0703125,
            0.179688
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/decorative/sand-rock/sand-rock-big-14.png',
        width: 69,
        height: 59,
        shift: [
          0.153125,
          0
        ],
        hr_version: {
          filename: 'graphics/decorative/sand-rock/hr-sand-rock-big-14.png',
          width: 137,
          height: 117,
          shift: [
            0.160938,
            0
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/decorative/sand-rock/sand-rock-big-15.png',
        width: 100,
        height: 71,
        shift: [
          0.234375,
          -0.203125
        ],
        hr_version: {
          filename: 'graphics/decorative/sand-rock/hr-sand-rock-big-15.png',
          width: 201,
          height: 141,
          shift: [
            0.242188,
            -0.195312
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/decorative/sand-rock/sand-rock-big-16.png',
        width: 104,
        height: 77,
        shift: [
          0.359375,
          -0.1
        ],
        hr_version: {
          filename: 'graphics/decorative/sand-rock/hr-sand-rock-big-16.png',
          width: 209,
          height: 154,
          shift: [
            0.351562,
            -0.1
          ],
          scale: 0.5
        }
      }
    ],
    size: {
      width: 2,
      height: 2
    }
  },
  tree_01: {
    type: 'tree',
    name: 'tree_01',
    icon: 'graphics/icons/tree-01.png',
    icon_size: 32,
    flags: [
      'placeable_neutral',
      'placeable_off_grid',
      'breaths_air'
    ],
    minable: {
      mining_particle: 'wooden_particle',
      mining_time: 2,
      result: 'raw_wood',
      count: 4
    },
    corpse: 'tree_01_stump',
    remains_when_mined: 'tree_01_stump',
    emissions_per_tick: -0.001,
    max_health: 50,
    collision_box: [
      [
        -0.4,
        -0.4
      ],
      [
        0.4,
        0.4
      ]
    ],
    selection_box: [
      [
        -0.9,
        -2.2
      ],
      [
        0.9,
        0.6
      ]
    ],
    drawing_box: [
      [
        -0.9,
        -3
      ],
      [
        0.9,
        0.6
      ]
    ],
    subgroup: 'trees',
    order: 'a[tree]_a[regular]_a[tree_01]',
    vehicle_impact_sound: {
      filename: 'sound/car-wood-impact.ogg',
      volume: 1
    },
    variations: [
      {
        trunk: {
          filename: 'graphics/entity/tree/01/tree-01-a-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 177,
          height: 150,
          frame_count: 4,
          shift: [
            0.921875,
            -1.1875
          ],
          hr_version: {
            width: 354,
            height: 298,
            shift: [
              0.953125,
              -1.171875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-a-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/01/tree-01-a-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 102,
          height: 115,
          frame_count: 3,
          shift: [
            -0.34375,
            -2.046875
          ],
          hr_version: {
            width: 204,
            height: 231,
            shift: [
              -0.328125,
              -2.0234375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-a-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/01/tree-01-b-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 179,
          height: 149,
          frame_count: 4,
          shift: [
            1.546875,
            -1.265625
          ],
          hr_version: {
            width: 358,
            height: 298,
            shift: [
              1.5625,
              -1.25
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-b-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/01/tree-01-b-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 89,
          height: 107,
          frame_count: 3,
          shift: [
            0.109375,
            -2.171875
          ],
          hr_version: {
            width: 178,
            height: 215,
            shift: [
              0.125,
              -2.1640625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-b-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/01/tree-01-c-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 156,
          height: 146,
          frame_count: 4,
          shift: [
            1.625,
            -1.0625
          ],
          hr_version: {
            width: 313,
            height: 291,
            shift: [
              1.6328125,
              -1.0546875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-c-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/01/tree-01-c-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 94,
          height: 104,
          frame_count: 3,
          shift: [
            0.1875,
            -2
          ],
          hr_version: {
            width: 190,
            height: 210,
            shift: [
              0.203125,
              -1.984375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-c-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/01/tree-01-d-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 176,
          height: 152,
          frame_count: 4,
          shift: [
            1.71875,
            -1.09375
          ],
          hr_version: {
            width: 351,
            height: 302,
            shift: [
              1.7265625,
              -1.078125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-d-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/01/tree-01-d-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 102,
          height: 106,
          frame_count: 3,
          shift: [
            0.375,
            -1.96875
          ],
          hr_version: {
            width: 205,
            height: 212,
            shift: [
              0.3828125,
              -1.9375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-d-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/01/tree-01-e-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 174,
          height: 141,
          frame_count: 4,
          shift: [
            1.75,
            -1.109375
          ],
          hr_version: {
            width: 346,
            height: 281,
            shift: [
              1.765625,
              -1.0859375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-e-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/01/tree-01-e-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 105,
          height: 110,
          frame_count: 3,
          shift: [
            0.515625,
            -1.71875
          ],
          hr_version: {
            width: 212,
            height: 221,
            shift: [
              0.53125,
              -1.7109375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-e-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/01/tree-01-f-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 176,
          height: 141,
          frame_count: 4,
          shift: [
            1.3125,
            -0.703125
          ],
          hr_version: {
            width: 350,
            height: 280,
            shift: [
              1.328125,
              -0.6875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-f-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/01/tree-01-f-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 95,
          height: 101,
          frame_count: 3,
          shift: [
            0.015625,
            -1.453125
          ],
          hr_version: {
            width: 191,
            height: 203,
            shift: [
              0.0234375,
              -1.4296875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-f-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/01/tree-01-g-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 164,
          height: 150,
          frame_count: 4,
          shift: [
            0.625,
            -0.75
          ],
          hr_version: {
            width: 328,
            height: 301,
            shift: [
              0.640625,
              -0.7421875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-g-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/01/tree-01-g-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 96,
          height: 119,
          frame_count: 3,
          shift: [
            -0.5625,
            -1.578125
          ],
          hr_version: {
            width: 193,
            height: 239,
            shift: [
              -0.5546875,
              -1.5546875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-g-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/01/tree-01-h-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 181,
          height: 144,
          frame_count: 4,
          shift: [
            0.828125,
            -1.03125
          ],
          hr_version: {
            width: 360,
            height: 288,
            shift: [
              0.84375,
              -1.015625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-h-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/01/tree-01-h-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 108,
          height: 108,
          frame_count: 3,
          shift: [
            -0.625,
            -1.84375
          ],
          hr_version: {
            width: 216,
            height: 216,
            shift: [
              -0.625,
              -1.84375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-h-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/01/tree-01-i-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 165,
          height: 162,
          frame_count: 4,
          shift: [
            1.296875,
            -0.6875
          ],
          hr_version: {
            width: 329,
            height: 323,
            shift: [
              1.3046875,
              -0.6640625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-i-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/01/tree-01-i-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 88,
          height: 121,
          frame_count: 3,
          shift: [
            0,
            -1.484375
          ],
          hr_version: {
            width: 177,
            height: 244,
            shift: [
              0.0234375,
              -1.46875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-i-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/01/tree-01-j-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 132,
          height: 115,
          frame_count: 4,
          shift: [
            1.09375,
            -0.921875
          ],
          hr_version: {
            width: 264,
            height: 229,
            shift: [
              1.109375,
              -0.9140625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-j-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/01/tree-01-j-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 89,
          height: 90,
          frame_count: 3,
          shift: [
            0.140625,
            -1.65625
          ],
          hr_version: {
            width: 180,
            height: 179,
            shift: [
              0.15625,
              -1.6328125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-j-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      }
    ],
    colors: [
      {
        r: 219,
        g: 200,
        b: 96
      },
      {
        r: 199,
        g: 184,
        b: 100
      },
      {
        r: 205,
        g: 191,
        b: 112
      },
      {
        r: 199,
        g: 175,
        b: 78
      },
      {
        r: 224,
        g: 206,
        b: 110
      },
      {
        r: 209,
        g: 185,
        b: 91
      },
      {
        r: 197,
        g: 201,
        b: 80
      },
      {
        r: 214,
        g: 202,
        b: 100
      }
    ],
    darkness_of_burnt_tree: 0.5,
    size: {
      width: 2,
      height: 3
    }
  },
  tree_02: {
    type: 'tree',
    name: 'tree_02',
    icon: 'graphics/icons/tree-02.png',
    icon_size: 32,
    flags: [
      'placeable_neutral',
      'placeable_off_grid',
      'breaths_air'
    ],
    minable: {
      mining_particle: 'wooden_particle',
      mining_time: 2,
      result: 'raw_wood',
      count: 4
    },
    corpse: 'tree_02_stump',
    remains_when_mined: 'tree_02_stump',
    emissions_per_tick: -0.001,
    max_health: 50,
    collision_box: [
      [
        -0.4,
        -0.4
      ],
      [
        0.4,
        0.4
      ]
    ],
    selection_box: [
      [
        -0.9,
        -2.2
      ],
      [
        0.9,
        0.6
      ]
    ],
    drawing_box: [
      [
        -0.9,
        -3.9
      ],
      [
        0.9,
        0.6
      ]
    ],
    subgroup: 'trees',
    order: 'a[tree]_a[regular]_b[tree_02]',
    vehicle_impact_sound: {
      filename: 'sound/car-wood-impact.ogg',
      volume: 1
    },
    variations: [
      {
        trunk: {
          filename: 'graphics/entity/tree/02/tree-02-a-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 225,
          height: 169,
          frame_count: 4,
          shift: [
            1.921875,
            -1.453125
          ],
          hr_version: {
            width: 448,
            height: 340,
            shift: [
              1.921875,
              -1.484375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-a-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/02/tree-02-a-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 95,
          height: 131,
          frame_count: 3,
          shift: [
            -0.140625,
            -2.203125
          ],
          hr_version: {
            width: 190,
            height: 261,
            shift: [
              -0.140625,
              -2.2109375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-a-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/02/tree-02-b-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 279,
          height: 193,
          frame_count: 4,
          shift: [
            0.984375,
            -1.359375
          ],
          hr_version: {
            width: 558,
            height: 385,
            shift: [
              1,
              -1.3515625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-b-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/02/tree-02-b-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 98,
          height: 143,
          frame_count: 3,
          shift: [
            -0.1875,
            -2.203125
          ],
          hr_version: {
            width: 194,
            height: 285,
            shift: [
              -0.1875,
              -2.1953125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-b-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/02/tree-02-c-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 249,
          height: 188,
          frame_count: 4,
          shift: [
            2.171875,
            -1.59375
          ],
          hr_version: {
            width: 499,
            height: 377,
            shift: [
              2.1640625,
              -1.5859375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-c-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/02/tree-02-c-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 106,
          height: 154,
          frame_count: 3,
          shift: [
            -0.09375,
            -2.59375
          ],
          hr_version: {
            width: 213,
            height: 309,
            shift: [
              -0.1015625,
              -2.6015625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-c-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/02/tree-02-d-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 271,
          height: 187,
          frame_count: 4,
          shift: [
            2.828125,
            -1.578125
          ],
          hr_version: {
            width: 541,
            height: 374,
            shift: [
              2.8203125,
              -1.59375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-d-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/02/tree-02-d-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 119,
          height: 154,
          frame_count: 3,
          shift: [
            0.421875,
            -2.1875
          ],
          hr_version: {
            width: 238,
            height: 309,
            shift: [
              0.4375,
              -2.1953125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-d-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/02/tree-02-e-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 256,
          height: 191,
          frame_count: 4,
          shift: [
            2.28125,
            -1.453125
          ],
          hr_version: {
            width: 512,
            height: 381,
            shift: [
              2.296875,
              -1.4453125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-e-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/02/tree-02-e-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 104,
          height: 144,
          frame_count: 3,
          shift: [
            -0.09375,
            -2.28125
          ],
          hr_version: {
            width: 207,
            height: 286,
            shift: [
              -0.0859375,
              -2.28125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-e-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      }
    ],
    colors: [
      {
        r: 81,
        g: 126,
        b: 85
      },
      {
        r: 81,
        g: 166,
        b: 89
      },
      {
        r: 101,
        g: 191,
        b: 110
      },
      {
        r: 147,
        g: 192,
        b: 39
      },
      {
        r: 162,
        g: 222,
        b: 19
      },
      {
        r: 201,
        g: 236,
        b: 116
      },
      {
        r: 179,
        g: 199,
        b: 12
      },
      {
        r: 181,
        g: 189,
        b: 114
      },
      {
        r: 179,
        g: 199,
        b: 12
      },
      {
        r: 200,
        g: 214,
        b: 83
      }
    ],
    darkness_of_burnt_tree: 0.5,
    size: {
      width: 2,
      height: 3
    }
  },
  tree_03: {
    type: 'tree',
    name: 'tree_03',
    icon: 'graphics/icons/tree-03.png',
    icon_size: 32,
    flags: [
      'placeable_neutral',
      'placeable_off_grid',
      'breaths_air'
    ],
    minable: {
      mining_particle: 'wooden_particle',
      mining_time: 2,
      result: 'raw_wood',
      count: 4
    },
    corpse: 'tree_03_stump',
    remains_when_mined: 'tree_03_stump',
    emissions_per_tick: -0.001,
    max_health: 50,
    collision_box: [
      [
        -0.4,
        -0.4
      ],
      [
        0.4,
        0.4
      ]
    ],
    selection_box: [
      [
        -0.9,
        -2.2
      ],
      [
        0.9,
        0.6
      ]
    ],
    drawing_box: [
      [
        -0.9,
        -3.7
      ],
      [
        0.9,
        0.6
      ]
    ],
    subgroup: 'trees',
    order: 'a[tree]_a[regular]_c[tree_03]',
    vehicle_impact_sound: {
      filename: 'sound/car-wood-impact.ogg',
      volume: 1
    },
    variations: [
      {
        trunk: {
          filename: 'graphics/entity/tree/03/tree-03-a-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 243,
          height: 156,
          frame_count: 4,
          shift: [
            2.265625,
            -1.40625
          ],
          hr_version: {
            width: 487,
            height: 312,
            shift: [
              2.2734375,
              -1.40625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-a-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/03/tree-03-a-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 119,
          height: 98,
          frame_count: 3,
          shift: [
            0.390625,
            -2.375
          ],
          hr_version: {
            width: 237,
            height: 195,
            shift: [
              0.4140625,
              -2.3671875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-a-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/03/tree-03-b-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 162,
          height: 124,
          frame_count: 4,
          shift: [
            1.5625,
            -1.21875
          ],
          hr_version: {
            width: 324,
            height: 246,
            shift: [
              1.5625,
              -1.21875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-b-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/03/tree-03-b-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 78,
          height: 72,
          frame_count: 3,
          shift: [
            0.375,
            -2.03125
          ],
          hr_version: {
            width: 157,
            height: 144,
            shift: [
              0.3984375,
              -2.03125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-b-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/03/tree-03-c-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 193,
          height: 169,
          frame_count: 4,
          shift: [
            1.859375,
            -1.609375
          ],
          hr_version: {
            width: 387,
            height: 337,
            shift: [
              1.8671875,
              -1.6015625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-c-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/03/tree-03-c-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 94,
          height: 88,
          frame_count: 3,
          shift: [
            0.40625,
            -2.875
          ],
          hr_version: {
            width: 187,
            height: 178,
            shift: [
              0.4140625,
              -2.859375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-c-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/03/tree-03-d-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 236,
          height: 169,
          frame_count: 4,
          shift: [
            2.03125,
            -1.671875
          ],
          hr_version: {
            width: 473,
            height: 337,
            shift: [
              2.0234375,
              -1.6796875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-d-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/03/tree-03-d-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 100,
          height: 83,
          frame_count: 3,
          shift: [
            0,
            -3.078125
          ],
          hr_version: {
            width: 204,
            height: 167,
            shift: [
              0.015625,
              -3.0546875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-d-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/03/tree-03-e-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 258,
          height: 143,
          frame_count: 4,
          shift: [
            1.84375,
            -1.515625
          ],
          hr_version: {
            width: 516,
            height: 285,
            shift: [
              1.84375,
              -1.5234375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-e-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/03/tree-03-e-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 117,
          height: 83,
          frame_count: 3,
          shift: [
            -0.234375,
            -2.515625
          ],
          hr_version: {
            width: 235,
            height: 167,
            shift: [
              -0.2109375,
              -2.4921875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-e-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/03/tree-03-f-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 213,
          height: 158,
          frame_count: 4,
          shift: [
            1.515625,
            -1.375
          ],
          hr_version: {
            width: 427,
            height: 315,
            shift: [
              1.5234375,
              -1.3671875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-f-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/03/tree-03-f-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 93,
          height: 100,
          frame_count: 3,
          shift: [
            -0.265625,
            -2.09375
          ],
          hr_version: {
            width: 186,
            height: 201,
            shift: [
              -0.25,
              -2.0703125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-f-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/03/tree-03-g-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 176,
          height: 149,
          frame_count: 4,
          shift: [
            1.25,
            -1.078125
          ],
          hr_version: {
            width: 352,
            height: 299,
            shift: [
              1.25,
              -1.1015625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-g-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/03/tree-03-g-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 76,
          height: 105,
          frame_count: 3,
          shift: [
            -0.1875,
            -1.859375
          ],
          hr_version: {
            width: 155,
            height: 212,
            shift: [
              -0.1640625,
              -1.84375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-g-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      }
    ],
    colors: [
      {
        r: 186,
        g: 191,
        b: 124
      },
      {
        r: 158,
        g: 191,
        b: 124
      },
      {
        r: 191,
        g: 178,
        b: 124
      },
      {
        r: 191,
        g: 171,
        b: 88
      },
      {
        r: 171,
        g: 171,
        b: 96
      },
      {
        r: 145,
        g: 151,
        b: 89
      },
      {
        r: 197,
        g: 144,
        b: 136
      },
      {
        r: 235,
        g: 157,
        b: 141
      },
      {
        r: 212,
        g: 171,
        b: 89
      },
      {
        r: 176,
        g: 124,
        b: 86
      },
      {
        r: 209,
        g: 120,
        b: 102
      },
      {
        r: 209,
        g: 134,
        b: 88
      }
    ],
    darkness_of_burnt_tree: 0.5,
    size: {
      width: 2,
      height: 3
    }
  },
  tree_04: {
    type: 'tree',
    name: 'tree_04',
    icon: 'graphics/icons/tree-04.png',
    icon_size: 32,
    flags: [
      'placeable_neutral',
      'placeable_off_grid',
      'breaths_air'
    ],
    minable: {
      mining_particle: 'wooden_particle',
      mining_time: 2,
      result: 'raw_wood',
      count: 4
    },
    corpse: 'tree_04_stump',
    remains_when_mined: 'tree_04_stump',
    emissions_per_tick: -0.001,
    max_health: 50,
    collision_box: [
      [
        -0.4,
        -0.4
      ],
      [
        0.4,
        0.4
      ]
    ],
    selection_box: [
      [
        -0.9,
        -2.2
      ],
      [
        0.9,
        0.6
      ]
    ],
    drawing_box: [
      [
        -0.9,
        -3.9
      ],
      [
        0.9,
        0.6
      ]
    ],
    subgroup: 'trees',
    order: 'a[tree]_a[regular]_d[tree_04]',
    vehicle_impact_sound: {
      filename: 'sound/car-wood-impact.ogg',
      volume: 1
    },
    variations: [
      {
        trunk: {
          filename: 'graphics/entity/tree/04/tree-04-a-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 255,
          height: 170,
          frame_count: 4,
          shift: [
            2.453125,
            -1.5625
          ],
          hr_version: {
            width: 509,
            height: 340,
            shift: [
              2.4609375,
              -1.546875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-a-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/04/tree-04-a-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 98,
          height: 127,
          frame_count: 3,
          shift: [
            0,
            -2.390625
          ],
          hr_version: {
            width: 197,
            height: 254,
            shift: [
              0.0078125,
              -2.359375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-a-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/04/tree-04-b-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 231,
          height: 168,
          frame_count: 4,
          shift: [
            2.171875,
            -1.4375
          ],
          hr_version: {
            width: 463,
            height: 336,
            shift: [
              2.1953125,
              -1.421875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-b-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/04/tree-04-b-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 105,
          height: 140,
          frame_count: 3,
          shift: [
            0.109375,
            -2.125
          ],
          hr_version: {
            width: 212,
            height: 280,
            shift: [
              0.125,
              -2.109375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-b-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/04/tree-04-c-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 265,
          height: 176,
          frame_count: 4,
          shift: [
            2.890625,
            -1.46875
          ],
          hr_version: {
            width: 530,
            height: 353,
            shift: [
              2.890625,
              -1.4765625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-c-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/04/tree-04-c-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 99,
          height: 125,
          frame_count: 3,
          shift: [
            0.046875,
            -2.328125
          ],
          hr_version: {
            width: 197,
            height: 250,
            shift: [
              0.0703125,
              -2.328125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-c-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/04/tree-04-d-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 273,
          height: 173,
          frame_count: 4,
          shift: [
            2.765625,
            -1.453125
          ],
          hr_version: {
            width: 545,
            height: 348,
            shift: [
              2.7734375,
              -1.453125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-d-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/04/tree-04-d-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 99,
          height: 125,
          frame_count: 3,
          shift: [
            -0.203125,
            -2.359375
          ],
          hr_version: {
            width: 198,
            height: 248,
            shift: [
              -0.1875,
              -2.34375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-d-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/04/tree-04-e-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 246,
          height: 183,
          frame_count: 4,
          shift: [
            1.96875,
            -1.609375
          ],
          hr_version: {
            width: 492,
            height: 365,
            shift: [
              1.984375,
              -1.5859375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-e-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/04/tree-04-e-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 108,
          height: 136,
          frame_count: 3,
          shift: [
            -0.25,
            -2.40625
          ],
          hr_version: {
            width: 217,
            height: 273,
            shift: [
              -0.2421875,
              -2.3828125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-e-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/04/tree-04-f-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 260,
          height: 190,
          frame_count: 4,
          shift: [
            2.6875,
            -1.59375
          ],
          hr_version: {
            width: 520,
            height: 380,
            shift: [
              2.703125,
              -1.59375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-f-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/04/tree-04-f-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 100,
          height: 122,
          frame_count: 3,
          shift: [
            0.125,
            -2.71875
          ],
          hr_version: {
            width: 200,
            height: 246,
            shift: [
              0.125,
              -2.71875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-f-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/04/tree-04-g-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 260,
          height: 177,
          frame_count: 4,
          shift: [
            2.5625,
            -1.140625
          ],
          hr_version: {
            width: 522,
            height: 353,
            shift: [
              2.578125,
              -1.1328125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-g-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/04/tree-04-g-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 98,
          height: 116,
          frame_count: 3,
          shift: [
            -0.03125,
            -2.1875
          ],
          hr_version: {
            width: 199,
            height: 231,
            shift: [
              -0.0234375,
              -2.1796875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-g-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/04/tree-04-h-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 253,
          height: 169,
          frame_count: 4,
          shift: [
            2.390625,
            -1.109375
          ],
          hr_version: {
            width: 505,
            height: 340,
            shift: [
              2.4140625,
              -1.109375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-h-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/04/tree-04-h-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 103,
          height: 122,
          frame_count: 3,
          shift: [
            -0.015625,
            -1.9375
          ],
          hr_version: {
            width: 206,
            height: 245,
            shift: [
              0,
              -1.9140625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-h-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      }
    ],
    colors: [
      {
        r: 125,
        g: 154,
        b: 84
      },
      {
        r: 109,
        g: 134,
        b: 73
      },
      {
        r: 95,
        g: 125,
        b: 51
      },
      {
        r: 96,
        g: 132,
        b: 46
      },
      {
        r: 88,
        g: 141,
        b: 71
      },
      {
        r: 115,
        g: 142,
        b: 106
      },
      {
        r: 87,
        g: 109,
        b: 81
      },
      {
        r: 88,
        g: 112,
        b: 81
      },
      {
        r: 92,
        g: 126,
        b: 82
      },
      {
        r: 91,
        g: 111,
        b: 85
      },
      {
        r: 105,
        g: 127,
        b: 99
      },
      {
        r: 89,
        g: 124,
        b: 78
      }
    ],
    darkness_of_burnt_tree: 0.5,
    size: {
      width: 2,
      height: 3
    }
  },
  tree_05: {
    type: 'tree',
    name: 'tree_05',
    icon: 'graphics/icons/tree-05.png',
    icon_size: 32,
    flags: [
      'placeable_neutral',
      'placeable_off_grid',
      'breaths_air'
    ],
    minable: {
      mining_particle: 'wooden_particle',
      mining_time: 2,
      result: 'raw_wood',
      count: 4
    },
    corpse: 'tree_05_stump',
    remains_when_mined: 'tree_05_stump',
    emissions_per_tick: -0.001,
    max_health: 50,
    collision_box: [
      [
        -0.4,
        -0.4
      ],
      [
        0.4,
        0.4
      ]
    ],
    selection_box: [
      [
        -0.9,
        -2.2
      ],
      [
        0.9,
        0.6
      ]
    ],
    drawing_box: [
      [
        -0.9,
        -3.5
      ],
      [
        0.9,
        0.6
      ]
    ],
    subgroup: 'trees',
    order: 'a[tree]_a[regular]_e[tree_05]',
    vehicle_impact_sound: {
      filename: 'sound/car-wood-impact.ogg',
      volume: 1
    },
    variations: [
      {
        trunk: {
          filename: 'graphics/entity/tree/05/tree-05-a-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 210,
          height: 142,
          frame_count: 4,
          shift: [
            1.71875,
            -1.03125
          ],
          hr_version: {
            width: 419,
            height: 284,
            shift: [
              1.7265625,
              -1.03125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-a-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/05/tree-05-a-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 116,
          height: 118,
          frame_count: 3,
          shift: [
            -0.09375,
            -1.75
          ],
          hr_version: {
            width: 233,
            height: 236,
            shift: [
              -0.0859375,
              -1.75
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-a-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/05/tree-05-b-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 198,
          height: 129,
          frame_count: 4,
          shift: [
            1.84375,
            -0.921875
          ],
          hr_version: {
            width: 394,
            height: 259,
            shift: [
              1.859375,
              -0.9140625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-b-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/05/tree-05-b-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 104,
          height: 115,
          frame_count: 3,
          shift: [
            -0.0625,
            -1.546875
          ],
          hr_version: {
            width: 210,
            height: 230,
            shift: [
              -0.046875,
              -1.546875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-b-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/05/tree-05-c-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 187,
          height: 138,
          frame_count: 4,
          shift: [
            1.765625,
            -1.03125
          ],
          hr_version: {
            width: 375,
            height: 276,
            shift: [
              1.7734375,
              -1.03125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-c-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/05/tree-05-c-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 116,
          height: 135,
          frame_count: 3,
          shift: [
            0.21875,
            -1.609375
          ],
          hr_version: {
            width: 232,
            height: 270,
            shift: [
              0.234375,
              -1.59375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-c-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/05/tree-05-d-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 206,
          height: 138,
          frame_count: 4,
          shift: [
            1.78125,
            -0.71875
          ],
          hr_version: {
            width: 412,
            height: 275,
            shift: [
              1.78125,
              -0.7109375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-d-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/05/tree-05-d-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 133,
          height: 131,
          frame_count: 3,
          shift: [
            0.078125,
            -1.109375
          ],
          hr_version: {
            width: 264,
            height: 260,
            shift: [
              0.09375,
              -1.109375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-d-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/05/tree-05-e-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 185,
          height: 129,
          frame_count: 4,
          shift: [
            1.265625,
            -0.609375
          ],
          hr_version: {
            width: 369,
            height: 258,
            shift: [
              1.2890625,
              -0.609375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-e-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/05/tree-05-e-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 120,
          height: 109,
          frame_count: 3,
          shift: [
            -0.1875,
            -1.234375
          ],
          hr_version: {
            width: 240,
            height: 216,
            shift: [
              -0.1875,
              -1.234375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-e-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/05/tree-05-f-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 188,
          height: 145,
          frame_count: 4,
          shift: [
            1.34375,
            -1.140625
          ],
          hr_version: {
            width: 375,
            height: 291,
            shift: [
              1.3671875,
              -1.1328125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-f-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/05/tree-05-f-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 125,
          height: 140,
          frame_count: 3,
          shift: [
            -0.015625,
            -1.59375
          ],
          hr_version: {
            width: 250,
            height: 281,
            shift: [
              0.015625,
              -1.6015625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-f-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/05/tree-05-g-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 182,
          height: 108,
          frame_count: 4,
          shift: [
            1.6875,
            -0.53125
          ],
          hr_version: {
            width: 362,
            height: 216,
            shift: [
              1.703125,
              -0.515625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-g-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/05/tree-05-g-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 117,
          height: 100,
          frame_count: 3,
          shift: [
            0.046875,
            -1.03125
          ],
          hr_version: {
            width: 232,
            height: 201,
            shift: [
              0.0625,
              -1.0390625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-g-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/05/tree-05-h-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 164,
          height: 119,
          frame_count: 4,
          shift: [
            1.40625,
            -0.546875
          ],
          hr_version: {
            width: 330,
            height: 240,
            shift: [
              1.421875,
              -0.546875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-h-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/05/tree-05-h-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 111,
          height: 112,
          frame_count: 3,
          shift: [
            0.234375,
            -1.125
          ],
          hr_version: {
            width: 221,
            height: 224,
            shift: [
              0.2421875,
              -1.125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-h-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/05/tree-05-i-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 175,
          height: 111,
          frame_count: 4,
          shift: [
            1.203125,
            -0.296875
          ],
          hr_version: {
            width: 352,
            height: 221,
            shift: [
              1.21875,
              -0.2890625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-i-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/05/tree-05-i-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 119,
          height: 110,
          frame_count: 3,
          shift: [
            -0.046875,
            -0.84375
          ],
          hr_version: {
            width: 238,
            height: 220,
            shift: [
              -0.03125,
              -0.828125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-i-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      }
    ],
    colors: [
      {
        r: 115,
        g: 142,
        b: 51
      },
      {
        r: 112,
        g: 144,
        b: 34
      },
      {
        r: 133,
        g: 162,
        b: 64
      },
      {
        r: 116,
        g: 138,
        b: 62
      },
      {
        r: 110,
        g: 147,
        b: 58
      },
      {
        r: 127,
        g: 147,
        b: 58
      },
      {
        r: 121,
        g: 145,
        b: 39
      },
      {
        r: 109,
        g: 130,
        b: 38
      },
      {
        r: 129,
        g: 130,
        b: 38
      },
      {
        r: 148,
        g: 149,
        b: 46
      },
      {
        r: 150,
        g: 151,
        b: 56
      },
      {
        r: 154,
        g: 155,
        b: 69
      },
      {
        r: 156,
        g: 157,
        b: 65
      }
    ],
    darkness_of_burnt_tree: 0.5,
    size: {
      width: 2,
      height: 3
    }
  },
  tree_09: {
    type: 'tree',
    name: 'tree_09',
    icon: 'graphics/icons/tree-09.png',
    icon_size: 32,
    flags: [
      'placeable_neutral',
      'placeable_off_grid',
      'breaths_air'
    ],
    minable: {
      mining_particle: 'wooden_particle',
      mining_time: 2,
      result: 'raw_wood',
      count: 4
    },
    corpse: 'tree_09_stump',
    remains_when_mined: 'tree_09_stump',
    emissions_per_tick: -0.001,
    max_health: 50,
    collision_box: [
      [
        -0.4,
        -0.4
      ],
      [
        0.4,
        0.4
      ]
    ],
    selection_box: [
      [
        -0.9,
        -2.2
      ],
      [
        0.9,
        0.6
      ]
    ],
    drawing_box: [
      [
        -0.9,
        -3.5
      ],
      [
        0.9,
        0.6
      ]
    ],
    subgroup: 'trees',
    order: 'a[tree]_a[regular]_f[tree_09]',
    vehicle_impact_sound: {
      filename: 'sound/car-wood-impact.ogg',
      volume: 1
    },
    variations: [
      {
        trunk: {
          filename: 'graphics/entity/tree/09/tree-09-a-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 243,
          height: 170,
          frame_count: 4,
          shift: [
            2.046875,
            -1.15625
          ],
          hr_version: {
            width: 487,
            height: 340,
            shift: [
              2.0703125,
              -1.140625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-a-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/09/tree-09-a-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 123,
          height: 102,
          frame_count: 3,
          shift: [
            0.140625,
            -2.28125
          ],
          hr_version: {
            width: 244,
            height: 204,
            shift: [
              0.15625,
              -2.265625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-a-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/09/tree-09-b-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 208,
          height: 150,
          frame_count: 4,
          shift: [
            1.65625,
            -1.125
          ],
          hr_version: {
            width: 415,
            height: 300,
            shift: [
              1.6640625,
              -1.109375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-b-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/09/tree-09-b-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 99,
          height: 86,
          frame_count: 3,
          shift: [
            -0.078125,
            -2.15625
          ],
          hr_version: {
            width: 197,
            height: 172,
            shift: [
              -0.0703125,
              -2.140625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-b-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/09/tree-09-c-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 238,
          height: 167,
          frame_count: 4,
          shift: [
            1.75,
            -1.171875
          ],
          hr_version: {
            width: 476,
            height: 333,
            shift: [
              1.765625,
              -1.1640625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-c-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/09/tree-09-c-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 113,
          height: 95,
          frame_count: 3,
          shift: [
            -0.265625,
            -2.328125
          ],
          hr_version: {
            width: 225,
            height: 189,
            shift: [
              -0.2578125,
              -2.3046875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-c-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/09/tree-09-d-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 169,
          height: 116,
          frame_count: 4,
          shift: [
            1.421875,
            -1
          ],
          hr_version: {
            width: 338,
            height: 233,
            shift: [
              1.4375,
              -0.9921875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-d-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/09/tree-09-d-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 90,
          height: 64,
          frame_count: 3,
          shift: [
            0.125,
            -1.875
          ],
          hr_version: {
            width: 179,
            height: 126,
            shift: [
              0.1484375,
              -1.859375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-d-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/09/tree-09-e-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 202,
          height: 157,
          frame_count: 4,
          shift: [
            1.96875,
            -1.203125
          ],
          hr_version: {
            width: 403,
            height: 315,
            shift: [
              1.9765625,
              -1.1953125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-e-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/09/tree-09-e-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 103,
          height: 103,
          frame_count: 3,
          shift: [
            0.359375,
            -2.109375
          ],
          hr_version: {
            width: 205,
            height: 206,
            shift: [
              0.3828125,
              -2.09375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-e-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      }
    ],
    colors: [
      {
        r: 105,
        g: 121,
        b: 92
      },
      {
        r: 109,
        g: 146,
        b: 80
      },
      {
        r: 124,
        g: 138,
        b: 57
      },
      {
        r: 138,
        g: 128,
        b: 62
      },
      {
        r: 122,
        g: 108,
        b: 51
      },
      {
        r: 148,
        g: 126,
        b: 67
      }
    ],
    darkness_of_burnt_tree: 0.5,
    size: {
      width: 2,
      height: 3
    }
  },
  tree_02_red: {
    type: 'tree',
    name: 'tree_02_red',
    icon: 'graphics/icons/tree-02.png',
    icon_size: 32,
    flags: [
      'placeable_neutral',
      'placeable_off_grid',
      'breaths_air'
    ],
    minable: {
      mining_particle: 'wooden_particle',
      mining_time: 2,
      result: 'raw_wood',
      count: 4
    },
    corpse: 'tree_02_stump',
    remains_when_mined: 'tree_02_stump',
    emissions_per_tick: -0.001,
    max_health: 50,
    collision_box: [
      [
        -0.4,
        -0.4
      ],
      [
        0.4,
        0.4
      ]
    ],
    selection_box: [
      [
        -0.9,
        -2.2
      ],
      [
        0.9,
        0.6
      ]
    ],
    drawing_box: [
      [
        -0.9,
        -3.9
      ],
      [
        0.9,
        0.6
      ]
    ],
    subgroup: 'trees',
    order: 'a[tree]_a[regular]_g[tree_02_red]',
    vehicle_impact_sound: {
      filename: 'sound/car-wood-impact.ogg',
      volume: 1
    },
    variations: [
      {
        trunk: {
          filename: 'graphics/entity/tree/02/tree-02-a-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 225,
          height: 169,
          frame_count: 4,
          shift: [
            1.921875,
            -1.453125
          ],
          hr_version: {
            width: 448,
            height: 340,
            shift: [
              1.921875,
              -1.484375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-a-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/02/tree-02-a-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 95,
          height: 131,
          frame_count: 3,
          shift: [
            -0.140625,
            -2.203125
          ],
          hr_version: {
            width: 190,
            height: 261,
            shift: [
              -0.140625,
              -2.2109375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-a-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/02/tree-02-b-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 279,
          height: 193,
          frame_count: 4,
          shift: [
            0.984375,
            -1.359375
          ],
          hr_version: {
            width: 558,
            height: 385,
            shift: [
              1,
              -1.3515625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-b-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/02/tree-02-b-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 98,
          height: 143,
          frame_count: 3,
          shift: [
            -0.1875,
            -2.203125
          ],
          hr_version: {
            width: 194,
            height: 285,
            shift: [
              -0.1875,
              -2.1953125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-b-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/02/tree-02-c-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 249,
          height: 188,
          frame_count: 4,
          shift: [
            2.171875,
            -1.59375
          ],
          hr_version: {
            width: 499,
            height: 377,
            shift: [
              2.1640625,
              -1.5859375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-c-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/02/tree-02-c-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 106,
          height: 154,
          frame_count: 3,
          shift: [
            -0.09375,
            -2.59375
          ],
          hr_version: {
            width: 213,
            height: 309,
            shift: [
              -0.1015625,
              -2.6015625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-c-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/02/tree-02-d-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 271,
          height: 187,
          frame_count: 4,
          shift: [
            2.828125,
            -1.578125
          ],
          hr_version: {
            width: 541,
            height: 374,
            shift: [
              2.8203125,
              -1.59375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-d-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/02/tree-02-d-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 119,
          height: 154,
          frame_count: 3,
          shift: [
            0.421875,
            -2.1875
          ],
          hr_version: {
            width: 238,
            height: 309,
            shift: [
              0.4375,
              -2.1953125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-d-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/02/tree-02-e-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 256,
          height: 191,
          frame_count: 4,
          shift: [
            2.28125,
            -1.453125
          ],
          hr_version: {
            width: 512,
            height: 381,
            shift: [
              2.296875,
              -1.4453125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-e-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/02/tree-02-e-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 104,
          height: 144,
          frame_count: 3,
          shift: [
            -0.09375,
            -2.28125
          ],
          hr_version: {
            width: 207,
            height: 286,
            shift: [
              -0.0859375,
              -2.28125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-e-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      }
    ],
    colors: [
      {
        r: 239,
        g: 218,
        b: 43
      },
      {
        r: 232,
        g: 216,
        b: 85
      },
      {
        r: 242,
        g: 224,
        b: 28
      },
      {
        r: 217,
        g: 210,
        b: 29
      },
      {
        r: 252,
        g: 182,
        b: 72
      },
      {
        r: 196,
        g: 113,
        b: 76
      },
      {
        r: 213,
        g: 111,
        b: 66
      },
      {
        r: 197,
        g: 73,
        b: 73
      },
      {
        r: 229,
        g: 92,
        b: 78
      },
      {
        r: 204,
        g: 86,
        b: 83
      },
      {
        r: 224,
        g: 82,
        b: 63
      },
      {
        r: 231,
        g: 94,
        b: 75
      },
      {
        r: 175,
        g: 227,
        b: 85
      },
      {
        r: 182,
        g: 219,
        b: 119
      },
      {
        r: 152,
        g: 192,
        b: 81
      },
      {
        r: 173,
        g: 211,
        b: 113
      }
    ],
    darkness_of_burnt_tree: 0.5,
    size: {
      width: 2,
      height: 3
    }
  },
  tree_07: {
    type: 'tree',
    name: 'tree_07',
    icon: 'graphics/icons/tree-07.png',
    icon_size: 32,
    flags: [
      'placeable_neutral',
      'placeable_off_grid',
      'breaths_air'
    ],
    minable: {
      mining_particle: 'wooden_particle',
      mining_time: 2,
      result: 'raw_wood',
      count: 4
    },
    corpse: 'tree_07_stump',
    remains_when_mined: 'tree_07_stump',
    emissions_per_tick: -0.001,
    max_health: 50,
    collision_box: [
      [
        -0.4,
        -0.4
      ],
      [
        0.4,
        0.4
      ]
    ],
    selection_box: [
      [
        -0.9,
        -2.2
      ],
      [
        0.9,
        0.6
      ]
    ],
    drawing_box: [
      [
        -0.9,
        -3.5
      ],
      [
        0.9,
        0.6
      ]
    ],
    subgroup: 'trees',
    order: 'a[tree]_a[regular]_h[tree_07]',
    vehicle_impact_sound: {
      filename: 'sound/car-wood-impact.ogg',
      volume: 1
    },
    variations: [
      {
        trunk: {
          filename: 'graphics/entity/tree/07/tree-07-a-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 181,
          height: 122,
          frame_count: 4,
          shift: [
            1.953125,
            -0.65625
          ],
          hr_version: {
            width: 362,
            height: 244,
            shift: [
              1.96875,
              -0.640625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-a-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/07/tree-07-a-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 50,
          height: 83,
          frame_count: 3,
          shift: [
            -0.0625,
            -1.328125
          ],
          hr_version: {
            width: 101,
            height: 164,
            shift: [
              -0.0703125,
              -1.3125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-a-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/07/tree-07-b-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 167,
          height: 120,
          frame_count: 4,
          shift: [
            1.203125,
            -1.125
          ],
          hr_version: {
            width: 335,
            height: 239,
            shift: [
              1.2109375,
              -1.1171875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-b-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/07/tree-07-b-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 58,
          height: 91,
          frame_count: 3,
          shift: [
            -0.53125,
            -1.578125
          ],
          hr_version: {
            width: 116,
            height: 184,
            shift: [
              -0.53125,
              -1.578125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-b-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/07/tree-07-c-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 167,
          height: 128,
          frame_count: 4,
          shift: [
            1.015625,
            -1.46875
          ],
          hr_version: {
            width: 334,
            height: 256,
            shift: [
              1.03125,
              -1.453125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-c-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/07/tree-07-c-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 67,
          height: 110,
          frame_count: 3,
          shift: [
            -0.578125,
            -1.78125
          ],
          hr_version: {
            width: 136,
            height: 220,
            shift: [
              -0.578125,
              -1.765625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-c-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/07/tree-07-d-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 184,
          height: 158,
          frame_count: 4,
          shift: [
            1.53125,
            -1.5
          ],
          hr_version: {
            width: 368,
            height: 314,
            shift: [
              1.546875,
              -1.484375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-d-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/07/tree-07-d-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 47,
          height: 126,
          frame_count: 3,
          shift: [
            -0.140625,
            -2.03125
          ],
          hr_version: {
            width: 95,
            height: 252,
            shift: [
              -0.1484375,
              -2.015625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-d-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/07/tree-07-e-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 202,
          height: 143,
          frame_count: 4,
          shift: [
            2.25,
            -1.734375
          ],
          hr_version: {
            width: 405,
            height: 286,
            shift: [
              2.2578125,
              -1.703125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-e-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/07/tree-07-e-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 47,
          height: 132,
          frame_count: 3,
          shift: [
            0.234375,
            -1.9375
          ],
          hr_version: {
            width: 93,
            height: 264,
            shift: [
              0.2265625,
              -1.90625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-e-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/07/tree-07-f-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 218,
          height: 135,
          frame_count: 4,
          shift: [
            2.53125,
            -1.546875
          ],
          hr_version: {
            width: 435,
            height: 270,
            shift: [
              2.5234375,
              -1.53125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-f-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/07/tree-07-f-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 62,
          height: 119,
          frame_count: 3,
          shift: [
            0.65625,
            -1.796875
          ],
          hr_version: {
            width: 126,
            height: 240,
            shift: [
              0.65625,
              -1.796875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-f-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/07/tree-07-g-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 213,
          height: 121,
          frame_count: 4,
          shift: [
            2.484375,
            -1.140625
          ],
          hr_version: {
            width: 426,
            height: 240,
            shift: [
              2.484375,
              -1.125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-g-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/07/tree-07-g-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 61,
          height: 100,
          frame_count: 3,
          shift: [
            0.453125,
            -1.46875
          ],
          hr_version: {
            width: 123,
            height: 199,
            shift: [
              0.4453125,
              -1.4609375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-g-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/07/tree-07-h-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 198,
          height: 121,
          frame_count: 4,
          shift: [
            2.3125,
            -0.671875
          ],
          hr_version: {
            width: 397,
            height: 243,
            shift: [
              2.3203125,
              -0.6640625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-h-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/07/tree-07-h-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 48,
          height: 85,
          frame_count: 3,
          shift: [
            0.125,
            -1.265625
          ],
          hr_version: {
            width: 94,
            height: 170,
            shift: [
              0.125,
              -1.25
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-h-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/07/tree-07-i-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 169,
          height: 120,
          frame_count: 4,
          shift: [
            1.359375,
            -1.0625
          ],
          hr_version: {
            width: 337,
            height: 238,
            shift: [
              1.3515625,
              -1.046875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-i-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/07/tree-07-i-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 55,
          height: 87,
          frame_count: 3,
          shift: [
            -0.453125,
            -1.546875
          ],
          hr_version: {
            width: 109,
            height: 177,
            shift: [
              -0.4453125,
              -1.5546875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-i-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      }
    ],
    colors: [
      {
        r: 203,
        g: 140,
        b: 51
      },
      {
        r: 208,
        g: 155,
        b: 79
      },
      {
        r: 189,
        g: 175,
        b: 53
      },
      {
        r: 217,
        g: 206,
        b: 109
      },
      {
        r: 246,
        g: 231,
        b: 108
      },
      {
        r: 215,
        g: 206,
        b: 126
      },
      {
        r: 202,
        g: 171,
        b: 95
      },
      {
        r: 227,
        g: 182,
        b: 76
      },
      {
        r: 206,
        g: 157,
        b: 40
      },
      {
        r: 230,
        g: 173,
        b: 37
      },
      {
        r: 247,
        g: 223,
        b: 88
      },
      {
        r: 205,
        g: 186,
        b: 81
      }
    ],
    darkness_of_burnt_tree: 0.5,
    size: {
      width: 2,
      height: 3
    }
  },
  tree_06: {
    type: 'tree',
    name: 'tree_06',
    icon: 'graphics/icons/tree-06.png',
    icon_size: 32,
    flags: [
      'placeable_neutral',
      'placeable_off_grid',
      'breaths_air'
    ],
    minable: {
      mining_particle: 'wooden_particle',
      mining_time: 2,
      result: 'raw_wood',
      count: 4
    },
    corpse: 'tree_06_stump',
    remains_when_mined: 'tree_06_stump',
    emissions_per_tick: -0.001,
    max_health: 50,
    collision_box: [
      [
        -0.4,
        -0.4
      ],
      [
        0.4,
        0.4
      ]
    ],
    selection_box: [
      [
        -0.9,
        -2.2
      ],
      [
        0.9,
        0.6
      ]
    ],
    drawing_box: [
      [
        -0.9,
        -3.5
      ],
      [
        0.9,
        0.6
      ]
    ],
    subgroup: 'trees',
    order: 'a[tree]_a[regular]_i[tree_06]',
    vehicle_impact_sound: {
      filename: 'sound/car-wood-impact.ogg',
      volume: 1
    },
    variations: [
      {
        trunk: {
          filename: 'graphics/entity/tree/06/tree-06-a-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 178,
          height: 144,
          frame_count: 4,
          shift: [
            1.875,
            -1.0625
          ],
          hr_version: {
            width: 356,
            height: 289,
            shift: [
              1.859375,
              -1.0546875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-a-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/06/tree-06-a-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 66,
          height: 97,
          frame_count: 3,
          shift: [
            0.59375,
            -1.453125
          ],
          hr_version: {
            width: 133,
            height: 195,
            shift: [
              0.6015625,
              -1.4609375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-a-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/06/tree-06-b-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 188,
          height: 129,
          frame_count: 4,
          shift: [
            1.90625,
            -0.734375
          ],
          hr_version: {
            width: 375,
            height: 258,
            shift: [
              1.9140625,
              -0.71875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-b-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/06/tree-06-b-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 85,
          height: 92,
          frame_count: 3,
          shift: [
            0.546875,
            -1.15625
          ],
          hr_version: {
            width: 170,
            height: 186,
            shift: [
              0.5625,
              -1.15625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-b-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/06/tree-06-c-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 202,
          height: 107,
          frame_count: 4,
          shift: [
            1.625,
            -0.390625
          ],
          hr_version: {
            width: 403,
            height: 214,
            shift: [
              1.6328125,
              -0.390625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-c-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/06/tree-06-c-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 89,
          height: 79,
          frame_count: 3,
          shift: [
            0.359375,
            -0.796875
          ],
          hr_version: {
            width: 178,
            height: 158,
            shift: [
              0.34375,
              -0.796875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-c-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/06/tree-06-d-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 172,
          height: 130,
          frame_count: 4,
          shift: [
            1.0625,
            -0.53125
          ],
          hr_version: {
            width: 343,
            height: 259,
            shift: [
              1.0703125,
              -0.5234375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-d-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/06/tree-06-d-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 75,
          height: 90,
          frame_count: 3,
          shift: [
            -0.203125,
            -1.125
          ],
          hr_version: {
            width: 150,
            height: 178,
            shift: [
              -0.203125,
              -1.125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-d-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/06/tree-06-e-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 140,
          height: 144,
          frame_count: 4,
          shift: [
            0.5625,
            -0.875
          ],
          hr_version: {
            width: 280,
            height: 287,
            shift: [
              0.5625,
              -0.8828125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-e-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/06/tree-06-e-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 68,
          height: 112,
          frame_count: 3,
          shift: [
            -0.3125,
            -1.375
          ],
          hr_version: {
            width: 137,
            height: 224,
            shift: [
              -0.3203125,
              -1.390625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-e-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/06/tree-06-f-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 186,
          height: 136,
          frame_count: 4,
          shift: [
            0.96875,
            -1.125
          ],
          hr_version: {
            width: 371,
            height: 272,
            shift: [
              0.9609375,
              -1.125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-f-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/06/tree-06-f-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 89,
          height: 114,
          frame_count: 3,
          shift: [
            -0.328125,
            -1.4375
          ],
          hr_version: {
            width: 177,
            height: 228,
            shift: [
              -0.3203125,
              -1.421875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-f-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/06/tree-06-g-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 202,
          height: 133,
          frame_count: 4,
          shift: [
            1.34375,
            -1.078125
          ],
          hr_version: {
            width: 402,
            height: 268,
            shift: [
              1.34375,
              -1.09375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-g-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/06/tree-06-g-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 89,
          height: 114,
          frame_count: 3,
          shift: [
            -0.015625,
            -1.375
          ],
          hr_version: {
            width: 177,
            height: 228,
            shift: [
              -0.0234375,
              -1.375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-g-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/06/tree-06-h-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 173,
          height: 129,
          frame_count: 4,
          shift: [
            1.546875,
            -1.078125
          ],
          hr_version: {
            width: 347,
            height: 258,
            shift: [
              1.5390625,
              -1.078125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-h-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/06/tree-06-h-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 71,
          height: 95,
          frame_count: 3,
          shift: [
            0.671875,
            -1.359375
          ],
          hr_version: {
            width: 143,
            height: 190,
            shift: [
              0.6640625,
              -1.34375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-h-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/06/tree-06-i-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 127,
          height: 129,
          frame_count: 4,
          shift: [
            0.390625,
            -0.453125
          ],
          hr_version: {
            width: 253,
            height: 259,
            shift: [
              0.3984375,
              -0.4609375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-i-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/06/tree-06-i-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 65,
          height: 93,
          frame_count: 3,
          shift: [
            -0.328125,
            -1.046875
          ],
          hr_version: {
            width: 129,
            height: 185,
            shift: [
              -0.3203125,
              -1.0546875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-i-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/06/tree-06-j-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 136,
          height: 126,
          frame_count: 4,
          shift: [
            0.6875,
            -0.53125
          ],
          hr_version: {
            width: 272,
            height: 253,
            shift: [
              0.6875,
              -0.5234375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-j-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/06/tree-06-j-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 67,
          height: 92,
          frame_count: 3,
          shift: [
            -0.203125,
            -1.09375
          ],
          hr_version: {
            width: 133,
            height: 182,
            shift: [
              -0.1953125,
              -1.09375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-j-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      }
    ],
    colors: [
      {
        r: 122,
        g: 113,
        b: 52
      },
      {
        r: 143,
        g: 135,
        b: 78
      },
      {
        r: 147,
        g: 138,
        b: 78
      },
      {
        r: 132,
        g: 120,
        b: 39
      },
      {
        r: 177,
        g: 135,
        b: 55
      },
      {
        r: 186,
        g: 148,
        b: 74
      },
      {
        r: 205,
        g: 159,
        b: 70
      },
      {
        r: 245,
        g: 169,
        b: 79
      },
      {
        r: 157,
        g: 108,
        b: 56
      },
      {
        r: 152,
        g: 97,
        b: 56
      },
      {
        r: 154,
        g: 95,
        b: 75
      }
    ],
    darkness_of_burnt_tree: 0.5,
    size: {
      width: 2,
      height: 3
    }
  },
  tree_06_brown: {
    type: 'tree',
    name: 'tree_06_brown',
    icon: 'graphics/icons/tree-06.png',
    icon_size: 32,
    flags: [
      'placeable_neutral',
      'placeable_off_grid',
      'breaths_air'
    ],
    minable: {
      mining_particle: 'wooden_particle',
      mining_time: 2,
      result: 'raw_wood',
      count: 4
    },
    corpse: 'tree_06_stump',
    remains_when_mined: 'tree_06_stump',
    emissions_per_tick: -0.001,
    max_health: 50,
    collision_box: [
      [
        -0.4,
        -0.4
      ],
      [
        0.4,
        0.4
      ]
    ],
    selection_box: [
      [
        -0.9,
        -2.2
      ],
      [
        0.9,
        0.6
      ]
    ],
    drawing_box: [
      [
        -0.9,
        -3.5
      ],
      [
        0.9,
        0.6
      ]
    ],
    subgroup: 'trees',
    order: 'a[tree]_a[regular]_j[tree_06_brown]',
    vehicle_impact_sound: {
      filename: 'sound/car-wood-impact.ogg',
      volume: 1
    },
    variations: [
      {
        trunk: {
          filename: 'graphics/entity/tree/06/tree-06-a-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 178,
          height: 144,
          frame_count: 4,
          shift: [
            1.875,
            -1.0625
          ],
          hr_version: {
            width: 356,
            height: 289,
            shift: [
              1.859375,
              -1.0546875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-a-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/06/tree-06-a-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 66,
          height: 97,
          frame_count: 3,
          shift: [
            0.59375,
            -1.453125
          ],
          hr_version: {
            width: 133,
            height: 195,
            shift: [
              0.6015625,
              -1.4609375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-a-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/06/tree-06-b-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 188,
          height: 129,
          frame_count: 4,
          shift: [
            1.90625,
            -0.734375
          ],
          hr_version: {
            width: 375,
            height: 258,
            shift: [
              1.9140625,
              -0.71875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-b-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/06/tree-06-b-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 85,
          height: 92,
          frame_count: 3,
          shift: [
            0.546875,
            -1.15625
          ],
          hr_version: {
            width: 170,
            height: 186,
            shift: [
              0.5625,
              -1.15625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-b-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/06/tree-06-c-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 202,
          height: 107,
          frame_count: 4,
          shift: [
            1.625,
            -0.390625
          ],
          hr_version: {
            width: 403,
            height: 214,
            shift: [
              1.6328125,
              -0.390625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-c-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/06/tree-06-c-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 89,
          height: 79,
          frame_count: 3,
          shift: [
            0.359375,
            -0.796875
          ],
          hr_version: {
            width: 178,
            height: 158,
            shift: [
              0.34375,
              -0.796875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-c-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/06/tree-06-d-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 172,
          height: 130,
          frame_count: 4,
          shift: [
            1.0625,
            -0.53125
          ],
          hr_version: {
            width: 343,
            height: 259,
            shift: [
              1.0703125,
              -0.5234375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-d-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/06/tree-06-d-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 75,
          height: 90,
          frame_count: 3,
          shift: [
            -0.203125,
            -1.125
          ],
          hr_version: {
            width: 150,
            height: 178,
            shift: [
              -0.203125,
              -1.125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-d-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/06/tree-06-e-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 140,
          height: 144,
          frame_count: 4,
          shift: [
            0.5625,
            -0.875
          ],
          hr_version: {
            width: 280,
            height: 287,
            shift: [
              0.5625,
              -0.8828125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-e-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/06/tree-06-e-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 68,
          height: 112,
          frame_count: 3,
          shift: [
            -0.3125,
            -1.375
          ],
          hr_version: {
            width: 137,
            height: 224,
            shift: [
              -0.3203125,
              -1.390625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-e-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/06/tree-06-f-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 186,
          height: 136,
          frame_count: 4,
          shift: [
            0.96875,
            -1.125
          ],
          hr_version: {
            width: 371,
            height: 272,
            shift: [
              0.9609375,
              -1.125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-f-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/06/tree-06-f-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 89,
          height: 114,
          frame_count: 3,
          shift: [
            -0.328125,
            -1.4375
          ],
          hr_version: {
            width: 177,
            height: 228,
            shift: [
              -0.3203125,
              -1.421875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-f-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/06/tree-06-g-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 202,
          height: 133,
          frame_count: 4,
          shift: [
            1.34375,
            -1.078125
          ],
          hr_version: {
            width: 402,
            height: 268,
            shift: [
              1.34375,
              -1.09375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-g-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/06/tree-06-g-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 89,
          height: 114,
          frame_count: 3,
          shift: [
            -0.015625,
            -1.375
          ],
          hr_version: {
            width: 177,
            height: 228,
            shift: [
              -0.0234375,
              -1.375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-g-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/06/tree-06-h-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 173,
          height: 129,
          frame_count: 4,
          shift: [
            1.546875,
            -1.078125
          ],
          hr_version: {
            width: 347,
            height: 258,
            shift: [
              1.5390625,
              -1.078125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-h-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/06/tree-06-h-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 71,
          height: 95,
          frame_count: 3,
          shift: [
            0.671875,
            -1.359375
          ],
          hr_version: {
            width: 143,
            height: 190,
            shift: [
              0.6640625,
              -1.34375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-h-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/06/tree-06-i-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 127,
          height: 129,
          frame_count: 4,
          shift: [
            0.390625,
            -0.453125
          ],
          hr_version: {
            width: 253,
            height: 259,
            shift: [
              0.3984375,
              -0.4609375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-i-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/06/tree-06-i-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 65,
          height: 93,
          frame_count: 3,
          shift: [
            -0.328125,
            -1.046875
          ],
          hr_version: {
            width: 129,
            height: 185,
            shift: [
              -0.3203125,
              -1.0546875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-i-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/06/tree-06-j-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 136,
          height: 126,
          frame_count: 4,
          shift: [
            0.6875,
            -0.53125
          ],
          hr_version: {
            width: 272,
            height: 253,
            shift: [
              0.6875,
              -0.5234375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-j-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/06/tree-06-j-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 67,
          height: 92,
          frame_count: 3,
          shift: [
            -0.203125,
            -1.09375
          ],
          hr_version: {
            width: 133,
            height: 182,
            shift: [
              -0.1953125,
              -1.09375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-j-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      }
    ],
    colors: [
      {
        r: 215,
        g: 170,
        b: 107
      },
      {
        r: 241,
        g: 176,
        b: 85
      },
      {
        r: 227,
        g: 138,
        b: 60
      },
      {
        r: 251,
        g: 158,
        b: 76
      },
      {
        r: 207,
        g: 145,
        b: 58
      },
      {
        r: 249,
        g: 177,
        b: 92
      },
      {
        r: 253,
        g: 155,
        b: 0
      }
    ],
    darkness_of_burnt_tree: 0.5,
    size: {
      width: 2,
      height: 3
    }
  },
  tree_09_brown: {
    type: 'tree',
    name: 'tree_09_brown',
    icon: 'graphics/icons/tree-09.png',
    icon_size: 32,
    flags: [
      'placeable_neutral',
      'placeable_off_grid',
      'breaths_air'
    ],
    minable: {
      mining_particle: 'wooden_particle',
      mining_time: 2,
      result: 'raw_wood',
      count: 4
    },
    corpse: 'tree_09_stump',
    remains_when_mined: 'tree_09_stump',
    emissions_per_tick: -0.001,
    max_health: 50,
    collision_box: [
      [
        -0.4,
        -0.4
      ],
      [
        0.4,
        0.4
      ]
    ],
    selection_box: [
      [
        -0.9,
        -2.2
      ],
      [
        0.9,
        0.6
      ]
    ],
    drawing_box: [
      [
        -0.9,
        -3
      ],
      [
        0.9,
        0.6
      ]
    ],
    subgroup: 'trees',
    order: 'a[tree]_a[regular]_k[tree_09_brown]',
    vehicle_impact_sound: {
      filename: 'sound/car-wood-impact.ogg',
      volume: 1
    },
    variations: [
      {
        trunk: {
          filename: 'graphics/entity/tree/09/tree-09-a-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 243,
          height: 170,
          frame_count: 4,
          shift: [
            2.046875,
            -1.15625
          ],
          hr_version: {
            width: 487,
            height: 340,
            shift: [
              2.0703125,
              -1.140625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-a-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/09/tree-09-a-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 123,
          height: 102,
          frame_count: 3,
          shift: [
            0.140625,
            -2.28125
          ],
          hr_version: {
            width: 244,
            height: 204,
            shift: [
              0.15625,
              -2.265625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-a-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/09/tree-09-b-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 208,
          height: 150,
          frame_count: 4,
          shift: [
            1.65625,
            -1.125
          ],
          hr_version: {
            width: 415,
            height: 300,
            shift: [
              1.6640625,
              -1.109375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-b-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/09/tree-09-b-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 99,
          height: 86,
          frame_count: 3,
          shift: [
            -0.078125,
            -2.15625
          ],
          hr_version: {
            width: 197,
            height: 172,
            shift: [
              -0.0703125,
              -2.140625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-b-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/09/tree-09-c-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 238,
          height: 167,
          frame_count: 4,
          shift: [
            1.75,
            -1.171875
          ],
          hr_version: {
            width: 476,
            height: 333,
            shift: [
              1.765625,
              -1.1640625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-c-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/09/tree-09-c-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 113,
          height: 95,
          frame_count: 3,
          shift: [
            -0.265625,
            -2.328125
          ],
          hr_version: {
            width: 225,
            height: 189,
            shift: [
              -0.2578125,
              -2.3046875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-c-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/09/tree-09-d-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 169,
          height: 116,
          frame_count: 4,
          shift: [
            1.421875,
            -1
          ],
          hr_version: {
            width: 338,
            height: 233,
            shift: [
              1.4375,
              -0.9921875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-d-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/09/tree-09-d-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 90,
          height: 64,
          frame_count: 3,
          shift: [
            0.125,
            -1.875
          ],
          hr_version: {
            width: 179,
            height: 126,
            shift: [
              0.1484375,
              -1.859375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-d-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/09/tree-09-e-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 202,
          height: 157,
          frame_count: 4,
          shift: [
            1.96875,
            -1.203125
          ],
          hr_version: {
            width: 403,
            height: 315,
            shift: [
              1.9765625,
              -1.1953125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-e-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/09/tree-09-e-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 103,
          height: 103,
          frame_count: 3,
          shift: [
            0.359375,
            -2.109375
          ],
          hr_version: {
            width: 205,
            height: 206,
            shift: [
              0.3828125,
              -2.09375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-e-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      }
    ],
    colors: [
      {
        r: 194,
        g: 162,
        b: 76
      },
      {
        r: 219,
        g: 179,
        b: 70
      },
      {
        r: 178,
        g: 156,
        b: 95
      },
      {
        r: 194,
        g: 164,
        b: 84
      },
      {
        r: 159,
        g: 133,
        b: 62
      },
      {
        r: 177,
        g: 140,
        b: 87
      },
      {
        r: 217,
        g: 129,
        b: 99
      }
    ],
    darkness_of_burnt_tree: 0.5,
    size: {
      width: 2,
      height: 3
    }
  },
  tree_09_red: {
    type: 'tree',
    name: 'tree_09_red',
    icon: 'graphics/icons/tree-09.png',
    icon_size: 32,
    flags: [
      'placeable_neutral',
      'placeable_off_grid',
      'breaths_air'
    ],
    minable: {
      mining_particle: 'wooden_particle',
      mining_time: 2,
      result: 'raw_wood',
      count: 4
    },
    corpse: 'tree_09_stump',
    remains_when_mined: 'tree_09_stump',
    emissions_per_tick: -0.001,
    max_health: 50,
    collision_box: [
      [
        -0.4,
        -0.4
      ],
      [
        0.4,
        0.4
      ]
    ],
    selection_box: [
      [
        -0.9,
        -2.2
      ],
      [
        0.9,
        0.6
      ]
    ],
    drawing_box: [
      [
        -0.9,
        -3.5
      ],
      [
        0.9,
        0.6
      ]
    ],
    subgroup: 'trees',
    order: 'a[tree]_a[regular]_l[tree_09_red]',
    vehicle_impact_sound: {
      filename: 'sound/car-wood-impact.ogg',
      volume: 1
    },
    variations: [
      {
        trunk: {
          filename: 'graphics/entity/tree/09/tree-09-a-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 243,
          height: 170,
          frame_count: 4,
          shift: [
            2.046875,
            -1.15625
          ],
          hr_version: {
            width: 487,
            height: 340,
            shift: [
              2.0703125,
              -1.140625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-a-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/09/tree-09-a-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 123,
          height: 102,
          frame_count: 3,
          shift: [
            0.140625,
            -2.28125
          ],
          hr_version: {
            width: 244,
            height: 204,
            shift: [
              0.15625,
              -2.265625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-a-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/09/tree-09-b-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 208,
          height: 150,
          frame_count: 4,
          shift: [
            1.65625,
            -1.125
          ],
          hr_version: {
            width: 415,
            height: 300,
            shift: [
              1.6640625,
              -1.109375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-b-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/09/tree-09-b-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 99,
          height: 86,
          frame_count: 3,
          shift: [
            -0.078125,
            -2.15625
          ],
          hr_version: {
            width: 197,
            height: 172,
            shift: [
              -0.0703125,
              -2.140625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-b-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/09/tree-09-c-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 238,
          height: 167,
          frame_count: 4,
          shift: [
            1.75,
            -1.171875
          ],
          hr_version: {
            width: 476,
            height: 333,
            shift: [
              1.765625,
              -1.1640625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-c-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/09/tree-09-c-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 113,
          height: 95,
          frame_count: 3,
          shift: [
            -0.265625,
            -2.328125
          ],
          hr_version: {
            width: 225,
            height: 189,
            shift: [
              -0.2578125,
              -2.3046875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-c-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/09/tree-09-d-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 169,
          height: 116,
          frame_count: 4,
          shift: [
            1.421875,
            -1
          ],
          hr_version: {
            width: 338,
            height: 233,
            shift: [
              1.4375,
              -0.9921875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-d-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/09/tree-09-d-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 90,
          height: 64,
          frame_count: 3,
          shift: [
            0.125,
            -1.875
          ],
          hr_version: {
            width: 179,
            height: 126,
            shift: [
              0.1484375,
              -1.859375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-d-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/09/tree-09-e-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 202,
          height: 157,
          frame_count: 4,
          shift: [
            1.96875,
            -1.203125
          ],
          hr_version: {
            width: 403,
            height: 315,
            shift: [
              1.9765625,
              -1.1953125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-e-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/09/tree-09-e-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 103,
          height: 103,
          frame_count: 3,
          shift: [
            0.359375,
            -2.109375
          ],
          hr_version: {
            width: 205,
            height: 206,
            shift: [
              0.3828125,
              -2.09375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-e-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      }
    ],
    colors: [
      {
        r: 196,
        g: 91,
        b: 91
      },
      {
        r: 207,
        g: 95,
        b: 95
      },
      {
        r: 250,
        g: 108,
        b: 108
      },
      {
        r: 222,
        g: 100,
        b: 100
      },
      {
        r: 223,
        g: 110,
        b: 84
      },
      {
        r: 234,
        g: 107,
        b: 78
      },
      {
        r: 217,
        g: 131,
        b: 111
      }
    ],
    darkness_of_burnt_tree: 0.5,
    size: {
      width: 2,
      height: 3
    }
  },
  tree_08: {
    type: 'tree',
    name: 'tree_08',
    icon: 'graphics/icons/tree-08.png',
    icon_size: 32,
    flags: [
      'placeable_neutral',
      'placeable_off_grid',
      'breaths_air'
    ],
    minable: {
      mining_particle: 'wooden_particle',
      mining_time: 2,
      result: 'raw_wood',
      count: 4
    },
    corpse: 'tree_08_stump',
    remains_when_mined: 'tree_08_stump',
    emissions_per_tick: -0.001,
    max_health: 50,
    collision_box: [
      [
        -0.4,
        -0.4
      ],
      [
        0.4,
        0.4
      ]
    ],
    selection_box: [
      [
        -0.9,
        -2.2
      ],
      [
        0.9,
        0.6
      ]
    ],
    drawing_box: [
      [
        -0.9,
        -3
      ],
      [
        0.9,
        0.6
      ]
    ],
    subgroup: 'trees',
    order: 'a[tree]_a[regular]_m[tree_08]',
    vehicle_impact_sound: {
      filename: 'sound/car-wood-impact.ogg',
      volume: 1
    },
    variations: [
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-a-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 200,
          height: 140,
          frame_count: 4,
          shift: [
            1.71875,
            -1.0625
          ],
          hr_version: {
            width: 399,
            height: 279,
            shift: [
              1.7421875,
              -1.0546875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-a-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/08/tree-08-a-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 94,
          height: 70,
          frame_count: 3,
          shift: [
            0,
            -2.21875
          ],
          hr_version: {
            width: 188,
            height: 141,
            shift: [
              0.015625,
              -2.2109375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-a-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-b-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 213,
          height: 139,
          frame_count: 4,
          shift: [
            1.796875,
            -0.953125
          ],
          hr_version: {
            width: 426,
            height: 277,
            shift: [
              1.796875,
              -0.9453125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-b-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/08/tree-08-b-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 102,
          height: 70,
          frame_count: 3,
          shift: [
            0.0625,
            -2.15625
          ],
          hr_version: {
            width: 205,
            height: 142,
            shift: [
              0.0703125,
              -2.140625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-b-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-c-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 188,
          height: 136,
          frame_count: 4,
          shift: [
            2.03125,
            -1.125
          ],
          hr_version: {
            width: 377,
            height: 271,
            shift: [
              2.0546875,
              -1.1171875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-c-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/08/tree-08-c-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 76,
          height: 76,
          frame_count: 3,
          shift: [
            0.1875,
            -2.125
          ],
          hr_version: {
            width: 152,
            height: 152,
            shift: [
              0.203125,
              -2.125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-c-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-d-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 212,
          height: 134,
          frame_count: 4,
          shift: [
            1.9375,
            -1.21875
          ],
          hr_version: {
            width: 424,
            height: 267,
            shift: [
              1.953125,
              -1.2109375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-d-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/08/tree-08-d-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 93,
          height: 81,
          frame_count: 3,
          shift: [
            -0.015625,
            -2.171875
          ],
          hr_version: {
            width: 187,
            height: 162,
            shift: [
              0.0078125,
              -2.140625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-d-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-e-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 208,
          height: 147,
          frame_count: 4,
          shift: [
            1.71875,
            -1.046875
          ],
          hr_version: {
            width: 416,
            height: 295,
            shift: [
              1.71875,
              -1.0390625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-e-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/08/tree-08-e-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 95,
          height: 83,
          frame_count: 3,
          shift: [
            -0.203125,
            -2.203125
          ],
          hr_version: {
            width: 189,
            height: 166,
            shift: [
              -0.1796875,
              -2.1875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-e-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      }
    ],
    colors: [
      {
        r: 216,
        g: 234,
        b: 153
      },
      {
        r: 203,
        g: 229,
        b: 113
      },
      {
        r: 195,
        g: 228,
        b: 82
      },
      {
        r: 241,
        g: 247,
        b: 150
      },
      {
        r: 251,
        g: 249,
        b: 88
      },
      {
        r: 237,
        g: 232,
        b: 109
      },
      {
        r: 219,
        g: 251,
        b: 120
      },
      {
        r: 225,
        g: 197,
        b: 131
      },
      {
        r: 220,
        g: 189,
        b: 116
      },
      {
        r: 246,
        g: 189,
        b: 122
      },
      {
        r: 237,
        g: 153,
        b: 98
      },
      {
        r: 205,
        g: 89,
        b: 12
      },
      {
        r: 251,
        g: 120,
        b: 120
      },
      {
        r: 250,
        g: 115,
        b: 115
      },
      {
        r: 213,
        g: 116,
        b: 121
      }
    ],
    darkness_of_burnt_tree: 0.5,
    size: {
      width: 2,
      height: 3
    }
  },
  tree_08_brown: {
    type: 'tree',
    name: 'tree_08_brown',
    icon: 'graphics/icons/tree-08.png',
    icon_size: 32,
    flags: [
      'placeable_neutral',
      'placeable_off_grid',
      'breaths_air'
    ],
    minable: {
      mining_particle: 'wooden_particle',
      mining_time: 2,
      result: 'raw_wood',
      count: 4
    },
    corpse: 'tree_08_stump',
    remains_when_mined: 'tree_08_stump',
    emissions_per_tick: -0.001,
    max_health: 50,
    collision_box: [
      [
        -0.4,
        -0.4
      ],
      [
        0.4,
        0.4
      ]
    ],
    selection_box: [
      [
        -0.9,
        -2.2
      ],
      [
        0.9,
        0.6
      ]
    ],
    drawing_box: [
      [
        -0.9,
        -3
      ],
      [
        0.9,
        0.6
      ]
    ],
    subgroup: 'trees',
    order: 'a[tree]_a[regular]_n[tree_08_brown]',
    vehicle_impact_sound: {
      filename: 'sound/car-wood-impact.ogg',
      volume: 1
    },
    variations: [
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-a-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 200,
          height: 140,
          frame_count: 4,
          shift: [
            1.71875,
            -1.0625
          ],
          hr_version: {
            width: 399,
            height: 279,
            shift: [
              1.7421875,
              -1.0546875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-a-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/08/tree-08-a-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 94,
          height: 70,
          frame_count: 3,
          shift: [
            0,
            -2.21875
          ],
          hr_version: {
            width: 188,
            height: 141,
            shift: [
              0.015625,
              -2.2109375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-a-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-b-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 213,
          height: 139,
          frame_count: 4,
          shift: [
            1.796875,
            -0.953125
          ],
          hr_version: {
            width: 426,
            height: 277,
            shift: [
              1.796875,
              -0.9453125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-b-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/08/tree-08-b-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 102,
          height: 70,
          frame_count: 3,
          shift: [
            0.0625,
            -2.15625
          ],
          hr_version: {
            width: 205,
            height: 142,
            shift: [
              0.0703125,
              -2.140625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-b-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-c-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 188,
          height: 136,
          frame_count: 4,
          shift: [
            2.03125,
            -1.125
          ],
          hr_version: {
            width: 377,
            height: 271,
            shift: [
              2.0546875,
              -1.1171875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-c-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/08/tree-08-c-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 76,
          height: 76,
          frame_count: 3,
          shift: [
            0.1875,
            -2.125
          ],
          hr_version: {
            width: 152,
            height: 152,
            shift: [
              0.203125,
              -2.125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-c-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-d-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 212,
          height: 134,
          frame_count: 4,
          shift: [
            1.9375,
            -1.21875
          ],
          hr_version: {
            width: 424,
            height: 267,
            shift: [
              1.953125,
              -1.2109375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-d-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/08/tree-08-d-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 93,
          height: 81,
          frame_count: 3,
          shift: [
            -0.015625,
            -2.171875
          ],
          hr_version: {
            width: 187,
            height: 162,
            shift: [
              0.0078125,
              -2.140625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-d-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-e-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 208,
          height: 147,
          frame_count: 4,
          shift: [
            1.71875,
            -1.046875
          ],
          hr_version: {
            width: 416,
            height: 295,
            shift: [
              1.71875,
              -1.0390625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-e-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/08/tree-08-e-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 95,
          height: 83,
          frame_count: 3,
          shift: [
            -0.203125,
            -2.203125
          ],
          hr_version: {
            width: 189,
            height: 166,
            shift: [
              -0.1796875,
              -2.1875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-e-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      }
    ],
    colors: [
      {
        r: 225,
        g: 197,
        b: 131
      },
      {
        r: 220,
        g: 189,
        b: 116
      },
      {
        r: 246,
        g: 189,
        b: 122
      },
      {
        r: 237,
        g: 153,
        b: 98
      }
    ],
    darkness_of_burnt_tree: 0.5,
    size: {
      width: 2,
      height: 3
    }
  },
  tree_08_red: {
    type: 'tree',
    name: 'tree_08_red',
    icon: 'graphics/icons/tree-08.png',
    icon_size: 32,
    flags: [
      'placeable_neutral',
      'placeable_off_grid',
      'breaths_air'
    ],
    minable: {
      mining_particle: 'wooden_particle',
      mining_time: 2,
      result: 'raw_wood',
      count: 4
    },
    corpse: 'tree_08_stump',
    remains_when_mined: 'tree_08_stump',
    emissions_per_tick: -0.001,
    max_health: 50,
    collision_box: [
      [
        -0.4,
        -0.4
      ],
      [
        0.4,
        0.4
      ]
    ],
    selection_box: [
      [
        -0.9,
        -2.2
      ],
      [
        0.9,
        0.6
      ]
    ],
    drawing_box: [
      [
        -0.9,
        -3
      ],
      [
        0.9,
        0.6
      ]
    ],
    subgroup: 'trees',
    order: 'a[tree]_a[regular]_o[tree_08_red]',
    vehicle_impact_sound: {
      filename: 'sound/car-wood-impact.ogg',
      volume: 1
    },
    variations: [
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-a-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 200,
          height: 140,
          frame_count: 4,
          shift: [
            1.71875,
            -1.0625
          ],
          hr_version: {
            width: 399,
            height: 279,
            shift: [
              1.7421875,
              -1.0546875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-a-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/08/tree-08-a-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 94,
          height: 70,
          frame_count: 3,
          shift: [
            0,
            -2.21875
          ],
          hr_version: {
            width: 188,
            height: 141,
            shift: [
              0.015625,
              -2.2109375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-a-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-b-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 213,
          height: 139,
          frame_count: 4,
          shift: [
            1.796875,
            -0.953125
          ],
          hr_version: {
            width: 426,
            height: 277,
            shift: [
              1.796875,
              -0.9453125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-b-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/08/tree-08-b-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 102,
          height: 70,
          frame_count: 3,
          shift: [
            0.0625,
            -2.15625
          ],
          hr_version: {
            width: 205,
            height: 142,
            shift: [
              0.0703125,
              -2.140625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-b-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-c-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 188,
          height: 136,
          frame_count: 4,
          shift: [
            2.03125,
            -1.125
          ],
          hr_version: {
            width: 377,
            height: 271,
            shift: [
              2.0546875,
              -1.1171875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-c-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/08/tree-08-c-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 76,
          height: 76,
          frame_count: 3,
          shift: [
            0.1875,
            -2.125
          ],
          hr_version: {
            width: 152,
            height: 152,
            shift: [
              0.203125,
              -2.125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-c-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-d-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 212,
          height: 134,
          frame_count: 4,
          shift: [
            1.9375,
            -1.21875
          ],
          hr_version: {
            width: 424,
            height: 267,
            shift: [
              1.953125,
              -1.2109375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-d-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/08/tree-08-d-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 93,
          height: 81,
          frame_count: 3,
          shift: [
            -0.015625,
            -2.171875
          ],
          hr_version: {
            width: 187,
            height: 162,
            shift: [
              0.0078125,
              -2.140625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-d-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-e-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 208,
          height: 147,
          frame_count: 4,
          shift: [
            1.71875,
            -1.046875
          ],
          hr_version: {
            width: 416,
            height: 295,
            shift: [
              1.71875,
              -1.0390625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-e-trunk.png',
            frame_count: 4,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/08/tree-08-e-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 95,
          height: 83,
          frame_count: 3,
          shift: [
            -0.203125,
            -2.203125
          ],
          hr_version: {
            width: 189,
            height: 166,
            shift: [
              -0.1796875,
              -2.1875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-e-leaves.png',
            frame_count: 3,
            flags: [
              'mipmap'
            ]
          }
        },
        leaf_generation: {
          type: 'create_particle',
          entity_name: 'leaf_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 1,
          speed_from_center: 0.01
        },
        branch_generation: {
          type: 'create_particle',
          entity_name: 'branch_particle',
          offset_deviation: [
            [
              -0.5,
              -0.5
            ],
            [
              0.5,
              0.5
            ]
          ],
          initial_height: 2,
          initial_height_deviation: 2,
          speed_from_center: 0.01,
          frame_speed: 0.1,
          repeat_count: 15
        }
      }
    ],
    colors: [
      {
        r: 205,
        g: 89,
        b: 12
      },
      {
        r: 251,
        g: 120,
        b: 120
      },
      {
        r: 250,
        g: 115,
        b: 115
      },
      {
        r: 213,
        g: 116,
        b: 121
      }
    ],
    darkness_of_burnt_tree: 0.5,
    size: {
      width: 2,
      height: 3
    }
  },
  dry_tree: {
    type: 'tree',
    name: 'dry_tree',
    icon: 'graphics/icons/dry-tree.png',
    icon_size: 32,
    flags: [
      'placeable_neutral',
      'placeable_off_grid',
      'breaths_air'
    ],
    minable: {
      count: 4,
      mining_particle: 'wooden_particle',
      mining_time: 1,
      result: 'raw_wood'
    },
    emissions_per_tick: -0.0001,
    max_health: 20,
    collision_box: [
      [
        -0.4,
        -0.8
      ],
      [
        0.4,
        0.2
      ]
    ],
    selection_box: [
      [
        -0.6,
        -1.5
      ],
      [
        0.6,
        0.3
      ]
    ],
    drawing_box: [
      [
        -0.6,
        -1.8
      ],
      [
        0.6,
        0.3
      ]
    ],
    subgroup: 'trees',
    order: 'a[tree]_c[dry_tree]',
    vehicle_impact_sound: {
      filename: 'sound/car-wood-impact.ogg',
      volume: 1
    },
    pictures: [
      {
        filename: 'graphics/entity/tree/dry-tree/dry-tree-00.png',
        width: 54,
        height: 49,
        shift: [
          0.46875,
          -0.484375
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dry-tree/hr-dry-tree-00.png',
          width: 184,
          height: 122,
          shift: [
            0.40625,
            -0.46875
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dry-tree/dry-tree-01.png',
        width: 52,
        height: 53,
        shift: [
          0.4375,
          -0.578125
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dry-tree/hr-dry-tree-01.png',
          width: 142,
          height: 122,
          shift: [
            0.734375,
            -0.46875
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dry-tree/dry-tree-02.png',
        width: 63,
        height: 52,
        shift: [
          0.640625,
          -0.5
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dry-tree/hr-dry-tree-02.png',
          width: 140,
          height: 115,
          shift: [
            0.75,
            -0.4140625
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dry-tree/dry-tree-03.png',
        width: 58,
        height: 47,
        shift: [
          0.375,
          -0.359375
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dry-tree/hr-dry-tree-03.png',
          width: 151,
          height: 101,
          shift: [
            0.6640625,
            -0.3046875
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dry-tree/dry-tree-04.png',
        width: 49,
        height: 50,
        shift: [
          0.296875,
          -0.4375
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dry-tree/hr-dry-tree-04.png',
          width: 149,
          height: 109,
          shift: [
            0.6796875,
            -0.3671875
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dry-tree/dry-tree-05.png',
        width: 56,
        height: 52,
        shift: [
          0.4375,
          -0.5
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dry-tree/hr-dry-tree-05.png',
          width: 146,
          height: 116,
          shift: [
            0.703125,
            -0.421875
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dry-tree/dry-tree-06.png',
        width: 59,
        height: 60,
        shift: [
          0.546875,
          -0.6875
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dry-tree/hr-dry-tree-06.png',
          width: 141,
          height: 135,
          shift: [
            0.7421875,
            -0.5703125
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dry-tree/dry-tree-07.png',
        width: 63,
        height: 47,
        shift: [
          0.234375,
          -0.453125
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dry-tree/hr-dry-tree-07.png',
          width: 166,
          height: 107,
          shift: [
            0.546875,
            -0.3515625
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dry-tree/dry-tree-08.png',
        width: 54,
        height: 53,
        shift: [
          0.53125,
          -0.328125
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dry-tree/hr-dry-tree-08.png',
          width: 138,
          height: 106,
          shift: [
            0.765625,
            -0.3125
          ],
          scale: 0.5
        }
      }
    ],
    size: {
      width: 2,
      height: 2
    }
  },
  dead_tree_desert: {
    type: 'tree',
    name: 'dead_tree_desert',
    icon: 'graphics/icons/dead-tree.png',
    icon_size: 32,
    flags: [
      'placeable_neutral',
      'placeable_off_grid',
      'breaths_air'
    ],
    minable: {
      mining_particle: 'wooden_particle',
      mining_time: 1,
      result: 'raw_wood',
      count: 2
    },
    emissions_per_tick: -0.0001,
    max_health: 20,
    collision_box: [
      [
        -0.6,
        -0.6
      ],
      [
        0.6,
        0.6
      ]
    ],
    selection_box: [
      [
        -0.8,
        -0.8
      ],
      [
        0.8,
        0.8
      ]
    ],
    subgroup: 'trees',
    order: 'a[tree]_b[dead_tree]',
    vehicle_impact_sound: {
      filename: 'sound/car-wood-impact.ogg',
      volume: 1
    },
    pictures: [
      {
        filename: 'graphics/entity/tree/dead-tree-desert/dead-tree-desert-00.png',
        width: 199,
        height: 126,
        shift: [
          2.078125,
          -1
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dead-tree-desert/hr-dead-tree-desert-00.png',
          width: 398,
          height: 250,
          shift: [
            2.078125,
            -1
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dead-tree-desert/dead-tree-desert-01.png',
        width: 200,
        height: 125,
        shift: [
          2,
          -1.140625
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dead-tree-desert/hr-dead-tree-desert-01.png',
          width: 399,
          height: 249,
          shift: [
            2.0078125,
            -1.1484375
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dead-tree-desert/dead-tree-desert-02.png',
        width: 198,
        height: 126,
        shift: [
          0.90625,
          -1.34375
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dead-tree-desert/hr-dead-tree-desert-02.png',
          width: 398,
          height: 250,
          shift: [
            0.921875,
            -1.34375
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dead-tree-desert/dead-tree-desert-03.png',
        width: 199,
        height: 125,
        shift: [
          0.796875,
          -0.953125
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dead-tree-desert/hr-dead-tree-desert-03.png',
          width: 399,
          height: 249,
          shift: [
            0.8046875,
            -0.9609375
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dead-tree-desert/dead-tree-desert-04.png',
        width: 199,
        height: 125,
        shift: [
          1.203125,
          -0.703125
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dead-tree-desert/hr-dead-tree-desert-04.png',
          width: 398,
          height: 249,
          shift: [
            1.203125,
            -0.6953125
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dead-tree-desert/dead-tree-desert-05.png',
        width: 199,
        height: 126,
        shift: [
          2.015625,
          -0.71875
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dead-tree-desert/hr-dead-tree-desert-05.png',
          width: 398,
          height: 250,
          shift: [
            2.015625,
            -0.71875
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dead-tree-desert/dead-tree-desert-06.png',
        width: 199,
        height: 125,
        shift: [
          0.890625,
          -0.453125
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dead-tree-desert/hr-dead-tree-desert-06.png',
          width: 398,
          height: 249,
          shift: [
            0.890625,
            -0.4609375
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dead-tree-desert/dead-tree-desert-07.png',
        width: 199,
        height: 125,
        shift: [
          1.578125,
          -1.265625
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dead-tree-desert/hr-dead-tree-desert-07.png',
          width: 398,
          height: 249,
          shift: [
            1.578125,
            -1.2734375
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dead-tree-desert/dead-tree-desert-08.png',
        width: 200,
        height: 125,
        shift: [
          0.5625,
          -1.359375
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dead-tree-desert/hr-dead-tree-desert-08.png',
          width: 398,
          height: 249,
          shift: [
            0.5625,
            -1.3671875
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dead-tree-desert/dead-tree-desert-09.png',
        width: 199,
        height: 125,
        shift: [
          1.265625,
          -0.515625
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dead-tree-desert/hr-dead-tree-desert-09.png',
          width: 399,
          height: 249,
          shift: [
            1.2890625,
            -0.5234375
          ],
          scale: 0.5
        }
      }
    ],
    size: {
      width: 2,
      height: 2
    }
  },
  dead_grey_trunk: {
    type: 'tree',
    name: 'dead_grey_trunk',
    icon: 'graphics/icons/dead-grey-trunk.png',
    icon_size: 32,
    flags: [
      'placeable_neutral',
      'placeable_off_grid',
      'breaths_air'
    ],
    minable: {
      mining_particle: 'wooden_particle',
      mining_time: 1,
      result: 'raw_wood',
      count: 2
    },
    emissions_per_tick: -0.0001,
    max_health: 20,
    collision_box: [
      [
        -0.6,
        -0.6
      ],
      [
        0.6,
        0.6
      ]
    ],
    selection_box: [
      [
        -0.8,
        -0.8
      ],
      [
        0.8,
        0.8
      ]
    ],
    subgroup: 'trees',
    order: 'a[tree]_b[dead_tree]',
    vehicle_impact_sound: {
      filename: 'sound/car-wood-impact.ogg',
      volume: 1
    },
    pictures: [
      {
        filename: 'graphics/entity/tree/dead-grey-trunk/dead-grey-trunk-00.png',
        width: 109,
        height: 88,
        shift: [
          0.921875,
          -0.78125
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dead-grey-trunk/hr-dead-grey-trunk-00.png',
          width: 217,
          height: 178,
          shift: [
            0.9296875,
            -0.78125
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dead-grey-trunk/dead-grey-trunk-01.png',
        width: 102,
        height: 91,
        shift: [
          0.84375,
          -0.765625
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dead-grey-trunk/hr-dead-grey-trunk-01.png',
          width: 205,
          height: 185,
          shift: [
            0.8359375,
            -0.7578125
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dead-grey-trunk/dead-grey-trunk-02.png',
        width: 111,
        height: 89,
        shift: [
          0.921875,
          -0.765625
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dead-grey-trunk/hr-dead-grey-trunk-02.png',
          width: 221,
          height: 179,
          shift: [
            0.9140625,
            -0.7578125
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dead-grey-trunk/dead-grey-trunk-03.png',
        width: 106,
        height: 83,
        shift: [
          0.90625,
          -0.640625
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dead-grey-trunk/hr-dead-grey-trunk-03.png',
          width: 210,
          height: 167,
          shift: [
            0.90625,
            -0.6171875
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dead-grey-trunk/dead-grey-trunk-04.png',
        width: 128,
        height: 93,
        shift: [
          1.03125,
          -0.640625
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dead-grey-trunk/hr-dead-grey-trunk-04.png',
          width: 257,
          height: 185,
          shift: [
            1.0234375,
            -0.6484375
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dead-grey-trunk/dead-grey-trunk-05.png',
        width: 114,
        height: 83,
        shift: [
          0.5,
          -0.109375
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dead-grey-trunk/hr-dead-grey-trunk-05.png',
          width: 226,
          height: 166,
          shift: [
            0.5,
            -0.109375
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dead-grey-trunk/dead-grey-trunk-06.png',
        width: 113,
        height: 58,
        shift: [
          0.109375,
          0.03125
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dead-grey-trunk/hr-dead-grey-trunk-06.png',
          width: 226,
          height: 117,
          shift: [
            0.09375,
            0.0390625
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dead-grey-trunk/dead-grey-trunk-07.png',
        width: 108,
        height: 83,
        shift: [
          0.09375,
          -0.046875
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dead-grey-trunk/hr-dead-grey-trunk-07.png',
          width: 215,
          height: 165,
          shift: [
            0.0859375,
            -0.0390625
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dead-grey-trunk/dead-grey-trunk-08.png',
        width: 104,
        height: 88,
        shift: [
          0.21875,
          -0.34375
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dead-grey-trunk/hr-dead-grey-trunk-08.png',
          width: 207,
          height: 176,
          shift: [
            0.2265625,
            -0.34375
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dead-grey-trunk/dead-grey-trunk-09.png',
        width: 116,
        height: 60,
        shift: [
          -0.15625,
          -0.09375
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dead-grey-trunk/hr-dead-grey-trunk-09.png',
          width: 231,
          height: 120,
          shift: [
            -0.1484375,
            -0.09375
          ],
          scale: 0.5
        }
      }
    ],
    size: {
      width: 2,
      height: 2
    }
  },
  dead_dry_hairy_tree: {
    type: 'tree',
    name: 'dead_dry_hairy_tree',
    icon: 'graphics/icons/dead-dry-hairy-tree.png',
    icon_size: 32,
    flags: [
      'placeable_neutral',
      'placeable_off_grid',
      'breaths_air'
    ],
    minable: {
      mining_particle: 'wooden_particle',
      mining_time: 1,
      result: 'raw_wood',
      count: 2
    },
    emissions_per_tick: -0.0001,
    max_health: 20,
    collision_box: [
      [
        -0.6,
        -0.6
      ],
      [
        0.6,
        0.6
      ]
    ],
    selection_box: [
      [
        -0.8,
        -0.8
      ],
      [
        0.8,
        0.8
      ]
    ],
    subgroup: 'trees',
    order: 'a[tree]_b[dead_tree]',
    vehicle_impact_sound: {
      filename: 'sound/car-wood-impact.ogg',
      volume: 1
    },
    pictures: [
      {
        filename: 'graphics/entity/tree/dead-dry-hairy-tree/dead-dry-hairy-tree-00.png',
        width: 222,
        height: 178,
        shift: [
          -0.46875,
          1.40625
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dead-dry-hairy-tree/hr-dead-dry-hairy-tree-00.png',
          width: 388,
          height: 189,
          shift: [
            -0.625,
            0.0625
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dead-dry-hairy-tree/dead-dry-hairy-tree-01.png',
        width: 253,
        height: 147,
        shift: [
          0.3125,
          -0.9375
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dead-dry-hairy-tree/hr-dead-dry-hairy-tree-01.png',
          width: 371,
          height: 301,
          shift: [
            -0.46875,
            -0.6171875
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dead-dry-hairy-tree/dead-dry-hairy-tree-02.png',
        width: 247,
        height: 155,
        shift: [
          0.78125,
          0
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dead-dry-hairy-tree/hr-dead-dry-hairy-tree-02.png',
          width: 324,
          height: 252,
          shift: [
            -0.265625,
            -0.453125
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dead-dry-hairy-tree/dead-dry-hairy-tree-03.png',
        width: 242,
        height: 152,
        shift: [
          2.5,
          -0.78125
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dead-dry-hairy-tree/hr-dead-dry-hairy-tree-03.png',
          width: 358,
          height: 310,
          shift: [
            1.3125,
            -0.46875
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dead-dry-hairy-tree/dead-dry-hairy-tree-04.png',
        width: 229,
        height: 143,
        shift: [
          1.953125,
          -1.015625
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dead-dry-hairy-tree/hr-dead-dry-hairy-tree-04.png',
          width: 386,
          height: 316,
          shift: [
            1.25,
            -0.46875
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dead-dry-hairy-tree/dead-dry-hairy-tree-05.png',
        width: 229,
        height: 195,
        shift: [
          1.71875,
          0
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dead-dry-hairy-tree/hr-dead-dry-hairy-tree-05.png',
          width: 425,
          height: 285,
          shift: [
            1.09375,
            -0.5625
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dead-dry-hairy-tree/dead-dry-hairy-tree-06.png',
        width: 215,
        height: 136,
        shift: [
          1.453125,
          -0.78125
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dead-dry-hairy-tree/hr-dead-dry-hairy-tree-06.png',
          width: 424,
          height: 294,
          shift: [
            1.3125,
            -0.765625
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dead-dry-hairy-tree/dead-dry-hairy-tree-07.png',
        width: 184,
        height: 154,
        shift: [
          1.09375,
          0
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dead-dry-hairy-tree/hr-dead-dry-hairy-tree-07.png',
          width: 385,
          height: 224,
          shift: [
            0.78125,
            -0.609375
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dead-dry-hairy-tree/dead-dry-hairy-tree-08.png',
        width: 215,
        height: 136,
        shift: [
          1.5625,
          1.25
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dead-dry-hairy-tree/hr-dead-dry-hairy-tree-08.png',
          width: 341,
          height: 166,
          shift: [
            0.625,
            0.3125
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dead-dry-hairy-tree/dead-dry-hairy-tree-09.png',
        width: 154,
        height: 137,
        shift: [
          0.9375,
          0.625
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dead-dry-hairy-tree/hr-dead-dry-hairy-tree-09.png',
          width: 309,
          height: 274,
          shift: [
            0.8984375,
            0.40625
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dead-dry-hairy-tree/dead-dry-hairy-tree-10.png',
        width: 159,
        height: 123,
        shift: [
          -0.3125,
          0.46875
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dead-dry-hairy-tree/hr-dead-dry-hairy-tree-10.png',
          width: 317,
          height: 246,
          shift: [
            -0.21875,
            0.34375
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dead-dry-hairy-tree/dead-dry-hairy-tree-11.png',
        width: 167,
        height: 120,
        shift: [
          -0.625,
          0.46875
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dead-dry-hairy-tree/hr-dead-dry-hairy-tree-11.png',
          width: 335,
          height: 238,
          shift: [
            -0.28125,
            0.3125
          ],
          scale: 0.5
        }
      }
    ],
    size: {
      width: 2,
      height: 2
    }
  },
  dry_hairy_tree: {
    type: 'tree',
    name: 'dry_hairy_tree',
    icon: 'graphics/icons/dry-hairy-tree.png',
    icon_size: 32,
    flags: [
      'placeable_neutral',
      'placeable_off_grid',
      'breaths_air'
    ],
    minable: {
      mining_particle: 'wooden_particle',
      mining_time: 1,
      result: 'raw_wood',
      count: 2
    },
    emissions_per_tick: -0.0001,
    max_health: 20,
    collision_box: [
      [
        -0.6,
        -0.6
      ],
      [
        0.6,
        0.6
      ]
    ],
    selection_box: [
      [
        -0.8,
        -0.8
      ],
      [
        0.8,
        0.8
      ]
    ],
    subgroup: 'trees',
    order: 'a[tree]_b[dead_tree]',
    vehicle_impact_sound: {
      filename: 'sound/car-wood-impact.ogg',
      volume: 1
    },
    pictures: [
      {
        filename: 'graphics/entity/tree/dry-hairy-tree/dry-hairy-tree-00.png',
        width: 252,
        height: 160,
        shift: [
          1.90625,
          -1.09375
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dry-hairy-tree/hr-dry-hairy-tree-00.png',
          width: 444,
          height: 357,
          shift: [
            1.421875,
            -0.8984375
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dry-hairy-tree/dry-hairy-tree-01.png',
        width: 244,
        height: 160,
        shift: [
          1.25,
          -1
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dry-hairy-tree/hr-dry-hairy-tree-01.png',
          width: 506,
          height: 293,
          shift: [
            1.40625,
            -1.3359375
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dry-hairy-tree/dry-hairy-tree-02.png',
        width: 222,
        height: 179,
        shift: [
          1.40625,
          -0.53125
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dry-hairy-tree/hr-dry-hairy-tree-02.png',
          width: 493,
          height: 309,
          shift: [
            1.7578125,
            -0.9921875
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dry-hairy-tree/dry-hairy-tree-03.png',
        width: 223,
        height: 134,
        shift: [
          1.84375,
          -1.53125
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dry-hairy-tree/hr-dry-hairy-tree-03.png',
          width: 484,
          height: 303,
          shift: [
            2.140625,
            -1.3046875
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dry-hairy-tree/dry-hairy-tree-04.png',
        width: 227,
        height: 197,
        shift: [
          1.9375,
          -0.09375
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dry-hairy-tree/hr-dry-hairy-tree-04.png',
          width: 457,
          height: 287,
          shift: [
            1.9609375,
            -1.0234375
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dry-hairy-tree/dry-hairy-tree-05.png',
        width: 270,
        height: 161,
        shift: [
          1.375,
          -1.53125
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dry-hairy-tree/hr-dry-hairy-tree-05.png',
          width: 459,
          height: 390,
          shift: [
            0.6953125,
            -1.046875
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dry-hairy-tree/dry-hairy-tree-06.png',
        width: 176,
        height: 156,
        shift: [
          0.84375,
          -0.15625
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dry-hairy-tree/hr-dry-hairy-tree-06.png',
          width: 432,
          height: 272,
          shift: [
            1.4375,
            -0.59375
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dry-hairy-tree/dry-hairy-tree-07.png',
        width: 212,
        height: 138,
        shift: [
          1.375,
          -1.03125
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dry-hairy-tree/hr-dry-hairy-tree-07.png',
          width: 368,
          height: 308,
          shift: [
            0.875,
            -0.859375
          ],
          scale: 0.5
        }
      },
      {
        filename: 'graphics/entity/tree/dry-hairy-tree/dry-hairy-tree-08.png',
        width: 232,
        height: 120,
        shift: [
          1.75,
          -1.6875
        ],
        hr_version: {
          filename: 'graphics/entity/tree/dry-hairy-tree/hr-dry-hairy-tree-08.png',
          width: 429,
          height: 272,
          shift: [
            1.4609375,
            -1.640625
          ],
          scale: 0.5
        }
      }
    ],
    size: {
      width: 2,
      height: 2
    }
  }
}