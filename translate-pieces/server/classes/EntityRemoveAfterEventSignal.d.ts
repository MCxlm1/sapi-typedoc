/* IMPORT */ import { EntityEventOptions, EntityRemoveAfterEvent } from '../index';

/**
 * 允许注册当实体从游戏中移除时触发的事件（例如，卸载，或死亡几秒钟后。）
 */
export class EntityRemoveAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 每当实体从游戏中移除时都会调用您的函数。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 要调用的函数。
     * @param options
     * 此事件的附加过滤选项。
     * @returns
     * 返回可在后续取消订阅操作中使用的闭包。
     */
    subscribe(
        callback: (arg0: EntityRemoveAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityRemoveAfterEvent) => void;
    /**
     * @remarks
     * 当实体被移除时，取消订阅您的函数以避免后续调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityRemoveAfterEvent) => void): void;
}