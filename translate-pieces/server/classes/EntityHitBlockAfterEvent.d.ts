/* IMPORT */ import { Block, BlockPermutation, Direction, Entity } from '../index';

/**
 * 包含与实体击中方块相关的信息。
 */
export class EntityHitBlockAfterEvent {
    private constructor();
    /**
     * @remarks
     * 被击中的方块面。
     *
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * 发起攻击的实体。
     *
     */
    readonly damagingEntity: Entity;
    /**
     * @remarks
     * 被攻击击中的方块。
     *
     */
    readonly hitBlock: Block;
    /**
     * @remarks
     * 被攻击击中的方块排列。
     *
     */
    readonly hitBlockPermutation: BlockPermutation;
}