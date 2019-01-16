declare module FD {

    interface Color {
        r: number
        g: number
        b: number
    }

    interface ColorWithAlpha extends Color {
        a: number
    }

    interface CraftingMachineTint {
        primary: ColorWithAlpha
        secondary: ColorWithAlpha
        tertiary: ColorWithAlpha
    }

    interface IngredientOrResult {
        type?: string
        name: string
        amount: number
        probability?: number
    }

    interface Recipe {
        name: string
        category: string
        hidden?: boolean
        time: number
        ingredients: IngredientOrResult[]
        results: IngredientOrResult[]
        requester_paste_multiplier?: number
        crafting_machine_tint?: CraftingMachineTint
    }

    const recipes: {
        [name: string]: Recipe
    }

    interface InventoryLayoutGroup {
        name: string
        icon: string
        subgroups: InventoryLayoutSubgroup[]
    }

    interface InventoryLayoutSubgroup {
        name: string
        items: InventoryLayoutItem[]
    }

    interface InventoryLayoutItem {
        name: string
        icon?: string
        icons?: Icon[]
    }

    interface Icon {
        icon: string
        tint?: ColorWithAlpha
        scale?: number
        shift?: number[]
    }

    const inventoryLayout: InventoryLayoutGroup[]

    interface PlaceAsTile {
        result: string
        condition_size: number
        condition: string[]
    }

    interface Bonus {
        bonus: number
    }

    interface Effect {
        speed: Bonus
        consumption: Bonus
        productivity: Bonus
        pollution: Bonus
    }

    interface Item {
        type: string
        name: string
        subgroup: string
        order: string

        icon?: string
        icon_size?: number
        icons?: Icon[]

        speed?: number
        stackable?: boolean
        stack_size?: number
        durability?: number
        place_result?: string
        place_as_tile?: PlaceAsTile
        default_request_amount?: number
        rocket_launch_product?: string | number[]

        /** Virtual signal only property (type: 'virtual_signal') */
        special_signal?: boolean

        /** Ammo only property (type: 'ammo') */
        magazine_size?: number

        /** Fuel only property */
        fuel_category?: string
        /** Fuel only property */
        fuel_value?: string
        /** Fuel only property */
        fuel_acceleration_multiplier?: number
        /** Fuel only property */
        fuel_top_speed_multiplier?: number
        /** Uranium fuel cell only property */
        burnt_result?: string

        /** Fluid recipe only property */
        crafting_machine_tint?: CraftingMachineTint

        /** Armor only property */
        equipment_grid?: string
        /** Armor only property */
        inventory_size_bonus?: number

        /** Blueprint and deconstruction planner only property */
        inventory_size?: number
        /** Blueprint and deconstruction planner only property */
        selection_color?: Color
        /** Blueprint and deconstruction planner only property */
        alt_selection_color?: Color
        /** Blueprint and deconstruction planner only property */
        selection_mode?: string[]
        /** Blueprint and deconstruction planner only property */
        alt_selection_mode?: string[]
        /** Blueprint and deconstruction planner only property */
        selection_cursor_box_type?: string
        /** Blueprint and deconstruction planner only property */
        alt_selection_cursor_box_type?: string

        /** Modules only property (type: 'module') */
        effect?: Effect
        /** Modules only property (type: 'module') */
        limitation?: string[]
        /** Modules only property (type: 'module') */
        tier?: number

        /** Fluids only property (type: 'fluid') */
        default_temperature?: number
        /** Fluids only property (type: 'fluid') */
        max_temperature?: number
        /** Fluids only property (type: 'fluid') */
        heat_capacity?: string
        /** Fluids only property (type: 'fluid') */
        base_color?: Color
        /** Fluids only property (type: 'fluid') */
        flow_color?: Color
        /** Fluids only property (type: 'fluid') */
        pressure_to_speed_ratio?: number
        /** Fluids only property (type: 'fluid') */
        flow_to_energy_ratio?: number
        /** Fluids only property (type: 'fluid') */
        gas_temperature?: number
    }

    const items: {
        [name: string]: Item
    }

    // TODO: document the entity properties
    interface Entity {
        type: string
        name: string
        icon: string
        icon_size: number
        flags?: string[]
        minable: Minable
        max_health: number
        corpse?: string

        mined_sound?: Sound
        open_sound?: OpenCloseSound
        close_sound?: OpenCloseSound
        vehicle_impact_sound?: Sound
        working_sound?: WorkingSound

        selection_box?: number[][]
        selection_box_offsets?: number[][]
        collision_box?: number[][]
        secondary_collision_box?: number[][]
        drawing_box?: number[][]
        drawing_boxes?: DrawingBoxes

        animation?: SpriteData | SpriteLayers | DirectionalSpriteData
        animations?: SpriteData | DirectionalSpriteData | DirectionalSpriteLayers
        picture?: SpriteData | SpriteLayers | DirectionalSpriteData
        pictures?: SpriteData | SpriteLayers | DirectionalSpriteData | PipePictures | WallPictures | RailPictures | StorageTankPictures
        base_picture?: SpriteData | SpriteLayers | DirectionalSpriteData | SpriteSheets
        structure?: DirectionalSpriteData | DirectionalSpriteLayers | UndergroundBeltStructure

        belt_horizontal?: SpriteData
        belt_vertical?: SpriteData
        ending_top?: SpriteData
        ending_bottom?: SpriteData
        ending_side?: SpriteData
        starting_top?: SpriteData
        starting_bottom?: SpriteData
        starting_side?: SpriteData
        ending_patch?: SpriteSheet

        hand_base_picture?: SpriteData
        hand_closed_picture?: SpriteData
        hand_open_picture?: SpriteData
        hand_base_shadow?: SpriteData
        hand_closed_shadow?: SpriteData
        hand_open_shadow?: SpriteData

        picture_off?: SpriteLayers
        picture_on?: SpriteData

        shadow_animations?: DirectionalSpriteData
        input_fluid_patch_sprites?: DirectionalSpriteData
        input_fluid_patch_shadow_sprites?: DirectionalSpriteData
        input_fluid_patch_shadow_animations?: DirectionalSpriteData
        input_fluid_patch_window_sprites?: DirectionalSpriteData
        input_fluid_patch_window_flow_sprites?: DirectionalSpriteData[]
        input_fluid_patch_window_base_sprites?: DirectionalSpriteData[]

        folded_animation?: SpriteLayers | DirectionalSpriteLayers
        preparing_animation?: SpriteLayers | DirectionalSpriteLayers
        prepared_animation?: SpriteLayers | DirectionalSpriteLayers
        attacking_animation?: SpriteLayers | DirectionalSpriteLayers
        folding_animation?: SpriteLayers | DirectionalSpriteLayers

        vertical_base?: SpriteLayers
        horizontal_rail_animation_left?: SpriteLayers
        horizontal_rail_animation_right?: SpriteLayers
        vertical_rail_animation_left?: SpriteLayers
        vertical_rail_animation_right?: SpriteLayers
        vertical_rail_base?: SpriteData
        horizontal_rail_base?: SpriteData
        vertical_rail_base_mask?: SpriteData
        horizontal_rail_base_mask?: SpriteData
        horizontal_base?: SpriteLayers
        wall_patch?: DirectionalSpriteLayers

        picture_safe?: SpriteData
        picture_set?: SpriteData
        picture_set_enemy?: SpriteData

        shadow_sprite?: SpriteData
        satellite_shadow_animation?: SpriteData
        hole_sprite?: SpriteData
        hole_light_sprite?: SpriteData
        rocket_shadow_overlay_sprite?: SpriteData
        rocket_glow_overlay_sprite?: SpriteData
        door_back_sprite?: SpriteData
        door_back_open_offset?: number[]
        door_front_sprite?: SpriteData
        door_front_open_offset?: number[]
        base_day_sprite?: SpriteData
        base_night_sprite?: SpriteData
        red_lights_back_sprites?: SpriteLayers
        red_lights_front_sprites?: SpriteLayers
        satellite_animation?: SpriteData
        arm_01_back_animation?: SpriteData
        arm_02_right_animation?: SpriteData
        arm_03_front_animation?: SpriteData
        base_front_sprite?: SpriteData

        base?: SpriteLayers
        base_patch?: SpriteData
        base_animation?: SpriteData
        door_animation_up?: SpriteData
        door_animation_down?: SpriteData
        recharging_animation?: SpriteData

        sprites?: DirectionalSpriteLayers
        activity_led_sprites?: DirectionalSpriteData
        plus_symbol_sprites?: DirectionalSpriteData
        minus_symbol_sprites?: DirectionalSpriteData
        multiply_symbol_sprites?: DirectionalSpriteData
        divide_symbol_sprites?: DirectionalSpriteData
        modulo_symbol_sprites?: DirectionalSpriteData
        power_symbol_sprites?: DirectionalSpriteData
        left_shift_symbol_sprites?: DirectionalSpriteData
        right_shift_symbol_sprites?: DirectionalSpriteData
        and_symbol_sprites?: DirectionalSpriteData
        or_symbol_sprites?: DirectionalSpriteData
        xor_symbol_sprites?: DirectionalSpriteData

        greater_symbol_sprites?: DirectionalSpriteData
        less_symbol_sprites?: DirectionalSpriteData
        equal_symbol_sprites?: DirectionalSpriteData
        not_equal_symbol_sprites?: DirectionalSpriteData
        less_or_equal_symbol_sprites?: DirectionalSpriteData
        greater_or_equal_symbol_sprites?: DirectionalSpriteData

        crafting_categories?: string[]
        result_inventory_size?: number
        energy_usage?: string
        crafting_speed?: number
        source_inventory_size?: number
        energy_source?: EnergySource
        fast_replaceable_group?: string
        size: Size
        dying_explosion?: string
        module_specification?: ModuleSpecification
        allowed_effects?: string[]
        animation_speed_coefficient?: number
        speed?: number
        connector_frame_sprites?: ConnectorFrameSprites
        circuit_wire_connection_points?: CircuitWireConnectionPoints[]
        circuit_connector_sprites?: CircuitConnectorSprites | CircuitConnectorSprites[]
        circuit_wire_max_distance?: number
        possible_rotations?: number[]
        mode?: string
        target_temperature?: number
        energy_consumption?: string
        patch?: BoilerPatch
        fire_flicker_enabled?: boolean
        fire?: DirectionalSpriteData
        fire_glow_flicker_enabled?: boolean
        fire_glow?: DirectionalSpriteData
        burning_cooldown?: number
        inventory_size?: number
        circuit_wire_connection_point?: CircuitWireConnectionPoints
        maximum_wire_distance?: number
        supply_area_distance?: number
        track_coverage_during_build_by_moving?: boolean
        connection_points?: CircuitWireConnectionPoints[]
        radius_visualisation_picture?: SpriteData
        alert_icon_shift?: number[]
        effectivity?: number
        fluid_usage_per_tick?: number
        maximum_temperature?: number
        horizontal_animation?: SpriteLayers
        vertical_animation?: SpriteLayers
        smoke?: Smoke[]
        min_perceived_performance?: number
        performance_to_sound_speedup?: number
        burns_fluid?: boolean
        collision_mask?: string[]
        fluid_box_tile_collision_test?: string[]
        adjacent_tile_collision_test?: string[]
        fluid?: string
        pumping_speed?: number
        tile_width?: number
        tile_height?: number
        placeable_position_visualization?: SpriteData
        energy_per_movement?: number
        energy_per_rotation?: number
        extension_speed?: number
        rotation_speed?: number
        pickup_position?: number[]
        insert_position?: number[]
        platform_picture?: SpriteSheet
        default_stack_control_input_signal?: Signal
        hand_size?: number
        stack?: boolean
        filter_count?: number
        horizontal_window_bounding_box?: number[][]
        vertical_window_bounding_box?: number[][]
        energy_per_sector?: string
        max_distance_of_sector_revealed?: number
        max_distance_of_nearby_sector_revealed?: number
        energy_per_nearby_scan?: string
        integration_patch?: SpriteData
        radius_minimap_visualisation_color?: ColorWithAlpha
        energy_usage_per_tick?: string
        darkness_for_all_lamps_on?: number
        darkness_for_all_lamps_off?: number
        light?: Light
        light_when_colored?: Light
        glow_size?: number
        glow_color_intensity?: number
        signal_to_color_mapping?: SignalToColorMapping[]
        underground_sprite?: SpriteData
        ingredient_count?: number
        scale_entity_info_icon?: boolean
        has_backer_name?: boolean
        pipe_covers?: DirectionalSpriteLayers
        always_draw_idle_animation?: boolean
        idle_animation?: SpriteLayers
        working_visualisations?: WorkingVisualisation[]
        working_visualisations_disabled?: WorkingVisualisation[]
        repair_speed_modifier?: number
        connected_gate_visualization?: SpriteData
        wall_diode_green?: SpriteData
        wall_diode_green_light?: Light
        wall_diode_red?: SpriteData
        wall_diode_red_light?: Light
        default_output_signal?: Signal
        resource_categories?: string[]
        fluid_box?: FluidBox
        fluid_boxes?: FluidBox[]
        input_fluid_box?: FluidBox
        output_fluid_box?: FluidBox
        mining_speed?: number
        mining_power?: number
        resource_searching_radius?: number
        vector_to_place_result?: number[]
        monitor_visualization_tint?: Color
        base_render_layer?: string
        preparing_speed?: number
        folding_speed?: number
        automated_ammo_count?: number
        attacking_speed?: number
        alert_when_attacking?: boolean
        call_for_help_radius?: number
        max_distance?: number
        underground_remove_belts_sprite?: SpriteData
        structure_animation_speed_coefficient?: number
        structure_animation_movement_cooldown?: number
        overlay?: SpriteLayers
        production?: string
        opening_speed?: number
        activation_distance?: number
        timeout_to_close?: number
        rail_category?: string
        placeable_by?: PlaceableBy
        trigger_radius?: number
        ammo_category?: string
        animation_ticks_per_frame?: number
        rail_overlay_animations?: DirectionalSpriteData
        top_animations?: DirectionalSpriteLayers
        light1?: TrainStopLight
        light2?: TrainStopLight
        color?: ColorWithAlpha
        default_train_stopped_signal?: Signal
        rail_piece?: SpriteData
        green_light?: Light
        orange_light?: Light
        red_light?: Light
        default_red_output_signal?: Signal
        default_orange_output_signal?: Signal
        default_green_output_signal?: Signal
        blue_light?: Light
        default_blue_output_signal?: Signal
        on_animation?: SpriteLayers
        off_animation?: SpriteLayers
        researching_speed?: number
        inputs?: string[]
        logistic_mode?: string
        logistic_slots_count?: number
        rocket_parts_required?: number
        rocket_result_inventory_size?: number
        fixed_recipe?: string
        idle_energy_usage?: string
        lamp_energy_usage?: string
        active_energy_usage?: string
        rocket_entity?: string
        times_to_blink?: number
        light_blinking_speed?: number
        door_opening_speed?: number
        base_light?: BaseLight[]
        base_engine_light?: Light
        silo_fade_out_start_distance?: number
        silo_fade_out_end_distance?: number
        alarm_trigger?: RocketSiloAlarm[]
        clamps_on_trigger?: RocketSiloAlarm[]
        clamps_off_trigger?: RocketSiloAlarm[]
        doors_trigger?: RocketSiloAlarm[]
        raise_rocket_trigger?: RocketSiloAlarm[]
        recharge_minimum?: string
        charging_energy?: string
        logistics_radius?: number
        construction_radius?: number
        charge_approach_distance?: number
        robot_slots_count?: number
        material_slots_count?: number
        stationing_offset?: number[]
        charging_offsets?: number[][]
        recharging_light?: Light
        request_to_open_door_timeout?: number
        spawn_and_station_height?: number
        draw_logistic_radius_visualization?: boolean
        draw_construction_radius_visualization?: boolean
        open_door_trigger_effect?: RoboportDoorEffect[]
        close_door_trigger_effect?: RoboportDoorEffect[]
        default_available_logistic_output_signal?: Signal
        default_total_logistic_output_signal?: Signal
        default_available_construction_output_signal?: Signal
        default_total_construction_output_signal?: Signal
        two_direction_only?: boolean
        window_bounding_box?: number[][]
        flow_length_in_ticks?: number
        fluid_wagon_connector_frame_count?: number
        fluid_animation?: DirectionalSpriteData
        glass_pictures?: DirectionalSpriteData
        charge_animation?: SpriteData
        charge_cooldown?: number
        charge_light?: Light
        discharge_animation?: SpriteData
        discharge_cooldown?: number
        discharge_light?: Light
        animation_shadow?: SpriteData
        distribution_effectivity?: number
        activity_led_light?: Light
        activity_led_light_offsets?: number[][]
        screen_light?: Light
        screen_light_offsets?: number[][]
        input_connection_bounding_box?: number[][]
        output_connection_bounding_box?: number[][]
        input_connection_points?: CircuitWireConnectionPoints[]
        output_connection_points?: CircuitWireConnectionPoints[]
        item_slot_count?: number
        power_on_animation?: SpriteData
        overlay_start_delay?: number
        overlay_start?: SpriteData
        overlay_loop?: SpriteData
        led_on?: SpriteData
        led_off?: SpriteData
        left_wire_connection_point?: CircuitWireConnectionPoints
        right_wire_connection_point?: CircuitWireConnectionPoints
        wire_max_distance?: number
        sprite?: SpriteLayers
        audible_distance_modifier?: number
        maximum_polyphony?: number
        instruments?: Instrument[]
        enable_gui?: boolean
        allow_copy_paste?: boolean
        energy_production?: string
        consumption?: string
        neighbour_bonus?: number
        burner?: Burner
        lower_layer_picture?: SpriteData
        working_light_picture?: SpriteData
        heat_buffer?: HeatBuffer
        connection_patches_connected?: SpriteSheet
        connection_patches_disconnected?: SpriteSheet
        connection_patches?: DirectionalSpriteData
        minimum_glow_temperature?: number
        glow_alpha_modifier?: number
        connection_sprites?: HeatPipeSprites
        heat_glow_sprites?: HeatPipeSprites
        heat_glow_light?: Light
        render_layer?: string
        order?: string
        gui_mode?: string
        erase_contents_when_mined?: boolean
        ammo_stack_limit?: number
        gun?: string
        turret_rotation_speed?: number
        turn_after_shooting_cooldown?: number
        cannon_parking_frame_count?: number
        cannon_parking_speed?: number
        manual_range_modifier?: number
        base_shift?: number[]
        base_picture_render_layer?: string
        cannon_barrel_pictures?: SpriteLayers
        cannon_base_pictures?: SpriteLayers
        cannon_base_shiftings?: number[][]
        cannon_barrel_recoil_shiftings?: CannonBarrelRecoilShiftings[]
        cannon_barrel_light_direction?: number[]
        cannon_barrel_recoil_shiftings_load_correction_matrix?: number[][]
        ending_attack_speed?: number
        attacking_animation_fade_out?: number
        turret_base_has_direction?: boolean
        fluid_buffer_size?: number
        fluid_buffer_input_flow?: number
        activation_buffer_ratio?: number
        ending_attack_animation?: DirectionalSpriteLayers
        not_enough_fuel_indicator_picture?: DirectionalSpriteData
        enough_fuel_indicator_picture?: DirectionalSpriteData
        indicator_light?: Light
        gun_animation_render_layer?: string
        gun_animation_secondary_draw_order?: number
        base_picture_secondary_draw_order?: number
        muzzle_animation?: SpriteData
        muzzle_light?: Light
        folded_muzzle_animation_shift?: MuzzleAnimationShift
        preparing_muzzle_animation_shift?: MuzzleAnimationShift
        prepared_muzzle_animation_shift?: MuzzleAnimationShift
        attacking_muzzle_animation_shift?: MuzzleAnimationShift
        ending_attack_muzzle_animation_shift?: MuzzleAnimationShift
        folding_muzzle_animation_shift?: MuzzleAnimationShift
        prepare_range?: number
        shoot_in_prepare_state?: boolean
    }
    interface Minable {
        mining_time: number
        result: string
        hardness?: number
        count?: number
    }
    interface OpenCloseSound {
        filename?: string
        volume?: number
        variations?: Sound
        aggregation?: SoundAggregation
    }
    interface SoundAggregation {
        max_count: number
        remove: boolean
    }
    interface Sound {
        filename: string
        volume?: number
    }
    interface WorkingSound {
        sound?: Sound | Sound[]
        apparent_volume?: number
        max_sounds_per_type?: number
        audible_distance_modifier?: number
        probability?: number
        match_speed_to_activity?: boolean
        match_progress_to_activity?: boolean
        match_volume_to_activity?: boolean
        idle_sound?: Sound
    }
    interface EnergySource {
        type: string
        fuel_category?: string
        effectivity?: number
        fuel_inventory_size?: number
        emissions?: number
        smoke?: Smoke[]
        usage_priority?: string
        max_temperature?: number
        specific_heat?: string
        max_transfer?: string
        connections?: Connections[]
        pipe_covers?: DirectionalSpriteData
        drain?: string
        input_flow_limit?: string
        buffer_capacity?: string
        output_flow_limit?: string
    }
    interface Smoke {
        name: string
        deviation?: number[]
        frequency: number
        position?: number[]
        slow_down_factor?: number
        starting_vertical_speed?: number
        starting_frame_deviation?: number
        north_position?: number[]
        south_position?: number[]
        east_position?: number[]
        west_position?: number[]
    }
    interface Connections {
        position?: number[]
        direction: number
    }
    interface Signal {
        type: string
        name: string
    }
    interface SignalToColorMapping extends Signal {
        color: Color
    }
    interface SpriteData {
        filename?: string
        filenames?: string[]
        stripes?: Stripes[]

        width: number
        height: number

        scale?: number
        x?: number
        y?: number
        priority?: string
        frame_count?: number
        line_length?: number
        direction_count?: number
        axially_symmetrical?: boolean
        shift?: number[]
        draw_as_shadow?: boolean
        repeat_count?: number
        blend_mode?: string
        animation_speed?: number
        run_mode?: string
        apply_runtime_tint?: boolean
        apply_projection?: boolean
        flags?: string[]
        counterclockwise?: boolean
        tint?: ColorWithAlpha
        lines_per_file?: number
        hr_version?: SpriteData
    }
    interface Stripes {
        filename: string
        width_in_frames: number
        height_in_frames: number
    }
    interface DirectionalSpriteData {
        north: SpriteData
        east: SpriteData
        south: SpriteData
        west: SpriteData
    }
    interface SpriteLayers {
        layers: SpriteData[]
    }
    interface DirectionalSpriteLayers {
        north: SpriteLayers
        east: SpriteLayers
        south: SpriteLayers
        west: SpriteLayers
    }
    interface SpriteSheet {
        sheet: SpriteData
    }
    interface SpriteSheets {
        sheets: SpriteData[]
    }
    interface PipePictures {
        straight_vertical_single: SpriteData
        straight_vertical: SpriteData
        straight_vertical_window: SpriteData
        straight_horizontal_window: SpriteData
        straight_horizontal: SpriteData
        corner_up_right: SpriteData
        corner_up_left: SpriteData
        corner_down_right: SpriteData
        corner_down_left: SpriteData
        t_up: SpriteData
        t_down: SpriteData
        t_right: SpriteData
        t_left: SpriteData
        cross: SpriteData
        ending_up: SpriteData
        ending_down: SpriteData
        ending_right: SpriteData
        ending_left: SpriteData
        horizontal_window_background: SpriteData
        vertical_window_background: SpriteData
        fluid_background: SpriteData
        low_temperature_flow: SpriteData
        middle_temperature_flow: SpriteData
        high_temperature_flow: SpriteData
        gas_flow: SpriteData
    }
    interface WallPictures {
        single: SpriteLayers
        straight_vertical: SpriteLayers[]
        straight_horizontal: SpriteLayers[]
        corner_right_down: SpriteLayers
        corner_left_down: SpriteLayers
        t_up: SpriteLayers
        ending_right: SpriteLayers
        ending_left: SpriteLayers
        water_connection_patch: SpriteSheets
    }
    interface StorageTankPictures {
        picture: SpriteSheets
        fluid_background: SpriteData
        window_background: SpriteData
        flow_sprite: SpriteData
        gas_flow: SpriteData
    }
    interface RailPictures {
        straight_rail_horizontal: RailSpriteLayers
        straight_rail_vertical: RailSpriteLayers
        straight_rail_diagonal_left_top: RailSpriteLayers
        straight_rail_diagonal_right_top: RailSpriteLayers
        straight_rail_diagonal_right_bottom: RailSpriteLayers
        straight_rail_diagonal_left_bottom: RailSpriteLayers
        curved_rail_vertical_left_top: RailSpriteLayers
        curved_rail_vertical_right_top: RailSpriteLayers
        curved_rail_vertical_right_bottom: RailSpriteLayers
        curved_rail_vertical_left_bottom: RailSpriteLayers
        curved_rail_horizontal_left_top: RailSpriteLayers
        curved_rail_horizontal_right_top: RailSpriteLayers
        curved_rail_horizontal_right_bottom: RailSpriteLayers
        curved_rail_horizontal_left_bottom: RailSpriteLayers
        rail_endings: SpriteSheet
    }
    interface RailSpriteLayers {
        metals: SpriteData
        backplates: SpriteData
        ties: SpriteData
        stone_path: SpriteData
        stone_path_background: SpriteData
        segment_visualisation_middle: SpriteData
        segment_visualisation_ending_front: SpriteData
        segment_visualisation_ending_back: SpriteData
        segment_visualisation_continuing_front: SpriteData
        segment_visualisation_continuing_back: SpriteData
    }
    interface UndergroundBeltStructure {
        direction_in: SpriteSheet
        direction_out: SpriteSheet
    }
    interface Size {
        width: number
        height: number
    }
    interface ModuleSpecification {
        module_slots: number
        module_info_icon_shift?: number[]
        max_entity_info_module_icons_per_row?: number
        max_entity_info_module_icon_rows?: number
        module_info_multi_row_initial_height_modifier?: number
    }
    interface ConnectorFrameSprites {
        frame_main: SpriteSheet
        frame_shadow: SpriteSheet
        frame_main_scanner: SpriteData
        frame_main_scanner_movement_speed: number
        frame_main_scanner_horizontal_start_shift?: number[]
        frame_main_scanner_horizontal_end_shift?: number[]
        frame_main_scanner_horizontal_y_scale: number
        frame_main_scanner_horizontal_rotation: number
        frame_main_scanner_vertical_start_shift?: number[]
        frame_main_scanner_vertical_end_shift?: number[]
        frame_main_scanner_vertical_y_scale: number
        frame_main_scanner_vertical_rotation: number
        frame_main_scanner_cross_horizontal_start_shift?: number[]
        frame_main_scanner_cross_horizontal_end_shift?: number[]
        frame_main_scanner_cross_horizontal_y_scale: number
        frame_main_scanner_cross_horizontal_rotation: number
        frame_main_scanner_cross_vertical_start_shift?: number[]
        frame_main_scanner_cross_vertical_end_shift?: number[]
        frame_main_scanner_cross_vertical_y_scale: number
        frame_main_scanner_cross_vertical_rotation: number
        frame_main_scanner_nw_ne: SpriteData
        frame_main_scanner_sw_se: SpriteData
    }
    interface CircuitWireConnectionPoints {
        wire: WireTypes
        shadow: WireTypes
    }
    interface WireTypes {
        copper?: number[]
        red?: number[]
        green?: number[]
    }
    interface CircuitConnectorSprites {
        led_blue: SpriteData
        led_red: SpriteData
        led_green: SpriteData
        led_light: Light
        blue_led_light_offset?: number[]
        red_green_led_light_offset?: number[]
        connector_main?: SpriteData
        wire_pins?: SpriteData
        wire_pins_shadow?: SpriteData
        led_blue_off?: SpriteData
        connector_shadow?: SpriteData
    }
    interface PipeConnection {
        type?: string
        position?: number[]
        positions?: number[][]
        max_underground_distance?: number
    }
    interface SecondaryDrawOrders {
        north: number
    }
    interface FluidBox {
        base_area?: number
        height?: number
        base_level?: number
        pipe_covers?: DirectionalSpriteLayers
        pipe_connections?: PipeConnection[]
        production_type?: string
        filter?: string
        minimum_temperature?: number
        secondary_draw_order?: number
        render_layer?: string
        pipe_picture?: DirectionalSpriteData
        secondary_draw_orders?: SecondaryDrawOrders
    }
    interface BoilerPatch {
        east: SpriteData
    }
    interface Light {
        intensity: number
        size: number
        shift?: number[]
        color?: Color | ColorWithAlpha
        minimum_darkness?: number
    }
    interface BaseLight extends Light {
        type: string
        picture: SpriteData
        rotation_shift: number
    }
    interface WorkingVisualisation {
        north_position?: number[]
        east_position?: number[]
        south_position?: number[]
        west_position?: number[]
        animation?: SpriteData
        light?: Light
        effect?: string
        apply_recipe_tint?: string
        north_animation?: SpriteData
        east_animation?: SpriteData
        south_animation?: SpriteData
    }
    interface PlaceableBy {
        item: string
        count: number
    }
    interface DrawingBoxes {
        north: number[][]
        east: number[][]
        south: number[][]
        west: number[][]
    }
    interface TrainStopLight {
        light: Light
        picture: DirectionalSpriteData
        red_picture: DirectionalSpriteData
    }
    interface RocketSiloAlarm {
        type: string
        sound?: Sound[]
    }
    interface RoboportDoorEffect {
        type: string
        sound: Sound
    }
    interface Instrument {
        name: string
        notes?: Note[]
    }
    interface Note {
        name: string
        sound: NoteSound
    }
    interface NoteSound {
        filename: string
        preload?: boolean
    }
    interface Burner {
        fuel_category: string
        effectivity: number
        fuel_inventory_size: number
        burnt_inventory_size: number
    }
    interface HeatBuffer {
        max_temperature: number
        specific_heat: string
        max_transfer: string
        connections?: Connections[]
    }
    interface HeatPipeSprites {
        single: SpriteData[]
        straight_vertical: SpriteData[]
        straight_horizontal: SpriteData[]
        corner_right_up: SpriteData[]
        corner_left_up: SpriteData[]
        corner_right_down: SpriteData[]
        corner_left_down: SpriteData[]
        t_up: SpriteData[]
        t_down: SpriteData[]
        t_right: SpriteData[]
        t_left: SpriteData[]
        cross: SpriteData[]
        ending_up: SpriteData[]
        ending_down: SpriteData[]
        ending_right: SpriteData[]
        ending_left: SpriteData[]
    }
    interface CannonBarrelRecoilShiftings {
        x: number
        y: number
        z: number
    }
    interface MuzzleAnimationShift {
        rotations: MuzzleAnimationShiftRotation[]
        direction_shift: MuzzleAnimationShiftDirection
    }
    interface MuzzleAnimationShiftRotation {
        frames: number[][]
        render_layer?: string
    }
    interface MuzzleAnimationShiftDirection {
        north: number[]
        east: number[]
        south: number[]
        west: number[]
    }

}

export = FD
export as namespace FD
