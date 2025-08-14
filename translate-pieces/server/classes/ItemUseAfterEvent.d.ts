/* IMPORT */ import { ItemStack, Player } from '../index';

/**
 * 包含与在方块上使用物品相关的信息。当玩家使用的物品成功触发实体交互时，此事件将触发。
 */
export class ItemUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * 正在使用的受影响物品堆叠。
     *
     */
    itemStack: ItemStack;
    /**
     * @remarks
     * 返回触发此物品事件的源实体。
     *
     */
    readonly source: Player;
}