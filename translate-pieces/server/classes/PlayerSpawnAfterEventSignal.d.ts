/* IMPORT */ import { PlayerSpawnAfterEvent } from '../index';

/**
 * 管理与玩家生成或重生相关的回调。
 */
export class PlayerSpawnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当玩家生成或重生时将被调用。
     * 注意，此事件中的附加标志将告诉您玩家是刚加入后生成还是重生。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PlayerSpawnAfterEvent) => void): (arg0: PlayerSpawnAfterEvent) => void;
    /**
     * @remarks
     * 从玩家生成或重生的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerSpawnAfterEvent) => void): void;
}