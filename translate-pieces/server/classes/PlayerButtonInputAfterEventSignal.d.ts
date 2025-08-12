/* IMPORT */ import { PlayerButtonInputAfterEvent } from '../index';

/**
 * 管理与玩家按钮输入相关的回调。
 */
export class PlayerButtonInputAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当 {@link InputButton} 状态改变时将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PlayerButtonInputAfterEvent) => void): (arg0: PlayerButtonInputAfterEvent) => void;
    /**
     * @remarks
     * 从玩家按钮输入的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerButtonInputAfterEvent) => void): void;
}