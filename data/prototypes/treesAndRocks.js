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
      mining_time: 3,
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
    render_layer: 'object',
    max_health: 2000,
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
      mining_time: 2,
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
    render_layer: 'object',
    max_health: 500,
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
      mining_time: 2,
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
    count_as_rock_for_filtered_deconstruction: true,
    mined_sound: {
      filename: 'sound/deconstruct-bricks.ogg'
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
        width: 77,
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
        width: 99,
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
      mining_time: 0.55,
      result: 'wood',
      count: 4
    },
    corpse: 'tree_01_stump',
    remains_when_mined: 'tree_01_stump',
    emissions_per_second: -0.001,
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
    variations: [
      {
        trunk: {
          filename: 'graphics/entity/tree/01/tree-01-a-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 73,
          height: 171,
          frame_count: 1,
          shift: [
            0,
            -2.1875
          ],
          hr_version: {
            width: 140,
            height: 340,
            shift: [
              0.0625,
              -2.15625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-a-trunk.png',
            frame_count: 1,
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
          width: 93,
          height: 151,
          frame_count: 3,
          shift: [
            -0.0625,
            -2.3125
          ],
          hr_version: {
            width: 184,
            height: 306,
            shift: [
              -0.03125,
              -2.3125
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
        },
        shadow: {
          filename: 'graphics/entity/tree/01/tree-01-a-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 163,
          height: 67,
          frame_count: 4,
          shift: [
            1.875,
            -0.0625
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 324,
            height: 134,
            shift: [
              1.90625,
              -0.0625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-a-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/01/tree-01-b-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 65,
          height: 165,
          frame_count: 1,
          shift: [
            0.125,
            -2.125
          ],
          hr_version: {
            width: 132,
            height: 326,
            shift: [
              0.125,
              -2.0625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-b-trunk.png',
            frame_count: 1,
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
          width: 91,
          height: 157,
          frame_count: 3,
          shift: [
            0,
            -2.25
          ],
          hr_version: {
            width: 182,
            height: 316,
            shift: [
              0.03125,
              -2.25
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
        },
        shadow: {
          filename: 'graphics/entity/tree/01/tree-01-b-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 159,
          height: 67,
          frame_count: 4,
          shift: [
            1.9375,
            -0.0625
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 312,
            height: 126,
            shift: [
              2,
              0
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-b-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/01/tree-01-c-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 71,
          height: 167,
          frame_count: 1,
          shift: [
            -0.1875,
            -2.1875
          ],
          hr_version: {
            width: 136,
            height: 330,
            shift: [
              -0.125,
              -2.125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-c-trunk.png',
            frame_count: 1,
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
          width: 93,
          height: 157,
          frame_count: 3,
          shift: [
            -0.0625,
            -2.3125
          ],
          hr_version: {
            width: 180,
            height: 308,
            shift: [
              0,
              -2.25
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
        },
        shadow: {
          filename: 'graphics/entity/tree/01/tree-01-c-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 155,
          height: 65,
          frame_count: 4,
          shift: [
            1.8125,
            0
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 306,
            height: 132,
            shift: [
              1.84375,
              0
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-c-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/01/tree-01-d-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 57,
          height: 163,
          frame_count: 1,
          shift: [
            0,
            -2.125
          ],
          hr_version: {
            width: 108,
            height: 324,
            shift: [
              0.0625,
              -2.09375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-d-trunk.png',
            frame_count: 1,
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
          width: 95,
          height: 153,
          frame_count: 3,
          shift: [
            0,
            -2.25
          ],
          hr_version: {
            width: 188,
            height: 310,
            shift: [
              0.03125,
              -2.25
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
        },
        shadow: {
          filename: 'graphics/entity/tree/01/tree-01-d-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 145,
          height: 67,
          frame_count: 4,
          shift: [
            1.8125,
            -0.125
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 288,
            height: 130,
            shift: [
              1.84375,
              -0.09375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-d-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/01/tree-01-e-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 69,
          height: 165,
          frame_count: 1,
          shift: [
            0.0625,
            -2.125
          ],
          hr_version: {
            width: 138,
            height: 324,
            shift: [
              0.0625,
              -2.0625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-e-trunk.png',
            frame_count: 1,
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
          width: 97,
          height: 143,
          frame_count: 3,
          shift: [
            0.0625,
            -2.125
          ],
          hr_version: {
            width: 190,
            height: 300,
            shift: [
              0.09375,
              -2.21875
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
        },
        shadow: {
          filename: 'graphics/entity/tree/01/tree-01-e-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 159,
          height: 69,
          frame_count: 4,
          shift: [
            2.0625,
            0
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 314,
            height: 136,
            shift: [
              2.09375,
              0.03125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-e-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/01/tree-01-f-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 63,
          height: 165,
          frame_count: 1,
          shift: [
            -0.1875,
            -2.0625
          ],
          hr_version: {
            width: 118,
            height: 326,
            shift: [
              -0.125,
              -2.03125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-f-trunk.png',
            frame_count: 1,
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
          width: 97,
          height: 153,
          frame_count: 3,
          shift: [
            -0.125,
            -2.125
          ],
          hr_version: {
            width: 190,
            height: 304,
            shift: [
              -0.09375,
              -2.09375
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
        },
        shadow: {
          filename: 'graphics/entity/tree/01/tree-01-f-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 151,
          height: 71,
          frame_count: 4,
          shift: [
            1.75,
            0
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 304,
            height: 140,
            shift: [
              1.75,
              0.03125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-f-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/01/tree-01-g-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 71,
          height: 147,
          frame_count: 1,
          shift: [
            -0.0625,
            -1.875
          ],
          hr_version: {
            width: 142,
            height: 294,
            shift: [
              -0.0625,
              -1.84375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-g-trunk.png',
            frame_count: 1,
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
          width: 93,
          height: 139,
          frame_count: 3,
          shift: [
            -0.125,
            -1.9375
          ],
          hr_version: {
            width: 184,
            height: 274,
            shift: [
              -0.09375,
              -1.90625
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
        },
        shadow: {
          filename: 'graphics/entity/tree/01/tree-01-g-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 127,
          height: 69,
          frame_count: 4,
          shift: [
            1.25,
            -0.125
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 252,
            height: 130,
            shift: [
              1.28125,
              -0.0625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-g-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/01/tree-01-h-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 57,
          height: 151,
          frame_count: 1,
          shift: [
            0.125,
            -1.9375
          ],
          hr_version: {
            width: 116,
            height: 296,
            shift: [
              0.125,
              -1.875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-h-trunk.png',
            frame_count: 1,
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
          width: 91,
          height: 141,
          frame_count: 3,
          shift: [
            0,
            -2
          ],
          hr_version: {
            width: 180,
            height: 282,
            shift: [
              0.03125,
              -1.96875
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
        },
        shadow: {
          filename: 'graphics/entity/tree/01/tree-01-h-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 135,
          height: 67,
          frame_count: 4,
          shift: [
            1.6875,
            -0.125
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 266,
            height: 130,
            shift: [
              1.71875,
              -0.09375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-h-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/01/tree-01-i-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 63,
          height: 123,
          frame_count: 1,
          shift: [
            -0.0625,
            -1.5625
          ],
          hr_version: {
            width: 120,
            height: 244,
            shift: [
              0,
              -1.53125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-i-trunk.png',
            frame_count: 1,
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
          width: 79,
          height: 115,
          frame_count: 3,
          shift: [
            -0.125,
            -1.625
          ],
          hr_version: {
            width: 152,
            height: 234,
            shift: [
              -0.0625,
              -1.625
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
        },
        shadow: {
          filename: 'graphics/entity/tree/01/tree-01-i-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 113,
          height: 61,
          frame_count: 4,
          shift: [
            1.5625,
            0.0625
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 228,
            height: 118,
            shift: [
              1.5625,
              0.09375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-i-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/01/tree-01-j-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 55,
          height: 127,
          frame_count: 1,
          shift: [
            0,
            -1.625
          ],
          hr_version: {
            width: 110,
            height: 250,
            shift: [
              0,
              -1.5625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-j-trunk.png',
            frame_count: 1,
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
          width: 67,
          height: 115,
          frame_count: 3,
          shift: [
            0,
            -1.625
          ],
          hr_version: {
            width: 134,
            height: 228,
            shift: [
              0,
              -1.59375
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
        },
        shadow: {
          filename: 'graphics/entity/tree/01/tree-01-j-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 109,
          height: 53,
          frame_count: 4,
          shift: [
            1.5,
            -0.125
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 212,
            height: 104,
            shift: [
              1.5625,
              -0.09375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-j-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/01/tree-01-k-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 129,
          height: 111,
          frame_count: 1,
          shift: [
            0.3125,
            -0.4375
          ],
          hr_version: {
            width: 258,
            height: 224,
            shift: [
              0.3125,
              -0.40625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-k-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/01/tree-01-k-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 123,
          height: 95,
          frame_count: 3,
          shift: [
            0.3125,
            -0.5
          ],
          hr_version: {
            width: 250,
            height: 206,
            shift: [
              0.3125,
              -0.375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-k-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/01/tree-01-k-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 129,
          height: 107,
          frame_count: 4,
          shift: [
            0.375,
            -0.4375
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 256,
            height: 212,
            shift: [
              0.40625,
              -0.40625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-k-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/01/tree-01-l-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 309,
          height: 59,
          frame_count: 1,
          shift: [
            1,
            0.1875
          ],
          hr_version: {
            width: 620,
            height: 116,
            shift: [
              1,
              0.21875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-l-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/01/tree-01-l-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 171,
          height: 57,
          frame_count: 3,
          shift: [
            -1.0625,
            0
          ],
          hr_version: {
            width: 354,
            height: 114,
            shift: [
              -0.96875,
              0
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-l-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/01/tree-01-l-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 185,
          height: 49,
          frame_count: 4,
          shift: [
            -0.9375,
            0.125
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 366,
            height: 94,
            shift: [
              -0.90625,
              0.15625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/01/hr-tree-01-l-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      }
    ],
    variation_weights: [
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0.3,
      0.3,
      0.05,
      0.05
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
      mining_time: 0.55,
      result: 'wood',
      count: 4
    },
    corpse: 'tree_02_stump',
    remains_when_mined: 'tree_02_stump',
    emissions_per_second: -0.001,
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
    variations: [
      {
        trunk: {
          filename: 'graphics/entity/tree/02/tree-02-a-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 82,
          height: 162,
          frame_count: 1,
          shift: [
            0,
            -2.0625
          ],
          hr_version: {
            width: 162,
            height: 324,
            shift: [
              0.03125,
              -2.03125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-a-trunk.png',
            frame_count: 1,
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
          width: 96,
          height: 154,
          frame_count: 3,
          shift: [
            -0.0625,
            -2.3125
          ],
          hr_version: {
            width: 184,
            height: 310,
            shift: [
              0,
              -2.3125
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
        },
        shadow: {
          filename: 'graphics/entity/tree/02/tree-02-a-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 196,
          height: 64,
          frame_count: 4,
          shift: [
            2.8125,
            -0.0625
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 384,
            height: 130,
            shift: [
              2.875,
              -0.0625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-a-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/02/tree-02-b-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 76,
          height: 142,
          frame_count: 1,
          shift: [
            -0.125,
            -1.875
          ],
          hr_version: {
            width: 150,
            height: 286,
            shift: [
              -0.09375,
              -1.84375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-b-trunk.png',
            frame_count: 1,
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
          width: 92,
          height: 136,
          frame_count: 3,
          shift: [
            -0.0625,
            -1.9375
          ],
          hr_version: {
            width: 184,
            height: 274,
            shift: [
              -0.0625,
              -1.9375
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
        },
        shadow: {
          filename: 'graphics/entity/tree/02/tree-02-b-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 186,
          height: 68,
          frame_count: 4,
          shift: [
            2.6875,
            0
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 372,
            height: 134,
            shift: [
              2.6875,
              0.03125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-b-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/02/tree-02-c-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 72,
          height: 140,
          frame_count: 1,
          shift: [
            -0.125,
            -1.8125
          ],
          hr_version: {
            width: 144,
            height: 280,
            shift: [
              -0.125,
              -1.78125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-c-trunk.png',
            frame_count: 1,
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
          width: 90,
          height: 130,
          frame_count: 3,
          shift: [
            -0.0625,
            -1.9375
          ],
          hr_version: {
            width: 178,
            height: 264,
            shift: [
              -0.03125,
              -1.9375
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
        },
        shadow: {
          filename: 'graphics/entity/tree/02/tree-02-c-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 176,
          height: 64,
          frame_count: 4,
          shift: [
            2.375,
            -0.0625
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 352,
            height: 128,
            shift: [
              2.40625,
              -0.0625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-c-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/02/tree-02-d-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 72,
          height: 168,
          frame_count: 1,
          shift: [
            0.1875,
            -2.1875
          ],
          hr_version: {
            width: 142,
            height: 336,
            shift: [
              0.21875,
              -2.1875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-d-trunk.png',
            frame_count: 1,
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
          width: 90,
          height: 166,
          frame_count: 3,
          shift: [
            0.1875,
            -2.375
          ],
          hr_version: {
            width: 180,
            height: 330,
            shift: [
              0.1875,
              -2.34375
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
        },
        shadow: {
          filename: 'graphics/entity/tree/02/tree-02-d-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 200,
          height: 66,
          frame_count: 4,
          shift: [
            2.9375,
            -0.125
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 402,
            height: 134,
            shift: [
              2.9375,
              -0.125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-d-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/02/tree-02-e-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 86,
          height: 144,
          frame_count: 1,
          shift: [
            0.0625,
            -1.8125
          ],
          hr_version: {
            width: 168,
            height: 286,
            shift: [
              0.09375,
              -1.78125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-e-trunk.png',
            frame_count: 1,
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
          width: 98,
          height: 140,
          frame_count: 3,
          shift: [
            0,
            -2
          ],
          hr_version: {
            width: 194,
            height: 276,
            shift: [
              0.03125,
              -1.96875
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
        },
        shadow: {
          filename: 'graphics/entity/tree/02/tree-02-e-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 204,
          height: 70,
          frame_count: 4,
          shift: [
            3,
            0.1875
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 410,
            height: 144,
            shift: [
              3,
              0.1875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-e-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/02/tree-02-f-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 74,
          height: 156,
          frame_count: 1,
          shift: [
            -0.375,
            -2
          ],
          hr_version: {
            width: 144,
            height: 310,
            shift: [
              -0.3125,
              -1.96875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-f-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/02/tree-02-f-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 92,
          height: 150,
          frame_count: 3,
          shift: [
            -0.3125,
            -2.125
          ],
          hr_version: {
            width: 184,
            height: 302,
            shift: [
              -0.3125,
              -2.125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-f-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/02/tree-02-f-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 170,
          height: 64,
          frame_count: 4,
          shift: [
            2.375,
            0
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 344,
            height: 130,
            shift: [
              2.34375,
              0
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-f-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/02/tree-02-g-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 86,
          height: 140,
          frame_count: 1,
          shift: [
            0.125,
            -1.75
          ],
          hr_version: {
            width: 168,
            height: 282,
            shift: [
              0.1875,
              -1.75
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-g-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/02/tree-02-g-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 100,
          height: 136,
          frame_count: 3,
          shift: [
            0.125,
            -2.125
          ],
          hr_version: {
            width: 198,
            height: 270,
            shift: [
              0.15625,
              -2.09375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-g-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/02/tree-02-g-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 188,
          height: 64,
          frame_count: 4,
          shift: [
            2.6875,
            -0.1875
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 384,
            height: 122,
            shift: [
              2.625,
              -0.125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-g-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/02/tree-02-h-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 92,
          height: 124,
          frame_count: 1,
          shift: [
            -0.3125,
            -1.5
          ],
          hr_version: {
            width: 182,
            height: 244,
            shift: [
              -0.25,
              -1.46875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-h-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/02/tree-02-h-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 96,
          height: 116,
          frame_count: 3,
          shift: [
            -0.25,
            -1.8125
          ],
          hr_version: {
            width: 192,
            height: 234,
            shift: [
              -0.21875,
              -1.8125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-h-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/02/tree-02-h-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 154,
          height: 60,
          frame_count: 4,
          shift: [
            2.125,
            0.125
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 306,
            height: 118,
            shift: [
              2.15625,
              0.15625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-h-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/02/tree-02-i-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 62,
          height: 102,
          frame_count: 1,
          shift: [
            0.125,
            -1.1875
          ],
          hr_version: {
            width: 126,
            height: 206,
            shift: [
              0.125,
              -1.1875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-i-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/02/tree-02-i-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 78,
          height: 96,
          frame_count: 3,
          shift: [
            0.0625,
            -1.5
          ],
          hr_version: {
            width: 152,
            height: 194,
            shift: [
              0.125,
              -1.5
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-i-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/02/tree-02-i-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 132,
          height: 54,
          frame_count: 4,
          shift: [
            1.875,
            0
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 262,
            height: 110,
            shift: [
              1.90625,
              0
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-i-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/02/tree-02-j-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 64,
          height: 96,
          frame_count: 1,
          shift: [
            -0.25,
            -1.125
          ],
          hr_version: {
            width: 128,
            height: 194,
            shift: [
              -0.25,
              -1.125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-j-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/02/tree-02-j-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 78,
          height: 100,
          frame_count: 3,
          shift: [
            -0.25,
            -1.5
          ],
          hr_version: {
            width: 152,
            height: 198,
            shift: [
              -0.21875,
              -1.46875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-j-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/02/tree-02-j-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 124,
          height: 56,
          frame_count: 4,
          shift: [
            1.6875,
            -0.0625
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 248,
            height: 108,
            shift: [
              1.71875,
              -0.03125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-j-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/02/tree-02-k-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 120,
          height: 124,
          frame_count: 1,
          shift: [
            0.125,
            -0.625
          ],
          hr_version: {
            width: 234,
            height: 244,
            shift: [
              0.1875,
              -0.59375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-k-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/02/tree-02-k-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 106,
          height: 132,
          frame_count: 3,
          shift: [
            0.4375,
            -1
          ],
          hr_version: {
            width: 216,
            height: 264,
            shift: [
              0.40625,
              -0.9375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-k-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/02/tree-02-k-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 124,
          height: 132,
          frame_count: 4,
          shift: [
            0.375,
            -0.625
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 248,
            height: 262,
            shift: [
              0.375,
              -0.59375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-k-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/02/tree-02-l-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 202,
          height: 62,
          frame_count: 1,
          shift: [
            -0.25,
            -0.25
          ],
          hr_version: {
            width: 410,
            height: 122,
            shift: [
              -0.28125,
              -0.21875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-l-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/02/tree-02-l-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 202,
          height: 80,
          frame_count: 3,
          shift: [
            -0.375,
            -0.25
          ],
          hr_version: {
            width: 404,
            height: 156,
            shift: [
              -0.34375,
              -0.1875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-l-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/02/tree-02-l-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 208,
          height: 70,
          frame_count: 4,
          shift: [
            -0.0625,
            0
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 418,
            height: 138,
            shift: [
              -0.0625,
              0.03125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-l-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      }
    ],
    variation_weights: [
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0.3,
      0.3,
      0.05,
      0.05
    ],
    colors: [
      {
        r: 136,
        g: 167,
        b: 97
      },
      {
        r: 111,
        g: 172,
        b: 97
      },
      {
        r: 181,
        g: 183,
        b: 99
      },
      {
        r: 142,
        g: 164,
        b: 87
      },
      {
        r: 185,
        g: 214,
        b: 116
      },
      {
        r: 145,
        g: 172,
        b: 88
      },
      {
        r: 164,
        g: 175,
        b: 73
      },
      {
        r: 171,
        g: 180,
        b: 103
      },
      {
        r: 160,
        g: 204,
        b: 89
      },
      {
        r: 135,
        g: 180,
        b: 101
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
      mining_time: 0.55,
      result: 'wood',
      count: 4
    },
    corpse: 'tree_03_stump',
    remains_when_mined: 'tree_03_stump',
    emissions_per_second: -0.001,
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
    variations: [
      {
        trunk: {
          filename: 'graphics/entity/tree/03/tree-03-a-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 135,
          height: 157,
          frame_count: 1,
          shift: [
            -0.1875,
            -1.75
          ],
          hr_version: {
            width: 264,
            height: 312,
            shift: [
              -0.15625,
              -1.75
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-a-trunk.png',
            frame_count: 1,
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
          width: 141,
          height: 153,
          frame_count: 3,
          shift: [
            -0.25,
            -2.3125
          ],
          hr_version: {
            width: 282,
            height: 304,
            shift: [
              -0.25,
              -2.3125
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
        },
        shadow: {
          filename: 'graphics/entity/tree/03/tree-03-a-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 153,
          height: 101,
          frame_count: 4,
          shift: [
            1.875,
            -0.4375
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 300,
            height: 202,
            shift: [
              1.90625,
              -0.4375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-a-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/03/tree-03-b-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 127,
          height: 157,
          frame_count: 1,
          shift: [
            0.625,
            -1.8125
          ],
          hr_version: {
            width: 252,
            height: 314,
            shift: [
              0.625,
              -1.8125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-b-trunk.png',
            frame_count: 1,
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
          width: 171,
          height: 137,
          frame_count: 3,
          shift: [
            0.6875,
            -2.5
          ],
          hr_version: {
            width: 342,
            height: 272,
            shift: [
              0.6875,
              -2.5
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
        },
        shadow: {
          filename: 'graphics/entity/tree/03/tree-03-b-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 203,
          height: 117,
          frame_count: 4,
          shift: [
            2.6875,
            -0.375
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 406,
            height: 230,
            shift: [
              2.6875,
              -0.34375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-b-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/03/tree-03-c-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 135,
          height: 125,
          frame_count: 1,
          shift: [
            -0.3125,
            -1.375
          ],
          hr_version: {
            width: 268,
            height: 246,
            shift: [
              -0.28125,
              -1.34375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-c-trunk.png',
            frame_count: 1,
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
          width: 161,
          height: 117,
          frame_count: 3,
          shift: [
            -0.3125,
            -1.5
          ],
          hr_version: {
            width: 314,
            height: 232,
            shift: [
              -0.25,
              -1.5
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
        },
        shadow: {
          filename: 'graphics/entity/tree/03/tree-03-c-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 323,
          height: 97,
          frame_count: 4,
          shift: [
            -0.8125,
            0.25
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 646,
            height: 188,
            shift: [
              -0.8125,
              0.28125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-c-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/03/tree-03-d-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 73,
          height: 145,
          frame_count: 1,
          shift: [
            0.1875,
            -1.625
          ],
          hr_version: {
            width: 142,
            height: 286,
            shift: [
              0.21875,
              -1.59375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-d-trunk.png',
            frame_count: 1,
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
          width: 103,
          height: 129,
          frame_count: 3,
          shift: [
            0.25,
            -2.125
          ],
          hr_version: {
            width: 202,
            height: 254,
            shift: [
              0.28125,
              -2.09375
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
        },
        shadow: {
          filename: 'graphics/entity/tree/03/tree-03-d-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 159,
          height: 79,
          frame_count: 4,
          shift: [
            2.0625,
            0
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 318,
            height: 156,
            shift: [
              2.0625,
              0
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-d-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/03/tree-03-e-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 89,
          height: 127,
          frame_count: 1,
          shift: [
            0.1875,
            -1.5
          ],
          hr_version: {
            width: 174,
            height: 250,
            shift: [
              0.21875,
              -1.46875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-e-trunk.png',
            frame_count: 1,
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
          height: 105,
          frame_count: 3,
          shift: [
            0.25,
            -1.9375
          ],
          hr_version: {
            width: 234,
            height: 208,
            shift: [
              0.25,
              -1.90625
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
        },
        shadow: {
          filename: 'graphics/entity/tree/03/tree-03-e-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 167,
          height: 69,
          frame_count: 4,
          shift: [
            2.1875,
            0
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 330,
            height: 132,
            shift: [
              2.21875,
              0.03125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-e-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/03/tree-03-f-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 79,
          height: 133,
          frame_count: 1,
          shift: [
            -0.375,
            -1.5625
          ],
          hr_version: {
            width: 158,
            height: 262,
            shift: [
              -0.375,
              -1.53125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-f-trunk.png',
            frame_count: 1,
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
          width: 109,
          height: 119,
          frame_count: 3,
          shift: [
            -0.4375,
            -1.8125
          ],
          hr_version: {
            width: 214,
            height: 232,
            shift: [
              -0.40625,
              -1.78125
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
        },
        shadow: {
          filename: 'graphics/entity/tree/03/tree-03-f-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 113,
          height: 73,
          frame_count: 4,
          shift: [
            1.5,
            -0.125
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 224,
            height: 142,
            shift: [
              1.5,
              -0.09375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-f-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/03/tree-03-g-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 73,
          height: 123,
          frame_count: 1,
          shift: [
            -0.3125,
            -1.3125
          ],
          hr_version: {
            width: 140,
            height: 240,
            shift: [
              -0.28125,
              -1.28125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-g-trunk.png',
            frame_count: 1,
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
          width: 95,
          height: 117,
          frame_count: 3,
          shift: [
            0,
            -1.8125
          ],
          hr_version: {
            width: 188,
            height: 230,
            shift: [
              0.03125,
              -1.78125
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
        },
        shadow: {
          filename: 'graphics/entity/tree/03/tree-03-g-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 107,
          height: 71,
          frame_count: 4,
          shift: [
            1.375,
            -0.1875
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 212,
            height: 136,
            shift: [
              1.375,
              -0.15625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-g-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/03/tree-03-h-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 87,
          height: 115,
          frame_count: 1,
          shift: [
            0.0625,
            -1.1875
          ],
          hr_version: {
            width: 174,
            height: 224,
            shift: [
              0.0625,
              -1.15625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-h-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/03/tree-03-h-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 93,
          height: 103,
          frame_count: 3,
          shift: [
            0.1875,
            -1.375
          ],
          hr_version: {
            width: 182,
            height: 200,
            shift: [
              0.21875,
              -1.34375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-h-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/03/tree-03-h-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 131,
          height: 69,
          frame_count: 4,
          shift: [
            1.6875,
            -0.0625
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 258,
            height: 132,
            shift: [
              1.71875,
              -0.03125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-h-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/03/tree-03-i-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 99,
          height: 101,
          frame_count: 1,
          shift: [
            0.0625,
            -1.0625
          ],
          hr_version: {
            width: 196,
            height: 202,
            shift: [
              0.0625,
              -1.0625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-i-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/03/tree-03-i-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 99,
          height: 91,
          frame_count: 3,
          shift: [
            -0.0625,
            -1.3125
          ],
          hr_version: {
            width: 198,
            height: 178,
            shift: [
              -0.03125,
              -1.28125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-i-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/03/tree-03-i-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 109,
          height: 61,
          frame_count: 4,
          shift: [
            1.5,
            0.125
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 218,
            height: 120,
            shift: [
              1.5,
              0.125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-i-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/03/tree-03-j-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 51,
          height: 95,
          frame_count: 1,
          shift: [
            0.1875,
            -1.0625
          ],
          hr_version: {
            width: 100,
            height: 188,
            shift: [
              0.1875,
              -1.0625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-j-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/03/tree-03-j-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 57,
          height: 85,
          frame_count: 3,
          shift: [
            0.1875,
            -1.375
          ],
          hr_version: {
            width: 112,
            height: 166,
            shift: [
              0.1875,
              -1.34375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-j-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/03/tree-03-j-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 89,
          height: 55,
          frame_count: 4,
          shift: [
            1.1875,
            -0.0625
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 178,
            height: 110,
            shift: [
              1.21875,
              -0.0625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-j-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/03/tree-03-k-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 47,
          height: 69,
          frame_count: 1,
          shift: [
            0.25,
            -0.75
          ],
          hr_version: {
            width: 92,
            height: 134,
            shift: [
              0.25,
              -0.71875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-k-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/03/tree-03-k-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 69,
          height: 63,
          frame_count: 3,
          shift: [
            0.125,
            -1
          ],
          hr_version: {
            width: 140,
            height: 126,
            shift: [
              0.125,
              -1
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-k-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/03/tree-03-k-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 85,
          height: 35,
          frame_count: 4,
          shift: [
            1.1875,
            0.0625
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 170,
            height: 66,
            shift: [
              1.1875,
              0.09375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-k-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/03/tree-03-l-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 59,
          height: 85,
          frame_count: 1,
          shift: [
            -0.3125,
            -0.9375
          ],
          hr_version: {
            width: 112,
            height: 166,
            shift: [
              -0.28125,
              -0.90625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-l-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/03/tree-03-l-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 79,
          height: 71,
          frame_count: 3,
          shift: [
            -0.4375,
            -1.3125
          ],
          hr_version: {
            width: 154,
            height: 142,
            shift: [
              -0.40625,
              -1.3125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-l-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/03/tree-03-l-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 73,
          height: 47,
          frame_count: 4,
          shift: [
            0.9375,
            -0.1875
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 142,
            height: 90,
            shift: [
              0.96875,
              -0.15625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/03/hr-tree-03-l-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      }
    ],
    colors: [
      {
        r: 187,
        g: 199,
        b: 102
      },
      {
        r: 217,
        g: 193,
        b: 88
      },
      {
        r: 174,
        g: 195,
        b: 51
      },
      {
        r: 199,
        g: 219,
        b: 117
      },
      {
        r: 169,
        g: 213,
        b: 105
      },
      {
        r: 213,
        g: 198,
        b: 87
      },
      {
        r: 201,
        g: 151,
        b: 77
      },
      {
        r: 219,
        g: 173,
        b: 91
      },
      {
        r: 213,
        g: 193,
        b: 95
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
      mining_time: 0.55,
      result: 'wood',
      count: 4
    },
    corpse: 'tree_04_stump',
    remains_when_mined: 'tree_04_stump',
    emissions_per_second: -0.001,
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
    variations: [
      {
        trunk: {
          filename: 'graphics/entity/tree/04/tree-04-a-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 86,
          height: 160,
          frame_count: 1,
          shift: [
            -0.125,
            -1.875
          ],
          hr_version: {
            width: 174,
            height: 316,
            shift: [
              -0.125,
              -1.8125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-a-trunk.png',
            frame_count: 1,
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
          width: 108,
          height: 154,
          frame_count: 3,
          shift: [
            -0.125,
            -2.125
          ],
          hr_version: {
            width: 216,
            height: 314,
            shift: [
              -0.09375,
              -2.09375
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
        },
        shadow: {
          filename: 'graphics/entity/tree/04/tree-04-a-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 160,
          height: 66,
          frame_count: 4,
          shift: [
            2,
            -0.1875
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 318,
            height: 130,
            shift: [
              2.03125,
              -0.15625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-a-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/04/tree-04-b-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 72,
          height: 166,
          frame_count: 1,
          shift: [
            0.125,
            -1.875
          ],
          hr_version: {
            width: 142,
            height: 334,
            shift: [
              0.15625,
              -1.875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-b-trunk.png',
            frame_count: 1,
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
          width: 92,
          height: 146,
          frame_count: 3,
          shift: [
            0.125,
            -2.3125
          ],
          hr_version: {
            width: 184,
            height: 302,
            shift: [
              0.125,
              -2.25
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
        },
        shadow: {
          filename: 'graphics/entity/tree/04/tree-04-b-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 154,
          height: 78,
          frame_count: 4,
          shift: [
            2.125,
            -0.125
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 308,
            height: 154,
            shift: [
              2.125,
              -0.09375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-b-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/04/tree-04-c-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 88,
          height: 162,
          frame_count: 1,
          shift: [
            0.125,
            -1.875
          ],
          hr_version: {
            width: 176,
            height: 328,
            shift: [
              0.125,
              -1.875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-c-trunk.png',
            frame_count: 1,
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
          width: 104,
          height: 164,
          frame_count: 3,
          shift: [
            0.0625,
            -2.0625
          ],
          hr_version: {
            width: 208,
            height: 324,
            shift: [
              0.0625,
              -2
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
        },
        shadow: {
          filename: 'graphics/entity/tree/04/tree-04-c-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 158,
          height: 70,
          frame_count: 4,
          shift: [
            2.0625,
            0
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 312,
            height: 134,
            shift: [
              2.09375,
              0.0625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-c-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/04/tree-04-d-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 108,
          height: 132,
          frame_count: 1,
          shift: [
            0.0625,
            -1.5
          ],
          hr_version: {
            width: 216,
            height: 266,
            shift: [
              0.0625,
              -1.5
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-d-trunk.png',
            frame_count: 1,
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
          width: 114,
          height: 148,
          frame_count: 3,
          shift: [
            -0.1875,
            -2.0625
          ],
          hr_version: {
            width: 230,
            height: 290,
            shift: [
              -0.1875,
              -2
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
        },
        shadow: {
          filename: 'graphics/entity/tree/04/tree-04-d-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 158,
          height: 78,
          frame_count: 4,
          shift: [
            2.1875,
            0
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 320,
            height: 158,
            shift: [
              2.15625,
              0
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-d-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/04/tree-04-e-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 80,
          height: 164,
          frame_count: 1,
          shift: [
            -0.3125,
            -2
          ],
          hr_version: {
            width: 158,
            height: 324,
            shift: [
              -0.28125,
              -1.9375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-e-trunk.png',
            frame_count: 1,
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
          width: 110,
          height: 138,
          frame_count: 3,
          shift: [
            -0.125,
            -2.625
          ],
          hr_version: {
            width: 222,
            height: 280,
            shift: [
              -0.125,
              -2.625
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
        },
        shadow: {
          filename: 'graphics/entity/tree/04/tree-04-e-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 138,
          height: 88,
          frame_count: 4,
          shift: [
            1.875,
            -0.125
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 274,
            height: 170,
            shift: [
              1.90625,
              -0.0625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-e-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/04/tree-04-f-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 96,
          height: 164,
          frame_count: 1,
          shift: [
            0.125,
            -1.9375
          ],
          hr_version: {
            width: 194,
            height: 332,
            shift: [
              0.125,
              -1.9375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-f-trunk.png',
            frame_count: 1,
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
          width: 112,
          height: 134,
          frame_count: 3,
          shift: [
            0.3125,
            -2.5625
          ],
          hr_version: {
            width: 224,
            height: 272,
            shift: [
              0.34375,
              -2.5625
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
        },
        shadow: {
          filename: 'graphics/entity/tree/04/tree-04-f-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 168,
          height: 78,
          frame_count: 4,
          shift: [
            2.1875,
            -0.125
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 332,
            height: 156,
            shift: [
              2.25,
              -0.125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-f-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/04/tree-04-g-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 92,
          height: 142,
          frame_count: 1,
          shift: [
            -0.4375,
            -1.6875
          ],
          hr_version: {
            width: 178,
            height: 282,
            shift: [
              -0.375,
              -1.65625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-g-trunk.png',
            frame_count: 1,
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
          width: 112,
          height: 130,
          frame_count: 3,
          shift: [
            -0.375,
            -2.375
          ],
          hr_version: {
            width: 222,
            height: 258,
            shift: [
              -0.34375,
              -2.34375
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
        },
        shadow: {
          filename: 'graphics/entity/tree/04/tree-04-g-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 148,
          height: 72,
          frame_count: 4,
          shift: [
            1.75,
            -0.25
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 296,
            height: 144,
            shift: [
              1.75,
              -0.21875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-g-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/04/tree-04-h-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 64,
          height: 144,
          frame_count: 1,
          shift: [
            -0.0625,
            -1.6875
          ],
          hr_version: {
            width: 128,
            height: 284,
            shift: [
              -0.0625,
              -1.65625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-h-trunk.png',
            frame_count: 1,
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
          width: 100,
          height: 142,
          frame_count: 3,
          shift: [
            0.25,
            -1.875
          ],
          hr_version: {
            width: 202,
            height: 280,
            shift: [
              0.25,
              -1.78125
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
        },
        shadow: {
          filename: 'graphics/entity/tree/04/tree-04-h-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 148,
          height: 74,
          frame_count: 4,
          shift: [
            2.0625,
            -0.25
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 292,
            height: 152,
            shift: [
              2.09375,
              -0.25
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-h-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/04/tree-04-i-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 48,
          height: 122,
          frame_count: 1,
          shift: [
            0.1875,
            -1.4375
          ],
          hr_version: {
            width: 92,
            height: 246,
            shift: [
              0.21875,
              -1.4375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-i-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/04/tree-04-i-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 70,
          height: 122,
          frame_count: 3,
          shift: [
            0.1875,
            -1.625
          ],
          hr_version: {
            width: 140,
            height: 240,
            shift: [
              0.1875,
              -1.5625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-i-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/04/tree-04-i-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 124,
          height: 66,
          frame_count: 4,
          shift: [
            1.75,
            0.1875
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 244,
            height: 128,
            shift: [
              1.78125,
              0.21875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-i-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/04/tree-04-j-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 48,
          height: 120,
          frame_count: 1,
          shift: [
            -0.25,
            -1.5
          ],
          hr_version: {
            width: 98,
            height: 238,
            shift: [
              -0.25,
              -1.46875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-j-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/04/tree-04-j-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 70,
          height: 128,
          frame_count: 3,
          shift: [
            -0.25,
            -1.75
          ],
          hr_version: {
            width: 140,
            height: 254,
            shift: [
              -0.25,
              -1.71875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-j-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/04/tree-04-j-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 116,
          height: 64,
          frame_count: 4,
          shift: [
            1.4375,
            -0.25
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 228,
            height: 122,
            shift: [
              1.46875,
              -0.1875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-j-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/04/tree-04-k-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 204,
          height: 80,
          frame_count: 1,
          shift: [
            -0.5,
            -0.375
          ],
          hr_version: {
            width: 406,
            height: 158,
            shift: [
              -0.46875,
              -0.34375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-k-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/04/tree-04-k-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 208,
          height: 80,
          frame_count: 3,
          shift: [
            -0.625,
            -0.6875
          ],
          hr_version: {
            width: 414,
            height: 164,
            shift: [
              -0.59375,
              -0.59375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-k-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/04/tree-04-k-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 208,
          height: 62,
          frame_count: 4,
          shift: [
            -0.25,
            -0.25
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 410,
            height: 124,
            shift: [
              -0.1875,
              -0.25
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-k-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/04/tree-04-l-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 156,
          height: 126,
          frame_count: 1,
          shift: [
            0.125,
            -0.125
          ],
          hr_version: {
            width: 312,
            height: 250,
            shift: [
              0.125,
              -0.09375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-l-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/04/tree-04-l-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 156,
          height: 118,
          frame_count: 3,
          shift: [
            0.3125,
            0.0625
          ],
          hr_version: {
            width: 314,
            height: 240,
            shift: [
              0.3125,
              0.03125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-l-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/04/tree-04-l-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 180,
          height: 126,
          frame_count: 4,
          shift: [
            0.8125,
            0.1875
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 366,
            height: 250,
            shift: [
              0.78125,
              0.21875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/04/hr-tree-04-l-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      }
    ],
    variation_weights: [
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0.3,
      0.3,
      0.05,
      0.05
    ],
    colors: [
      {
        r: 173,
        g: 209,
        b: 123
      },
      {
        r: 151,
        g: 188,
        b: 100
      },
      {
        r: 165,
        g: 198,
        b: 117
      },
      {
        r: 180,
        g: 211,
        b: 140
      },
      {
        r: 145,
        g: 207,
        b: 125
      },
      {
        r: 129,
        g: 181,
        b: 111
      },
      {
        r: 130,
        g: 185,
        b: 115
      },
      {
        r: 151,
        g: 189,
        b: 140
      },
      {
        r: 179,
        g: 207,
        b: 118
      },
      {
        r: 139,
        g: 214,
        b: 151
      },
      {
        r: 156,
        g: 198,
        b: 166
      },
      {
        r: 157,
        g: 177,
        b: 121
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
      mining_time: 0.55,
      result: 'wood',
      count: 4
    },
    corpse: 'tree_05_stump',
    remains_when_mined: 'tree_05_stump',
    emissions_per_second: -0.001,
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
    variations: [
      {
        trunk: {
          filename: 'graphics/entity/tree/05/tree-05-a-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 74,
          height: 120,
          frame_count: 1,
          shift: [
            0.375,
            -1.375
          ],
          hr_version: {
            width: 144,
            height: 242,
            shift: [
              0.40625,
              -1.40625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-a-trunk.png',
            frame_count: 1,
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
          height: 130,
          frame_count: 3,
          shift: [
            0.1875,
            -1.875
          ],
          hr_version: {
            width: 234,
            height: 258,
            shift: [
              0.15625,
              -1.875
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
        },
        shadow: {
          filename: 'graphics/entity/tree/05/tree-05-a-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 160,
          height: 76,
          frame_count: 4,
          shift: [
            1.9375,
            -0.25
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 322,
            height: 150,
            shift: [
              1.9375,
              -0.25
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-a-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/05/tree-05-b-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 60,
          height: 114,
          frame_count: 1,
          shift: [
            0,
            -1.25
          ],
          hr_version: {
            width: 114,
            height: 226,
            shift: [
              0.03125,
              -1.25
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-b-trunk.png',
            frame_count: 1,
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
          width: 112,
          height: 122,
          frame_count: 3,
          shift: [
            0.1875,
            -1.875
          ],
          hr_version: {
            width: 222,
            height: 242,
            shift: [
              0.1875,
              -1.875
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
        },
        shadow: {
          filename: 'graphics/entity/tree/05/tree-05-b-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 146,
          height: 82,
          frame_count: 4,
          shift: [
            1.8125,
            0.0625
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 290,
            height: 166,
            shift: [
              1.8125,
              0.03125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-b-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/05/tree-05-c-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 60,
          height: 138,
          frame_count: 1,
          shift: [
            -0.3125,
            -1.6875
          ],
          hr_version: {
            width: 122,
            height: 276,
            shift: [
              -0.3125,
              -1.6875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-c-trunk.png',
            frame_count: 1,
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
          width: 112,
          height: 148,
          frame_count: 3,
          shift: [
            -0.0625,
            -2.0625
          ],
          hr_version: {
            width: 224,
            height: 290,
            shift: [
              -0.0625,
              -2.03125
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
        },
        shadow: {
          filename: 'graphics/entity/tree/05/tree-05-c-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 136,
          height: 84,
          frame_count: 4,
          shift: [
            1.625,
            0.0625
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 272,
            height: 162,
            shift: [
              1.625,
              0.09375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-c-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/05/tree-05-d-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 60,
          height: 122,
          frame_count: 1,
          shift: [
            0.125,
            -1.375
          ],
          hr_version: {
            width: 120,
            height: 244,
            shift: [
              0.125,
              -1.375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-d-trunk.png',
            frame_count: 1,
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
          width: 100,
          height: 124,
          frame_count: 3,
          shift: [
            0.1875,
            -1.875
          ],
          hr_version: {
            width: 202,
            height: 244,
            shift: [
              0.15625,
              -1.84375
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
        },
        shadow: {
          filename: 'graphics/entity/tree/05/tree-05-d-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 140,
          height: 84,
          frame_count: 4,
          shift: [
            1.6875,
            -0.0625
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 278,
            height: 168,
            shift: [
              1.6875,
              -0.0625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-d-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/05/tree-05-e-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 54,
          height: 118,
          frame_count: 1,
          shift: [
            0,
            -1.375
          ],
          hr_version: {
            width: 106,
            height: 232,
            shift: [
              0,
              -1.34375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-e-trunk.png',
            frame_count: 1,
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
          width: 118,
          height: 126,
          frame_count: 3,
          shift: [
            -0.0625,
            -1.8125
          ],
          hr_version: {
            width: 236,
            height: 250,
            shift: [
              -0.0625,
              -1.78125
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
        },
        shadow: {
          filename: 'graphics/entity/tree/05/tree-05-e-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 136,
          height: 72,
          frame_count: 4,
          shift: [
            1.625,
            0.0625
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 268,
            height: 144,
            shift: [
              1.65625,
              0.0625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-e-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/05/tree-05-f-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 58,
          height: 120,
          frame_count: 1,
          shift: [
            -0.3125,
            -1.375
          ],
          hr_version: {
            width: 112,
            height: 236,
            shift: [
              -0.28125,
              -1.34375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-f-trunk.png',
            frame_count: 1,
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
          width: 98,
          height: 126,
          frame_count: 3,
          shift: [
            -0.125,
            -1.6875
          ],
          hr_version: {
            width: 194,
            height: 252,
            shift: [
              -0.125,
              -1.6875
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
        },
        shadow: {
          filename: 'graphics/entity/tree/05/tree-05-f-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 136,
          height: 86,
          frame_count: 4,
          shift: [
            1.625,
            -0.0625
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 272,
            height: 168,
            shift: [
              1.625,
              -0.03125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-f-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/05/tree-05-g-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 44,
          height: 108,
          frame_count: 1,
          shift: [
            0,
            -1.25
          ],
          hr_version: {
            width: 86,
            height: 214,
            shift: [
              0,
              -1.25
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-g-trunk.png',
            frame_count: 1,
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
          width: 90,
          height: 112,
          frame_count: 3,
          shift: [
            0,
            -1.625
          ],
          hr_version: {
            width: 178,
            height: 220,
            shift: [
              0,
              -1.59375
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
        },
        shadow: {
          filename: 'graphics/entity/tree/05/tree-05-g-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 120,
          height: 84,
          frame_count: 4,
          shift: [
            1.3125,
            -0.1875
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 238,
            height: 164,
            shift: [
              1.3125,
              -0.15625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-g-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/05/tree-05-h-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 74,
          height: 108,
          frame_count: 1,
          shift: [
            0.1875,
            -1.25
          ],
          hr_version: {
            width: 144,
            height: 212,
            shift: [
              0.21875,
              -1.21875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-h-trunk.png',
            frame_count: 1,
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
          width: 114,
          height: 100,
          frame_count: 3,
          shift: [
            0.1875,
            -1.5
          ],
          hr_version: {
            width: 228,
            height: 196,
            shift: [
              0.1875,
              -1.46875
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
        },
        shadow: {
          filename: 'graphics/entity/tree/05/tree-05-h-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 134,
          height: 62,
          frame_count: 4,
          shift: [
            1.5625,
            0
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 270,
            height: 122,
            shift: [
              1.53125,
              0
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-h-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/05/tree-05-i-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 34,
          height: 92,
          frame_count: 1,
          shift: [
            -0.0625,
            -1.0625
          ],
          hr_version: {
            width: 70,
            height: 184,
            shift: [
              -0.09375,
              -1.0625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-i-trunk.png',
            frame_count: 1,
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
          width: 84,
          height: 102,
          frame_count: 3,
          shift: [
            -0.1875,
            -1.4375
          ],
          hr_version: {
            width: 166,
            height: 200,
            shift: [
              -0.15625,
              -1.40625
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
        },
        shadow: {
          filename: 'graphics/entity/tree/05/tree-05-i-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 108,
          height: 62,
          frame_count: 4,
          shift: [
            1.25,
            -0.125
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 214,
            height: 118,
            shift: [
              1.25,
              -0.09375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-i-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/05/tree-05-j-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 36,
          height: 84,
          frame_count: 1,
          shift: [
            0.0625,
            -0.9375
          ],
          hr_version: {
            width: 66,
            height: 162,
            shift: [
              0.09375,
              -0.90625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-j-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/05/tree-05-j-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 74,
          height: 94,
          frame_count: 3,
          shift: [
            0,
            -1.3125
          ],
          hr_version: {
            width: 142,
            height: 184,
            shift: [
              0.03125,
              -1.28125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-j-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/05/tree-05-j-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 98,
          height: 66,
          frame_count: 4,
          shift: [
            1.25,
            0
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 192,
            height: 126,
            shift: [
              1.28125,
              0.03125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-j-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/05/tree-05-k-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 140,
          height: 90,
          frame_count: 1,
          shift: [
            -0.5625,
            0.25
          ],
          hr_version: {
            width: 274,
            height: 176,
            shift: [
              -0.53125,
              0.28125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-k-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/05/tree-05-k-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 120,
          height: 84,
          frame_count: 3,
          shift: [
            -0.9375,
            0.1875
          ],
          hr_version: {
            width: 234,
            height: 162,
            shift: [
              -0.90625,
              0.21875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-k-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/05/tree-05-k-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 140,
          height: 80,
          frame_count: 4,
          shift: [
            -0.4375,
            0.375
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 276,
            height: 160,
            shift: [
              -0.40625,
              0.375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-k-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/05/tree-05-l-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 124,
          height: 94,
          frame_count: 1,
          shift: [
            0.5,
            -0.6875
          ],
          hr_version: {
            width: 252,
            height: 186,
            shift: [
              0.46875,
              -0.6875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-l-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/05/tree-05-l-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 124,
          height: 82,
          frame_count: 3,
          shift: [
            0.5,
            -0.9375
          ],
          hr_version: {
            width: 252,
            height: 164,
            shift: [
              0.46875,
              -0.9375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-l-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/05/tree-05-l-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 128,
          height: 94,
          frame_count: 4,
          shift: [
            0.6875,
            -0.5625
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 258,
            height: 186,
            shift: [
              0.65625,
              -0.5625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/05/hr-tree-05-l-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      }
    ],
    variation_weights: [
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0.3,
      0.3,
      0.05,
      0.05
    ],
    colors: [
      {
        r: 143,
        g: 166,
        b: 91
      },
      {
        r: 137,
        g: 163,
        b: 74
      },
      {
        r: 155,
        g: 184,
        b: 86
      },
      {
        r: 147,
        g: 168,
        b: 94
      },
      {
        r: 127,
        g: 163,
        b: 76
      },
      {
        r: 146,
        g: 166,
        b: 79
      },
      {
        r: 151,
        g: 173,
        b: 74
      },
      {
        r: 145,
        g: 166,
        b: 77
      },
      {
        r: 178,
        g: 179,
        b: 79
      },
      {
        r: 173,
        g: 173,
        b: 82
      },
      {
        r: 172,
        g: 173,
        b: 81
      },
      {
        r: 167,
        g: 168,
        b: 96
      },
      {
        r: 201,
        g: 202,
        b: 117
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
      mining_time: 0.55,
      result: 'wood',
      count: 4
    },
    corpse: 'tree_09_stump',
    remains_when_mined: 'tree_09_stump',
    emissions_per_second: -0.001,
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
    variations: [
      {
        trunk: {
          filename: 'graphics/entity/tree/09/tree-09-a-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 154,
          height: 194,
          frame_count: 1,
          shift: [
            0,
            -2.125
          ],
          hr_version: {
            width: 308,
            height: 392,
            shift: [
              0,
              -2.125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-a-trunk.png',
            frame_count: 1,
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
          width: 174,
          height: 196,
          frame_count: 3,
          shift: [
            0,
            -2.5
          ],
          hr_version: {
            width: 350,
            height: 390,
            shift: [
              0,
              -2.4375
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
        },
        shadow: {
          filename: 'graphics/entity/tree/09/tree-09-a-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 232,
          height: 106,
          frame_count: 4,
          shift: [
            2.625,
            0
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 458,
            height: 214,
            shift: [
              2.6875,
              0
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-a-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/09/tree-09-b-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 146,
          height: 196,
          frame_count: 1,
          shift: [
            0.25,
            -2.1875
          ],
          hr_version: {
            width: 294,
            height: 390,
            shift: [
              0.25,
              -2.15625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-b-trunk.png',
            frame_count: 1,
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
          width: 168,
          height: 182,
          frame_count: 3,
          shift: [
            0.1875,
            -2.75
          ],
          hr_version: {
            width: 334,
            height: 368,
            shift: [
              0.21875,
              -2.75
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
        },
        shadow: {
          filename: 'graphics/entity/tree/09/tree-09-b-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 186,
          height: 114,
          frame_count: 4,
          shift: [
            2.5625,
            0.1875
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 374,
            height: 226,
            shift: [
              2.5625,
              0.21875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-b-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/09/tree-09-c-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 130,
          height: 196,
          frame_count: 1,
          shift: [
            -0.125,
            -2.0625
          ],
          hr_version: {
            width: 258,
            height: 392,
            shift: [
              -0.09375,
              -2.03125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-c-trunk.png',
            frame_count: 1,
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
          width: 134,
          height: 202,
          frame_count: 3,
          shift: [
            0.0625,
            -2.4375
          ],
          hr_version: {
            width: 266,
            height: 408,
            shift: [
              0.09375,
              -2.4375
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
        },
        shadow: {
          filename: 'graphics/entity/tree/09/tree-09-c-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 184,
          height: 110,
          frame_count: 4,
          shift: [
            2.25,
            -0.125
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 364,
            height: 222,
            shift: [
              2.28125,
              -0.125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-c-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/09/tree-09-d-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 132,
          height: 172,
          frame_count: 1,
          shift: [
            0.125,
            -1.75
          ],
          hr_version: {
            width: 264,
            height: 348,
            shift: [
              0.125,
              -1.75
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-d-trunk.png',
            frame_count: 1,
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
          width: 144,
          height: 152,
          frame_count: 3,
          shift: [
            -0.0625,
            -2.375
          ],
          hr_version: {
            width: 284,
            height: 308,
            shift: [
              -0.03125,
              -2.375
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
        },
        shadow: {
          filename: 'graphics/entity/tree/09/tree-09-d-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 172,
          height: 118,
          frame_count: 4,
          shift: [
            2.5,
            -0.0625
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 344,
            height: 232,
            shift: [
              2.5,
              -0.03125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-d-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/09/tree-09-e-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 126,
          height: 138,
          frame_count: 1,
          shift: [
            0.3125,
            -1.4375
          ],
          hr_version: {
            width: 252,
            height: 272,
            shift: [
              0.3125,
              -1.375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-e-trunk.png',
            frame_count: 1,
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
          width: 138,
          height: 130,
          frame_count: 3,
          shift: [
            0.375,
            -1.75
          ],
          hr_version: {
            width: 280,
            height: 264,
            shift: [
              0.375,
              -1.75
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
        },
        shadow: {
          filename: 'graphics/entity/tree/09/tree-09-e-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 154,
          height: 96,
          frame_count: 4,
          shift: [
            2.25,
            0.375
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 306,
            height: 190,
            shift: [
              2.28125,
              0.40625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-e-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/09/tree-09-f-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 124,
          height: 144,
          frame_count: 1,
          shift: [
            -0.625,
            -1.5
          ],
          hr_version: {
            width: 246,
            height: 286,
            shift: [
              -0.59375,
              -1.46875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-f-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/09/tree-09-f-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 128,
          height: 146,
          frame_count: 3,
          shift: [
            -0.3125,
            -1.875
          ],
          hr_version: {
            width: 260,
            height: 288,
            shift: [
              -0.34375,
              -1.8125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-f-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/09/tree-09-f-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 142,
          height: 96,
          frame_count: 4,
          shift: [
            1.6875,
            0.1875
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 282,
            height: 184,
            shift: [
              1.71875,
              0.25
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-f-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/09/tree-09-g-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 122,
          height: 156,
          frame_count: 1,
          shift: [
            -0.375,
            -1.625
          ],
          hr_version: {
            width: 240,
            height: 312,
            shift: [
              -0.34375,
              -1.625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-g-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/09/tree-09-g-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 134,
          height: 148,
          frame_count: 3,
          shift: [
            -0.4375,
            -2.125
          ],
          hr_version: {
            width: 266,
            height: 296,
            shift: [
              -0.40625,
              -2.09375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-g-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/09/tree-09-g-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 156,
          height: 90,
          frame_count: 4,
          shift: [
            1.6875,
            -0.4375
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 310,
            height: 182,
            shift: [
              1.71875,
              -0.4375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-g-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/09/tree-09-h-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 128,
          height: 156,
          frame_count: 1,
          shift: [
            0.5625,
            -1.625
          ],
          hr_version: {
            width: 256,
            height: 312,
            shift: [
              0.5625,
              -1.625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-h-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/09/tree-09-h-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 122,
          height: 148,
          frame_count: 3,
          shift: [
            0.5625,
            -2.0625
          ],
          hr_version: {
            width: 250,
            height: 292,
            shift: [
              0.5625,
              -2
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-h-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/09/tree-09-h-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 150,
          height: 96,
          frame_count: 4,
          shift: [
            2.3125,
            -0.3125
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 296,
            height: 192,
            shift: [
              2.34375,
              -0.3125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-h-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      }
    ],
    colors: [
      {
        r: 163,
        g: 188,
        b: 111
      },
      {
        r: 153,
        g: 175,
        b: 90
      },
      {
        r: 156,
        g: 172,
        b: 78
      },
      {
        r: 177,
        g: 165,
        b: 82
      },
      {
        r: 167,
        g: 150,
        b: 83
      },
      {
        r: 158,
        g: 183,
        b: 87
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
      mining_time: 0.55,
      result: 'wood',
      count: 4
    },
    corpse: 'tree_02_stump',
    remains_when_mined: 'tree_02_stump',
    emissions_per_second: -0.001,
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
    variations: [
      {
        trunk: {
          filename: 'graphics/entity/tree/02/tree-02-a-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 82,
          height: 162,
          frame_count: 1,
          shift: [
            0,
            -2.0625
          ],
          hr_version: {
            width: 162,
            height: 324,
            shift: [
              0.03125,
              -2.03125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-a-trunk.png',
            frame_count: 1,
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
          width: 96,
          height: 154,
          frame_count: 3,
          shift: [
            -0.0625,
            -2.3125
          ],
          hr_version: {
            width: 184,
            height: 310,
            shift: [
              0,
              -2.3125
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
        },
        shadow: {
          filename: 'graphics/entity/tree/02/tree-02-a-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 196,
          height: 64,
          frame_count: 4,
          shift: [
            2.8125,
            -0.0625
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 384,
            height: 130,
            shift: [
              2.875,
              -0.0625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-a-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/02/tree-02-b-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 76,
          height: 142,
          frame_count: 1,
          shift: [
            -0.125,
            -1.875
          ],
          hr_version: {
            width: 150,
            height: 286,
            shift: [
              -0.09375,
              -1.84375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-b-trunk.png',
            frame_count: 1,
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
          width: 92,
          height: 136,
          frame_count: 3,
          shift: [
            -0.0625,
            -1.9375
          ],
          hr_version: {
            width: 184,
            height: 274,
            shift: [
              -0.0625,
              -1.9375
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
        },
        shadow: {
          filename: 'graphics/entity/tree/02/tree-02-b-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 186,
          height: 68,
          frame_count: 4,
          shift: [
            2.6875,
            0
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 372,
            height: 134,
            shift: [
              2.6875,
              0.03125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-b-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/02/tree-02-c-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 72,
          height: 140,
          frame_count: 1,
          shift: [
            -0.125,
            -1.8125
          ],
          hr_version: {
            width: 144,
            height: 280,
            shift: [
              -0.125,
              -1.78125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-c-trunk.png',
            frame_count: 1,
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
          width: 90,
          height: 130,
          frame_count: 3,
          shift: [
            -0.0625,
            -1.9375
          ],
          hr_version: {
            width: 178,
            height: 264,
            shift: [
              -0.03125,
              -1.9375
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
        },
        shadow: {
          filename: 'graphics/entity/tree/02/tree-02-c-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 176,
          height: 64,
          frame_count: 4,
          shift: [
            2.375,
            -0.0625
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 352,
            height: 128,
            shift: [
              2.40625,
              -0.0625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-c-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/02/tree-02-d-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 72,
          height: 168,
          frame_count: 1,
          shift: [
            0.1875,
            -2.1875
          ],
          hr_version: {
            width: 142,
            height: 336,
            shift: [
              0.21875,
              -2.1875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-d-trunk.png',
            frame_count: 1,
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
          width: 90,
          height: 166,
          frame_count: 3,
          shift: [
            0.1875,
            -2.375
          ],
          hr_version: {
            width: 180,
            height: 330,
            shift: [
              0.1875,
              -2.34375
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
        },
        shadow: {
          filename: 'graphics/entity/tree/02/tree-02-d-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 200,
          height: 66,
          frame_count: 4,
          shift: [
            2.9375,
            -0.125
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 402,
            height: 134,
            shift: [
              2.9375,
              -0.125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-d-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/02/tree-02-e-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 86,
          height: 144,
          frame_count: 1,
          shift: [
            0.0625,
            -1.8125
          ],
          hr_version: {
            width: 168,
            height: 286,
            shift: [
              0.09375,
              -1.78125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-e-trunk.png',
            frame_count: 1,
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
          width: 98,
          height: 140,
          frame_count: 3,
          shift: [
            0,
            -2
          ],
          hr_version: {
            width: 194,
            height: 276,
            shift: [
              0.03125,
              -1.96875
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
        },
        shadow: {
          filename: 'graphics/entity/tree/02/tree-02-e-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 204,
          height: 70,
          frame_count: 4,
          shift: [
            3,
            0.1875
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 410,
            height: 144,
            shift: [
              3,
              0.1875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-e-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/02/tree-02-f-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 74,
          height: 156,
          frame_count: 1,
          shift: [
            -0.375,
            -2
          ],
          hr_version: {
            width: 144,
            height: 310,
            shift: [
              -0.3125,
              -1.96875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-f-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/02/tree-02-f-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 92,
          height: 150,
          frame_count: 3,
          shift: [
            -0.3125,
            -2.125
          ],
          hr_version: {
            width: 184,
            height: 302,
            shift: [
              -0.3125,
              -2.125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-f-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/02/tree-02-f-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 170,
          height: 64,
          frame_count: 4,
          shift: [
            2.375,
            0
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 344,
            height: 130,
            shift: [
              2.34375,
              0
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-f-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/02/tree-02-g-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 86,
          height: 140,
          frame_count: 1,
          shift: [
            0.125,
            -1.75
          ],
          hr_version: {
            width: 168,
            height: 282,
            shift: [
              0.1875,
              -1.75
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-g-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/02/tree-02-g-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 100,
          height: 136,
          frame_count: 3,
          shift: [
            0.125,
            -2.125
          ],
          hr_version: {
            width: 198,
            height: 270,
            shift: [
              0.15625,
              -2.09375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-g-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/02/tree-02-g-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 188,
          height: 64,
          frame_count: 4,
          shift: [
            2.6875,
            -0.1875
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 384,
            height: 122,
            shift: [
              2.625,
              -0.125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-g-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/02/tree-02-h-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 92,
          height: 124,
          frame_count: 1,
          shift: [
            -0.3125,
            -1.5
          ],
          hr_version: {
            width: 182,
            height: 244,
            shift: [
              -0.25,
              -1.46875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-h-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/02/tree-02-h-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 96,
          height: 116,
          frame_count: 3,
          shift: [
            -0.25,
            -1.8125
          ],
          hr_version: {
            width: 192,
            height: 234,
            shift: [
              -0.21875,
              -1.8125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-h-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/02/tree-02-h-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 154,
          height: 60,
          frame_count: 4,
          shift: [
            2.125,
            0.125
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 306,
            height: 118,
            shift: [
              2.15625,
              0.15625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-h-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/02/tree-02-i-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 62,
          height: 102,
          frame_count: 1,
          shift: [
            0.125,
            -1.1875
          ],
          hr_version: {
            width: 126,
            height: 206,
            shift: [
              0.125,
              -1.1875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-i-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/02/tree-02-i-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 78,
          height: 96,
          frame_count: 3,
          shift: [
            0.0625,
            -1.5
          ],
          hr_version: {
            width: 152,
            height: 194,
            shift: [
              0.125,
              -1.5
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-i-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/02/tree-02-i-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 132,
          height: 54,
          frame_count: 4,
          shift: [
            1.875,
            0
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 262,
            height: 110,
            shift: [
              1.90625,
              0
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-i-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/02/tree-02-j-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 64,
          height: 96,
          frame_count: 1,
          shift: [
            -0.25,
            -1.125
          ],
          hr_version: {
            width: 128,
            height: 194,
            shift: [
              -0.25,
              -1.125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-j-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/02/tree-02-j-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 78,
          height: 100,
          frame_count: 3,
          shift: [
            -0.25,
            -1.5
          ],
          hr_version: {
            width: 152,
            height: 198,
            shift: [
              -0.21875,
              -1.46875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-j-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/02/tree-02-j-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 124,
          height: 56,
          frame_count: 4,
          shift: [
            1.6875,
            -0.0625
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 248,
            height: 108,
            shift: [
              1.71875,
              -0.03125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-j-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/02/tree-02-k-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 120,
          height: 124,
          frame_count: 1,
          shift: [
            0.125,
            -0.625
          ],
          hr_version: {
            width: 234,
            height: 244,
            shift: [
              0.1875,
              -0.59375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-k-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/02/tree-02-k-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 106,
          height: 132,
          frame_count: 3,
          shift: [
            0.4375,
            -1
          ],
          hr_version: {
            width: 216,
            height: 264,
            shift: [
              0.40625,
              -0.9375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-k-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/02/tree-02-k-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 124,
          height: 132,
          frame_count: 4,
          shift: [
            0.375,
            -0.625
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 248,
            height: 262,
            shift: [
              0.375,
              -0.59375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-k-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/02/tree-02-l-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 202,
          height: 62,
          frame_count: 1,
          shift: [
            -0.25,
            -0.25
          ],
          hr_version: {
            width: 410,
            height: 122,
            shift: [
              -0.28125,
              -0.21875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-l-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/02/tree-02-l-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 202,
          height: 80,
          frame_count: 3,
          shift: [
            -0.375,
            -0.25
          ],
          hr_version: {
            width: 404,
            height: 156,
            shift: [
              -0.34375,
              -0.1875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-l-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/02/tree-02-l-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 208,
          height: 70,
          frame_count: 4,
          shift: [
            -0.0625,
            0
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 418,
            height: 138,
            shift: [
              -0.0625,
              0.03125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/02/hr-tree-02-l-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      }
    ],
    variation_weights: [
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0.3,
      0.3,
      0.05,
      0.05
    ],
    colors: [
      {
        r: 227,
        g: 143,
        b: 88
      },
      {
        r: 226,
        g: 196,
        b: 94
      },
      {
        r: 204,
        g: 138,
        b: 65
      },
      {
        r: 221,
        g: 189,
        b: 103
      },
      {
        r: 225,
        g: 140,
        b: 68
      },
      {
        r: 221,
        g: 135,
        b: 57
      },
      {
        r: 236,
        g: 159,
        b: 72
      },
      {
        r: 200,
        g: 115,
        b: 72
      },
      {
        r: 209,
        g: 113,
        b: 81
      },
      {
        r: 207,
        g: 118,
        b: 60
      },
      {
        r: 206,
        g: 120,
        b: 75
      },
      {
        r: 219,
        g: 152,
        b: 57
      },
      {
        r: 202,
        g: 107,
        b: 80
      },
      {
        r: 212,
        g: 128,
        b: 90
      },
      {
        r: 219,
        g: 178,
        b: 79
      },
      {
        r: 228,
        g: 156,
        b: 53
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
      mining_time: 0.55,
      result: 'wood',
      count: 4
    },
    corpse: 'tree_07_stump',
    remains_when_mined: 'tree_07_stump',
    emissions_per_second: -0.001,
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
    variations: [
      {
        trunk: {
          filename: 'graphics/entity/tree/07/tree-07-a-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 86,
          height: 160,
          frame_count: 1,
          shift: [
            -0.0625,
            -1.875
          ],
          hr_version: {
            width: 174,
            height: 320,
            shift: [
              -0.0625,
              -1.875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-a-trunk.png',
            frame_count: 1,
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
          width: 122,
          height: 166,
          frame_count: 3,
          shift: [
            0.0625,
            -2.1875
          ],
          hr_version: {
            width: 244,
            height: 336,
            shift: [
              0.0625,
              -2.09375
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
        },
        shadow: {
          filename: 'graphics/entity/tree/07/tree-07-a-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 174,
          height: 98,
          frame_count: 4,
          shift: [
            2,
            -0.375
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 350,
            height: 190,
            shift: [
              2,
              -0.3125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-a-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/07/tree-07-b-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 88,
          height: 152,
          frame_count: 1,
          shift: [
            0.3125,
            -1.8125
          ],
          hr_version: {
            width: 178,
            height: 306,
            shift: [
              0.3125,
              -1.8125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-b-trunk.png',
            frame_count: 1,
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
          width: 142,
          height: 148,
          frame_count: 3,
          shift: [
            0.25,
            -1.9375
          ],
          hr_version: {
            width: 280,
            height: 296,
            shift: [
              0.28125,
              -1.9375
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
        },
        shadow: {
          filename: 'graphics/entity/tree/07/tree-07-b-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 184,
          height: 90,
          frame_count: 4,
          shift: [
            2.1875,
            -0.125
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 368,
            height: 178,
            shift: [
              2.21875,
              -0.09375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-b-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/07/tree-07-c-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 90,
          height: 152,
          frame_count: 1,
          shift: [
            -0.3125,
            -1.8125
          ],
          hr_version: {
            width: 180,
            height: 300,
            shift: [
              -0.3125,
              -1.78125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-c-trunk.png',
            frame_count: 1,
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
          width: 136,
          height: 162,
          frame_count: 3,
          shift: [
            -0.5,
            -2.125
          ],
          hr_version: {
            width: 270,
            height: 324,
            shift: [
              -0.46875,
              -2.125
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
        },
        shadow: {
          filename: 'graphics/entity/tree/07/tree-07-c-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 144,
          height: 86,
          frame_count: 4,
          shift: [
            1.4375,
            -0.0625
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 284,
            height: 174,
            shift: [
              1.46875,
              -0.0625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-c-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/07/tree-07-d-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 86,
          height: 134,
          frame_count: 1,
          shift: [
            -0.0625,
            -1.5625
          ],
          hr_version: {
            width: 172,
            height: 268,
            shift: [
              -0.0625,
              -1.53125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-d-trunk.png',
            frame_count: 1,
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
          width: 114,
          height: 142,
          frame_count: 3,
          shift: [
            0,
            -2.125
          ],
          hr_version: {
            width: 230,
            height: 290,
            shift: [
              0,
              -2.0625
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
        },
        shadow: {
          filename: 'graphics/entity/tree/07/tree-07-d-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 148,
          height: 88,
          frame_count: 4,
          shift: [
            2.0625,
            0
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 290,
            height: 172,
            shift: [
              2.125,
              0.03125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-d-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/07/tree-07-e-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 102,
          height: 144,
          frame_count: 1,
          shift: [
            0,
            -1.6875
          ],
          hr_version: {
            width: 204,
            height: 286,
            shift: [
              0,
              -1.65625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-e-trunk.png',
            frame_count: 1,
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
          width: 122,
          height: 146,
          frame_count: 3,
          shift: [
            0.0625,
            -2
          ],
          hr_version: {
            width: 244,
            height: 292,
            shift: [
              0.09375,
              -1.96875
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
        },
        shadow: {
          filename: 'graphics/entity/tree/07/tree-07-e-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 160,
          height: 84,
          frame_count: 4,
          shift: [
            2.125,
            -0.0625
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 318,
            height: 166,
            shift: [
              2.15625,
              -0.03125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-e-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/07/tree-07-f-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 100,
          height: 140,
          frame_count: 1,
          shift: [
            -0.125,
            -1.6875
          ],
          hr_version: {
            width: 196,
            height: 280,
            shift: [
              -0.09375,
              -1.65625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-f-trunk.png',
            frame_count: 1,
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
          width: 128,
          height: 140,
          frame_count: 3,
          shift: [
            -0.1875,
            -2.3125
          ],
          hr_version: {
            width: 256,
            height: 282,
            shift: [
              -0.15625,
              -2.3125
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
        },
        shadow: {
          filename: 'graphics/entity/tree/07/tree-07-f-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 136,
          height: 96,
          frame_count: 4,
          shift: [
            1.75,
            -0.1875
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 270,
            height: 188,
            shift: [
              1.78125,
              -0.15625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-f-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/07/tree-07-g-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 90,
          height: 110,
          frame_count: 1,
          shift: [
            0.25,
            -1.25
          ],
          hr_version: {
            width: 180,
            height: 218,
            shift: [
              0.25,
              -1.21875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-g-trunk.png',
            frame_count: 1,
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
          width: 110,
          height: 128,
          frame_count: 3,
          shift: [
            0.3125,
            -1.6875
          ],
          hr_version: {
            width: 222,
            height: 258,
            shift: [
              0.3125,
              -1.6875
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
        },
        shadow: {
          filename: 'graphics/entity/tree/07/tree-07-g-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 136,
          height: 76,
          frame_count: 4,
          shift: [
            1.8125,
            -0.0625
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 266,
            height: 154,
            shift: [
              1.875,
              -0.0625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-g-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/07/tree-07-h-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 86,
          height: 126,
          frame_count: 1,
          shift: [
            -0.375,
            -1.375
          ],
          hr_version: {
            width: 166,
            height: 246,
            shift: [
              -0.3125,
              -1.3125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-h-trunk.png',
            frame_count: 1,
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
          width: 114,
          height: 116,
          frame_count: 3,
          shift: [
            -0.3125,
            -1.75
          ],
          hr_version: {
            width: 228,
            height: 242,
            shift: [
              -0.3125,
              -1.65625
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
        },
        shadow: {
          filename: 'graphics/entity/tree/07/tree-07-h-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 146,
          height: 74,
          frame_count: 4,
          shift: [
            1.4375,
            0
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 288,
            height: 146,
            shift: [
              1.46875,
              0.03125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-h-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/07/tree-07-i-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 72,
          height: 102,
          frame_count: 1,
          shift: [
            0,
            -1.125
          ],
          hr_version: {
            width: 142,
            height: 204,
            shift: [
              0.03125,
              -1.09375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-i-trunk.png',
            frame_count: 1,
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
          width: 92,
          height: 110,
          frame_count: 3,
          shift: [
            -0.0625,
            -1.75
          ],
          hr_version: {
            width: 182,
            height: 218,
            shift: [
              -0.03125,
              -1.6875
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
        },
        shadow: {
          filename: 'graphics/entity/tree/07/tree-07-i-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 114,
          height: 72,
          frame_count: 4,
          shift: [
            1.4375,
            -0.0625
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 222,
            height: 140,
            shift: [
              1.5,
              -0.03125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-i-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/07/tree-07-j-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 76,
          height: 98,
          frame_count: 1,
          shift: [
            -0.0625,
            -1.0625
          ],
          hr_version: {
            width: 154,
            height: 198,
            shift: [
              -0.0625,
              -1.0625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-j-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/07/tree-07-j-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 100,
          height: 98,
          frame_count: 3,
          shift: [
            0.0625,
            -1.375
          ],
          hr_version: {
            width: 200,
            height: 200,
            shift: [
              0.0625,
              -1.375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-j-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/07/tree-07-j-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 130,
          height: 62,
          frame_count: 4,
          shift: [
            1.625,
            0
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 258,
            height: 126,
            shift: [
              1.65625,
              0
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-j-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/07/tree-07-k-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 114,
          height: 136,
          frame_count: 1,
          shift: [
            0.0625,
            -0.6875
          ],
          hr_version: {
            width: 226,
            height: 274,
            shift: [
              0.09375,
              -0.6875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-k-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/07/tree-07-k-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 100,
          height: 100,
          frame_count: 3,
          shift: [
            0.5,
            -1.375
          ],
          hr_version: {
            width: 204,
            height: 198,
            shift: [
              0.46875,
              -1.34375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-k-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/07/tree-07-k-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 132,
          height: 114,
          frame_count: 4,
          shift: [
            0.625,
            -0.4375
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 264,
            height: 230,
            shift: [
              0.625,
              -0.4375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-k-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/07/tree-07-l-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 160,
          height: 62,
          frame_count: 1,
          shift: [
            -0.875,
            0.125
          ],
          hr_version: {
            width: 314,
            height: 124,
            shift: [
              -0.8125,
              0.125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-l-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/07/tree-07-l-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 164,
          height: 72,
          frame_count: 3,
          shift: [
            -1,
            0.0625
          ],
          hr_version: {
            width: 328,
            height: 144,
            shift: [
              -0.96875,
              0.09375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-l-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/07/tree-07-l-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 176,
          height: 80,
          frame_count: 4,
          shift: [
            -0.75,
            0.4375
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 354,
            height: 156,
            shift: [
              -0.75,
              0.46875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/07/hr-tree-07-l-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      }
    ],
    variation_weights: [
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0.3,
      0.3,
      0.05,
      0.05
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
      mining_time: 0.55,
      result: 'wood',
      count: 4
    },
    corpse: 'tree_06_stump',
    remains_when_mined: 'tree_06_stump',
    emissions_per_second: -0.001,
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
    variations: [
      {
        trunk: {
          filename: 'graphics/entity/tree/06/tree-06-a-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 72,
          height: 134,
          frame_count: 1,
          shift: [
            0.1875,
            -1.25
          ],
          hr_version: {
            width: 140,
            height: 268,
            shift: [
              0.21875,
              -1.25
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-a-trunk.png',
            frame_count: 1,
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
          width: 68,
          height: 98,
          frame_count: 3,
          shift: [
            0.3125,
            -1.5625
          ],
          hr_version: {
            width: 132,
            height: 196,
            shift: [
              0.34375,
              -1.5625
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
        },
        shadow: {
          filename: 'graphics/entity/tree/06/tree-06-a-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 170,
          height: 76,
          frame_count: 4,
          shift: [
            2,
            0
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 338,
            height: 148,
            shift: [
              2,
              0.03125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-a-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/06/tree-06-b-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 84,
          height: 124,
          frame_count: 1,
          shift: [
            0.25,
            -0.8125
          ],
          hr_version: {
            width: 168,
            height: 248,
            shift: [
              0.25,
              -0.8125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-b-trunk.png',
            frame_count: 1,
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
          width: 84,
          height: 94,
          frame_count: 3,
          shift: [
            0.3125,
            -1.25
          ],
          hr_version: {
            width: 172,
            height: 186,
            shift: [
              0.28125,
              -1.25
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
        },
        shadow: {
          filename: 'graphics/entity/tree/06/tree-06-b-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 174,
          height: 58,
          frame_count: 4,
          shift: [
            2.125,
            0.375
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 352,
            height: 116,
            shift: [
              2.09375,
              0.375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-b-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/06/tree-06-c-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 100,
          height: 106,
          frame_count: 1,
          shift: [
            0,
            -0.5
          ],
          hr_version: {
            width: 198,
            height: 208,
            shift: [
              0,
              -0.46875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-c-trunk.png',
            frame_count: 1,
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
          width: 92,
          height: 80,
          frame_count: 3,
          shift: [
            0.0625,
            -0.875
          ],
          hr_version: {
            width: 178,
            height: 162,
            shift: [
              0.09375,
              -0.90625
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
        },
        shadow: {
          filename: 'graphics/entity/tree/06/tree-06-c-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 174,
          height: 50,
          frame_count: 4,
          shift: [
            2.0625,
            0.5
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 352,
            height: 98,
            shift: [
              2.03125,
              0.5
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-c-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/06/tree-06-d-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 74,
          height: 124,
          frame_count: 1,
          shift: [
            -0.5,
            -0.6875
          ],
          hr_version: {
            width: 148,
            height: 244,
            shift: [
              -0.5,
              -0.65625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-d-trunk.png',
            frame_count: 1,
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
          width: 74,
          height: 92,
          frame_count: 3,
          shift: [
            -0.4375,
            -1.25
          ],
          hr_version: {
            width: 150,
            height: 180,
            shift: [
              -0.46875,
              -1.21875
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
        },
        shadow: {
          filename: 'graphics/entity/tree/06/tree-06-d-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 152,
          height: 68,
          frame_count: 4,
          shift: [
            1.375,
            0.4375
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 308,
            height: 130,
            shift: [
              1.34375,
              0.46875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-d-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/06/tree-06-e-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 76,
          height: 134,
          frame_count: 1,
          shift: [
            -0.4375,
            -1
          ],
          hr_version: {
            width: 154,
            height: 270,
            shift: [
              -0.46875,
              -1.03125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-e-trunk.png',
            frame_count: 1,
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
          height: 114,
          frame_count: 3,
          shift: [
            -0.5625,
            -1.5
          ],
          hr_version: {
            width: 136,
            height: 226,
            shift: [
              -0.5625,
              -1.5
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
        },
        shadow: {
          filename: 'graphics/entity/tree/06/tree-06-e-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 124,
          height: 76,
          frame_count: 4,
          shift: [
            0.8125,
            0.1875
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 248,
            height: 146,
            shift: [
              0.8125,
              0.21875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-e-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/06/tree-06-f-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 90,
          height: 136,
          frame_count: 1,
          shift: [
            -0.5,
            -1.1875
          ],
          hr_version: {
            width: 184,
            height: 268,
            shift: [
              -0.53125,
              -1.15625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-f-trunk.png',
            frame_count: 1,
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
          width: 88,
          height: 114,
          frame_count: 3,
          shift: [
            -0.5625,
            -1.5
          ],
          hr_version: {
            width: 180,
            height: 230,
            shift: [
              -0.59375,
              -1.53125
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
        },
        shadow: {
          filename: 'graphics/entity/tree/06/tree-06-f-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 162,
          height: 54,
          frame_count: 4,
          shift: [
            1.3125,
            -0.125
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 326,
            height: 110,
            shift: [
              1.3125,
              -0.15625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-f-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/06/tree-06-g-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 100,
          height: 132,
          frame_count: 1,
          shift: [
            -0.3125,
            -1.125
          ],
          hr_version: {
            width: 194,
            height: 266,
            shift: [
              -0.28125,
              -1.125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-g-trunk.png',
            frame_count: 1,
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
          width: 92,
          height: 116,
          frame_count: 3,
          shift: [
            -0.3125,
            -1.5
          ],
          hr_version: {
            width: 178,
            height: 228,
            shift: [
              -0.28125,
              -1.46875
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
        },
        shadow: {
          filename: 'graphics/entity/tree/06/tree-06-g-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 180,
          height: 52,
          frame_count: 4,
          shift: [
            1.6875,
            -0.25
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 354,
            height: 100,
            shift: [
              1.71875,
              -0.21875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-g-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/06/tree-06-h-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 86,
          height: 130,
          frame_count: 1,
          shift: [
            0.125,
            -1.125
          ],
          hr_version: {
            width: 166,
            height: 258,
            shift: [
              0.15625,
              -1.125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-h-trunk.png',
            frame_count: 1,
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
          width: 74,
          height: 96,
          frame_count: 3,
          shift: [
            0.375,
            -1.4375
          ],
          hr_version: {
            width: 144,
            height: 190,
            shift: [
              0.40625,
              -1.4375
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
        },
        shadow: {
          filename: 'graphics/entity/tree/06/tree-06-h-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 160,
          height: 76,
          frame_count: 4,
          shift: [
            1.75,
            -0.25
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 320,
            height: 146,
            shift: [
              1.75,
              -0.21875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-h-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/06/tree-06-i-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 74,
          height: 118,
          frame_count: 1,
          shift: [
            -0.4375,
            -0.625
          ],
          hr_version: {
            width: 152,
            height: 238,
            shift: [
              -0.4375,
              -0.65625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-i-trunk.png',
            frame_count: 1,
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
          width: 64,
          height: 92,
          frame_count: 3,
          shift: [
            -0.5625,
            -1.125
          ],
          hr_version: {
            width: 132,
            height: 186,
            shift: [
              -0.59375,
              -1.15625
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
        },
        shadow: {
          filename: 'graphics/entity/tree/06/tree-06-i-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 116,
          height: 76,
          frame_count: 4,
          shift: [
            0.5625,
            0.375
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 228,
            height: 148,
            shift: [
              0.59375,
              0.40625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-i-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/06/tree-06-j-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 72,
          height: 116,
          frame_count: 1,
          shift: [
            -0.375,
            -0.6875
          ],
          hr_version: {
            width: 142,
            height: 232,
            shift: [
              -0.375,
              -0.6875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-j-trunk.png',
            frame_count: 1,
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
          width: 66,
          height: 92,
          frame_count: 3,
          shift: [
            -0.4375,
            -1.1875
          ],
          hr_version: {
            width: 134,
            height: 182,
            shift: [
              -0.46875,
              -1.1875
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
        },
        shadow: {
          filename: 'graphics/entity/tree/06/tree-06-j-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 128,
          height: 76,
          frame_count: 4,
          shift: [
            0.8125,
            0.25
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 256,
            height: 148,
            shift: [
              0.8125,
              0.28125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-j-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      }
    ],
    colors: [
      {
        r: 216,
        g: 238,
        b: 142
      },
      {
        r: 206,
        g: 230,
        b: 126
      },
      {
        r: 203,
        g: 222,
        b: 140
      },
      {
        r: 211,
        g: 219,
        b: 111
      },
      {
        r: 238,
        g: 236,
        b: 113
      },
      {
        r: 245,
        g: 240,
        b: 117
      },
      {
        r: 208,
        g: 238,
        b: 118
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
      mining_time: 0.55,
      result: 'wood',
      count: 4
    },
    corpse: 'tree_06_stump',
    remains_when_mined: 'tree_06_stump',
    emissions_per_second: -0.001,
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
    variations: [
      {
        trunk: {
          filename: 'graphics/entity/tree/06/tree-06-a-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 72,
          height: 134,
          frame_count: 1,
          shift: [
            0.1875,
            -1.25
          ],
          hr_version: {
            width: 140,
            height: 268,
            shift: [
              0.21875,
              -1.25
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-a-trunk.png',
            frame_count: 1,
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
          width: 68,
          height: 98,
          frame_count: 3,
          shift: [
            0.3125,
            -1.5625
          ],
          hr_version: {
            width: 132,
            height: 196,
            shift: [
              0.34375,
              -1.5625
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
        },
        shadow: {
          filename: 'graphics/entity/tree/06/tree-06-a-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 170,
          height: 76,
          frame_count: 4,
          shift: [
            2,
            0
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 338,
            height: 148,
            shift: [
              2,
              0.03125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-a-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/06/tree-06-b-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 84,
          height: 124,
          frame_count: 1,
          shift: [
            0.25,
            -0.8125
          ],
          hr_version: {
            width: 168,
            height: 248,
            shift: [
              0.25,
              -0.8125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-b-trunk.png',
            frame_count: 1,
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
          width: 84,
          height: 94,
          frame_count: 3,
          shift: [
            0.3125,
            -1.25
          ],
          hr_version: {
            width: 172,
            height: 186,
            shift: [
              0.28125,
              -1.25
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
        },
        shadow: {
          filename: 'graphics/entity/tree/06/tree-06-b-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 174,
          height: 58,
          frame_count: 4,
          shift: [
            2.125,
            0.375
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 352,
            height: 116,
            shift: [
              2.09375,
              0.375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-b-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/06/tree-06-c-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 100,
          height: 106,
          frame_count: 1,
          shift: [
            0,
            -0.5
          ],
          hr_version: {
            width: 198,
            height: 208,
            shift: [
              0,
              -0.46875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-c-trunk.png',
            frame_count: 1,
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
          width: 92,
          height: 80,
          frame_count: 3,
          shift: [
            0.0625,
            -0.875
          ],
          hr_version: {
            width: 178,
            height: 162,
            shift: [
              0.09375,
              -0.90625
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
        },
        shadow: {
          filename: 'graphics/entity/tree/06/tree-06-c-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 174,
          height: 50,
          frame_count: 4,
          shift: [
            2.0625,
            0.5
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 352,
            height: 98,
            shift: [
              2.03125,
              0.5
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-c-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/06/tree-06-d-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 74,
          height: 124,
          frame_count: 1,
          shift: [
            -0.5,
            -0.6875
          ],
          hr_version: {
            width: 148,
            height: 244,
            shift: [
              -0.5,
              -0.65625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-d-trunk.png',
            frame_count: 1,
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
          width: 74,
          height: 92,
          frame_count: 3,
          shift: [
            -0.4375,
            -1.25
          ],
          hr_version: {
            width: 150,
            height: 180,
            shift: [
              -0.46875,
              -1.21875
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
        },
        shadow: {
          filename: 'graphics/entity/tree/06/tree-06-d-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 152,
          height: 68,
          frame_count: 4,
          shift: [
            1.375,
            0.4375
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 308,
            height: 130,
            shift: [
              1.34375,
              0.46875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-d-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/06/tree-06-e-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 76,
          height: 134,
          frame_count: 1,
          shift: [
            -0.4375,
            -1
          ],
          hr_version: {
            width: 154,
            height: 270,
            shift: [
              -0.46875,
              -1.03125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-e-trunk.png',
            frame_count: 1,
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
          height: 114,
          frame_count: 3,
          shift: [
            -0.5625,
            -1.5
          ],
          hr_version: {
            width: 136,
            height: 226,
            shift: [
              -0.5625,
              -1.5
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
        },
        shadow: {
          filename: 'graphics/entity/tree/06/tree-06-e-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 124,
          height: 76,
          frame_count: 4,
          shift: [
            0.8125,
            0.1875
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 248,
            height: 146,
            shift: [
              0.8125,
              0.21875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-e-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/06/tree-06-f-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 90,
          height: 136,
          frame_count: 1,
          shift: [
            -0.5,
            -1.1875
          ],
          hr_version: {
            width: 184,
            height: 268,
            shift: [
              -0.53125,
              -1.15625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-f-trunk.png',
            frame_count: 1,
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
          width: 88,
          height: 114,
          frame_count: 3,
          shift: [
            -0.5625,
            -1.5
          ],
          hr_version: {
            width: 180,
            height: 230,
            shift: [
              -0.59375,
              -1.53125
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
        },
        shadow: {
          filename: 'graphics/entity/tree/06/tree-06-f-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 162,
          height: 54,
          frame_count: 4,
          shift: [
            1.3125,
            -0.125
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 326,
            height: 110,
            shift: [
              1.3125,
              -0.15625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-f-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/06/tree-06-g-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 100,
          height: 132,
          frame_count: 1,
          shift: [
            -0.3125,
            -1.125
          ],
          hr_version: {
            width: 194,
            height: 266,
            shift: [
              -0.28125,
              -1.125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-g-trunk.png',
            frame_count: 1,
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
          width: 92,
          height: 116,
          frame_count: 3,
          shift: [
            -0.3125,
            -1.5
          ],
          hr_version: {
            width: 178,
            height: 228,
            shift: [
              -0.28125,
              -1.46875
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
        },
        shadow: {
          filename: 'graphics/entity/tree/06/tree-06-g-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 180,
          height: 52,
          frame_count: 4,
          shift: [
            1.6875,
            -0.25
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 354,
            height: 100,
            shift: [
              1.71875,
              -0.21875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-g-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/06/tree-06-h-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 86,
          height: 130,
          frame_count: 1,
          shift: [
            0.125,
            -1.125
          ],
          hr_version: {
            width: 166,
            height: 258,
            shift: [
              0.15625,
              -1.125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-h-trunk.png',
            frame_count: 1,
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
          width: 74,
          height: 96,
          frame_count: 3,
          shift: [
            0.375,
            -1.4375
          ],
          hr_version: {
            width: 144,
            height: 190,
            shift: [
              0.40625,
              -1.4375
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
        },
        shadow: {
          filename: 'graphics/entity/tree/06/tree-06-h-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 160,
          height: 76,
          frame_count: 4,
          shift: [
            1.75,
            -0.25
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 320,
            height: 146,
            shift: [
              1.75,
              -0.21875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-h-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/06/tree-06-i-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 74,
          height: 118,
          frame_count: 1,
          shift: [
            -0.4375,
            -0.625
          ],
          hr_version: {
            width: 152,
            height: 238,
            shift: [
              -0.4375,
              -0.65625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-i-trunk.png',
            frame_count: 1,
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
          width: 64,
          height: 92,
          frame_count: 3,
          shift: [
            -0.5625,
            -1.125
          ],
          hr_version: {
            width: 132,
            height: 186,
            shift: [
              -0.59375,
              -1.15625
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
        },
        shadow: {
          filename: 'graphics/entity/tree/06/tree-06-i-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 116,
          height: 76,
          frame_count: 4,
          shift: [
            0.5625,
            0.375
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 228,
            height: 148,
            shift: [
              0.59375,
              0.40625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-i-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/06/tree-06-j-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 72,
          height: 116,
          frame_count: 1,
          shift: [
            -0.375,
            -0.6875
          ],
          hr_version: {
            width: 142,
            height: 232,
            shift: [
              -0.375,
              -0.6875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-j-trunk.png',
            frame_count: 1,
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
          width: 66,
          height: 92,
          frame_count: 3,
          shift: [
            -0.4375,
            -1.1875
          ],
          hr_version: {
            width: 134,
            height: 182,
            shift: [
              -0.46875,
              -1.1875
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
        },
        shadow: {
          filename: 'graphics/entity/tree/06/tree-06-j-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 128,
          height: 76,
          frame_count: 4,
          shift: [
            0.8125,
            0.25
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 256,
            height: 148,
            shift: [
              0.8125,
              0.28125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/06/hr-tree-06-j-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
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
      mining_time: 0.55,
      result: 'wood',
      count: 4
    },
    corpse: 'tree_09_stump',
    remains_when_mined: 'tree_09_stump',
    emissions_per_second: -0.001,
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
    variations: [
      {
        trunk: {
          filename: 'graphics/entity/tree/09/tree-09-a-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 154,
          height: 194,
          frame_count: 1,
          shift: [
            0,
            -2.125
          ],
          hr_version: {
            width: 308,
            height: 392,
            shift: [
              0,
              -2.125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-a-trunk.png',
            frame_count: 1,
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
          width: 174,
          height: 196,
          frame_count: 3,
          shift: [
            0,
            -2.5
          ],
          hr_version: {
            width: 350,
            height: 390,
            shift: [
              0,
              -2.4375
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
        },
        shadow: {
          filename: 'graphics/entity/tree/09/tree-09-a-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 232,
          height: 106,
          frame_count: 4,
          shift: [
            2.625,
            0
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 458,
            height: 214,
            shift: [
              2.6875,
              0
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-a-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/09/tree-09-b-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 146,
          height: 196,
          frame_count: 1,
          shift: [
            0.25,
            -2.1875
          ],
          hr_version: {
            width: 294,
            height: 390,
            shift: [
              0.25,
              -2.15625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-b-trunk.png',
            frame_count: 1,
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
          width: 168,
          height: 182,
          frame_count: 3,
          shift: [
            0.1875,
            -2.75
          ],
          hr_version: {
            width: 334,
            height: 368,
            shift: [
              0.21875,
              -2.75
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
        },
        shadow: {
          filename: 'graphics/entity/tree/09/tree-09-b-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 186,
          height: 114,
          frame_count: 4,
          shift: [
            2.5625,
            0.1875
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 374,
            height: 226,
            shift: [
              2.5625,
              0.21875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-b-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/09/tree-09-c-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 130,
          height: 196,
          frame_count: 1,
          shift: [
            -0.125,
            -2.0625
          ],
          hr_version: {
            width: 258,
            height: 392,
            shift: [
              -0.09375,
              -2.03125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-c-trunk.png',
            frame_count: 1,
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
          width: 134,
          height: 202,
          frame_count: 3,
          shift: [
            0.0625,
            -2.4375
          ],
          hr_version: {
            width: 266,
            height: 408,
            shift: [
              0.09375,
              -2.4375
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
        },
        shadow: {
          filename: 'graphics/entity/tree/09/tree-09-c-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 184,
          height: 110,
          frame_count: 4,
          shift: [
            2.25,
            -0.125
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 364,
            height: 222,
            shift: [
              2.28125,
              -0.125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-c-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/09/tree-09-d-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 132,
          height: 172,
          frame_count: 1,
          shift: [
            0.125,
            -1.75
          ],
          hr_version: {
            width: 264,
            height: 348,
            shift: [
              0.125,
              -1.75
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-d-trunk.png',
            frame_count: 1,
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
          width: 144,
          height: 152,
          frame_count: 3,
          shift: [
            -0.0625,
            -2.375
          ],
          hr_version: {
            width: 284,
            height: 308,
            shift: [
              -0.03125,
              -2.375
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
        },
        shadow: {
          filename: 'graphics/entity/tree/09/tree-09-d-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 172,
          height: 118,
          frame_count: 4,
          shift: [
            2.5,
            -0.0625
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 344,
            height: 232,
            shift: [
              2.5,
              -0.03125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-d-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/09/tree-09-e-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 126,
          height: 138,
          frame_count: 1,
          shift: [
            0.3125,
            -1.4375
          ],
          hr_version: {
            width: 252,
            height: 272,
            shift: [
              0.3125,
              -1.375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-e-trunk.png',
            frame_count: 1,
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
          width: 138,
          height: 130,
          frame_count: 3,
          shift: [
            0.375,
            -1.75
          ],
          hr_version: {
            width: 280,
            height: 264,
            shift: [
              0.375,
              -1.75
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
        },
        shadow: {
          filename: 'graphics/entity/tree/09/tree-09-e-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 154,
          height: 96,
          frame_count: 4,
          shift: [
            2.25,
            0.375
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 306,
            height: 190,
            shift: [
              2.28125,
              0.40625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-e-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/09/tree-09-f-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 124,
          height: 144,
          frame_count: 1,
          shift: [
            -0.625,
            -1.5
          ],
          hr_version: {
            width: 246,
            height: 286,
            shift: [
              -0.59375,
              -1.46875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-f-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/09/tree-09-f-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 128,
          height: 146,
          frame_count: 3,
          shift: [
            -0.3125,
            -1.875
          ],
          hr_version: {
            width: 260,
            height: 288,
            shift: [
              -0.34375,
              -1.8125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-f-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/09/tree-09-f-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 142,
          height: 96,
          frame_count: 4,
          shift: [
            1.6875,
            0.1875
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 282,
            height: 184,
            shift: [
              1.71875,
              0.25
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-f-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/09/tree-09-g-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 122,
          height: 156,
          frame_count: 1,
          shift: [
            -0.375,
            -1.625
          ],
          hr_version: {
            width: 240,
            height: 312,
            shift: [
              -0.34375,
              -1.625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-g-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/09/tree-09-g-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 134,
          height: 148,
          frame_count: 3,
          shift: [
            -0.4375,
            -2.125
          ],
          hr_version: {
            width: 266,
            height: 296,
            shift: [
              -0.40625,
              -2.09375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-g-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/09/tree-09-g-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 156,
          height: 90,
          frame_count: 4,
          shift: [
            1.6875,
            -0.4375
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 310,
            height: 182,
            shift: [
              1.71875,
              -0.4375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-g-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/09/tree-09-h-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 128,
          height: 156,
          frame_count: 1,
          shift: [
            0.5625,
            -1.625
          ],
          hr_version: {
            width: 256,
            height: 312,
            shift: [
              0.5625,
              -1.625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-h-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/09/tree-09-h-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 122,
          height: 148,
          frame_count: 3,
          shift: [
            0.5625,
            -2.0625
          ],
          hr_version: {
            width: 250,
            height: 292,
            shift: [
              0.5625,
              -2
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-h-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/09/tree-09-h-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 150,
          height: 96,
          frame_count: 4,
          shift: [
            2.3125,
            -0.3125
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 296,
            height: 192,
            shift: [
              2.34375,
              -0.3125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-h-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      }
    ],
    colors: [
      {
        r: 212,
        g: 173,
        b: 67
      },
      {
        r: 190,
        g: 134,
        b: 60
      },
      {
        r: 210,
        g: 174,
        b: 73
      },
      {
        r: 196,
        g: 165,
        b: 84
      },
      {
        r: 212,
        g: 165,
        b: 72
      },
      {
        r: 202,
        g: 154,
        b: 86
      },
      {
        r: 228,
        g: 162,
        b: 88
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
      mining_time: 0.55,
      result: 'wood',
      count: 4
    },
    corpse: 'tree_09_stump',
    remains_when_mined: 'tree_09_stump',
    emissions_per_second: -0.001,
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
    variations: [
      {
        trunk: {
          filename: 'graphics/entity/tree/09/tree-09-a-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 154,
          height: 194,
          frame_count: 1,
          shift: [
            0,
            -2.125
          ],
          hr_version: {
            width: 308,
            height: 392,
            shift: [
              0,
              -2.125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-a-trunk.png',
            frame_count: 1,
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
          width: 174,
          height: 196,
          frame_count: 3,
          shift: [
            0,
            -2.5
          ],
          hr_version: {
            width: 350,
            height: 390,
            shift: [
              0,
              -2.4375
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
        },
        shadow: {
          filename: 'graphics/entity/tree/09/tree-09-a-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 232,
          height: 106,
          frame_count: 4,
          shift: [
            2.625,
            0
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 458,
            height: 214,
            shift: [
              2.6875,
              0
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-a-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/09/tree-09-b-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 146,
          height: 196,
          frame_count: 1,
          shift: [
            0.25,
            -2.1875
          ],
          hr_version: {
            width: 294,
            height: 390,
            shift: [
              0.25,
              -2.15625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-b-trunk.png',
            frame_count: 1,
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
          width: 168,
          height: 182,
          frame_count: 3,
          shift: [
            0.1875,
            -2.75
          ],
          hr_version: {
            width: 334,
            height: 368,
            shift: [
              0.21875,
              -2.75
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
        },
        shadow: {
          filename: 'graphics/entity/tree/09/tree-09-b-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 186,
          height: 114,
          frame_count: 4,
          shift: [
            2.5625,
            0.1875
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 374,
            height: 226,
            shift: [
              2.5625,
              0.21875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-b-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/09/tree-09-c-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 130,
          height: 196,
          frame_count: 1,
          shift: [
            -0.125,
            -2.0625
          ],
          hr_version: {
            width: 258,
            height: 392,
            shift: [
              -0.09375,
              -2.03125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-c-trunk.png',
            frame_count: 1,
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
          width: 134,
          height: 202,
          frame_count: 3,
          shift: [
            0.0625,
            -2.4375
          ],
          hr_version: {
            width: 266,
            height: 408,
            shift: [
              0.09375,
              -2.4375
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
        },
        shadow: {
          filename: 'graphics/entity/tree/09/tree-09-c-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 184,
          height: 110,
          frame_count: 4,
          shift: [
            2.25,
            -0.125
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 364,
            height: 222,
            shift: [
              2.28125,
              -0.125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-c-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/09/tree-09-d-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 132,
          height: 172,
          frame_count: 1,
          shift: [
            0.125,
            -1.75
          ],
          hr_version: {
            width: 264,
            height: 348,
            shift: [
              0.125,
              -1.75
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-d-trunk.png',
            frame_count: 1,
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
          width: 144,
          height: 152,
          frame_count: 3,
          shift: [
            -0.0625,
            -2.375
          ],
          hr_version: {
            width: 284,
            height: 308,
            shift: [
              -0.03125,
              -2.375
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
        },
        shadow: {
          filename: 'graphics/entity/tree/09/tree-09-d-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 172,
          height: 118,
          frame_count: 4,
          shift: [
            2.5,
            -0.0625
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 344,
            height: 232,
            shift: [
              2.5,
              -0.03125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-d-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/09/tree-09-e-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 126,
          height: 138,
          frame_count: 1,
          shift: [
            0.3125,
            -1.4375
          ],
          hr_version: {
            width: 252,
            height: 272,
            shift: [
              0.3125,
              -1.375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-e-trunk.png',
            frame_count: 1,
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
          width: 138,
          height: 130,
          frame_count: 3,
          shift: [
            0.375,
            -1.75
          ],
          hr_version: {
            width: 280,
            height: 264,
            shift: [
              0.375,
              -1.75
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
        },
        shadow: {
          filename: 'graphics/entity/tree/09/tree-09-e-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 154,
          height: 96,
          frame_count: 4,
          shift: [
            2.25,
            0.375
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 306,
            height: 190,
            shift: [
              2.28125,
              0.40625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-e-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/09/tree-09-f-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 124,
          height: 144,
          frame_count: 1,
          shift: [
            -0.625,
            -1.5
          ],
          hr_version: {
            width: 246,
            height: 286,
            shift: [
              -0.59375,
              -1.46875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-f-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/09/tree-09-f-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 128,
          height: 146,
          frame_count: 3,
          shift: [
            -0.3125,
            -1.875
          ],
          hr_version: {
            width: 260,
            height: 288,
            shift: [
              -0.34375,
              -1.8125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-f-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/09/tree-09-f-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 142,
          height: 96,
          frame_count: 4,
          shift: [
            1.6875,
            0.1875
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 282,
            height: 184,
            shift: [
              1.71875,
              0.25
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-f-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/09/tree-09-g-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 122,
          height: 156,
          frame_count: 1,
          shift: [
            -0.375,
            -1.625
          ],
          hr_version: {
            width: 240,
            height: 312,
            shift: [
              -0.34375,
              -1.625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-g-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/09/tree-09-g-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 134,
          height: 148,
          frame_count: 3,
          shift: [
            -0.4375,
            -2.125
          ],
          hr_version: {
            width: 266,
            height: 296,
            shift: [
              -0.40625,
              -2.09375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-g-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/09/tree-09-g-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 156,
          height: 90,
          frame_count: 4,
          shift: [
            1.6875,
            -0.4375
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 310,
            height: 182,
            shift: [
              1.71875,
              -0.4375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-g-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/09/tree-09-h-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 128,
          height: 156,
          frame_count: 1,
          shift: [
            0.5625,
            -1.625
          ],
          hr_version: {
            width: 256,
            height: 312,
            shift: [
              0.5625,
              -1.625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-h-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/09/tree-09-h-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 122,
          height: 148,
          frame_count: 3,
          shift: [
            0.5625,
            -2.0625
          ],
          hr_version: {
            width: 250,
            height: 292,
            shift: [
              0.5625,
              -2
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-h-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/09/tree-09-h-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 150,
          height: 96,
          frame_count: 4,
          shift: [
            2.3125,
            -0.3125
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 296,
            height: 192,
            shift: [
              2.34375,
              -0.3125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/09/hr-tree-09-h-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      }
    ],
    colors: [
      {
        r: 208,
        g: 110,
        b: 110
      },
      {
        r: 238,
        g: 148,
        b: 111
      },
      {
        r: 230,
        g: 124,
        b: 124
      },
      {
        r: 206,
        g: 95,
        b: 95
      },
      {
        r: 218,
        g: 114,
        b: 90
      },
      {
        r: 226,
        g: 119,
        b: 95
      },
      {
        r: 228,
        g: 134,
        b: 112
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
      mining_time: 0.55,
      result: 'wood',
      count: 4
    },
    corpse: 'tree_08_stump',
    remains_when_mined: 'tree_08_stump',
    emissions_per_second: -0.001,
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
    variations: [
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-a-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 106,
          height: 142,
          frame_count: 1,
          shift: [
            -0.1875,
            -1.8125
          ],
          hr_version: {
            width: 210,
            height: 286,
            shift: [
              -0.15625,
              -1.8125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-a-trunk.png',
            frame_count: 1,
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
          width: 130,
          height: 142,
          frame_count: 3,
          shift: [
            -0.1875,
            -2.4375
          ],
          hr_version: {
            width: 262,
            height: 282,
            shift: [
              -0.1875,
              -2.40625
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
        },
        shadow: {
          filename: 'graphics/entity/tree/08/tree-08-a-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 156,
          height: 110,
          frame_count: 4,
          shift: [
            2.1875,
            0.0625
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 310,
            height: 222,
            shift: [
              2.21875,
              0.0625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-a-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-b-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 120,
          height: 138,
          frame_count: 1,
          shift: [
            -0.125,
            -1.75
          ],
          hr_version: {
            width: 238,
            height: 276,
            shift: [
              -0.09375,
              -1.71875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-b-trunk.png',
            frame_count: 1,
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
          width: 162,
          height: 154,
          frame_count: 3,
          shift: [
            -0.125,
            -2.25
          ],
          hr_version: {
            width: 322,
            height: 306,
            shift: [
              -0.09375,
              -2.1875
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
        },
        shadow: {
          filename: 'graphics/entity/tree/08/tree-08-b-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 162,
          height: 90,
          frame_count: 4,
          shift: [
            2.375,
            -0.1875
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 322,
            height: 178,
            shift: [
              2.40625,
              -0.15625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-b-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-c-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 106,
          height: 152,
          frame_count: 1,
          shift: [
            0.0625,
            -2
          ],
          hr_version: {
            width: 210,
            height: 300,
            shift: [
              0.09375,
              -1.96875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-c-trunk.png',
            frame_count: 1,
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
          width: 126,
          height: 146,
          frame_count: 3,
          shift: [
            0.1875,
            -2.625
          ],
          hr_version: {
            width: 252,
            height: 294,
            shift: [
              0.1875,
              -2.59375
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
        },
        shadow: {
          filename: 'graphics/entity/tree/08/tree-08-c-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 166,
          height: 114,
          frame_count: 4,
          shift: [
            2.1875,
            -0.0625
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 326,
            height: 228,
            shift: [
              2.25,
              -0.0625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-c-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-d-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 84,
          height: 114,
          frame_count: 1,
          shift: [
            0,
            -1.4375
          ],
          hr_version: {
            width: 166,
            height: 228,
            shift: [
              0.03125,
              -1.40625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-d-trunk.png',
            frame_count: 1,
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
          width: 110,
          height: 110,
          frame_count: 3,
          shift: [
            -0.0625,
            -2.3125
          ],
          hr_version: {
            width: 214,
            height: 220,
            shift: [
              0,
              -2.28125
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
        },
        shadow: {
          filename: 'graphics/entity/tree/08/tree-08-d-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 138,
          height: 86,
          frame_count: 4,
          shift: [
            2.1875,
            0.1875
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 274,
            height: 170,
            shift: [
              2.21875,
              0.21875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-d-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-e-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 86,
          height: 122,
          frame_count: 1,
          shift: [
            -0.25,
            -1.5625
          ],
          hr_version: {
            width: 172,
            height: 242,
            shift: [
              -0.21875,
              -1.53125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-e-trunk.png',
            frame_count: 1,
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
          width: 118,
          height: 106,
          frame_count: 3,
          shift: [
            0,
            -2.25
          ],
          hr_version: {
            width: 228,
            height: 210,
            shift: [
              0.0625,
              -2.21875
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
        },
        shadow: {
          filename: 'graphics/entity/tree/08/tree-08-e-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 150,
          height: 76,
          frame_count: 4,
          shift: [
            2,
            0.125
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 296,
            height: 150,
            shift: [
              2.03125,
              0.15625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-e-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-f-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 84,
          height: 138,
          frame_count: 1,
          shift: [
            -0.125,
            -1.75
          ],
          hr_version: {
            width: 166,
            height: 272,
            shift: [
              -0.09375,
              -1.71875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-f-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/08/tree-08-f-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 108,
          height: 148,
          frame_count: 3,
          shift: [
            -0.0625,
            -2.125
          ],
          hr_version: {
            width: 218,
            height: 294,
            shift: [
              -0.0625,
              -2.09375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-f-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/08/tree-08-f-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 138,
          height: 86,
          frame_count: 4,
          shift: [
            1.9375,
            -0.25
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 274,
            height: 170,
            shift: [
              1.96875,
              -0.21875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-f-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-g-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 72,
          height: 112,
          frame_count: 1,
          shift: [
            0.4375,
            -1.375
          ],
          hr_version: {
            width: 146,
            height: 222,
            shift: [
              0.4375,
              -1.34375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-g-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/08/tree-08-g-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 94,
          height: 96,
          frame_count: 3,
          shift: [
            0.375,
            -2.25
          ],
          hr_version: {
            width: 190,
            height: 192,
            shift: [
              0.375,
              -2.21875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-g-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/08/tree-08-g-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 136,
          height: 72,
          frame_count: 4,
          shift: [
            2,
            -0.3125
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 272,
            height: 138,
            shift: [
              2,
              -0.25
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-g-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-h-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 80,
          height: 94,
          frame_count: 1,
          shift: [
            -0.3125,
            -1.0625
          ],
          hr_version: {
            width: 160,
            height: 190,
            shift: [
              -0.3125,
              -1.0625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-h-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/08/tree-08-h-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 110,
          height: 86,
          frame_count: 3,
          shift: [
            -0.3125,
            -1.6875
          ],
          hr_version: {
            width: 218,
            height: 174,
            shift: [
              -0.28125,
              -1.6875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-h-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/08/tree-08-h-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 114,
          height: 66,
          frame_count: 4,
          shift: [
            1.625,
            0.1875
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 224,
            height: 128,
            shift: [
              1.65625,
              0.21875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-h-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-i-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 38,
          height: 90,
          frame_count: 1,
          shift: [
            -0.0625,
            -1.0625
          ],
          hr_version: {
            width: 78,
            height: 176,
            shift: [
              -0.0625,
              -1.03125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-i-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/08/tree-08-i-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 66,
          height: 84,
          frame_count: 3,
          shift: [
            0.0625,
            -1.875
          ],
          hr_version: {
            width: 130,
            height: 168,
            shift: [
              0.09375,
              -1.875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-i-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/08/tree-08-i-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 94,
          height: 52,
          frame_count: 4,
          shift: [
            1.375,
            -0.1875
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 186,
            height: 102,
            shift: [
              1.40625,
              -0.15625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-i-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-j-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 46,
          height: 90,
          frame_count: 1,
          shift: [
            0.0625,
            -1.0625
          ],
          hr_version: {
            width: 88,
            height: 180,
            shift: [
              0.09375,
              -1.03125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-j-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/08/tree-08-j-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 82,
          height: 78,
          frame_count: 3,
          shift: [
            0.0625,
            -1.75
          ],
          hr_version: {
            width: 162,
            height: 160,
            shift: [
              0.09375,
              -1.75
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-j-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/08/tree-08-j-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 104,
          height: 50,
          frame_count: 4,
          shift: [
            1.4375,
            -0.0625
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 208,
            height: 100,
            shift: [
              1.4375,
              -0.0625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-j-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-k-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 150,
          height: 108,
          frame_count: 1,
          shift: [
            -0.6875,
            -0.75
          ],
          hr_version: {
            width: 300,
            height: 218,
            shift: [
              -0.6875,
              -0.75
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-k-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/08/tree-08-k-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 150,
          height: 120,
          frame_count: 3,
          shift: [
            -1.1875,
            -1.125
          ],
          hr_version: {
            width: 308,
            height: 240,
            shift: [
              -1.0625,
              -1.09375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-k-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/08/tree-08-k-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 160,
          height: 90,
          frame_count: 4,
          shift: [
            -0.5625,
            -0.5
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 320,
            height: 180,
            shift: [
              -0.5625,
              -0.5
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-k-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-l-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 138,
          height: 102,
          frame_count: 1,
          shift: [
            0.75,
            0.3125
          ],
          hr_version: {
            width: 274,
            height: 204,
            shift: [
              0.78125,
              0.3125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-l-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/08/tree-08-l-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 122,
          height: 98,
          frame_count: 3,
          shift: [
            1.5,
            0.25
          ],
          hr_version: {
            width: 246,
            height: 198,
            shift: [
              1.5,
              0.28125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-l-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/08/tree-08-l-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 162,
          height: 108,
          frame_count: 4,
          shift: [
            1.3125,
            0.75
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 324,
            height: 216,
            shift: [
              1.3125,
              0.75
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-l-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      }
    ],
    variation_weights: [
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0.3,
      0.3,
      0.05,
      0.05
    ],
    colors: [
      {
        r: 216,
        g: 238,
        b: 142
      },
      {
        r: 206,
        g: 230,
        b: 126
      },
      {
        r: 203,
        g: 222,
        b: 140
      },
      {
        r: 211,
        g: 219,
        b: 111
      },
      {
        r: 238,
        g: 236,
        b: 113
      },
      {
        r: 245,
        g: 240,
        b: 117
      },
      {
        r: 208,
        g: 238,
        b: 118
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
      mining_time: 0.55,
      result: 'wood',
      count: 4
    },
    corpse: 'tree_08_stump',
    remains_when_mined: 'tree_08_stump',
    emissions_per_second: -0.001,
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
    variations: [
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-a-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 106,
          height: 142,
          frame_count: 1,
          shift: [
            -0.1875,
            -1.8125
          ],
          hr_version: {
            width: 210,
            height: 286,
            shift: [
              -0.15625,
              -1.8125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-a-trunk.png',
            frame_count: 1,
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
          width: 130,
          height: 142,
          frame_count: 3,
          shift: [
            -0.1875,
            -2.4375
          ],
          hr_version: {
            width: 262,
            height: 282,
            shift: [
              -0.1875,
              -2.40625
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
        },
        shadow: {
          filename: 'graphics/entity/tree/08/tree-08-a-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 156,
          height: 110,
          frame_count: 4,
          shift: [
            2.1875,
            0.0625
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 310,
            height: 222,
            shift: [
              2.21875,
              0.0625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-a-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-b-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 120,
          height: 138,
          frame_count: 1,
          shift: [
            -0.125,
            -1.75
          ],
          hr_version: {
            width: 238,
            height: 276,
            shift: [
              -0.09375,
              -1.71875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-b-trunk.png',
            frame_count: 1,
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
          width: 162,
          height: 154,
          frame_count: 3,
          shift: [
            -0.125,
            -2.25
          ],
          hr_version: {
            width: 322,
            height: 306,
            shift: [
              -0.09375,
              -2.1875
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
        },
        shadow: {
          filename: 'graphics/entity/tree/08/tree-08-b-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 162,
          height: 90,
          frame_count: 4,
          shift: [
            2.375,
            -0.1875
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 322,
            height: 178,
            shift: [
              2.40625,
              -0.15625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-b-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-c-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 106,
          height: 152,
          frame_count: 1,
          shift: [
            0.0625,
            -2
          ],
          hr_version: {
            width: 210,
            height: 300,
            shift: [
              0.09375,
              -1.96875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-c-trunk.png',
            frame_count: 1,
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
          width: 126,
          height: 146,
          frame_count: 3,
          shift: [
            0.1875,
            -2.625
          ],
          hr_version: {
            width: 252,
            height: 294,
            shift: [
              0.1875,
              -2.59375
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
        },
        shadow: {
          filename: 'graphics/entity/tree/08/tree-08-c-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 166,
          height: 114,
          frame_count: 4,
          shift: [
            2.1875,
            -0.0625
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 326,
            height: 228,
            shift: [
              2.25,
              -0.0625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-c-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-d-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 84,
          height: 114,
          frame_count: 1,
          shift: [
            0,
            -1.4375
          ],
          hr_version: {
            width: 166,
            height: 228,
            shift: [
              0.03125,
              -1.40625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-d-trunk.png',
            frame_count: 1,
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
          width: 110,
          height: 110,
          frame_count: 3,
          shift: [
            -0.0625,
            -2.3125
          ],
          hr_version: {
            width: 214,
            height: 220,
            shift: [
              0,
              -2.28125
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
        },
        shadow: {
          filename: 'graphics/entity/tree/08/tree-08-d-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 138,
          height: 86,
          frame_count: 4,
          shift: [
            2.1875,
            0.1875
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 274,
            height: 170,
            shift: [
              2.21875,
              0.21875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-d-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-e-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 86,
          height: 122,
          frame_count: 1,
          shift: [
            -0.25,
            -1.5625
          ],
          hr_version: {
            width: 172,
            height: 242,
            shift: [
              -0.21875,
              -1.53125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-e-trunk.png',
            frame_count: 1,
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
          width: 118,
          height: 106,
          frame_count: 3,
          shift: [
            0,
            -2.25
          ],
          hr_version: {
            width: 228,
            height: 210,
            shift: [
              0.0625,
              -2.21875
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
        },
        shadow: {
          filename: 'graphics/entity/tree/08/tree-08-e-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 150,
          height: 76,
          frame_count: 4,
          shift: [
            2,
            0.125
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 296,
            height: 150,
            shift: [
              2.03125,
              0.15625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-e-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-f-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 84,
          height: 138,
          frame_count: 1,
          shift: [
            -0.125,
            -1.75
          ],
          hr_version: {
            width: 166,
            height: 272,
            shift: [
              -0.09375,
              -1.71875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-f-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/08/tree-08-f-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 108,
          height: 148,
          frame_count: 3,
          shift: [
            -0.0625,
            -2.125
          ],
          hr_version: {
            width: 218,
            height: 294,
            shift: [
              -0.0625,
              -2.09375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-f-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/08/tree-08-f-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 138,
          height: 86,
          frame_count: 4,
          shift: [
            1.9375,
            -0.25
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 274,
            height: 170,
            shift: [
              1.96875,
              -0.21875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-f-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-g-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 72,
          height: 112,
          frame_count: 1,
          shift: [
            0.4375,
            -1.375
          ],
          hr_version: {
            width: 146,
            height: 222,
            shift: [
              0.4375,
              -1.34375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-g-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/08/tree-08-g-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 94,
          height: 96,
          frame_count: 3,
          shift: [
            0.375,
            -2.25
          ],
          hr_version: {
            width: 190,
            height: 192,
            shift: [
              0.375,
              -2.21875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-g-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/08/tree-08-g-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 136,
          height: 72,
          frame_count: 4,
          shift: [
            2,
            -0.3125
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 272,
            height: 138,
            shift: [
              2,
              -0.25
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-g-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-h-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 80,
          height: 94,
          frame_count: 1,
          shift: [
            -0.3125,
            -1.0625
          ],
          hr_version: {
            width: 160,
            height: 190,
            shift: [
              -0.3125,
              -1.0625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-h-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/08/tree-08-h-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 110,
          height: 86,
          frame_count: 3,
          shift: [
            -0.3125,
            -1.6875
          ],
          hr_version: {
            width: 218,
            height: 174,
            shift: [
              -0.28125,
              -1.6875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-h-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/08/tree-08-h-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 114,
          height: 66,
          frame_count: 4,
          shift: [
            1.625,
            0.1875
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 224,
            height: 128,
            shift: [
              1.65625,
              0.21875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-h-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-i-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 38,
          height: 90,
          frame_count: 1,
          shift: [
            -0.0625,
            -1.0625
          ],
          hr_version: {
            width: 78,
            height: 176,
            shift: [
              -0.0625,
              -1.03125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-i-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/08/tree-08-i-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 66,
          height: 84,
          frame_count: 3,
          shift: [
            0.0625,
            -1.875
          ],
          hr_version: {
            width: 130,
            height: 168,
            shift: [
              0.09375,
              -1.875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-i-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/08/tree-08-i-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 94,
          height: 52,
          frame_count: 4,
          shift: [
            1.375,
            -0.1875
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 186,
            height: 102,
            shift: [
              1.40625,
              -0.15625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-i-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-j-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 46,
          height: 90,
          frame_count: 1,
          shift: [
            0.0625,
            -1.0625
          ],
          hr_version: {
            width: 88,
            height: 180,
            shift: [
              0.09375,
              -1.03125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-j-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/08/tree-08-j-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 82,
          height: 78,
          frame_count: 3,
          shift: [
            0.0625,
            -1.75
          ],
          hr_version: {
            width: 162,
            height: 160,
            shift: [
              0.09375,
              -1.75
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-j-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/08/tree-08-j-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 104,
          height: 50,
          frame_count: 4,
          shift: [
            1.4375,
            -0.0625
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 208,
            height: 100,
            shift: [
              1.4375,
              -0.0625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-j-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-k-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 150,
          height: 108,
          frame_count: 1,
          shift: [
            -0.6875,
            -0.75
          ],
          hr_version: {
            width: 300,
            height: 218,
            shift: [
              -0.6875,
              -0.75
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-k-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/08/tree-08-k-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 150,
          height: 120,
          frame_count: 3,
          shift: [
            -1.1875,
            -1.125
          ],
          hr_version: {
            width: 308,
            height: 240,
            shift: [
              -1.0625,
              -1.09375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-k-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/08/tree-08-k-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 160,
          height: 90,
          frame_count: 4,
          shift: [
            -0.5625,
            -0.5
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 320,
            height: 180,
            shift: [
              -0.5625,
              -0.5
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-k-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-l-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 138,
          height: 102,
          frame_count: 1,
          shift: [
            0.75,
            0.3125
          ],
          hr_version: {
            width: 274,
            height: 204,
            shift: [
              0.78125,
              0.3125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-l-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/08/tree-08-l-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 122,
          height: 98,
          frame_count: 3,
          shift: [
            1.5,
            0.25
          ],
          hr_version: {
            width: 246,
            height: 198,
            shift: [
              1.5,
              0.28125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-l-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/08/tree-08-l-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 162,
          height: 108,
          frame_count: 4,
          shift: [
            1.3125,
            0.75
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 324,
            height: 216,
            shift: [
              1.3125,
              0.75
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-l-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      }
    ],
    variation_weights: [
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0.3,
      0.3,
      0.05,
      0.05
    ],
    colors: [
      {
        r: 218,
        g: 154,
        b: 85
      },
      {
        r: 190,
        g: 159,
        b: 87
      },
      {
        r: 240,
        g: 194,
        b: 139
      },
      {
        r: 234,
        g: 158,
        b: 108
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
      mining_time: 0.55,
      result: 'wood',
      count: 4
    },
    corpse: 'tree_08_stump',
    remains_when_mined: 'tree_08_stump',
    emissions_per_second: -0.001,
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
    variations: [
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-a-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 106,
          height: 142,
          frame_count: 1,
          shift: [
            -0.1875,
            -1.8125
          ],
          hr_version: {
            width: 210,
            height: 286,
            shift: [
              -0.15625,
              -1.8125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-a-trunk.png',
            frame_count: 1,
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
          width: 130,
          height: 142,
          frame_count: 3,
          shift: [
            -0.1875,
            -2.4375
          ],
          hr_version: {
            width: 262,
            height: 282,
            shift: [
              -0.1875,
              -2.40625
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
        },
        shadow: {
          filename: 'graphics/entity/tree/08/tree-08-a-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 156,
          height: 110,
          frame_count: 4,
          shift: [
            2.1875,
            0.0625
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 310,
            height: 222,
            shift: [
              2.21875,
              0.0625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-a-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-b-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 120,
          height: 138,
          frame_count: 1,
          shift: [
            -0.125,
            -1.75
          ],
          hr_version: {
            width: 238,
            height: 276,
            shift: [
              -0.09375,
              -1.71875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-b-trunk.png',
            frame_count: 1,
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
          width: 162,
          height: 154,
          frame_count: 3,
          shift: [
            -0.125,
            -2.25
          ],
          hr_version: {
            width: 322,
            height: 306,
            shift: [
              -0.09375,
              -2.1875
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
        },
        shadow: {
          filename: 'graphics/entity/tree/08/tree-08-b-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 162,
          height: 90,
          frame_count: 4,
          shift: [
            2.375,
            -0.1875
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 322,
            height: 178,
            shift: [
              2.40625,
              -0.15625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-b-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-c-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 106,
          height: 152,
          frame_count: 1,
          shift: [
            0.0625,
            -2
          ],
          hr_version: {
            width: 210,
            height: 300,
            shift: [
              0.09375,
              -1.96875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-c-trunk.png',
            frame_count: 1,
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
          width: 126,
          height: 146,
          frame_count: 3,
          shift: [
            0.1875,
            -2.625
          ],
          hr_version: {
            width: 252,
            height: 294,
            shift: [
              0.1875,
              -2.59375
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
        },
        shadow: {
          filename: 'graphics/entity/tree/08/tree-08-c-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 166,
          height: 114,
          frame_count: 4,
          shift: [
            2.1875,
            -0.0625
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 326,
            height: 228,
            shift: [
              2.25,
              -0.0625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-c-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-d-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 84,
          height: 114,
          frame_count: 1,
          shift: [
            0,
            -1.4375
          ],
          hr_version: {
            width: 166,
            height: 228,
            shift: [
              0.03125,
              -1.40625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-d-trunk.png',
            frame_count: 1,
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
          width: 110,
          height: 110,
          frame_count: 3,
          shift: [
            -0.0625,
            -2.3125
          ],
          hr_version: {
            width: 214,
            height: 220,
            shift: [
              0,
              -2.28125
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
        },
        shadow: {
          filename: 'graphics/entity/tree/08/tree-08-d-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 138,
          height: 86,
          frame_count: 4,
          shift: [
            2.1875,
            0.1875
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 274,
            height: 170,
            shift: [
              2.21875,
              0.21875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-d-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-e-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 86,
          height: 122,
          frame_count: 1,
          shift: [
            -0.25,
            -1.5625
          ],
          hr_version: {
            width: 172,
            height: 242,
            shift: [
              -0.21875,
              -1.53125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-e-trunk.png',
            frame_count: 1,
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
          width: 118,
          height: 106,
          frame_count: 3,
          shift: [
            0,
            -2.25
          ],
          hr_version: {
            width: 228,
            height: 210,
            shift: [
              0.0625,
              -2.21875
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
        },
        shadow: {
          filename: 'graphics/entity/tree/08/tree-08-e-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 150,
          height: 76,
          frame_count: 4,
          shift: [
            2,
            0.125
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 296,
            height: 150,
            shift: [
              2.03125,
              0.15625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-e-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-f-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 84,
          height: 138,
          frame_count: 1,
          shift: [
            -0.125,
            -1.75
          ],
          hr_version: {
            width: 166,
            height: 272,
            shift: [
              -0.09375,
              -1.71875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-f-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/08/tree-08-f-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 108,
          height: 148,
          frame_count: 3,
          shift: [
            -0.0625,
            -2.125
          ],
          hr_version: {
            width: 218,
            height: 294,
            shift: [
              -0.0625,
              -2.09375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-f-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/08/tree-08-f-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 138,
          height: 86,
          frame_count: 4,
          shift: [
            1.9375,
            -0.25
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 274,
            height: 170,
            shift: [
              1.96875,
              -0.21875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-f-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-g-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 72,
          height: 112,
          frame_count: 1,
          shift: [
            0.4375,
            -1.375
          ],
          hr_version: {
            width: 146,
            height: 222,
            shift: [
              0.4375,
              -1.34375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-g-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/08/tree-08-g-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 94,
          height: 96,
          frame_count: 3,
          shift: [
            0.375,
            -2.25
          ],
          hr_version: {
            width: 190,
            height: 192,
            shift: [
              0.375,
              -2.21875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-g-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/08/tree-08-g-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 136,
          height: 72,
          frame_count: 4,
          shift: [
            2,
            -0.3125
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 272,
            height: 138,
            shift: [
              2,
              -0.25
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-g-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-h-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 80,
          height: 94,
          frame_count: 1,
          shift: [
            -0.3125,
            -1.0625
          ],
          hr_version: {
            width: 160,
            height: 190,
            shift: [
              -0.3125,
              -1.0625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-h-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/08/tree-08-h-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 110,
          height: 86,
          frame_count: 3,
          shift: [
            -0.3125,
            -1.6875
          ],
          hr_version: {
            width: 218,
            height: 174,
            shift: [
              -0.28125,
              -1.6875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-h-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/08/tree-08-h-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 114,
          height: 66,
          frame_count: 4,
          shift: [
            1.625,
            0.1875
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 224,
            height: 128,
            shift: [
              1.65625,
              0.21875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-h-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-i-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 38,
          height: 90,
          frame_count: 1,
          shift: [
            -0.0625,
            -1.0625
          ],
          hr_version: {
            width: 78,
            height: 176,
            shift: [
              -0.0625,
              -1.03125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-i-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/08/tree-08-i-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 66,
          height: 84,
          frame_count: 3,
          shift: [
            0.0625,
            -1.875
          ],
          hr_version: {
            width: 130,
            height: 168,
            shift: [
              0.09375,
              -1.875
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-i-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/08/tree-08-i-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 94,
          height: 52,
          frame_count: 4,
          shift: [
            1.375,
            -0.1875
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 186,
            height: 102,
            shift: [
              1.40625,
              -0.15625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-i-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-j-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 46,
          height: 90,
          frame_count: 1,
          shift: [
            0.0625,
            -1.0625
          ],
          hr_version: {
            width: 88,
            height: 180,
            shift: [
              0.09375,
              -1.03125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-j-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/08/tree-08-j-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 82,
          height: 78,
          frame_count: 3,
          shift: [
            0.0625,
            -1.75
          ],
          hr_version: {
            width: 162,
            height: 160,
            shift: [
              0.09375,
              -1.75
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-j-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/08/tree-08-j-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 104,
          height: 50,
          frame_count: 4,
          shift: [
            1.4375,
            -0.0625
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 208,
            height: 100,
            shift: [
              1.4375,
              -0.0625
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-j-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-k-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 150,
          height: 108,
          frame_count: 1,
          shift: [
            -0.6875,
            -0.75
          ],
          hr_version: {
            width: 300,
            height: 218,
            shift: [
              -0.6875,
              -0.75
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-k-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/08/tree-08-k-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 150,
          height: 120,
          frame_count: 3,
          shift: [
            -1.1875,
            -1.125
          ],
          hr_version: {
            width: 308,
            height: 240,
            shift: [
              -1.0625,
              -1.09375
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-k-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/08/tree-08-k-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 160,
          height: 90,
          frame_count: 4,
          shift: [
            -0.5625,
            -0.5
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 320,
            height: 180,
            shift: [
              -0.5625,
              -0.5
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-k-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      },
      {
        trunk: {
          filename: 'graphics/entity/tree/08/tree-08-l-trunk.png',
          flags: [
            'mipmap'
          ],
          width: 138,
          height: 102,
          frame_count: 1,
          shift: [
            0.75,
            0.3125
          ],
          hr_version: {
            width: 274,
            height: 204,
            shift: [
              0.78125,
              0.3125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-l-trunk.png',
            frame_count: 1,
            flags: [
              'mipmap'
            ]
          }
        },
        leaves: {
          filename: 'graphics/entity/tree/08/tree-08-l-leaves.png',
          flags: [
            'mipmap'
          ],
          width: 122,
          height: 98,
          frame_count: 3,
          shift: [
            1.5,
            0.25
          ],
          hr_version: {
            width: 246,
            height: 198,
            shift: [
              1.5,
              0.28125
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-l-leaves.png',
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
        },
        shadow: {
          filename: 'graphics/entity/tree/08/tree-08-l-shadow.png',
          flags: [
            'mipmap',
            'shadow'
          ],
          width: 162,
          height: 108,
          frame_count: 4,
          shift: [
            1.3125,
            0.75
          ],
          draw_as_shadow: true,
          hr_version: {
            width: 324,
            height: 216,
            shift: [
              1.3125,
              0.75
            ],
            scale: 0.5,
            filename: 'graphics/entity/tree/08/hr-tree-08-l-shadow.png',
            frame_count: 4,
            draw_as_shadow: true,
            flags: [
              'mipmap',
              'shadow'
            ]
          }
        }
      }
    ],
    variation_weights: [
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0.3,
      0.3,
      0.05,
      0.05
    ],
    colors: [
      {
        r: 224,
        g: 109,
        b: 82
      },
      {
        r: 228,
        g: 107,
        b: 107
      },
      {
        r: 226,
        g: 136,
        b: 107
      },
      {
        r: 222,
        g: 125,
        b: 114
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
      mining_time: 0.5,
      result: 'wood'
    },
    emissions_per_second: -0.0001,
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
      mining_time: 0.5,
      result: 'wood',
      count: 2
    },
    emissions_per_second: -0.0001,
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
      mining_time: 0.5,
      result: 'wood',
      count: 2
    },
    emissions_per_second: -0.0001,
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
      mining_time: 0.5,
      result: 'wood',
      count: 2
    },
    emissions_per_second: -0.0001,
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
    pictures: [
      {
        filename: 'graphics/entity/tree/dead-dry-hairy-tree/dead-dry-hairy-tree-00.png',
        width: 195,
        height: 95,
        shift: [
          -0.625,
          0.0625
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
        width: 186,
        height: 151,
        shift: [
          -0.46875,
          -0.6171875
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
        width: 163,
        height: 125,
        shift: [
          -0.265625,
          -0.453125
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
        width: 179,
        height: 155,
        shift: [
          1.3125,
          -0.46875
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
        width: 193,
        height: 158,
        shift: [
          1.25,
          -0.46875
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
        width: 212,
        height: 143,
        shift: [
          1.09375,
          -0.5625
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
        width: 212,
        height: 147,
        shift: [
          1.3125,
          -0.765625
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
        width: 193,
        height: 111,
        shift: [
          0.78125,
          -0.609375
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
        width: 171,
        height: 83,
        shift: [
          0.625,
          0.3125
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
          0.8984375,
          0.40625
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
          -0.21875,
          0.34375
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
          -0.28125,
          0.3125
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
      mining_time: 0.5,
      result: 'wood',
      count: 2
    },
    emissions_per_second: -0.0001,
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
    pictures: [
      {
        filename: 'graphics/entity/tree/dry-hairy-tree/dry-hairy-tree-00.png',
        width: 222,
        height: 178,
        shift: [
          1.421875,
          -0.8984375
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
        width: 253,
        height: 147,
        shift: [
          1.40625,
          -1.3359375
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
        width: 247,
        height: 155,
        shift: [
          1.7578125,
          -0.9921875
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
        width: 242,
        height: 152,
        shift: [
          2.140625,
          -1.3046875
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
        width: 229,
        height: 143,
        shift: [
          1.9609375,
          -1.0234375
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
        width: 229,
        height: 195,
        shift: [
          0.6953125,
          -1.046875
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
        width: 215,
        height: 136,
        shift: [
          1.4375,
          -0.59375
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
        width: 184,
        height: 154,
        shift: [
          0.875,
          -0.859375
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
        width: 215,
        height: 136,
        shift: [
          1.4609375,
          -1.640625
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