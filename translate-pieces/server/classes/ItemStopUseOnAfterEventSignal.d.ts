/* IMPORT */ import { ItemStopUseOnAfterEvent } from '../index';

/**
 * 管理与玩家释放使用物品按钮相关的回调。
 */
export class ItemStopUseOnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当玩家在成功使用物品后释放"使用物品/放置方块"按钮时将被调用。
     * 注意：此事件不能与锄头或斧头物品一起使用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ItemStopUseOnAfterEvent) => void): (arg0: ItemStopUseOnAfterEvent) => void;
    /**
     * @remarks
     * 从玩家释放使用物品按钮的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ItemStopUseOnAfterEvent) => void): void;
}