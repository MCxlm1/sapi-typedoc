/* IMPORT */ import { EntityHurtAfterEvent } from '../index';

/**
 * 管理与实体受伤相关的回调。
 */
export class EntityHurtAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当实体受伤（受到伤害）时将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EntityHurtAfterEvent) => void): (arg0: EntityHurtAfterEvent) => void;
    /**
     * @remarks
     * 从实体受伤的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityHurtAfterEvent) => void): void;
}