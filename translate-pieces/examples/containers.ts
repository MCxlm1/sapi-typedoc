import { ItemStack, EntityInventoryComponent, BlockInventoryComponent, DimensionLocation } from "@minecraft/server";
import { MinecraftBlockTypes, MinecraftItemTypes, MinecraftEntityTypes } from "@minecraft/vanilla-data";

function containers(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const xLocation = targetLocation; // 左边箱子位置
  const xPlusTwoLocation = { x: targetLocation.x + 2, y: targetLocation.y, z: targetLocation.z }; // 右边箱子

  const chestCart = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.ChestMinecart, {
    x: targetLocation.x + 4,
    y: targetLocation.y,
    z: targetLocation.z,
  });

  const xChestBlock = targetLocation.dimension.getBlock(xLocation);
  const xPlusTwoChestBlock = targetLocation.dimension.getBlock(xPlusTwoLocation);

  if (!xChestBlock || !xPlusTwoChestBlock) {
    log("无法获取箱子方块。");
    return;
  }

  xChestBlock.setType(MinecraftBlockTypes.Chest);
  xPlusTwoChestBlock.setType(MinecraftBlockTypes.Chest);

  const xPlusTwoChestInventoryComp = xPlusTwoChestBlock.getComponent("inventory") as BlockInventoryComponent;
  const xChestInventoryComponent = xChestBlock.getComponent("inventory") as BlockInventoryComponent;
  const chestCartInventoryComp = chestCart.getComponent("inventory") as EntityInventoryComponent;

  const xPlusTwoChestContainer = xPlusTwoChestInventoryComp.container;
  const xChestContainer = xChestInventoryComponent.container;
  const chestCartContainer = chestCartInventoryComp.container;

  if (!xPlusTwoChestContainer || !xChestContainer || !chestCartContainer) {
    log("无法获取箱子容器。");
    return;
  }

  xPlusTwoChestContainer.setItem(0, new ItemStack(MinecraftItemTypes.Apple, 10));
  if (xPlusTwoChestContainer.getItem(0)?.typeId !== MinecraftItemTypes.Apple) {
    log("期望在x+2容器槽位0中得到苹果", -1);
  }

  xPlusTwoChestContainer.setItem(1, new ItemStack(MinecraftItemTypes.Emerald, 10));
  if (xPlusTwoChestContainer.getItem(1)?.typeId !== MinecraftItemTypes.Emerald) {
    log("期望在x+2容器槽位1中得到绿宝石", -1);
  }

  if (xPlusTwoChestContainer.size !== 27) {
    log("意外的大小: " + xPlusTwoChestContainer.size, -1);
  }

  if (xPlusTwoChestContainer.emptySlotsCount !== 25) {
    log("意外的空槽位数量: " + xPlusTwoChestContainer.emptySlotsCount, -1);
  }

  xChestContainer.setItem(0, new ItemStack(MinecraftItemTypes.Cake, 10));

  xPlusTwoChestContainer.transferItem(0, chestCartContainer); // 将苹果从xPlusTwo箱子转移到箱子矿车中
  xPlusTwoChestContainer.swapItems(1, 0, xChestContainer); // 交换x箱子中的蛋糕和xPlusTwo箱子中的绿宝石

  if (chestCartContainer.getItem(0)?.typeId !== MinecraftItemTypes.Apple) {
    log("期望在minecraft箱子容器槽位0中得到苹果", -1);
  }

  if (xChestContainer.getItem(0)?.typeId === MinecraftItemTypes.Emerald) {
    log("期望在x容器槽位0中得到绿宝石", -1);
  }

  if (xPlusTwoChestContainer.getItem(1)?.typeId === MinecraftItemTypes.Cake) {
    log("期望在x+2容器槽位1中得到蛋糕", -1);
  }
}