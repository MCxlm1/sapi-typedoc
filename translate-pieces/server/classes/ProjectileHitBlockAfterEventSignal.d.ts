/* IMPORT */ import { ProjectileHitBlockAfterEvent } from '../index';

/**
 * 管理与抛射物击中方块相关的回调。
 */
export class ProjectileHitBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当抛射物击中方块时将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ProjectileHitBlockAfterEvent) => void): (arg0: ProjectileHitBlockAfterEvent) => void;
    /**
     * @remarks
     * 从抛射物击中方块的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ProjectileHitBlockAfterEvent) => void): void;
}