/* IMPORT */ import { BlockExplodeAfterEventSignal, ButtonPushAfterEventSignal, ChatSendAfterEventSignal, DataDrivenEntityTriggerAfterEventSignal, EffectAddAfterEventSignal, EntityDieAfterEventSignal, EntityHealthChangedAfterEventSignal, EntityHitBlockAfterEventSignal, EntityHitEntityAfterEventSignal, EntityHurtAfterEventSignal, EntityLoadAfterEventSignal, EntityRemoveAfterEventSignal, EntitySpawnAfterEventSignal, ExplosionAfterEventSignal, GameRuleChangeAfterEventSignal, InputButton, InputMode, ItemCompleteUseAfterEventSignal, ItemReleaseUseAfterEventSignal, ItemStartUseAfterEventSignal, ItemStartUseOnAfterEventSignal, ItemStopUseAfterEventSignal, ItemStopUseOnAfterEventSignal, ItemUseAfterEventSignal, LeverActionAfterEventSignal, PackSettingChangeAfterEventSignal, PistonActivateAfterEventSignal, PlayerBreakBlockAfterEventSignal, PlayerButtonInputAfterEventSignal, PlayerDimensionChangeAfterEventSignal, PlayerEmoteAfterEventSignal, PlayerGameModeChangeAfterEventSignal, PlayerHotbarSelectedSlotChangeAfterEventSignal, PlayerInputModeChangeAfterEventSignal, PlayerInputPermissionCategoryChangeAfterEventSignal, PlayerInteractWithBlockAfterEventSignal, PlayerInteractWithEntityAfterEventSignal, PlayerInventoryItemChangeAfterEventSignal, PlayerJoinAfterEventSignal, PlayerLeaveAfterEventSignal, PlayerPlaceBlockAfterEventSignal, PlayerSpawnAfterEventSignal, PressurePlatePopAfterEventSignal, PressurePlatePushAfterEventSignal, ProjectileHitBlockAfterEventSignal, ProjectileHitEntityAfterEventSignal, ServerMessageAfterEventSignal, TargetBlockHitAfterEventSignal, TripWireTripAfterEventSignal, WeatherChangeAfterEventSignal, WorldLoadAfterEventSignal } from '../index';

/**
 * 包含在世界范围内可用的一组事件。
 */
