/* IMPORT */ import { EntityRemoveBeforeEvent } from '../index';

/**
 * 允许注册一个事件，当实体从游戏中移除时触发（例如，卸载或死亡几秒钟后。）
 */
export class EntityRemoveBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 每当实体从游戏中移除时都会调用你的函数。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 要调用的函数。
     * @returns
     * 返回一个闭包，可在后续的取消订阅操作中使用。
     */
    subscribe(callback: (arg0: EntityRemoveBeforeEvent) => void): (arg0: EntityRemoveBeforeEvent) => void;
    /**
     * @remarks
     * 当实体被移除时，取消订阅你的函数，使其不再被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityRemoveBeforeEvent) => void): void;
}