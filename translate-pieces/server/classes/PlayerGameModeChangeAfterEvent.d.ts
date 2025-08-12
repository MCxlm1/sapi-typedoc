/* IMPORT */ import { GameMode, Player } from '../index';

/**
 * 包含玩家游戏模式变化事件的相关信息。
 */
export class PlayerGameModeChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 玩家的新游戏模式。
     *
     */
    readonly fromGameMode: GameMode;
    /**
     * @remarks
     * 游戏模式发生变化的玩家。
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * 玩家的旧游戏模式。
     *
     */
    readonly toGameMode: GameMode;
}