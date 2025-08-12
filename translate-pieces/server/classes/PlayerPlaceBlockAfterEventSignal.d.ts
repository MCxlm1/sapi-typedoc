/* IMPORT */ import { PlayerPlaceBlockAfterEvent } from '../index';

/**
 * 管理与玩家放置方块相关的回调。
 */
export class PlayerPlaceBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当玩家放置方块时将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PlayerPlaceBlockAfterEvent) => void): (arg0: PlayerPlaceBlockAfterEvent) => void;
    /**
     * @remarks
     * 从玩家放置方块的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerPlaceBlockAfterEvent) => void): void;
}