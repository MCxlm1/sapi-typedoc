/* IMPORT */ import { WorldLoadAfterEvent } from '../index';

/**
 * 管理与世界加载相关的回调。
 */
export class WorldLoadAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当世界加载时将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: WorldLoadAfterEvent) => void): (arg0: WorldLoadAfterEvent) => void;
    /**
     * @remarks
     * 从世界加载的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: WorldLoadAfterEvent) => void): void;
}