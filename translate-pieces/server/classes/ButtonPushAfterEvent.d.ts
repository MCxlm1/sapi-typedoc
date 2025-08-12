/* IMPORT */ import { Block, Player } from '../index';

/**
 * 包含按钮按下事件的相关信息。
 */
export class ButtonPushAfterEvent {
    private constructor();
    /**
     * @remarks
     * 被按下的按钮方块。
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * 按下按钮的玩家。
     *
     */
    readonly player: Player;
}