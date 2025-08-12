/* IMPORT */ import { Player, Vector3 } from '../index';

/**
 * 包含玩家生成事件的相关信息。
 */
export class PlayerSpawnAfterEvent {
    private constructor();
    /**
     * @remarks
     * 玩家生成时的初始位置。仅在玩家首次进入世界时提供。
     *
     */
    readonly initialSpawn: boolean;
    /**
     * @remarks
     * 生成的玩家。
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * 玩家生成的位置。
     *
     */
    readonly spawnLocation: Vector3;
}