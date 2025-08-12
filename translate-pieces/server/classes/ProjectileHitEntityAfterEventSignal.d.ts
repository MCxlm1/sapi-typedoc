/* IMPORT */ import { ProjectileHitEntityAfterEvent } from '../index';

/**
 * 管理与抛射物击中实体相关的回调。
 */
export class ProjectileHitEntityAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当抛射物击中实体时将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ProjectileHitEntityAfterEvent) => void): (arg0: ProjectileHitEntityAfterEvent) => void;
    /**
     * @remarks
     * 从抛射物击中实体的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ProjectileHitEntityAfterEvent) => void): void;
}