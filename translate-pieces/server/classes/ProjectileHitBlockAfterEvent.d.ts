/* IMPORT */ import { Block, Entity, Vector3 } from '../index';

/**
 * 包含抛射物击中方块事件的相关信息。
 */
export class ProjectileHitBlockAfterEvent {
    private constructor();
    /**
     * @remarks
     * 被击中的方块。
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * 生成抛射物的实体。可能是 undefined。
     *
     */
    readonly creator: Entity | undefined;
    /**
     * @remarks
     * 抛射物实体。
     *
     */
    readonly projectile: Entity;
    /**
     * @remarks
     * 抛射物击中方块的位置。
     *
     */
    readonly hitVector: Vector3;
    /**
     * @remarks
     * 包含有关被抛射物击中的方块的额外信息。
     *
     * @worldMutation
     *
     */
    getBlockHit(): Block;
}