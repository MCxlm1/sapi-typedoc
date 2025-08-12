/* IMPORT */ import { ItemStartUseOnAfterEvent } from '../index';

/**
 * 管理与玩家使用物品或放置方块相关的回调。
 */
export class ItemStartUseOnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当玩家通过按下"使用物品/放置方块"按钮成功使用物品或放置方块时将被调用。
     * 如果放置了多个方块，则此事件只会在方块放置开始时发生一次。
     * 注意：此事件不能与锄头或斧头物品一起使用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ItemStartUseOnAfterEvent) => void): (arg0: ItemStartUseOnAfterEvent) => void;
    /**
     * @remarks
     * 从玩家使用物品或放置方块的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ItemStartUseOnAfterEvent) => void): void;
}