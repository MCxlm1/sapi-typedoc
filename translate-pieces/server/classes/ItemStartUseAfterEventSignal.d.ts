/* IMPORT */ import { ItemStartUseAfterEvent } from '../index';

/**
 * 管理与可充能物品开始充能相关的回调。
 */
export class ItemStartUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当可充能物品开始充能时将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ItemStartUseAfterEvent) => void): (arg0: ItemStartUseAfterEvent) => void;
    /**
     * @remarks
     * 从可充能物品开始充能的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ItemStartUseAfterEvent) => void): void;
}