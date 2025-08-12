/* IMPORT */ import { Dimension, Entity, EntityHitInformation, Vector3 } from '../index';

/**
 * 包含抛射物击中实体的相关信息。
 */
export class ProjectileHitEntityAfterEvent {
    private constructor();
    /**
     * @remarks
     * 发生抛射物击中的维度。
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * 抛射物击中实体时的方向向量。
     *
     */
    readonly hitVector: Vector3;
    /**
     * @remarks
     * 抛射物击中发生的位置。
     *
     */
    readonly location: Vector3;
    /**
     * @remarks
     * 击中实体的抛射物实体。
     *
     */
    readonly projectile: Entity;
    /**
     * @remarks
     * 发射抛射物的可选源实体。
     *
     */
    readonly source?: Entity;
    /**
     * @remarks
     * 包含有关被击中实体的附加信息。
     *
     * @worldMutation
     *
     */
    getEntityHit(): EntityHitInformation;
}