/* IMPORT */ import { LeverActionAfterEvent } from '../index';

/**
 * 管理与拉杆操作相关的回调。
 */
export class LeverActionAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当拉动拉杆时将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: LeverActionAfterEvent) => void): (arg0: LeverActionAfterEvent) => void;
    /**
     * @remarks
     * 从拉动拉杆的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: LeverActionAfterEvent) => void): void;
}