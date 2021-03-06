# factorio-data

Factorio (v0.17.36) prototype data in JS + spritesheets

## Install

```
npm i factorio-data
```

## Build

```
npm run build
```

`data/raw.json` is the raw data export, more info [here](https://wiki.factorio.com/Data.raw), it's generated by loading

-   core/lualib/dataloader.lua
-   core/data.lua
-   base/data.lua
-   base/data-updates.lua

[in this order](https://lua-api.factorio.com/latest/Data-Lifecycle.html)

defines.lua is used to generate raw.json, update it by running the following command in game

```
/c game.write_file("defines.lua", serpent.block(_G.defines, {comments=false}))
```

# Notes

Check src/\*.js to see how the files are built before using them.

## Prototypes

### entities.js

In addition to all entity properties I've added new ones:

-   size
-   possible_rotations

### items.js

It contains all items in the game including fluids and virtual signals. It also contains fluid recipes because I needed the icons.

### inventoryLayout.js

Depends on items.js and is the template of the in-game inventory.

I also added a new creative tab to it that contains:

-   loader
-   fast_loader
-   express_loader
-   infinity_chest
-   heat_interface
-   infinity_pipe
-   electric_energy_interface

## Graphics

### utilitySpritesheet

Is a spritesheet containing some utility sprites like cursor boxes, wires, arrows, etc.

### iconSpritesheet

Is a spritesheet containing all item sprites in the game including the inventory group sprites.

### tileSpritesheet

Is a spritesheet containing tileable tile sprites.

### (LR/HR)EntitySpritesheet

Is a spritesheet containing entity sprites. Some entity sprites are excluded and some are cropped.

# Copyright notice

All art assets, spritesheets and other Factorio game data used in this project belong to Wube Software Ltd and are not for redistribution.
