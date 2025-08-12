/* IMPORT */ import { Entity } from '../index';

/**
 * 包含实体击中实体事件的相关信息。
 */
export class EntityHitEntityAfterEvent {
    private constructor();
    /**
     * @remarks
     * 执行击中动作的实体。
     *
     */
    readonly hittingEntity: Entity;
    /**
     * @remarks
     * 被击中的实体。
     *
     */
    readonly hitEntity: Entity;
}