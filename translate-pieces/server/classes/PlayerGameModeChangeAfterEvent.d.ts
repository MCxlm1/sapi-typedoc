/* IMPORT */ import { GameMode, Player } from '../index';

/**
 * 包含玩家游戏模式更改后事件的信息。
 */
export class PlayerGameModeChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 更改前的先前游戏模式。
     *
     */
    readonly fromGameMode: GameMode;
    /**
     * @remarks
     * 此事件的源玩家。
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * 更改后的当前游戏模式。
     *
     */
    readonly toGameMode: GameMode;
}