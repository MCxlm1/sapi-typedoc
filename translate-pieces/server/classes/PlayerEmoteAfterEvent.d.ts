/* IMPORT */ import { Player } from '../index';

/**
 * 玩家使用表情后事件。
 */
export class PlayerEmoteAfterEvent {
    private constructor();
    /**
     * @remarks
     * 表情的 persona piece ID。
     */
    readonly personaPieceId: string;
    /**
     * @remarks
     * 使用表情的玩家。
     */
    readonly player: Player;
}