/* IMPORT */ import { Block, Direction, ItemStack, Player } from '../index';

/**
 * 包含物品在方块上使用相关的信息。当玩家按下"使用物品/放置方块"按钮成功使用物品或放置方块时触发此事件。在执行构建动作时，与第一个交互的方块触发。注意：此事件不能与锄头或斧头物品一起使用。
 */
export class ItemStartUseOnAfterEvent {
    private constructor();
    /**
     * @remarks
     * 物品所使用的方块。
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * 物品所使用的方块面。
     *
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * 开始使用的受影响物品堆。在某些游戏场景中可能是未定义的，例如用空手按按钮。
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