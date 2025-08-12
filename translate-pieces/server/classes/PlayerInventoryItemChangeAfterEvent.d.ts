/* IMPORT */ import { ItemStack, Player, PlayerInventoryType } from '../index';

/**
 * 包含玩家库存物品更改后事件的相关信息。
 */
export class PlayerInventoryItemChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 之前的物品堆。
     *
     */
    readonly beforeItemStack?: ItemStack;
    /**
     * @remarks
     * 库存类型。
     *
     */
    readonly inventoryType: PlayerInventoryType;
    /**
     * @remarks
     * 新的物品堆。
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * 此事件的源玩家。
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * 发生更改的槽位索引。
     *
     */
    readonly slot: number;
}