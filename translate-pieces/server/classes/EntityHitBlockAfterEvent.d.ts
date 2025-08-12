/* IMPORT */ import { Block, Entity, Vector3 } from '../index';

/**
 * 包含实体击中方块事件的相关信息。
 */
export class EntityHitBlockAfterEvent {
    private constructor();
    /**
     * @remarks
     * 被击中的方块。
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * 击中方块的实体。
     *
     */
    readonly hitEntity: Entity;
    /**
     * @remarks
     * 击中位置。
     *
     */
    readonly hitVector: Vector3;
}