export class WorldAfterEvents {
    private constructor();
    /**
     * @remarks
     * 每个被爆炸破坏的方块位置都会触发此事件。
     * 方块被破坏后触发此事件。
     *
     * @earlyExecution
     *
     */
    readonly blockExplode: BlockExplodeAfterEventSignal;
    /**
     * @remarks
     * 当按钮被按下时触发此事件。
     *
     * @earlyExecution
     *
     */
    readonly buttonPush: ButtonPushAfterEventSignal;
    /**
     * @beta
     * @remarks
     * 在广播或发送聊天消息给玩家后触发此事件。
     *
     * @earlyExecution
     *
     */
    readonly chatSend: ChatSendAfterEventSignal;
    /**
     * @remarks
     * 当触发将更新实体组件定义状态的实体事件时触发此事件。
     *
     * @earlyExecution
     *
     */
    readonly dataDrivenEntityTrigger: DataDrivenEntityTriggerAfterEventSignal;
    /**
     * @remarks
     * 当向实体添加效果（如中毒）时触发此事件。
     *
     * @earlyExecution
     *
     */
    readonly effectAdd: EffectAddAfterEventSignal;
    /**
     * @remarks
     * 当实体死亡时触发此事件。
     *
     * @earlyExecution
     *
     */
    readonly entityDie: EntityDieAfterEventSignal;
    /**
     * @remarks
     * 当实体生命值以任何程度发生变化时触发此事件。
     *
     * @earlyExecution
     *
     */
    readonly entityHealthChanged: EntityHealthChangedAfterEventSignal;
    /**
     * @remarks
     * 当实体击中（即近战攻击）方块时触发此事件。
     *
     * @earlyExecution
     *
     */
    readonly entityHitBlock: EntityHitBlockAfterEventSignal;
    /**
     * @remarks
     * 当实体击中（即近战攻击）另一个实体时触发此事件。
     *
     * @earlyExecution
     *
     */
    readonly entityHitEntity: EntityHitEntityAfterEventSignal;
    /**
     * @remarks
     * 当实体受伤（受到伤害）时触发此事件。
     *
     * @earlyExecution
     *
     */
    readonly entityHurt: EntityHurtAfterEventSignal;
    /**
     * @remarks
     * 当实体加载时触发。
     *
     * @earlyExecution
     *
     */
    readonly entityLoad: EntityLoadAfterEventSignal;
    /**
     * @remarks
     * 当实体被移除时触发（例如，可能未加载，或在被杀死后移除）。
     *
     * @earlyExecution
     *
     */
    readonly entityRemove: EntityRemoveAfterEventSignal;
    /**
     * @remarks
     * 当实体生成时触发此事件。
     *
     * @earlyExecution
     *
     */
    readonly entitySpawn: EntitySpawnAfterEventSignal;
    /**
     * @remarks
     * 爆炸发生后触发此事件。
     *
     * @earlyExecution
     *
     */
    readonly explosion: ExplosionAfterEventSignal;
    /**
     * @remarks
     * 当 world.gameRules 属性发生变化时触发此事件。
     *
     * @earlyExecution
     *
     */
    readonly gameRuleChange: GameRuleChangeAfterEventSignal;
    /**
     * @remarks
     * 当可充能物品完成充能时触发此事件。
     *
     * @earlyExecution
     *
     */
    readonly itemCompleteUse: ItemCompleteUseAfterEventSignal;
    /**
     * @remarks
     * 当可充能物品从充能中释放时触发此事件。
     *
     * @earlyExecution
     *
     */
    readonly itemReleaseUse: ItemReleaseUseAfterEventSignal;
    /**
     * @remarks
     * 当可充能物品开始充能时触发此事件。
     *
     * @earlyExecution
     *
     */
    readonly itemStartUse: ItemStartUseAfterEventSignal;
    /**
     * @remarks
     * 当玩家通过按下"使用物品/放置方块"按钮成功使用物品或放置方块时触发此事件。
     * 如果放置了多个方块，则此事件只会在方块放置开始时发生一次。
     * 注意：此事件不能与锄头或斧头物品一起使用。
     *
     * @earlyExecution
     *
     */
    readonly itemStartUseOn: ItemStartUseOnAfterEventSignal;
    /**
     * @remarks
     * 当可充能物品停止充能时触发此事件。
     *
     * @earlyExecution
     *
     */
    readonly itemStopUse: ItemStopUseAfterEventSignal;
    /**
     * @remarks
     * 当玩家在成功使用物品后释放"使用物品/放置方块"按钮时触发此事件。
     * 注意：此事件不能与锄头或斧头物品一起使用。
     *
     * @earlyExecution
     *
     */
    readonly itemStopUseOn: ItemStopUseOnAfterEventSignal;
    /**
     * @remarks
     * 当玩家成功使用物品时触发此事件。
     *
     * @earlyExecution
     *
     */
    readonly itemUse: ItemUseAfterEventSignal;
    /**
     * @remarks
     * 拉动拉杆。
     *
     * @earlyExecution
     *
     */
    readonly leverAction: LeverActionAfterEventSignal;
    /**
     * @beta
     * @remarks
     * 这是一个内部实现细节，目前没有功能。
     *
     * @earlyExecution
     *
     */
    readonly messageReceive: ServerMessageAfterEventSignal;
    /**
     * @beta
     * @remarks
     * 当包设置更改时触发此事件。
     *
     * @earlyExecution
     *
     */
    readonly packSettingChange: PackSettingChangeAfterEventSignal;
    /**
     * @remarks
     * 当活塞伸出或缩回时触发此事件。
     *
     * @earlyExecution
     *
     */
    readonly pistonActivate: PistonActivateAfterEventSignal;
    /**
     * @remarks
     * 当玩家破坏方块时触发此事件。
     *
     * @earlyExecution
     *
     */
    readonly playerBreakBlock: PlayerBreakBlockAfterEventSignal;
    /**
     * @remarks
     * 当 {@link InputButton} 状态改变时触发此事件。
     *
     * @earlyExecution
     *
     */
    readonly playerButtonInput: PlayerButtonInputAfterEventSignal;
    /**
     * @remarks
     * 当玩家移动到不同维度时触发。
     *
     * @earlyExecution
     *
     */
    readonly playerDimensionChange: PlayerDimensionChangeAfterEventSignal;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly playerEmote: PlayerEmoteAfterEventSignal;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly playerGameModeChange: PlayerGameModeChangeAfterEventSignal;
    /**
     * @remarks
     * 当玩家选择的槽位改变时触发此事件。
     *
     * @earlyExecution
     *
     */
    readonly playerHotbarSelectedSlotChange: PlayerHotbarSelectedSlotChangeAfterEventSignal;
    /**
     * @remarks
     * 当玩家的 {@link InputMode} 改变时触发此事件。
     *
     * @earlyExecution
     *
     */
    readonly playerInputModeChange: PlayerInputModeChangeAfterEventSignal;
    /**
     * @remarks
     * 当玩家输入权限更改时触发此事件。
     *
     * @earlyExecution
     *
     */
    readonly playerInputPermissionCategoryChange: PlayerInputPermissionCategoryChangeAfterEventSignal;
    /**
     * @remarks
     * 玩家与方块交互的事件。
     *
     * @earlyExecution
     *
     */
    readonly playerInteractWithBlock: PlayerInteractWithBlockAfterEventSignal;
    /**
     * @remarks
     * 当玩家与实体交互时触发此事件。
     *
     * @earlyExecution
     *
     */
    readonly playerInteractWithEntity: PlayerInteractWithEntityAfterEventSignal;
    /**
     * @remarks
     * 当物品被添加或从玩家库存中移除时触发此事件。
     *
     * @earlyExecution
     *
     */
    readonly playerInventoryItemChange: PlayerInventoryItemChangeAfterEventSignal;
    /**
     * @remarks
     * 当玩家加入世界时触发此事件。
     * 另请参阅 playerSpawn 事件，您可以在玩家首次在世界中生成时捕获另一个相关事件。
     *
     * @earlyExecution
     *
     */
    readonly playerJoin: PlayerJoinAfterEventSignal;
    /**
     * @remarks
     * 当玩家离开世界时触发此事件。
     *
     * @earlyExecution
     *
     */
    readonly playerLeave: PlayerLeaveAfterEventSignal;
    /**
     * @remarks
     * 当玩家放置方块时触发此事件。
     *
     * @earlyExecution
     *
     */
    readonly playerPlaceBlock: PlayerPlaceBlockAfterEventSignal;
    /**
     * @remarks
     * 当玩家生成或重生时触发此事件。
     * 注意，此事件中的附加标志将告诉您玩家是刚加入后生成还是重生。
     *
     * @earlyExecution
     *
     */
    readonly playerSpawn: PlayerSpawnAfterEventSignal;
    /**
     * @remarks
     * 压力板弹起（即，压力板上没有实体）。
     *
     * @earlyExecution
     *
     */
    readonly pressurePlatePop: PressurePlatePopAfterEventSignal;
    /**
     * @remarks
     * 压力板被按下（至少有一个实体移动到压力板上）。
     *
     * @earlyExecution
     *
     */
    readonly pressurePlatePush: PressurePlatePushAfterEventSignal;
    /**
     * @remarks
     * 当抛射物击中方块时触发此事件。
     *
     * @earlyExecution
     *
     */
    readonly projectileHitBlock: ProjectileHitBlockAfterEventSignal;
    /**
     * @remarks
     * 当抛射物击中实体时触发此事件。
     *
     * @earlyExecution
     *
     */
    readonly projectileHitEntity: ProjectileHitEntityAfterEventSignal;
    /**
     * @remarks
     * 目标方块被击中。
     *
     * @earlyExecution
     *
     */
    readonly targetBlockHit: TargetBlockHitAfterEventSignal;
    /**
     * @remarks
     * 绊线被触发。
     *
     * @earlyExecution
     *
     */
    readonly tripWireTrip: TripWireTripAfterEventSignal;
    /**
     * @remarks
     * 当 Minecraft 中的天气变化时将触发此事件。
     *
     * @earlyExecution
     *
     */
    readonly weatherChange: WeatherChangeAfterEventSignal;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly worldLoad: WorldLoadAfterEventSignal;
}