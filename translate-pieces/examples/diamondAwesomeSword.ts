import { EntityComponentTypes, ItemStack, Player } from '@minecraft/server';
import { MinecraftItemTypes } from '@minecraft/vanilla-data';

function giveAwesomeSword(player: Player) {
    const diamondAwesomeSword = new ItemStack(MinecraftItemTypes.DiamondSword, 1);
    diamondAwesomeSword.setLore([
        '§c§l超级钻石剑§r',
         '+10 酷炫值', '§p+4 闪亮§r'
    ]);

    // 在物品栏中悬停/选中该物品以查看描述信息。
    const inventory = player.getComponent(EntityComponentTypes.Inventory);
    if (inventory === undefined || inventory.container === undefined) {
        return;
    }

    inventory.container.setItem(0, diamondAwesomeSword);
}