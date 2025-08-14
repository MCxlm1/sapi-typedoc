/* IMPORT */ import { EntityLoadAfterEvent } from '../index';

/**
 * 注册基于脚本的事件处理器，用于处理实体加载时的情况。
 */
export class EntityLoadAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 注册实体加载时的事件处理器。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 处理加载事件的函数。
     */
    subscribe(callback: (arg0: EntityLoadAfterEvent) => void): (arg0: EntityLoadAfterEvent) => void;
    /**
     * @remarks
     * 取消注册先前订阅的事件。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 最初传递给订阅事件的函数，即将被取消注册。
     */
    unsubscribe(callback: (arg0: EntityLoadAfterEvent) => void): void;
}