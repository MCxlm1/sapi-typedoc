/* IMPORT */ import { EntitySpawnAfterEvent } from '../index';

/**
 * 注册基于脚本的事件处理器，用于处理实体生成时的情况。
 */
export class EntitySpawnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 注册实体生成时的事件处理器。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 处理生成事件的函数。
     * @seeExample logEntitySpawnEvent.ts
     */
    subscribe(callback: (arg0: EntitySpawnAfterEvent) => void): (arg0: EntitySpawnAfterEvent) => void;
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
    unsubscribe(callback: (arg0: EntitySpawnAfterEvent) => void): void;
}