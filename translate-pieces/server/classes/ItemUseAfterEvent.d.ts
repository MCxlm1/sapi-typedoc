/* IMPORT */ import { ItemStack, Player } from '../index';

/**
 * 包含物品使用事件的相关信息。
 */
export class ItemUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * 正在使用的物品堆。
     *
     */
    readonly itemStack: ItemStack;
    /**
     * @remarks
     * 使用物品的玩家。
     *
     */
    readonly player: Player;
}