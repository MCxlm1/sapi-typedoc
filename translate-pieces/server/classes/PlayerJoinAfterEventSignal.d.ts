/* IMPORT */ import { PlayerJoinAfterEvent } from '../index';

/**
 * 管理与玩家加入世界相关的回调。
 */
export class PlayerJoinAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当玩家加入世界时将被调用。
     * 另请参阅 playerSpawn 事件，您可以在玩家首次在世界中生成时捕获另一个相关事件。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PlayerJoinAfterEvent) => void): (arg0: PlayerJoinAfterEvent) => void;
    /**
     * @remarks
     * 从玩家加入世界的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerJoinAfterEvent) => void): void;
}