module.exports = {
  stone_path: {
    type: 'tile',
    name: 'stone_path',
    needs_correction: false,
    minable: {
      hardness: 0.2,
      mining_time: 0.5,
      result: 'stone_brick'
    },
    mined_sound: {
      filename: 'sound/deconstruct-bricks.ogg'
    },
    collision_mask: [
      'ground_tile'
    ],
    walking_speed_modifier: 1.3,
    layer: 60,
    decorative_removal_probability: 0.15,
    variants: {
      main: [
        {
          picture: 'graphics/terrain/stone-path/stone-path-1.png',
          count: 16,
          size: 1,
          hr_version: {
            picture: 'graphics/terrain/stone-path/hr-stone-path-1.png',
            count: 16,
            size: 1,
            scale: 0.5
          }
        },
        {
          picture: 'graphics/terrain/stone-path/stone-path-2.png',
          count: 4,
          size: 2,
          probability: 0.39,
          hr_version: {
            picture: 'graphics/terrain/stone-path/hr-stone-path-2.png',
            count: 16,
            size: 2,
            probability: 0.39,
            scale: 0.5
          }
        },
        {
          picture: 'graphics/terrain/stone-path/stone-path-4.png',
          count: 4,
          size: 4,
          probability: 1,
          hr_version: {
            picture: 'graphics/terrain/stone-path/hr-stone-path-4.png',
            count: 16,
            size: 4,
            probability: 1,
            scale: 0.5
          }
        }
      ],
      inner_corner: {
        picture: 'graphics/terrain/stone-path/stone-path-inner-corner.png',
        count: 16,
        tall: true,
        hr_version: {
          picture: 'graphics/terrain/stone-path/hr-stone-path-inner-corner.png',
          count: 16,
          tall: true,
          scale: 0.5
        }
      },
      outer_corner: {
        picture: 'graphics/terrain/stone-path/stone-path-outer-corner.png',
        count: 8,
        tall: true,
        hr_version: {
          picture: 'graphics/terrain/stone-path/hr-stone-path-outer-corner.png',
          count: 8,
          tall: true,
          scale: 0.5
        }
      },
      side: {
        picture: 'graphics/terrain/stone-path/stone-path-side.png',
        count: 16,
        tall: true,
        hr_version: {
          picture: 'graphics/terrain/stone-path/hr-stone-path-side.png',
          count: 16,
          tall: true,
          scale: 0.5
        }
      },
      u_transition: {
        picture: 'graphics/terrain/stone-path/stone-path-u.png',
        count: 8,
        tall: true,
        hr_version: {
          picture: 'graphics/terrain/stone-path/hr-stone-path-u.png',
          count: 8,
          tall: true,
          scale: 0.5
        }
      },
      o_transition: {
        picture: 'graphics/terrain/stone-path/stone-path-o.png',
        count: 4,
        hr_version: {
          picture: 'graphics/terrain/stone-path/hr-stone-path-o.png',
          count: 4,
          scale: 0.5
        }
      }
    },
    transitions: [
      {
        to_tiles: [
          'water',
          'deepwater',
          'water_green',
          'deepwater_green'
        ],
        inner_corner: {
          picture: 'graphics/terrain/water-transitions/stone-path.png',
          count: 8,
          line_length: 8,
          x: 0,
          y: 0,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-stone-path.png',
            count: 8,
            line_length: 8,
            x: 0,
            y: 0,
            tall: true,
            scale: 0.5
          }
        },
        inner_corner_background: {
          picture: 'graphics/terrain/water-transitions/stone-path.png',
          count: 8,
          line_length: 8,
          x: 544,
          y: 0,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-stone-path.png',
            count: 8,
            line_length: 8,
            x: 1088,
            y: 0,
            tall: true,
            scale: 0.5
          }
        },
        inner_corner_mask: {
          picture: 'graphics/terrain/water-transitions/stone-path.png',
          count: 8,
          line_length: 8,
          x: 1088,
          y: 0,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-stone-path.png',
            count: 8,
            line_length: 8,
            x: 2176,
            y: 0,
            scale: 0.5
          }
        },
        outer_corner: {
          picture: 'graphics/terrain/water-transitions/stone-path.png',
          count: 8,
          line_length: 8,
          x: 0,
          y: 288,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-stone-path.png',
            count: 8,
            line_length: 8,
            x: 0,
            y: 576,
            tall: true,
            scale: 0.5
          }
        },
        outer_corner_background: {
          picture: 'graphics/terrain/water-transitions/stone-path.png',
          count: 8,
          line_length: 8,
          x: 544,
          y: 288,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-stone-path.png',
            count: 8,
            line_length: 8,
            x: 1088,
            y: 576,
            tall: true,
            scale: 0.5
          }
        },
        outer_corner_mask: {
          picture: 'graphics/terrain/water-transitions/stone-path.png',
          count: 8,
          line_length: 8,
          x: 1088,
          y: 288,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-stone-path.png',
            count: 8,
            line_length: 8,
            x: 2176,
            y: 576,
            scale: 0.5
          }
        },
        side: {
          picture: 'graphics/terrain/water-transitions/stone-path.png',
          count: 8,
          line_length: 8,
          x: 0,
          y: 576,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-stone-path.png',
            count: 8,
            line_length: 8,
            x: 0,
            y: 1152,
            tall: true,
            scale: 0.5
          }
        },
        side_background: {
          picture: 'graphics/terrain/water-transitions/stone-path.png',
          count: 8,
          line_length: 8,
          x: 544,
          y: 576,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-stone-path.png',
            count: 8,
            line_length: 8,
            x: 1088,
            y: 1152,
            tall: true,
            scale: 0.5
          }
        },
        side_mask: {
          picture: 'graphics/terrain/water-transitions/stone-path.png',
          count: 8,
          line_length: 8,
          x: 1088,
          y: 576,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-stone-path.png',
            count: 8,
            line_length: 8,
            x: 2176,
            y: 1152,
            scale: 0.5
          }
        },
        u_transition: {
          picture: 'graphics/terrain/water-transitions/stone-path.png',
          count: 4,
          line_length: 4,
          x: 0,
          y: 864,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-stone-path.png',
            count: 4,
            line_length: 4,
            x: 0,
            y: 1728,
            tall: true,
            scale: 0.5
          }
        },
        u_transition_background: {
          picture: 'graphics/terrain/water-transitions/stone-path.png',
          count: 4,
          line_length: 4,
          x: 544,
          y: 864,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-stone-path.png',
            count: 4,
            line_length: 4,
            x: 1088,
            y: 1728,
            tall: true,
            scale: 0.5
          }
        },
        u_transition_mask: {
          picture: 'graphics/terrain/water-transitions/stone-path.png',
          count: 4,
          line_length: 4,
          x: 1088,
          y: 864,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-stone-path.png',
            count: 4,
            line_length: 4,
            x: 2176,
            y: 1728,
            scale: 0.5
          }
        },
        o_transition: {
          picture: 'graphics/terrain/water-transitions/stone-path.png',
          count: 4,
          line_length: 4,
          x: 0,
          y: 1152,
          tall: false,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-stone-path.png',
            count: 4,
            line_length: 4,
            x: 0,
            y: 2304,
            tall: false,
            scale: 0.5
          }
        },
        o_transition_background: {
          picture: 'graphics/terrain/water-transitions/stone-path.png',
          count: 4,
          line_length: 4,
          x: 544,
          y: 1152,
          tall: false,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-stone-path.png',
            count: 4,
            line_length: 4,
            x: 1088,
            y: 2304,
            tall: false,
            scale: 0.5
          }
        },
        o_transition_mask: {
          picture: 'graphics/terrain/water-transitions/stone-path.png',
          count: 4,
          line_length: 4,
          x: 1088,
          y: 1152,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-stone-path.png',
            count: 4,
            line_length: 4,
            x: 2176,
            y: 2304,
            scale: 0.5
          }
        }
      }
    ],
    transitions_between_transitions: [
      {
        to_tiles: [
          'water',
          'deepwater',
          'water_green',
          'deepwater_green'
        ],
        inner_corner: {
          picture: 'graphics/terrain/water-transitions/stone-path-transitions.png',
          count: 3,
          line_length: 3,
          x: 0,
          y: 0,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-stone-path-transitions.png',
            count: 3,
            line_length: 3,
            x: 0,
            y: 0,
            tall: true,
            scale: 0.5
          }
        },
        inner_corner_background: {
          picture: 'graphics/terrain/water-transitions/stone-path-transitions.png',
          count: 3,
          line_length: 3,
          x: 544,
          y: 0,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-stone-path-transitions.png',
            count: 3,
            line_length: 3,
            x: 1088,
            y: 0,
            tall: true,
            scale: 0.5
          }
        },
        inner_corner_mask: {
          picture: 'graphics/terrain/water-transitions/stone-path-transitions.png',
          count: 3,
          line_length: 3,
          x: 1088,
          y: 0,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-stone-path-transitions.png',
            count: 3,
            line_length: 3,
            x: 2176,
            y: 0,
            scale: 0.5
          }
        },
        outer_corner: {
          picture: 'graphics/terrain/water-transitions/stone-path-transitions.png',
          count: 3,
          line_length: 3,
          x: 0,
          y: 288,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-stone-path-transitions.png',
            count: 3,
            line_length: 3,
            x: 0,
            y: 576,
            tall: true,
            scale: 0.5
          }
        },
        outer_corner_background: {
          picture: 'graphics/terrain/water-transitions/stone-path-transitions.png',
          count: 3,
          line_length: 3,
          x: 544,
          y: 288,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-stone-path-transitions.png',
            count: 3,
            line_length: 3,
            x: 1088,
            y: 576,
            tall: true,
            scale: 0.5
          }
        },
        outer_corner_mask: {
          picture: 'graphics/terrain/water-transitions/stone-path-transitions.png',
          count: 3,
          line_length: 3,
          x: 1088,
          y: 288,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-stone-path-transitions.png',
            count: 3,
            line_length: 3,
            x: 2176,
            y: 576,
            scale: 0.5
          }
        },
        side: {
          picture: 'graphics/terrain/water-transitions/stone-path-transitions.png',
          count: 3,
          line_length: 3,
          x: 0,
          y: 576,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-stone-path-transitions.png',
            count: 3,
            line_length: 3,
            x: 0,
            y: 1152,
            tall: true,
            scale: 0.5
          }
        },
        side_background: {
          picture: 'graphics/terrain/water-transitions/stone-path-transitions.png',
          count: 3,
          line_length: 3,
          x: 544,
          y: 576,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-stone-path-transitions.png',
            count: 3,
            line_length: 3,
            x: 1088,
            y: 1152,
            tall: true,
            scale: 0.5
          }
        },
        side_mask: {
          picture: 'graphics/terrain/water-transitions/stone-path-transitions.png',
          count: 3,
          line_length: 3,
          x: 1088,
          y: 576,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-stone-path-transitions.png',
            count: 3,
            line_length: 3,
            x: 2176,
            y: 1152,
            scale: 0.5
          }
        },
        u_transition: {
          picture: 'graphics/terrain/water-transitions/stone-path-transitions.png',
          count: 1,
          line_length: 1,
          x: 0,
          y: 864,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-stone-path-transitions.png',
            count: 1,
            line_length: 1,
            x: 0,
            y: 1728,
            tall: true,
            scale: 0.5
          }
        },
        u_transition_background: {
          picture: 'graphics/terrain/water-transitions/stone-path-transitions.png',
          count: 1,
          line_length: 1,
          x: 544,
          y: 864,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-stone-path-transitions.png',
            count: 1,
            line_length: 1,
            x: 1088,
            y: 1728,
            tall: true,
            scale: 0.5
          }
        },
        u_transition_mask: {
          picture: 'graphics/terrain/water-transitions/stone-path-transitions.png',
          count: 1,
          line_length: 1,
          x: 1088,
          y: 864,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-stone-path-transitions.png',
            count: 1,
            line_length: 1,
            x: 2176,
            y: 1728,
            scale: 0.5
          }
        }
      }
    ],
    walking_sound: [
      {
        filename: 'sound/walking/concrete-01.ogg',
        volume: 1
      },
      {
        filename: 'sound/walking/concrete-02.ogg',
        volume: 1
      },
      {
        filename: 'sound/walking/concrete-03.ogg',
        volume: 1
      },
      {
        filename: 'sound/walking/concrete-04.ogg',
        volume: 1
      }
    ],
    map_color: {
      r: 50,
      g: 50,
      b: 50
    },
    ageing: 0,
    vehicle_friction_modifier: 1.1
  },
  concrete: {
    type: 'tile',
    name: 'concrete',
    needs_correction: false,
    minable: {
      hardness: 0.2,
      mining_time: 0.5,
      result: 'concrete'
    },
    mined_sound: {
      filename: 'sound/deconstruct-bricks.ogg'
    },
    collision_mask: [
      'ground_tile'
    ],
    walking_speed_modifier: 1.4,
    layer: 61,
    transition_overlay_layer_offset: 2,
    decorative_removal_probability: 0.25,
    variants: {
      main: [
        {
          picture: 'graphics/terrain/concrete/concrete-dummy.png',
          count: 1,
          size: 1
        },
        {
          picture: 'graphics/terrain/concrete/concrete-dummy.png',
          count: 1,
          size: 2,
          probability: 0.39
        },
        {
          picture: 'graphics/terrain/concrete/concrete-dummy.png',
          count: 1,
          size: 4,
          probability: 1
        }
      ],
      inner_corner: {
        picture: 'graphics/terrain/concrete/concrete-inner-corner.png',
        count: 16,
        hr_version: {
          picture: 'graphics/terrain/concrete/hr-concrete-inner-corner.png',
          count: 16,
          scale: 0.5
        }
      },
      inner_corner_mask: {
        picture: 'graphics/terrain/concrete/concrete-inner-corner-mask.png',
        count: 16,
        hr_version: {
          picture: 'graphics/terrain/concrete/hr-concrete-inner-corner-mask.png',
          count: 16,
          scale: 0.5
        }
      },
      outer_corner: {
        picture: 'graphics/terrain/concrete/concrete-outer-corner.png',
        count: 8,
        hr_version: {
          picture: 'graphics/terrain/concrete/hr-concrete-outer-corner.png',
          count: 8,
          scale: 0.5
        }
      },
      outer_corner_mask: {
        picture: 'graphics/terrain/concrete/concrete-outer-corner-mask.png',
        count: 8,
        hr_version: {
          picture: 'graphics/terrain/concrete/hr-concrete-outer-corner-mask.png',
          count: 8,
          scale: 0.5
        }
      },
      side: {
        picture: 'graphics/terrain/concrete/concrete-side.png',
        count: 16,
        hr_version: {
          picture: 'graphics/terrain/concrete/hr-concrete-side.png',
          count: 16,
          scale: 0.5
        }
      },
      side_mask: {
        picture: 'graphics/terrain/concrete/concrete-side-mask.png',
        count: 16,
        hr_version: {
          picture: 'graphics/terrain/concrete/hr-concrete-side-mask.png',
          count: 16,
          scale: 0.5
        }
      },
      u_transition: {
        picture: 'graphics/terrain/concrete/concrete-u.png',
        count: 8,
        hr_version: {
          picture: 'graphics/terrain/concrete/hr-concrete-u.png',
          count: 8,
          scale: 0.5
        }
      },
      u_transition_mask: {
        picture: 'graphics/terrain/concrete/concrete-u-mask.png',
        count: 8,
        hr_version: {
          picture: 'graphics/terrain/concrete/hr-concrete-u-mask.png',
          count: 8,
          scale: 0.5
        }
      },
      o_transition: {
        picture: 'graphics/terrain/concrete/concrete-o.png',
        count: 4,
        hr_version: {
          picture: 'graphics/terrain/concrete/hr-concrete-o.png',
          count: 4,
          scale: 0.5
        }
      },
      o_transition_mask: {
        picture: 'graphics/terrain/concrete/concrete-o-mask.png',
        count: 4,
        hr_version: {
          picture: 'graphics/terrain/concrete/hr-concrete-o-mask.png',
          count: 4,
          scale: 0.5
        }
      },
      material_background: {
        picture: 'graphics/terrain/concrete/concrete.png',
        count: 8,
        hr_version: {
          picture: 'graphics/terrain/concrete/hr-concrete.png',
          count: 8,
          scale: 0.5
        }
      }
    },
    transitions: [
      {
        to_tiles: [
          'water',
          'deepwater',
          'water_green',
          'deepwater_green'
        ],
        inner_corner: {
          picture: 'graphics/terrain/water-transitions/concrete.png',
          count: 8,
          line_length: 8,
          x: 0,
          y: 0,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete.png',
            count: 8,
            line_length: 8,
            x: 0,
            y: 0,
            tall: true,
            scale: 0.5
          }
        },
        inner_corner_background: {
          picture: 'graphics/terrain/water-transitions/concrete.png',
          count: 8,
          line_length: 8,
          x: 544,
          y: 0,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete.png',
            count: 8,
            line_length: 8,
            x: 1088,
            y: 0,
            tall: true,
            scale: 0.5
          }
        },
        inner_corner_mask: {
          picture: 'graphics/terrain/water-transitions/concrete.png',
          count: 8,
          line_length: 8,
          x: 1088,
          y: 0,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete.png',
            count: 8,
            line_length: 8,
            x: 2176,
            y: 0,
            scale: 0.5
          }
        },
        outer_corner: {
          picture: 'graphics/terrain/water-transitions/concrete.png',
          count: 8,
          line_length: 8,
          x: 0,
          y: 288,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete.png',
            count: 8,
            line_length: 8,
            x: 0,
            y: 576,
            tall: true,
            scale: 0.5
          }
        },
        outer_corner_background: {
          picture: 'graphics/terrain/water-transitions/concrete.png',
          count: 8,
          line_length: 8,
          x: 544,
          y: 288,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete.png',
            count: 8,
            line_length: 8,
            x: 1088,
            y: 576,
            tall: true,
            scale: 0.5
          }
        },
        outer_corner_mask: {
          picture: 'graphics/terrain/water-transitions/concrete.png',
          count: 8,
          line_length: 8,
          x: 1088,
          y: 288,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete.png',
            count: 8,
            line_length: 8,
            x: 2176,
            y: 576,
            scale: 0.5
          }
        },
        side: {
          picture: 'graphics/terrain/water-transitions/concrete.png',
          count: 8,
          line_length: 8,
          x: 0,
          y: 576,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete.png',
            count: 8,
            line_length: 8,
            x: 0,
            y: 1152,
            tall: true,
            scale: 0.5
          }
        },
        side_background: {
          picture: 'graphics/terrain/water-transitions/concrete.png',
          count: 8,
          line_length: 8,
          x: 544,
          y: 576,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete.png',
            count: 8,
            line_length: 8,
            x: 1088,
            y: 1152,
            tall: true,
            scale: 0.5
          }
        },
        side_mask: {
          picture: 'graphics/terrain/water-transitions/concrete.png',
          count: 8,
          line_length: 8,
          x: 1088,
          y: 576,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete.png',
            count: 8,
            line_length: 8,
            x: 2176,
            y: 1152,
            scale: 0.5
          }
        },
        u_transition: {
          picture: 'graphics/terrain/water-transitions/concrete.png',
          count: 4,
          line_length: 4,
          x: 0,
          y: 864,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete.png',
            count: 4,
            line_length: 4,
            x: 0,
            y: 1728,
            tall: true,
            scale: 0.5
          }
        },
        u_transition_background: {
          picture: 'graphics/terrain/water-transitions/concrete.png',
          count: 4,
          line_length: 4,
          x: 544,
          y: 864,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete.png',
            count: 4,
            line_length: 4,
            x: 1088,
            y: 1728,
            tall: true,
            scale: 0.5
          }
        },
        u_transition_mask: {
          picture: 'graphics/terrain/water-transitions/concrete.png',
          count: 4,
          line_length: 4,
          x: 1088,
          y: 864,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete.png',
            count: 4,
            line_length: 4,
            x: 2176,
            y: 1728,
            scale: 0.5
          }
        },
        o_transition: {
          picture: 'graphics/terrain/water-transitions/concrete.png',
          count: 4,
          line_length: 4,
          x: 0,
          y: 1152,
          tall: false,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete.png',
            count: 4,
            line_length: 4,
            x: 0,
            y: 2304,
            tall: false,
            scale: 0.5
          }
        },
        o_transition_background: {
          picture: 'graphics/terrain/water-transitions/concrete.png',
          count: 4,
          line_length: 4,
          x: 544,
          y: 1152,
          tall: false,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete.png',
            count: 4,
            line_length: 4,
            x: 1088,
            y: 2304,
            tall: false,
            scale: 0.5
          }
        },
        o_transition_mask: {
          picture: 'graphics/terrain/water-transitions/concrete.png',
          count: 4,
          line_length: 4,
          x: 1088,
          y: 1152,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete.png',
            count: 4,
            line_length: 4,
            x: 2176,
            y: 2304,
            scale: 0.5
          }
        }
      }
    ],
    transitions_between_transitions: [
      {
        to_tiles: [
          'water',
          'deepwater',
          'water_green',
          'deepwater_green'
        ],
        inner_corner: {
          picture: 'graphics/terrain/water-transitions/concrete-transitions.png',
          count: 3,
          line_length: 3,
          x: 0,
          y: 0,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete-transitions.png',
            count: 3,
            line_length: 3,
            x: 0,
            y: 0,
            tall: true,
            scale: 0.5
          }
        },
        inner_corner_background: {
          picture: 'graphics/terrain/water-transitions/concrete-transitions.png',
          count: 3,
          line_length: 3,
          x: 544,
          y: 0,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete-transitions.png',
            count: 3,
            line_length: 3,
            x: 1088,
            y: 0,
            tall: true,
            scale: 0.5
          }
        },
        inner_corner_mask: {
          picture: 'graphics/terrain/water-transitions/concrete-transitions.png',
          count: 3,
          line_length: 3,
          x: 1088,
          y: 0,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete-transitions.png',
            count: 3,
            line_length: 3,
            x: 2176,
            y: 0,
            scale: 0.5
          }
        },
        outer_corner: {
          picture: 'graphics/terrain/water-transitions/concrete-transitions.png',
          count: 3,
          line_length: 3,
          x: 0,
          y: 288,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete-transitions.png',
            count: 3,
            line_length: 3,
            x: 0,
            y: 576,
            tall: true,
            scale: 0.5
          }
        },
        outer_corner_background: {
          picture: 'graphics/terrain/water-transitions/concrete-transitions.png',
          count: 3,
          line_length: 3,
          x: 544,
          y: 288,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete-transitions.png',
            count: 3,
            line_length: 3,
            x: 1088,
            y: 576,
            tall: true,
            scale: 0.5
          }
        },
        outer_corner_mask: {
          picture: 'graphics/terrain/water-transitions/concrete-transitions.png',
          count: 3,
          line_length: 3,
          x: 1088,
          y: 288,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete-transitions.png',
            count: 3,
            line_length: 3,
            x: 2176,
            y: 576,
            scale: 0.5
          }
        },
        side: {
          picture: 'graphics/terrain/water-transitions/concrete-transitions.png',
          count: 3,
          line_length: 3,
          x: 0,
          y: 576,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete-transitions.png',
            count: 3,
            line_length: 3,
            x: 0,
            y: 1152,
            tall: true,
            scale: 0.5
          }
        },
        side_background: {
          picture: 'graphics/terrain/water-transitions/concrete-transitions.png',
          count: 3,
          line_length: 3,
          x: 544,
          y: 576,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete-transitions.png',
            count: 3,
            line_length: 3,
            x: 1088,
            y: 1152,
            tall: true,
            scale: 0.5
          }
        },
        side_mask: {
          picture: 'graphics/terrain/water-transitions/concrete-transitions.png',
          count: 3,
          line_length: 3,
          x: 1088,
          y: 576,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete-transitions.png',
            count: 3,
            line_length: 3,
            x: 2176,
            y: 1152,
            scale: 0.5
          }
        },
        u_transition: {
          picture: 'graphics/terrain/water-transitions/concrete-transitions.png',
          count: 1,
          line_length: 1,
          x: 0,
          y: 864,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete-transitions.png',
            count: 1,
            line_length: 1,
            x: 0,
            y: 1728,
            tall: true,
            scale: 0.5
          }
        },
        u_transition_background: {
          picture: 'graphics/terrain/water-transitions/concrete-transitions.png',
          count: 1,
          line_length: 1,
          x: 544,
          y: 864,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete-transitions.png',
            count: 1,
            line_length: 1,
            x: 1088,
            y: 1728,
            tall: true,
            scale: 0.5
          }
        },
        u_transition_mask: {
          picture: 'graphics/terrain/water-transitions/concrete-transitions.png',
          count: 1,
          line_length: 1,
          x: 1088,
          y: 864,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete-transitions.png',
            count: 1,
            line_length: 1,
            x: 2176,
            y: 1728,
            scale: 0.5
          }
        }
      }
    ],
    walking_sound: [
      {
        filename: 'sound/walking/concrete-01.ogg',
        volume: 1
      },
      {
        filename: 'sound/walking/concrete-02.ogg',
        volume: 1
      },
      {
        filename: 'sound/walking/concrete-03.ogg',
        volume: 1
      },
      {
        filename: 'sound/walking/concrete-04.ogg',
        volume: 1
      }
    ],
    map_color: {
      r: 100,
      g: 100,
      b: 100
    },
    ageing: 0,
    vehicle_friction_modifier: 0.8
  },
  hazard_concrete_left: {
    type: 'tile',
    name: 'hazard_concrete_left',
    needs_correction: false,
    next_direction: 'hazard_concrete_right',
    transition_merges_with_tile: 'concrete',
    minable: {
      hardness: 0.2,
      mining_time: 0.5,
      result: 'hazard_concrete'
    },
    mined_sound: {
      filename: 'sound/deconstruct-bricks.ogg'
    },
    collision_mask: [
      'ground_tile'
    ],
    walking_speed_modifier: 1.4,
    layer: 62,
    decorative_removal_probability: 0.25,
    variants: {
      main: [
        {
          picture: 'graphics/terrain/concrete/concrete-dummy.png',
          count: 1,
          size: 1
        },
        {
          picture: 'graphics/terrain/concrete/concrete-dummy.png',
          count: 1,
          size: 2,
          probability: 0.39
        },
        {
          picture: 'graphics/terrain/concrete/concrete-dummy.png',
          count: 1,
          size: 4,
          probability: 1
        }
      ],
      inner_corner_mask: {
        picture: 'graphics/terrain/concrete/hazard-concrete-inner-corner-mask.png',
        count: 1,
        hr_version: {
          picture: 'graphics/terrain/concrete/hr-hazard-concrete-inner-corner-mask.png',
          count: 1,
          scale: 0.5
        }
      },
      outer_corner_mask: {
        picture: 'graphics/terrain/concrete/hazard-concrete-outer-corner-mask.png',
        count: 1,
        hr_version: {
          picture: 'graphics/terrain/concrete/hr-hazard-concrete-outer-corner-mask.png',
          count: 1,
          scale: 0.5
        }
      },
      side_mask: {
        picture: 'graphics/terrain/concrete/hazard-concrete-side-mask.png',
        count: 1,
        hr_version: {
          picture: 'graphics/terrain/concrete/hr-hazard-concrete-side-mask.png',
          count: 1,
          scale: 0.5
        }
      },
      u_transition_mask: {
        picture: 'graphics/terrain/concrete/hazard-concrete-u-mask.png',
        count: 1,
        hr_version: {
          picture: 'graphics/terrain/concrete/hr-hazard-concrete-u-mask.png',
          count: 1,
          scale: 0.5
        }
      },
      o_transition_mask: {
        picture: 'graphics/terrain/concrete/hazard-concrete-o-mask.png',
        count: 1,
        hr_version: {
          picture: 'graphics/terrain/concrete/hr-hazard-concrete-o-mask.png',
          count: 1,
          scale: 0.5
        }
      },
      material_background: {
        picture: 'graphics/terrain/hazard-concrete-left/hazard-concrete-left.png',
        count: 8,
        hr_version: {
          picture: 'graphics/terrain/hazard-concrete-left/hr-hazard-concrete-left.png',
          count: 8,
          scale: 0.5
        }
      }
    },
    walking_sound: [
      {
        filename: 'sound/walking/concrete-01.ogg',
        volume: 1
      },
      {
        filename: 'sound/walking/concrete-02.ogg',
        volume: 1
      },
      {
        filename: 'sound/walking/concrete-03.ogg',
        volume: 1
      },
      {
        filename: 'sound/walking/concrete-04.ogg',
        volume: 1
      }
    ],
    map_color: {
      r: 0.5,
      g: 0.5,
      b: 0
    },
    ageing: 0,
    vehicle_friction_modifier: 0.8
  },
  hazard_concrete_right: {
    type: 'tile',
    name: 'hazard_concrete_right',
    needs_correction: false,
    next_direction: 'hazard_concrete_left',
    transition_merges_with_tile: 'concrete',
    minable: {
      hardness: 0.2,
      mining_time: 0.5,
      result: 'hazard_concrete'
    },
    mined_sound: {
      filename: 'sound/deconstruct-bricks.ogg'
    },
    collision_mask: [
      'ground_tile'
    ],
    walking_speed_modifier: 1.4,
    layer: 62,
    decorative_removal_probability: 0.25,
    variants: {
      main: [
        {
          picture: 'graphics/terrain/concrete/concrete-dummy.png',
          count: 1,
          size: 1
        },
        {
          picture: 'graphics/terrain/concrete/concrete-dummy.png',
          count: 1,
          size: 2,
          probability: 0.39
        },
        {
          picture: 'graphics/terrain/concrete/concrete-dummy.png',
          count: 1,
          size: 4,
          probability: 1
        }
      ],
      inner_corner_mask: {
        picture: 'graphics/terrain/concrete/hazard-concrete-inner-corner-mask.png',
        count: 1
      },
      outer_corner_mask: {
        picture: 'graphics/terrain/concrete/hazard-concrete-outer-corner-mask.png',
        count: 1
      },
      side_mask: {
        picture: 'graphics/terrain/concrete/hazard-concrete-side-mask.png',
        count: 1
      },
      u_transition_mask: {
        picture: 'graphics/terrain/concrete/hazard-concrete-u-mask.png',
        count: 1
      },
      o_transition_mask: {
        picture: 'graphics/terrain/concrete/hazard-concrete-o-mask.png',
        count: 1
      },
      material_background: {
        picture: 'graphics/terrain/hazard-concrete-right/hazard-concrete-right.png',
        count: 8,
        hr_version: {
          picture: 'graphics/terrain/hazard-concrete-right/hr-hazard-concrete-right.png',
          count: 8,
          scale: 0.5
        }
      }
    },
    walking_sound: [
      {
        filename: 'sound/walking/concrete-01.ogg',
        volume: 1
      },
      {
        filename: 'sound/walking/concrete-02.ogg',
        volume: 1
      },
      {
        filename: 'sound/walking/concrete-03.ogg',
        volume: 1
      },
      {
        filename: 'sound/walking/concrete-04.ogg',
        volume: 1
      }
    ],
    map_color: {
      r: 0.5,
      g: 0.5,
      b: 0
    },
    ageing: 0,
    vehicle_friction_modifier: 0.8
  },
  refined_concrete: {
    type: 'tile',
    name: 'refined_concrete',
    needs_correction: false,
    minable: {
      hardness: 0.2,
      mining_time: 0.5,
      result: 'refined_concrete'
    },
    mined_sound: {
      filename: 'sound/deconstruct-bricks.ogg'
    },
    collision_mask: [
      'ground_tile'
    ],
    walking_speed_modifier: 1.5,
    layer: 64,
    transition_overlay_layer_offset: 2,
    decorative_removal_probability: 0.25,
    variants: {
      main: [
        {
          picture: 'graphics/terrain/concrete/concrete-dummy.png',
          count: 1,
          size: 1
        },
        {
          picture: 'graphics/terrain/concrete/concrete-dummy.png',
          count: 1,
          size: 2,
          probability: 0.39
        },
        {
          picture: 'graphics/terrain/concrete/concrete-dummy.png',
          count: 1,
          size: 4,
          probability: 1
        }
      ],
      inner_corner: {
        picture: 'graphics/terrain/concrete/concrete-inner-corner.png',
        count: 16,
        hr_version: {
          picture: 'graphics/terrain/concrete/hr-concrete-inner-corner.png',
          count: 16,
          scale: 0.5
        }
      },
      inner_corner_mask: {
        picture: 'graphics/terrain/concrete/concrete-inner-corner-mask.png',
        count: 16,
        hr_version: {
          picture: 'graphics/terrain/concrete/hr-concrete-inner-corner-mask.png',
          count: 16,
          scale: 0.5
        }
      },
      outer_corner: {
        picture: 'graphics/terrain/concrete/concrete-outer-corner.png',
        count: 8,
        hr_version: {
          picture: 'graphics/terrain/concrete/hr-concrete-outer-corner.png',
          count: 8,
          scale: 0.5
        }
      },
      outer_corner_mask: {
        picture: 'graphics/terrain/concrete/concrete-outer-corner-mask.png',
        count: 8,
        hr_version: {
          picture: 'graphics/terrain/concrete/hr-concrete-outer-corner-mask.png',
          count: 8,
          scale: 0.5
        }
      },
      side: {
        picture: 'graphics/terrain/concrete/concrete-side.png',
        count: 16,
        hr_version: {
          picture: 'graphics/terrain/concrete/hr-concrete-side.png',
          count: 16,
          scale: 0.5
        }
      },
      side_mask: {
        picture: 'graphics/terrain/concrete/concrete-side-mask.png',
        count: 16,
        hr_version: {
          picture: 'graphics/terrain/concrete/hr-concrete-side-mask.png',
          count: 16,
          scale: 0.5
        }
      },
      u_transition: {
        picture: 'graphics/terrain/concrete/concrete-u.png',
        count: 8,
        hr_version: {
          picture: 'graphics/terrain/concrete/hr-concrete-u.png',
          count: 8,
          scale: 0.5
        }
      },
      u_transition_mask: {
        picture: 'graphics/terrain/concrete/concrete-u-mask.png',
        count: 8,
        hr_version: {
          picture: 'graphics/terrain/concrete/hr-concrete-u-mask.png',
          count: 8,
          scale: 0.5
        }
      },
      o_transition: {
        picture: 'graphics/terrain/concrete/concrete-o.png',
        count: 4,
        hr_version: {
          picture: 'graphics/terrain/concrete/hr-concrete-o.png',
          count: 4,
          scale: 0.5
        }
      },
      o_transition_mask: {
        picture: 'graphics/terrain/concrete/concrete-o-mask.png',
        count: 4,
        hr_version: {
          picture: 'graphics/terrain/concrete/hr-concrete-o-mask.png',
          count: 4,
          scale: 0.5
        }
      },
      material_background: {
        picture: 'graphics/terrain/concrete/refined-concrete.png',
        count: 8,
        hr_version: {
          picture: 'graphics/terrain/concrete/hr-refined-concrete.png',
          count: 8,
          scale: 0.5
        }
      }
    },
    transitions: [
      {
        to_tiles: [
          'water',
          'deepwater',
          'water_green',
          'deepwater_green'
        ],
        inner_corner: {
          picture: 'graphics/terrain/water-transitions/concrete.png',
          count: 8,
          line_length: 8,
          x: 0,
          y: 0,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete.png',
            count: 8,
            line_length: 8,
            x: 0,
            y: 0,
            tall: true,
            scale: 0.5
          }
        },
        inner_corner_background: {
          picture: 'graphics/terrain/water-transitions/concrete.png',
          count: 8,
          line_length: 8,
          x: 544,
          y: 0,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete.png',
            count: 8,
            line_length: 8,
            x: 1088,
            y: 0,
            tall: true,
            scale: 0.5
          }
        },
        inner_corner_mask: {
          picture: 'graphics/terrain/water-transitions/concrete.png',
          count: 8,
          line_length: 8,
          x: 1088,
          y: 0,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete.png',
            count: 8,
            line_length: 8,
            x: 2176,
            y: 0,
            scale: 0.5
          }
        },
        outer_corner: {
          picture: 'graphics/terrain/water-transitions/concrete.png',
          count: 8,
          line_length: 8,
          x: 0,
          y: 288,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete.png',
            count: 8,
            line_length: 8,
            x: 0,
            y: 576,
            tall: true,
            scale: 0.5
          }
        },
        outer_corner_background: {
          picture: 'graphics/terrain/water-transitions/concrete.png',
          count: 8,
          line_length: 8,
          x: 544,
          y: 288,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete.png',
            count: 8,
            line_length: 8,
            x: 1088,
            y: 576,
            tall: true,
            scale: 0.5
          }
        },
        outer_corner_mask: {
          picture: 'graphics/terrain/water-transitions/concrete.png',
          count: 8,
          line_length: 8,
          x: 1088,
          y: 288,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete.png',
            count: 8,
            line_length: 8,
            x: 2176,
            y: 576,
            scale: 0.5
          }
        },
        side: {
          picture: 'graphics/terrain/water-transitions/concrete.png',
          count: 8,
          line_length: 8,
          x: 0,
          y: 576,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete.png',
            count: 8,
            line_length: 8,
            x: 0,
            y: 1152,
            tall: true,
            scale: 0.5
          }
        },
        side_background: {
          picture: 'graphics/terrain/water-transitions/concrete.png',
          count: 8,
          line_length: 8,
          x: 544,
          y: 576,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete.png',
            count: 8,
            line_length: 8,
            x: 1088,
            y: 1152,
            tall: true,
            scale: 0.5
          }
        },
        side_mask: {
          picture: 'graphics/terrain/water-transitions/concrete.png',
          count: 8,
          line_length: 8,
          x: 1088,
          y: 576,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete.png',
            count: 8,
            line_length: 8,
            x: 2176,
            y: 1152,
            scale: 0.5
          }
        },
        u_transition: {
          picture: 'graphics/terrain/water-transitions/concrete.png',
          count: 4,
          line_length: 4,
          x: 0,
          y: 864,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete.png',
            count: 4,
            line_length: 4,
            x: 0,
            y: 1728,
            tall: true,
            scale: 0.5
          }
        },
        u_transition_background: {
          picture: 'graphics/terrain/water-transitions/concrete.png',
          count: 4,
          line_length: 4,
          x: 544,
          y: 864,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete.png',
            count: 4,
            line_length: 4,
            x: 1088,
            y: 1728,
            tall: true,
            scale: 0.5
          }
        },
        u_transition_mask: {
          picture: 'graphics/terrain/water-transitions/concrete.png',
          count: 4,
          line_length: 4,
          x: 1088,
          y: 864,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete.png',
            count: 4,
            line_length: 4,
            x: 2176,
            y: 1728,
            scale: 0.5
          }
        },
        o_transition: {
          picture: 'graphics/terrain/water-transitions/concrete.png',
          count: 4,
          line_length: 4,
          x: 0,
          y: 1152,
          tall: false,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete.png',
            count: 4,
            line_length: 4,
            x: 0,
            y: 2304,
            tall: false,
            scale: 0.5
          }
        },
        o_transition_background: {
          picture: 'graphics/terrain/water-transitions/concrete.png',
          count: 4,
          line_length: 4,
          x: 544,
          y: 1152,
          tall: false,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete.png',
            count: 4,
            line_length: 4,
            x: 1088,
            y: 2304,
            tall: false,
            scale: 0.5
          }
        },
        o_transition_mask: {
          picture: 'graphics/terrain/water-transitions/concrete.png',
          count: 4,
          line_length: 4,
          x: 1088,
          y: 1152,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete.png',
            count: 4,
            line_length: 4,
            x: 2176,
            y: 2304,
            scale: 0.5
          }
        }
      }
    ],
    transitions_between_transitions: [
      {
        to_tiles: [
          'water',
          'deepwater',
          'water_green',
          'deepwater_green'
        ],
        inner_corner: {
          picture: 'graphics/terrain/water-transitions/concrete-transitions.png',
          count: 3,
          line_length: 3,
          x: 0,
          y: 0,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete-transitions.png',
            count: 3,
            line_length: 3,
            x: 0,
            y: 0,
            tall: true,
            scale: 0.5
          }
        },
        inner_corner_background: {
          picture: 'graphics/terrain/water-transitions/concrete-transitions.png',
          count: 3,
          line_length: 3,
          x: 544,
          y: 0,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete-transitions.png',
            count: 3,
            line_length: 3,
            x: 1088,
            y: 0,
            tall: true,
            scale: 0.5
          }
        },
        inner_corner_mask: {
          picture: 'graphics/terrain/water-transitions/concrete-transitions.png',
          count: 3,
          line_length: 3,
          x: 1088,
          y: 0,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete-transitions.png',
            count: 3,
            line_length: 3,
            x: 2176,
            y: 0,
            scale: 0.5
          }
        },
        outer_corner: {
          picture: 'graphics/terrain/water-transitions/concrete-transitions.png',
          count: 3,
          line_length: 3,
          x: 0,
          y: 288,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete-transitions.png',
            count: 3,
            line_length: 3,
            x: 0,
            y: 576,
            tall: true,
            scale: 0.5
          }
        },
        outer_corner_background: {
          picture: 'graphics/terrain/water-transitions/concrete-transitions.png',
          count: 3,
          line_length: 3,
          x: 544,
          y: 288,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete-transitions.png',
            count: 3,
            line_length: 3,
            x: 1088,
            y: 576,
            tall: true,
            scale: 0.5
          }
        },
        outer_corner_mask: {
          picture: 'graphics/terrain/water-transitions/concrete-transitions.png',
          count: 3,
          line_length: 3,
          x: 1088,
          y: 288,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete-transitions.png',
            count: 3,
            line_length: 3,
            x: 2176,
            y: 576,
            scale: 0.5
          }
        },
        side: {
          picture: 'graphics/terrain/water-transitions/concrete-transitions.png',
          count: 3,
          line_length: 3,
          x: 0,
          y: 576,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete-transitions.png',
            count: 3,
            line_length: 3,
            x: 0,
            y: 1152,
            tall: true,
            scale: 0.5
          }
        },
        side_background: {
          picture: 'graphics/terrain/water-transitions/concrete-transitions.png',
          count: 3,
          line_length: 3,
          x: 544,
          y: 576,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete-transitions.png',
            count: 3,
            line_length: 3,
            x: 1088,
            y: 1152,
            tall: true,
            scale: 0.5
          }
        },
        side_mask: {
          picture: 'graphics/terrain/water-transitions/concrete-transitions.png',
          count: 3,
          line_length: 3,
          x: 1088,
          y: 576,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete-transitions.png',
            count: 3,
            line_length: 3,
            x: 2176,
            y: 1152,
            scale: 0.5
          }
        },
        u_transition: {
          picture: 'graphics/terrain/water-transitions/concrete-transitions.png',
          count: 1,
          line_length: 1,
          x: 0,
          y: 864,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete-transitions.png',
            count: 1,
            line_length: 1,
            x: 0,
            y: 1728,
            tall: true,
            scale: 0.5
          }
        },
        u_transition_background: {
          picture: 'graphics/terrain/water-transitions/concrete-transitions.png',
          count: 1,
          line_length: 1,
          x: 544,
          y: 864,
          tall: true,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete-transitions.png',
            count: 1,
            line_length: 1,
            x: 1088,
            y: 1728,
            tall: true,
            scale: 0.5
          }
        },
        u_transition_mask: {
          picture: 'graphics/terrain/water-transitions/concrete-transitions.png',
          count: 1,
          line_length: 1,
          x: 1088,
          y: 864,
          hr_version: {
            picture: 'graphics/terrain/water-transitions/hr-concrete-transitions.png',
            count: 1,
            line_length: 1,
            x: 2176,
            y: 1728,
            scale: 0.5
          }
        }
      }
    ],
    walking_sound: [
      {
        filename: 'sound/walking/concrete-01.ogg',
        volume: 1
      },
      {
        filename: 'sound/walking/concrete-02.ogg',
        volume: 1
      },
      {
        filename: 'sound/walking/concrete-03.ogg',
        volume: 1
      },
      {
        filename: 'sound/walking/concrete-04.ogg',
        volume: 1
      }
    ],
    map_color: {
      r: 100,
      g: 100,
      b: 100
    },
    ageing: 0,
    vehicle_friction_modifier: 0.8
  },
  refined_hazard_concrete_left: {
    type: 'tile',
    name: 'refined_hazard_concrete_left',
    needs_correction: false,
    next_direction: 'refined_hazard_concrete_right',
    transition_merges_with_tile: 'refined_concrete',
    minable: {
      hardness: 0.2,
      mining_time: 0.5,
      result: 'refined_hazard_concrete'
    },
    mined_sound: {
      filename: 'sound/deconstruct-bricks.ogg'
    },
    collision_mask: [
      'ground_tile'
    ],
    walking_speed_modifier: 1.5,
    layer: 65,
    decorative_removal_probability: 0.25,
    variants: {
      main: [
        {
          picture: 'graphics/terrain/concrete/concrete-dummy.png',
          count: 1,
          size: 1
        },
        {
          picture: 'graphics/terrain/concrete/concrete-dummy.png',
          count: 1,
          size: 2,
          probability: 0.39
        },
        {
          picture: 'graphics/terrain/concrete/concrete-dummy.png',
          count: 1,
          size: 4,
          probability: 1
        }
      ],
      inner_corner_mask: {
        picture: 'graphics/terrain/concrete/hazard-concrete-inner-corner-mask.png',
        count: 1,
        hr_version: {
          picture: 'graphics/terrain/concrete/hr-hazard-concrete-inner-corner-mask.png',
          count: 1,
          scale: 0.5
        }
      },
      outer_corner_mask: {
        picture: 'graphics/terrain/concrete/hazard-concrete-outer-corner-mask.png',
        count: 1,
        hr_version: {
          picture: 'graphics/terrain/concrete/hr-hazard-concrete-outer-corner-mask.png',
          count: 1,
          scale: 0.5
        }
      },
      side_mask: {
        picture: 'graphics/terrain/concrete/hazard-concrete-side-mask.png',
        count: 1,
        hr_version: {
          picture: 'graphics/terrain/concrete/hr-hazard-concrete-side-mask.png',
          count: 1,
          scale: 0.5
        }
      },
      u_transition_mask: {
        picture: 'graphics/terrain/concrete/hazard-concrete-u-mask.png',
        count: 1,
        hr_version: {
          picture: 'graphics/terrain/concrete/hr-hazard-concrete-u-mask.png',
          count: 1,
          scale: 0.5
        }
      },
      o_transition_mask: {
        picture: 'graphics/terrain/concrete/hazard-concrete-o-mask.png',
        count: 1,
        hr_version: {
          picture: 'graphics/terrain/concrete/hr-hazard-concrete-o-mask.png',
          count: 1,
          scale: 0.5
        }
      },
      material_background: {
        picture: 'graphics/terrain/hazard-concrete-left/refined-hazard-concrete-left.png',
        count: 8,
        hr_version: {
          picture: 'graphics/terrain/hazard-concrete-left/hr-refined-hazard-concrete-left.png',
          count: 8,
          scale: 0.5
        }
      }
    },
    walking_sound: [
      {
        filename: 'sound/walking/concrete-01.ogg',
        volume: 1
      },
      {
        filename: 'sound/walking/concrete-02.ogg',
        volume: 1
      },
      {
        filename: 'sound/walking/concrete-03.ogg',
        volume: 1
      },
      {
        filename: 'sound/walking/concrete-04.ogg',
        volume: 1
      }
    ],
    map_color: {
      r: 0.5,
      g: 0.5,
      b: 0
    },
    ageing: 0,
    vehicle_friction_modifier: 0.8
  },
  refined_hazard_concrete_right: {
    type: 'tile',
    name: 'refined_hazard_concrete_right',
    needs_correction: false,
    next_direction: 'refined_hazard_concrete_left',
    transition_merges_with_tile: 'refined_concrete',
    minable: {
      hardness: 0.2,
      mining_time: 0.5,
      result: 'refined_hazard_concrete'
    },
    mined_sound: {
      filename: 'sound/deconstruct-bricks.ogg'
    },
    collision_mask: [
      'ground_tile'
    ],
    walking_speed_modifier: 1.5,
    layer: 65,
    decorative_removal_probability: 0.25,
    variants: {
      main: [
        {
          picture: 'graphics/terrain/concrete/concrete-dummy.png',
          count: 1,
          size: 1
        },
        {
          picture: 'graphics/terrain/concrete/concrete-dummy.png',
          count: 1,
          size: 2,
          probability: 0.39
        },
        {
          picture: 'graphics/terrain/concrete/concrete-dummy.png',
          count: 1,
          size: 4,
          probability: 1
        }
      ],
      inner_corner_mask: {
        picture: 'graphics/terrain/concrete/hazard-concrete-inner-corner-mask.png',
        count: 1
      },
      outer_corner_mask: {
        picture: 'graphics/terrain/concrete/hazard-concrete-outer-corner-mask.png',
        count: 1
      },
      side_mask: {
        picture: 'graphics/terrain/concrete/hazard-concrete-side-mask.png',
        count: 1
      },
      u_transition_mask: {
        picture: 'graphics/terrain/concrete/hazard-concrete-u-mask.png',
        count: 1
      },
      o_transition_mask: {
        picture: 'graphics/terrain/concrete/hazard-concrete-o-mask.png',
        count: 1
      },
      material_background: {
        picture: 'graphics/terrain/hazard-concrete-right/refined-hazard-concrete-right.png',
        count: 8,
        hr_version: {
          picture: 'graphics/terrain/hazard-concrete-right/hr-refined-hazard-concrete-right.png',
          count: 8,
          scale: 0.5
        }
      }
    },
    walking_sound: [
      {
        filename: 'sound/walking/concrete-01.ogg',
        volume: 1
      },
      {
        filename: 'sound/walking/concrete-02.ogg',
        volume: 1
      },
      {
        filename: 'sound/walking/concrete-03.ogg',
        volume: 1
      },
      {
        filename: 'sound/walking/concrete-04.ogg',
        volume: 1
      }
    ],
    map_color: {
      r: 0.5,
      g: 0.5,
      b: 0
    },
    ageing: 0,
    vehicle_friction_modifier: 0.8
  }
}