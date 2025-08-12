/* IMPORT */ import { AimAssistRegistry, CommandError, Difficulty, Dimension, Entity, EntityQueryOptions, GameRules, LocationOutOfWorldBoundariesError, LootTableManager, MoonPhase, MusicOptions, Player, RawMessage, Scoreboard, Structure, StructureManager, TimeOfDay, Vector3, WorldAfterEvents, WorldBeforeEvents, minecraftcommon } from '../index';

/**
 * 表示一个世界。包含了世界的各种状态，即一系列维度以及 Minecraft 的环境。
 */
export class World {
    private constructor();
    /**
     * @remarks
     * 包含适用于整个世界的一组事件。事件回调以延迟方式调用。事件回调以读写模式执行。
     *
     * @earlyExecution
     *
     */
    readonly afterEvents: WorldAfterEvents;
    /**
     * @remarks
     * 包含适用于整个世界的一组事件。事件回调立即调用。事件回调以只读模式执行。
     *
     * @earlyExecution
     *
     * @seeExample customCommand.ts
     */
    readonly beforeEvents: WorldBeforeEvents;
    /**
     * @remarks
     * 应用于世界的.gameRules游戏规则。
     *
     */
    readonly gameRules: GameRules;
    readonly isHardcore: boolean;
    /**
     * @remarks
     * 全局的、唯一的记分板对象。
     *
     */
    readonly scoreboard: Scoreboard;
    /**
     * @remarks
     * 返回与 {@link Structure} 相关 API 的管理器。
     *
     */
    readonly structureManager: StructureManager;
    /**
     * @beta
     * @remarks
     * 仅供内部使用的方法，用于在客户端和服务器之间广播特定消息。
     *
     * @worldMutation
     *
     * @param id
     * 消息标识符。
     * @param value
     * 消息内容。
     */
    broadcastClientMessage(id: string, value: string): void;
    /**
     * @remarks
     * 清除在此行为包中为世界声明的动态属性集合。
     *
     */
    clearDynamicProperties(): void;
    /**
     * @remarks
     * 获取自游戏开始以来流逝的时间（计算公式：`day*24000+daytime`）。
     * 时间的流逝受到游戏规则 `dodaylightcycle` 的影响。
     *
     * @returns 自游戏开始以来流逝的时间，以刻为单位。
     *
     */
    getAbsoluteTime(): number;
    /**
     * @beta
     * @remarks
     * 可在世界中使用的瞄准辅助预设和类别。
     *
     */
    getAimAssist(): AimAssistRegistry;
    /**
     * @remarks
     * 获取一个包含了游戏中所有玩家的对象的数组。
     *
     * @returns 返回包含了游戏中所有玩家的对象的数组。
     * @throws 此函数可能抛出错误。
     *
     * {@link CommandError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    getAllPlayers(): Player[];
    /**
     * @remarks
     * 返回当前日期。
     *
     * @returns
     * 当前日期，由世界时间除以每天的刻数确定。新世界从第 0 天开始。
     */
    getDay(): number;
    /**
     * @remarks
     * 返回默认的主世界出生点位置。
     *
     * @returns
     * 默认的主世界出生点位置。默认情况下，Y 坐标为 32767，
     * 表示玩家的出生高度未固定，将由周围方块决定。
     */
    getDefaultSpawnLocation(): Vector3;
    /**
     * @remarks
     * 从世界中获取难度。
     *
     * @returns
     * 返回世界难度。
     */
    getDifficulty(): Difficulty;
    /**
     * @remarks
     * 由 `dimensionId` 获取维度对象。
     *
     * @param dimensionId
     * 要获取的维度的标识符。
     *
     * 维度的名称。例如，"overworld"、"nether" 或 "the_end"。
     * @returns
     * 与 `dimensionId` 关联的维度对象。
     *
     * 请求的维度
     * @throws
     * 若 `dimensionId` 不与任何维度关联，抛出 `"Dimension '<dimensionId>' is invalid"`。
     *
     * 如果给定的维度名称无效则抛出异常
     */
    getDimension(dimensionId: string): Dimension;
    /**
     * @remarks
     * 获取由 `identifier` 指定的世界中已定义的动态属性的值。
     *
     * @param identifier
     * 动态属性的标识符。
     * @returns
     * 返回动态属性 `identifier` 的值。属性的值尚未设定时，返回 `undefined`。
     * @throws
     * 若并未注册以 `identifier` 为标识符的动态属性，抛出 `"Dynamic Property '<identifier>' is not defined"` 。
     *
     * 如果给定的动态属性标识符未定义则抛出异常。
     * @seeExample incrementDynamicProperty.ts
     * @seeExample incrementDynamicPropertyInJsonBlob.ts
     */
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    /**
     * @remarks
     * 获取在该世界中已设置的一组动态属性标识符。
     *
     * @returns
     * 一组有效的动态属性标识符字符串数组。
     */
    getDynamicPropertyIds(): string[];
    /**
     * @remarks
     * 获取动态属性的总字节数。这可能用于你自己的分析，
     * 以确保你没有存储大量动态属性集合。
     *
     */
    getDynamicPropertyTotalByteCount(): number;
    /**
     * @remarks
     * 根据提供的 ID 返回一个实体。
     *
     * @param id
     * 实体的 ID。
     * @returns
     * 请求的实体对象。
     * @throws
     * 如果给定的实体 ID 无效则抛出异常。
     */
    getEntity(id: string): Entity | undefined;
    /**
     * @beta
     */
    getLootTableManager(): LootTableManager;
    /**
     * @remarks
     * 返回当前时间的月相。
     *
     */
    getMoonPhase(): MoonPhase;
    /**
     * @beta
     * @remarks
     * 返回一组包设置名称和值对。
     *
     * @earlyExecution
     *
     */
    getPackSettings(): Record<string, boolean | number>;
    /**
     * @remarks
     * 列出世界上的玩家，可使用 `options` 指定的实体查询选项对其进行筛选。
     *
     * @param options
     * 可选的参数，用作于筛选指定条件的玩家。
     *
     * 注意，不能使用接口中的 `type`、`location`、`maxDistance`、`minDistance` 或 `volume` 属性。
     *
     * 用于筛选返回玩家集合的附加选项。
     * @returns
     * 玩家数组。
     * @throws
     * 若向 `options` 传入的对象含有 `type` 属性，抛出 `"command.generic.invalidPlayerType"`。
     *
     * 若向 `options` 传入的对象含有 `location`、`maxDistance`、`minDistance` 或 `volume` 属性，抛出 `"EntityQueryOptions property '<property>' is incompatible with function world.getPlayers"`。
     *
     * 如果提供的 EntityQueryOptions 无效则抛出异常。
     *
     * {@link CommandError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    getPlayers(options?: EntityQueryOptions): Player[];
    /**
     * @remarks
     * 返回当前一天中的时间。
     *
     * @returns
     * 当前一天中的时间，以刻为单位，为 `0` 至 `24000` 之间的整数。
     */
    getTimeOfDay(): number;
    /**
     * @remarks
     * 停止正在播放的音乐，并开始向玩家播放指定音乐。播放类别不为音乐的声音项目不会有任何效果。
     *
     * @worldMutation
     *
     * @param trackId 声音项目的标识符，要求声音项目的类别为音乐（`category: music`）。
     * @param musicOptions 可选，指定播放音乐使用的附加参数。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.PropertyOutOfBoundsError}
     * @seeExample playMusicAndSound.ts
     */
    playMusic(trackId: string, musicOptions?: MusicOptions): void;
    /**
     * @remarks
     * 将音乐添加到播放列表。如果没有任何正在播放的音乐，将会开始播放音乐。播放列表中的音乐将会按照添加顺序播放（需要更多测试）。
     *
     * @worldMutation
     *
     * @param trackId
     * 声音项目的标识符，要求声音项目的类别为音乐（`category: music`）。
     *
     * 要播放的音乐曲目标识符。
     * @param musicOptions
     * 可选，指定播放音乐使用的附加参数。
     *
     * 音乐曲目的附加选项。
     * @throws
     * 如果音量小于 0.0 则会抛出错误。
     * 如果淡出时间小于 0.0 则会抛出错误。
     *
     * {@link minecraftcommon.PropertyOutOfBoundsError}
     */
    queueMusic(trackId: string, musicOptions?: MusicOptions): void;
    /**
     * @remarks
     * 向所有玩家广播一条消息。
     *
     * @param message
     * 将要广播的一段消息。
     * 这段消息可能是一段字符串，或者符合 `RawMessage` 接口的对象，或是这两种类型的组合。
     *
     * 要显示的消息。
     * @throws
     * 如果提供的 {@link RawMessage} 格式无效，此方法可能抛出异常。
     * 例如，如果向 `score` 提供了空的 `name` 字符串。
     *
     * 如果提供的 {@link RawMessage} 格式无效则会抛出异常。
     * 例如，如果向 `score` 提供了空的 `name` 字符串。
     */
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks
     * 设置世界时间。
     *
     * @worldMutation
     *
     * @param absoluteTime
     * 以刻为单位的世界时间。
     */
    setAbsoluteTime(absoluteTime: number): void;
    /**
     * @remarks
     * 为所有玩家设置默认出生点。
     *
     * @worldMutation
     *
     * @param spawnLocation
     * 出生点位置。注意，这被假定在主世界维度内。
     * @throws
     * 如果提供的出生点位置超出边界则抛出异常。
     *
     * {@link Error}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setDefaultSpawnLocation(spawnLocation: Vector3): void;
    /**
     * @remarks
     * 设置世界难度。
     *
     * @worldMutation
     *
     * @param difficulty
     * 我们想要设置的世界难度。
     */
    setDifficulty(difficulty: Difficulty): void;
    /**
     * @beta
     * @remarks
     * 设置具有特定值的多个动态属性。
     *
     * @param values
     * 要设置的动态属性的键值对记录。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     */
    setDynamicProperties(values: Record<string, boolean | number | string | Vector3>): void;
    /**
     * @remarks
     * 为世界动态属性 `identifier` 设置一个值。
     *
     * @param identifier
     * 动态属性的标识符。
     * @param value
     * 要设定的值，值的类型必须与动态属性注册的类型相同。
     * @throws
     * 若并未注册以 `identifier` 为标识符的动态属性，抛出 `"Dynamic Property '<identifier>' is not defined"`。
     *
     * 若动态属性的类型不符合值的类型，抛出 `"Type mismatch for dynamic property '<identifier>'"`。
     *
     * 若动态属性的类型为字符串，且值在使用 UTF-8 编码后的字节长度大于动态属性所允许的最大长度，抛出 `"Maximum string length exceeded (<length>/<maxLength>) for dynamic property '<identifier>'"`。
     *
     * 如果给定的动态属性标识符未定义则抛出异常。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     * @seeExample incrementDynamicProperty.ts
     * @seeExample incrementDynamicPropertyInJsonBlob.ts
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    /**
     * @remarks
     * 设置一天中的时间。
     *
     * @worldMutation
     *
     * @param timeOfDay
     * 一天中的时间，以刻为单位，介于 0 到 24000 之间。
     * @throws
     * 如果提供的时间不在有效范围内则抛出异常。
     */
    setTimeOfDay(timeOfDay: number | TimeOfDay): void;
    /**
     * @remarks
     * 停止客户端中正在播放的所有音乐曲目（需要更多测试）。
     *
     * @worldMutation
     *
     */
    stopMusic(): void;
}
