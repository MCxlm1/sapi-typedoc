/* IMPORT */ import { EntityLoadAfterEvent } from '../index';

/**
 * 管理与实体加载相关的回调。
 */
export class EntityLoadAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当实体加载时将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EntityLoadAfterEvent) => void): (arg0: EntityLoadAfterEvent) => void;
    /**
     * @remarks
     * 从实体加载的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityLoadAfterEvent) => void): void;
}