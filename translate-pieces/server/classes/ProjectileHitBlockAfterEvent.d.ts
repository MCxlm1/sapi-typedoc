/* IMPORT */ import { BlockHitInformation, Dimension, Entity, Vector3 } from '../index';

/**
 * 包含与抛射物击中方块相关的信息。
 */
export class ProjectileHitBlockAfterEvent {
    private constructor();
    /**
     * @remarks
     * 发生抛射物击中事件的维度。
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * 抛射物击中方块时的方向向量。
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
     * 击中方块的抛射物实体。
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
     * 包含有关被抛射物击中的方块的附加信息。
     *
     * @worldMutation
     *
     */
    getBlockHit(): BlockHitInformation;
}