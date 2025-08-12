/* IMPORT */ import { Camera, ClientSystemInfo, CommandPermissionLevel, DimensionLocation, Entity, GameMode, GraphicsMode, InputInfo, InvalidEntityError, ItemStack, LocationInUnloadedChunkError, LocationOutOfWorldBoundariesError, MolangVariableMap, MusicOptions, PlayerAimAssist, PlayerInputPermissions, PlayerPermissionLevel, PlayerSoundOptions, RawMessage, RawMessageError, ScreenDisplay, Vector3 } from '../index';

/**
 * 表示世界中的一个玩家。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class Player extends Entity {
    private constructor();
    /**
     * @remarks
     * 玩家的相机。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly camera: Camera;
    /**
     * @remarks
     * 包含玩家的设备信息。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly clientSystemInfo: ClientSystemInfo;
    /**
     * @remarks
     * @worldMutation
     *
     */
    commandPermissionLevel: CommandPermissionLevel;
    /**
     * @remarks
     * 获取玩家客户端的当前图形模式。这可以在设置菜单的视频部分根据可用硬件进行更改。
     *
     * @throws 使用此属性时可能抛出异常。
     *
     * {@link InvalidEntityError}
     */
    readonly graphicsMode: GraphicsMode;
    /**
     * @remarks
     * 包含玩家的输入信息。
     *
     */
    readonly inputInfo: InputInfo;
    /**
     * @remarks
     * 玩家的输入权限。
     *
     */
    readonly inputPermissions: PlayerInputPermissions;
    /**
     * @remarks
     * 如果为 true，则玩家当前正在使用表情。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly isEmoting: boolean;
    /**
     * @remarks
     * 玩家是否正在飞行。例如，在创造或旁观者模式下。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly isFlying: boolean;
    /**
     * @remarks
     * 玩家是否正在使用鞘翅滑翔。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly isGliding: boolean;
    /**
     * @remarks
     * 玩家是否正在跳跃。当玩家按住跳跃键时，此值将保持为 true。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly isJumping: boolean;
    /**
     * @remarks
     * 基于玩家经验的当前总体等级。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly level: number;
    /**
     * @remarks
     * 玩家的名称。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly name: string;
    /**
     * @remarks
     * 包含用于操作玩家屏幕显示的方法。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly onScreenDisplay: ScreenDisplay;
    /**
     * @throws 使用此属性时可能抛出异常。
     *
     * {@link InvalidEntityError}
     */
    readonly playerPermissionLevel: PlayerPermissionLevel;
    /**
     * @remarks
     * @worldMutation
     *
     */
    selectedSlotIndex: number;
    /**
     * @remarks
     * 玩家达到下一级所需的经验总数。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly totalXpNeededForNextLevel: number;
    /**
     * @remarks
     * 玩家当前获得的经验值。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly xpEarnedAtCurrentLevel: number;
    /**
     * @remarks
     * 为玩家添加/减少经验值并返回玩家的当前经验值。
     *
     * @worldMutation
     *
     * @param amount
     * 要添加的经验值。注意，这可以是负数。
     * 最小/最大值限制在 -2^24 ~ 2^24
     * @returns
     * 返回玩家的当前经验值。
     * @throws 此函数可能抛出错误。
     */
    addExperience(amount: number): number;
    /**
     * @remarks
     * 为玩家添加/减少等级并返回玩家的当前等级。
     *
     * @worldMutation
     *
     * @param amount
     * 要添加到玩家的等级数。最小/最大值限制在 -2^24 ~ 2^24
     * @returns
     * 返回玩家的当前等级。
     * @throws 此函数可能抛出错误。
     */
    addLevels(amount: number): number;
    /**
     * @remarks
     * 对于此玩家，移除目标实体上所有实体属性的覆盖。此更改直到下一刻才会应用，并且不会应用于其他玩家。
     *
     * @worldMutation
     *
     * @param targetEntity
     * 实体属性覆盖被清除的实体。
     * @throws
     * 如果实体无效则抛出异常。
     */
    clearPropertyOverridesForEntity(targetEntity: Entity): void;
    /**
     * @beta
     * @remarks
     * 食用一个物品，将该物品的饥饿度和饱和度效果提供给玩家。只能用于食物物品。
     *
     * @worldMutation
     *
     * @param itemStack
     * 要食用的物品。
     * @throws
     * 如果物品不是食物则抛出异常。
     */
    eatItem(itemStack: ItemStack): void;
    /**
     * @beta
     * @remarks
     * 玩家的辅助瞄准设置。
     *
     */
    getAimAssist(): PlayerAimAssist;
    /**
     * @remarks
     * 检索此玩家的活动游戏模式（如果已指定）。
     *
     * @throws 此函数可能抛出错误。
     */
    getGameMode(): GameMode;
    /**
     * @remarks
     * 获取特定冷却类别当前的物品冷却时间。
     *
     * @param cooldownCategory
     * 指定要检索当前冷却时间的冷却类别。
     * @throws 此函数可能抛出错误。
     */
    getItemCooldown(cooldownCategory: string): number;
    /**
     * @remarks
     * 获取玩家的当前出生点。
     *
     * @throws 此函数可能抛出错误。
     */
    getSpawnPoint(): DimensionLocation | undefined;
    /**
     * @remarks
     * 获取玩家的总经验值。
     *
     * @throws 此函数可能抛出错误。
     */
    getTotalXp(): number;
    /**
     * @remarks
     * 播放只有该特定玩家能听到的音乐轨道。
     *
     * @worldMutation
     *
     * @param trackId
     * 要播放的音乐轨道标识符。
     * @param musicOptions
     * 音乐轨道的附加选项。
     * @throws 此函数可能抛出错误。
     */
    playMusic(trackId: string, musicOptions?: MusicOptions): void;
    /**
     * @remarks
     * 播放只有该特定玩家能听到的声音。
     *
     * @worldMutation
     *
     * @param soundOptions
     * 声音的附加可选选项。
     * @throws 此函数可能抛出错误。
     * @seeExample playMusicAndSound.ts
     */
    playSound(soundId: string, soundOptions?: PlayerSoundOptions): void;
    /**
     * @beta
     * @remarks
     * 这是一个面向内部的方法，用于向下游客户端发布系统消息。
     *
     * @worldMutation
     *
     * @throws 此函数可能抛出错误。
     */
    postClientMessage(id: string, value: string): void;
    /**
     * @remarks
     * 为该特定玩家排队播放额外的音乐轨道。如果没有正在播放的轨道，则会播放音乐轨道。
     *
     * @worldMutation
     *
     * @param trackId
     * 要播放的音乐轨道标识符。
     * @param musicOptions
     * 音乐轨道的附加选项。
     * @throws
     * 如果音量小于 0.0 则抛出错误。
     * 如果淡出时间小于 0.0 则抛出错误。
     *
     */
    queueMusic(trackId: string, musicOptions?: MusicOptions): void;
    /**
     * @remarks
     * 对于此玩家，移除实体属性的覆盖。此更改直到下一刻才会应用，并且不会应用于其他玩家。
     *
     * @worldMutation
     *
     * @param targetEntity
     * 实体属性覆盖被移除的实体。
     * @param identifier
     * 实体属性标识符。
     * @throws
     * 如果实体无效则抛出异常。
     * 如果提供了无效标识符则抛出异常。
     * 如果提供的值类型与属性类型不匹配则抛出异常。
     */
    removePropertyOverrideForEntity(targetEntity: Entity, identifier: string): void;
    /**
     * @remarks
     * 重置玩家的等级。
     *
     * @worldMutation
     *
     * @throws 此函数可能抛出错误。
     */
    resetLevel(): void;
    /**
     * @remarks
     * 向玩家发送消息。
     *
     * @param message
     * 要显示的消息。
     * @throws
     * 如果提供的 {@link RawMessage} 格式无效，此方法可能抛出异常。例如，如果向 `score` 提供了空的 `name` 字符串。
     *
     * {@link InvalidEntityError}
     *
     * {@link RawMessageError}
     * @seeExample nestedTranslation.ts
     * @seeExample scoreWildcard.ts
     * @seeExample sendBasicMessage.ts
     * @seeExample sendPlayerMessages.ts
     * @seeExample sendTranslatedMessage.ts
     */
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks
     * 为此玩家设置游戏模式覆盖。
     *
     * @worldMutation
     *
     * @param gameMode
     * 活动游戏模式。
     * @throws 此函数可能抛出错误。
     */
    setGameMode(gameMode?: GameMode): void;
    /**
     * @remarks
     * 对于此玩家，将目标实体上的实体属性覆盖为提供的值。此属性必须与客户端同步。此更改直到下一刻才会应用，并且不会应用于其他玩家。
     *
     * @worldMutation
     *
     * @param targetEntity
     * 实体属性被覆盖的实体。
     * @param identifier
     * 实体属性标识符。
     * @param value
     * 覆盖值。提供的类型必须与实体定义中指定的类型兼容。
     * @throws
     * 如果实体无效则抛出异常。
     * 如果提供了无效标识符则抛出异常。
     * 如果提供的值类型与属性类型不匹配则抛出异常。
     * 如果提供的值超出预期范围（整数、浮点数属性）则抛出异常。
     * 如果提供的字符串值与接受的枚举值集合不匹配（枚举属性）则抛出异常。
     */
    setPropertyOverrideForEntity(targetEntity: Entity, identifier: string, value: boolean | number | string): void;
    /**
     * @remarks
     * 为该特定玩家设置当前的起始出生点。
     *
     * @worldMutation
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link Error}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setSpawnPoint(spawnPoint?: DimensionLocation): void;
    /**
     * @remarks
     * 在世界的指定位置创建新的粒子发射器。仅对目标玩家可见。
     *
     * @worldMutation
     *
     * @param effectName
     * 要创建的粒子标识符。
     * @param location
     * 创建粒子发射器的位置。
     * @param molangVariables
     * 一组可选的可自定义变量，可以为此粒子进行调整。
     * @throws 此函数可能抛出错误。
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @seeExample spawnParticle.ts bdc4b9e7
     */
    spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void;
    /**
     * @remarks
     * 设置特定冷却类别的物品冷却时间。
     *
     * @worldMutation
     *
     * @param cooldownCategory
     * 指定要检索当前冷却时间的冷却类别。
     * @param tickDuration
     * 物品冷却的刻持续时间。
     * @throws 此函数可能抛出错误。
     */
    startItemCooldown(cooldownCategory: string, tickDuration: number): void;
    /**
     * @beta
     * @remarks
     * 停止为此特定玩家播放的所有声音。
     *
     * @worldMutation
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    stopAllSounds(): void;
    /**
     * @remarks
     * 停止为此特定玩家播放的任何音乐轨道。
     *
     * @worldMutation
     *
     * @throws 此函数可能抛出错误。
     */
    stopMusic(): void;
    /**
     * @beta
     * @remarks
     * 停止为此特定玩家播放的声音。
     *
     * @worldMutation
     *
     * @param soundId
     * 声音的标识符。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    stopSound(soundId: string): void;
}