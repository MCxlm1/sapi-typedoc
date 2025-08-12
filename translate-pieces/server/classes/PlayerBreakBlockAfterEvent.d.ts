/* IMPORT */ import { Block, BlockPermutation, Dimension, Player, Vector3 } from '../index';

/**
 * 包含玩家破坏方块事件的相关信息。
 */
export class PlayerBreakBlockAfterEvent {
    private constructor();
    /**
     * @remarks
     * 被破坏的方块。
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * 破坏前方块的排列状态。
     *
     */
    readonly brokenBlockPermutation: BlockPermutation;
    /**
     * @remarks
     * 方块被破坏的维度。
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * 破坏方块的玩家。
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * 方块被破坏的位置。
     *
     */
    readonly blockLocation: Vector3;
}