/* IMPORT */ import { EntityHitBlockAfterEvent } from '../index';

/**
 * 管理与实体击中方块相关的回调。
 */
export class EntityHitBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当实体击中（即近战攻击）方块时将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EntityHitBlockAfterEvent) => void): (arg0: EntityHitBlockAfterEvent) => void;
    /**
     * @remarks
     * 从实体击中方块的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityHitBlockAfterEvent) => void): void;
}