/* IMPORT */ import { PlayerGameModeChangeAfterEvent } from '../index';

/**
 * 管理与玩家游戏模式变化相关的回调。
 */
export class PlayerGameModeChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当玩家游戏模式变化时将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PlayerGameModeChangeAfterEvent) => void): (arg0: PlayerGameModeChangeAfterEvent) => void;
    /**
     * @remarks
     * 从玩家游戏模式变化的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerGameModeChangeAfterEvent) => void): void;
}