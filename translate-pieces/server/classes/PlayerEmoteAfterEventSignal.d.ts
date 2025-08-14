/* IMPORT */ import { PlayerEmoteAfterEvent } from '../index';

/**
 * 管理玩家使用表情后的回调事件。
 */
export class PlayerEmoteAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当玩家使用表情后将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PlayerEmoteAfterEvent) => void): (arg0: PlayerEmoteAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，当玩家使用表情后不再被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerEmoteAfterEvent) => void): void;
}