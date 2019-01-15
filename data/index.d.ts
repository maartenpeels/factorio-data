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

}

export = FD
export as namespace FD
