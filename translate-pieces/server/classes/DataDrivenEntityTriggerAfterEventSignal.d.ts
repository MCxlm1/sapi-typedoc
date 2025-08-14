/* IMPORT */ import { DataDrivenEntityTriggerAfterEvent, EntityDataDrivenTriggerEventOptions } from '../index';

/**
 * 包含与数据驱动实体事件触发相关的事件注册 - 例如，鸡上的 minecraft:ageable_grow_up 事件。
 */
export class DataDrivenEntityTriggerAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当数据驱动实体事件触发后将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: DataDrivenEntityTriggerAfterEvent) => void,
        options?: EntityDataDrivenTriggerEventOptions,
    ): (arg0: DataDrivenEntityTriggerAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，当数据驱动实体事件触发后不再被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: DataDrivenEntityTriggerAfterEvent) => void): void;
}