import { ItemStack, BlockInventoryComponent, DimensionLocation } from "@minecraft/server";
import { MinecraftBlockTypes, MinecraftItemTypes } from "@minecraft/vanilla-data";

function placeItemsInChest(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  // 获取方块
  const block = targetLocation.dimension.getBlock(targetLocation);

  if (!block) {
    log("无法找到方块。也许它没有被加载？", -1);
    return;
  }

  // 将其设置为箱子
  block.setType(MinecraftBlockTypes.Chest);

  // 获取物品栏
  const inventoryComponent = block.getComponent("inventory") as BlockInventoryComponent;

  if (!inventoryComponent || !inventoryComponent.container) {
    log("无法找到物品栏组件。", -1);
    return;
  }

  const inventoryContainer = inventoryComponent.container;

  // 将槽位0设置为10个苹果的堆叠
  inventoryContainer.setItem(0, new ItemStack(MinecraftItemTypes.Apple, 10));
}