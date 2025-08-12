/* IMPORT */ import { PlayerInputModeChangeAfterEvent } from '../index';

/**
 * 管理与玩家输入模式变化相关的回调。
 */
export class PlayerInputModeChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当玩家的 {@link InputMode} 改变时将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PlayerInputModeChangeAfterEvent) => void): (arg0: PlayerInputModeChangeAfterEvent) => void;
    /**
     * @remarks
     * 从玩家输入模式改变的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerInputModeChangeAfterEvent) => void): void;
}