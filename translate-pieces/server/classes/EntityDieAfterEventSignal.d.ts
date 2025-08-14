/* IMPORT */ import { EntityDieAfterEvent, EntityEventOptions } from '../index';

/**
 * 支持注册在实体死亡后触发的事件。
 */
export class EntityDieAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 订阅实体死亡时触发的事件。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 实体死亡时要调用的函数。
     * @param options
     * 订阅触发时的附加过滤选项。
     * @returns
     * 返回可以在未来的下游调用中用于取消订阅的闭包。
     */
    subscribe(
        callback: (arg0: EntityDieAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityDieAfterEvent) => void;
    /**
     * @remarks
     * 停止此事件在实体死亡时调用您的函数。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityDieAfterEvent) => void): void;
}