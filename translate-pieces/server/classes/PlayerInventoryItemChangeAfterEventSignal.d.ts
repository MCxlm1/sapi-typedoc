/* IMPORT */ import { PlayerInventoryItemChangeAfterEvent } from '../index';

/**
 * 管理与玩家库存物品变化相关的回调。
 */
export class PlayerInventoryItemChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当物品被添加或从玩家库存中移除时将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 回调函数，当事件触发时调用。
     */
    subscribe(callback: (arg0: PlayerInventoryItemChangeAfterEvent) => void): (arg0: PlayerInventoryItemChangeAfterEvent) => void;
    /**
     * @remarks
     * 从玩家库存物品变化的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerInventoryItemChangeAfterEvent) => void): void;
}