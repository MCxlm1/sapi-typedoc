/* IMPORT */ import { Entity } from '../index';

/**
 * 包含与实体击中（近战攻击）另一个实体相关的信息。
 */
export class EntityHitEntityAfterEvent {
    private constructor();
    /**
     * @remarks
     * 发起攻击/近战攻击的实体。
     *
     */
    readonly damagingEntity: Entity;
    /**
     * @remarks
     * 被攻击击中的实体。
     *
     */
    readonly hitEntity: Entity;
}