/* IMPORT */ import { Block, Player } from '../index';

/**
 * 包含拉杆操作事件的相关信息。
 */
export class LeverActionAfterEvent {
    private constructor();
    /**
     * @remarks
     * 被操作的拉杆方块。
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * 操作拉杆的玩家。
     *
     */
    readonly player: Player;
}