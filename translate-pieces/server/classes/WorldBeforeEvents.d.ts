/* IMPORT */ import { ChatSendBeforeEventSignal, EffectAddBeforeEventSignal, EntityRemoveBeforeEventSignal, ExplosionBeforeEventSignal, ItemUseBeforeEventSignal, PlayerBreakBlockBeforeEventSignal, PlayerGameModeChangeBeforeEventSignal, PlayerInteractWithBlockBeforeEventSignal, PlayerInteractWithEntityBeforeEventSignal, PlayerLeaveBeforeEventSignal, PlayerPlaceBlockBeforeEventSignal, WeatherChangeBeforeEventSignal } from '../index';

/**
 * 表示一系列在实际动作发生之前触发的事件。在大多数情况下，你可以取消或修改即将发生的事件。
 * 请注意，在 before 类事件中，任何修改游戏状态的 API 都不会起作用，并会抛出错误。
 * （例如：dimension.spawnEntity）
 */
export class WorldBeforeEvents {
    private constructor();
    /**
     * @beta
     * @remarks
     * 玩家发送聊天消息后触发此事件。
     *
     * @earlyExecution
     *
     * @seeExample customCommand.ts
     */
    readonly chatSend: ChatSendBeforeEventSignal;
    /**
     * @remarks
     * 实体获得效果时触发此事件。
     *
     * @earlyExecution
     *
     */
    readonly effectAdd: EffectAddBeforeEventSignal;
    /**
     * @remarks
     * 实体从世界中移除前触发此事件（例如，卸载或被杀死后移除）。
     *
     * @earlyExecution
     *
     */
    readonly entityRemove: EntityRemoveBeforeEventSignal;
    /**
     * @remarks
     * 爆炸发生后触发此事件。
     *
     * @earlyExecution
     *
     */
    readonly explosion: ExplosionBeforeEventSignal;
    /**
     * @remarks
     * 玩家成功使用物品时触发此事件。
     *
     * @earlyExecution
     *
     */
    readonly itemUse: ItemUseBeforeEventSignal;
    /**
     * @remarks
     * 玩家破坏方块前触发此事件。
     *
     * @earlyExecution
     *
     */
    readonly playerBreakBlock: PlayerBreakBlockBeforeEventSignal;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly playerGameModeChange: PlayerGameModeChangeBeforeEventSignal;
    /**
     * @remarks
     * 玩家与方块交互前触发此事件。
     *
     * @earlyExecution
     *
     */
    readonly playerInteractWithBlock: PlayerInteractWithBlockBeforeEventSignal;
    /**
     * @remarks
     * 玩家与实体交互前触发此事件。
     *
     * @earlyExecution
     *
     */
    readonly playerInteractWithEntity: PlayerInteractWithEntityBeforeEventSignal;
    /**
     * @remarks
     * 玩家离开游戏时触发此事件。
     *
     * @earlyExecution
     *
     */
    readonly playerLeave: PlayerLeaveBeforeEventSignal;
    /**
     * @beta
     * @remarks
     * 玩家放置方块前触发此事件。
     *
     * @earlyExecution
     *
     */
    readonly playerPlaceBlock: PlayerPlaceBlockBeforeEventSignal;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly weatherChange: WeatherChangeBeforeEventSignal;
}