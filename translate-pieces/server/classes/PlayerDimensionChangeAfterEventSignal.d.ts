/* IMPORT */ import { PlayerDimensionChangeAfterEvent } from '../index';

/**
 * 管理与玩家维度变化相关的回调。
 */
export class PlayerDimensionChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当玩家移动到不同维度时将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PlayerDimensionChangeAfterEvent) => void): (arg0: PlayerDimensionChangeAfterEvent) => void;
    /**
     * @remarks
     * 从玩家维度变化的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerDimensionChangeAfterEvent) => void): void;
}