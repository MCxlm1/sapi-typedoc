/* IMPORT */ import { DataDrivenEntityTriggerAfterEvent } from '../index';

/**
 * 管理与数据驱动实体触发事件相关的回调。
 */
export class DataDrivenEntityTriggerAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当数据驱动的实体触发事件发生时将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: DataDrivenEntityTriggerAfterEvent) => void): (arg0: DataDrivenEntityTriggerAfterEvent) => void;
    /**
     * @remarks
     * 从数据驱动的实体触发事件回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: DataDrivenEntityTriggerAfterEvent) => void): void;
}