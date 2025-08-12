import { ItemStack, DimensionLocation } from "@minecraft/server";
import { MinecraftItemTypes } from "@minecraft/vanilla-data";

function itemStacks(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const oneItemLoc = { x: targetLocation.x + targetLocation.y + 3, y: 2, z: targetLocation.z + 1 };
  const fiveItemsLoc = { x: targetLocation.x + 1, y: targetLocation.y + 2, z: targetLocation.z + 1 };
  const diamondPickaxeLoc = { x: targetLocation.x + 2, y: targetLocation.y + 2, z: targetLocation.z + 4 };

  const oneEmerald = new ItemStack(MinecraftItemTypes.Emerald, 1);
  const onePickaxe = new ItemStack(MinecraftItemTypes.DiamondPickaxe, 1);
  const fiveEmeralds = new ItemStack(MinecraftItemTypes.Emerald, 5);

  log(`在 (${oneItemLoc.x}, ${oneItemLoc.y}, ${oneItemLoc.z}) 生成一个绿宝石`);
  targetLocation.dimension.spawnItem(oneEmerald, oneItemLoc);

  log(`在 (${fiveItemsLoc.x}, ${fiveItemsLoc.y}, ${fiveItemsLoc.z}) 生成五个绿宝石`);
  targetLocation.dimension.spawnItem(fiveEmeralds, fiveItemsLoc);

  log(`在 (${diamondPickaxeLoc.x}, ${diamondPickaxeLoc.y}, ${diamondPickaxeLoc.z}) 生成一个钻石镐`);
  targetLocation.dimension.spawnItem(onePickaxe, diamondPickaxeLoc);
}