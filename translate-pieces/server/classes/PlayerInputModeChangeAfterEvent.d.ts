/* IMPORT */ import { InputMode, Player } from '../index';

/**
 * 玩家输入模式更改时的事件数据。
 */
export class PlayerInputModeChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 玩家使用的新输入模式。
     *
     */
    readonly newInputModeUsed: InputMode;
    /**
     * @remarks
     * 输入模式发生更改的玩家。
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * 玩家之前使用的输入模式。
     *
     */
    readonly previousInputModeUsed: InputMode;
}