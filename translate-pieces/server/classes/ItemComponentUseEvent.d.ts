/* IMPORT */ import { ItemStack, Player } from '../index';

/**
 * 包含与物品使用相关的信息。
 */
export class ItemComponentUseEvent {
    private constructor();
    /**
     * @remarks
     * 使用物品时的物品堆。
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * 使用物品的玩家。
     *
     */
    readonly source: Player;
}