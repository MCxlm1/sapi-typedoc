/**
 * 包含加入游戏的玩家相关信息。有关玩家首次在游戏内生成后可能返回的更详细信息，请参阅 playerSpawn 事件。
 */
export class PlayerJoinAfterEvent {
    private constructor();
    /**
     * @remarks
     * 加入游戏的玩家的不透明字符串标识符。
     *
     */
    readonly playerId: string;
    /**
     * @remarks
     * 加入游戏的玩家名称。
     *
     */
    readonly playerName: string;
}