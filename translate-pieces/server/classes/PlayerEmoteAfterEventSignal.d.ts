/* IMPORT */ import { PlayerEmoteAfterEvent } from '../index';

/**
 * 管理与玩家表情相关的回调。
 */
export class PlayerEmoteAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当玩家使用表情时将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PlayerEmoteAfterEvent) => void): (arg0: PlayerEmoteAfterEvent) => void;
    /**
     * @remarks
     * 从玩家表情的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerEmoteAfterEvent) => void): void;
}