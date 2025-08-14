/* IMPORT */ import { Block, ItemStack, Player } from '../index';

/**
 * 包含与物品停止在方块上使用相关的信息。当玩家通过按下"使用物品/放置方块"按钮成功使用物品或放置方块时，此事件会触发。如果放置了多个方块，此事件只会在方块放置开始时发生一次。注意：此事件不能与锄或斧物品一起使用。
 */
export class ItemStopUseOnAfterEvent {
    private constructor();
    /**
     * @remarks
     * 物品被使用的方块。
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * 在方块上使用的受影响物品堆叠。
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * 返回触发此物品事件的源实体。
     *
     */
    readonly source: Player;
}