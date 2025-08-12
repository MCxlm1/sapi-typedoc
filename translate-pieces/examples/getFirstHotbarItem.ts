import { world, EntityInventoryComponent, DimensionLocation } from "@minecraft/server";

function getFirstHotbarItem(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  for (const player of world.getAllPlayers()) {
    const inventory = player.getComponent(EntityInventoryComponent.componentId) as EntityInventoryComponent;
    if (inventory && inventory.container) {
      const firstItem = inventory.container.getItem(0);

      if (firstItem) {
        log("快捷栏中的第一个物品是: " + firstItem.typeId);
      }

      return inventory.container.getItem(0);
    }
    return undefined;
  }
}