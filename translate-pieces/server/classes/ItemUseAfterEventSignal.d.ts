/* IMPORT */ import { ItemUseAfterEvent } from '../index';

/**
 * 管理与玩家成功使用物品相关的回调。
 */
export class ItemUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当玩家成功使用物品时将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ItemUseAfterEvent) => void): (arg0: ItemUseAfterEvent) => void;
    /**
     * @remarks
     * 从玩家成功使用物品的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ItemUseAfterEvent) => void): void;
}