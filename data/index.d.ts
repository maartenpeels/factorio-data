declare module FD {

    interface Color {
        r: number;
        g: number;
        b: number;
        a: number;
    }

    interface CraftingMachineTint {
        primary: Color;
        secondary: Color;
        tertiary: Color;
    }

    interface IngredientOrResult {
        type?: string;
        name: string;
        amount: number;
        probability?: number;
    }

    interface Recipe {
        name: string;
        category: string;
        hidden?: boolean;
        time: number;
        ingredients: IngredientOrResult[];
        results: IngredientOrResult[];
        requester_paste_multiplier?: number;
        crafting_machine_tint?: CraftingMachineTint;
    }

    const recipes: {
        [name: string]: Recipe;
    }

}

export = FD
export as namespace FD
