/* IMPORT */ import { ItemReleaseUseAfterEvent } from '../index';

/**
 * 管理与可充能物品释放充能相关的回调。
 */
export class ItemReleaseUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当可充能物品从充能中释放时将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ItemReleaseUseAfterEvent) => void): (arg0: ItemReleaseUseAfterEvent) => void;
    /**
     * @remarks
     * 从可充能物品释放充能的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ItemReleaseUseAfterEvent) => void): void;
}