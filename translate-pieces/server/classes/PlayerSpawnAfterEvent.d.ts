/* IMPORT */ import { Player } from '../index';

/**
 * 包含有关玩家生成的更多信息的事件。
 */
export class PlayerSpawnAfterEvent {
    private constructor();
    /**
     * @remarks
     * 如果为 true，则表示玩家加入游戏后的初始生成。
     *
     * @worldMutation
     *
     */
    initialSpawn: boolean;
    /**
     * @remarks
     * 表示加入游戏的玩家的对象。
     *
     * @worldMutation
     *
     */
    player: Player;
}