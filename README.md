# factorio-data

Factorio prototype data in JS + spritesheets

## Install

```
npm i factorio-data
```

## Build

```
npm run build
```

`data/raw.json` is the raw data export, more info [here](https://wiki.factorio.com/Data.raw), it's generated by loading

- core/lualib/dataloader.lua
- core/data.lua
- base/data.lua
- base/data-updates.lua

[in this order](https://lua-api.factorio.com/latest/Data-Lifecycle.html)

defines.lua is used to generate raw.json, update it by running the following command in game
```
/c game.write_file("defines.lua", serpent.block(_G.defines, {comments=false}))
```

# Notes

Check src/*.js to see how the files are built before using them.

## prototypes

### entities.js

In addition to all entity properties I've added new ones:

- size
- possible_rotations

### items.js

It contains all items in the game including fluids and virtual signals. It also contains fluid recipes because I needed the icons.

### inventoryLayout.js

Depends on items.js and is the template of the in-game inventory.

## graphics

### utilitySpritesheet

Is a spritesheet containing some utility sprites like cursor boxes, wires, arrows, etc. It's generated by utilitySprites.js.

### iconSpritesheet

Is a spritesheet containing all item sprites in the game including the inventory group sprites and it's generated by itemSprites.js which depends on inventoryLayout.js.

### tileSpritesheet

Is a spritesheet containing tileable tile sprites and it's generated by tileSprites.js which depends on tiles.js.

### entity/LR & entity/HR

entitySprites.js separates low res sprites from the high res sprites, it checks which sprites are only avalible in one resolution and completes the set. Ex:
```
const LRCompleteSpritePaths = LRSpritePaths.concat(HROnlySpritePaths) // contents of entity/LR
const HRCompleteSpritePaths = HRSpritePaths.concat(LROnlySpritePaths) // contents of entity/HR
```

### LREntitySpritesheet & HREntitySpritesheet

entitySprites.js excludes some sprites, crops some spritesheets and generates LREntitySpritesheet & HREntitySpritesheet.

Check entitySprites.js to see what is being excluded and what is being cropped.

# Copyright notice

All art assets, spritesheets and other Factorio game data used in this project belong to Wube Software Ltd and are not for redistribution.
