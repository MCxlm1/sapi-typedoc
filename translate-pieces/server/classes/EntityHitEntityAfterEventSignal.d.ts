/* IMPORT */ import { EntityHitEntityAfterEvent } from '../index';

/**
 * 管理与实体击中其他实体相关的回调。
 */
export class EntityHitEntityAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当实体击中（即近战攻击）另一个实体时将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EntityHitEntityAfterEvent) => void): (arg0: EntityHitEntityAfterEvent) => void;
    /**
     * @remarks
     * 从实体击中另一个实体的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityHitEntityAfterEvent) => void): void;
}