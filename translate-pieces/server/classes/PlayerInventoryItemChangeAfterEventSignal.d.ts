/* IMPORT */ import { InventoryItemEventOptions, PlayerInventoryItemChangeAfterEvent } from '../index';

/**
 * 管理与玩家库存物品更改后相关的回调。
 */
export class PlayerInventoryItemChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当玩家库存物品更改后将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此事件触发时调用的函数回调。
     * @param options
     * 事件订阅的附加过滤选项。
     */
    subscribe(
        callback: (arg0: PlayerInventoryItemChangeAfterEvent) => void,
        options?: InventoryItemEventOptions,
    ): (arg0: PlayerInventoryItemChangeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，当玩家库存物品更改后不再被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerInventoryItemChangeAfterEvent) => void): void;
}