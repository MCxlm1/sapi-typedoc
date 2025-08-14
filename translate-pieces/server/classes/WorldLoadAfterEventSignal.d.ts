/* IMPORT */ import { WorldLoadAfterEvent } from '../index';

/**
 * 管理世界加载后的回调事件。
 */
export class WorldLoadAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当世界加载后将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: WorldLoadAfterEvent) => void): (arg0: WorldLoadAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，当世界加载后不再被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: WorldLoadAfterEvent) => void): void;
}