/* IMPORT */ import { EntityDieAfterEvent } from '../index';

/**
 * 管理与实体死亡相关的回调。
 */
export class EntityDieAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当实体死亡时将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EntityDieAfterEvent) => void): (arg0: EntityDieAfterEvent) => void;
    /**
     * @remarks
     * 从实体死亡的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityDieAfterEvent) => void): void;
}