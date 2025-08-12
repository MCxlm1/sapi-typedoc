/* IMPORT */ import { PlayerBreakBlockAfterEvent } from '../index';

/**
 * 管理与玩家破坏方块相关的回调。
 */
export class PlayerBreakBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当玩家破坏方块时将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PlayerBreakBlockAfterEvent) => void): (arg0: PlayerBreakBlockAfterEvent) => void;
    /**
     * @remarks
     * 从玩家破坏方块的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerBreakBlockAfterEvent) => void): void;
}