/* IMPORT */ import { Player } from '../index';

/**
 * 包含玩家离开游戏事件的相关信息。
 */
export class PlayerLeaveAfterEvent {
    private constructor();
    /**
     * @remarks
     * 离开游戏的玩家。
     *
     */
    readonly player: Player;
}