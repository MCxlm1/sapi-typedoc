/**
 * 包含有关离开世界的玩家的信息。
 */
export class PlayerLeaveAfterEvent {
    private constructor();
    /**
     * @remarks
     * 离开事件的玩家的不透明字符串标识符。
     *
     */
    readonly playerId: string;
    /**
     * @remarks
     * 离开世界的玩家。
     *
     */
    readonly playerName: string;
}