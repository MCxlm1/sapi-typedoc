/* IMPORT */ import { Block, Dimension, Player } from '../index';

/**
 * 包含玩家放置方块事件的相关信息。
 */
export class PlayerPlaceBlockAfterEvent {
    private constructor();
    /**
     * @remarks
     * 被放置的方块。
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * 方块被放置的维度。
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * 放置方块的玩家。
     *
     */
    readonly player: Player;
}