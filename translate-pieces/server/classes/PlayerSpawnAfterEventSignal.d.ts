/* IMPORT */ import { PlayerSpawnAfterEvent } from '../index';

/**
 * 注册玩家生成（或死亡后重生）并在世界中完全准备就绪时的事件。
 */
export class PlayerSpawnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 为这种特定类型的事件注册新的事件接收器。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PlayerSpawnAfterEvent) => void): (arg0: PlayerSpawnAfterEvent) => void;
    /**
     * @remarks
     * 取消注册玩家生成事件的事件接收器。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerSpawnAfterEvent) => void): void;
}