/* IMPORT */ import { BiomeSearchOptions, BiomeType, Block, BlockFillOptions, BlockFilter, BlockPermutation, BlockRaycastHit, BlockRaycastOptions, BlockType, BlockVolumeBase, CommandError, CommandResult, CompoundBlockVolume, Entity, EntityIdentifierType, EntityQueryOptions, EntityRaycastHit, EntityRaycastOptions, EntitySpawnError, ExplosionOptions, InvalidEntityError, ItemStack, ListBlockVolume, LocationInUnloadedChunkError, LocationOutOfWorldBoundariesError, MolangVariableMap, Player, SpawnEntityOptions, UnloadedChunksError, Vector3, VectorXZ, WeatherType, WorldSoundOptions, minecraftcommon } from '../index';

/**
 * 代表世界中的一个特定维度（例如末地）的类。
 */
export class Dimension {
    private constructor();
    /**
     * @remarks
     * 维度的高度范围。
     *
     * @throws 此属性在使用时可能会抛出异常。
     */
    readonly heightRange: minecraftcommon.NumberRange;
    /**
     * @remarks
     * 维度的标识符。
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 用于语言文件的维度名称本地化键。
     *
     */
    readonly localizationKey: string;
    /**
     * @remarks
     * 在方块体积中搜索满足方块过滤器的方块。
     *
     * @param volume
     * 将被检查的方块体积。
     * @param filter
     * 将与体积中的每个方块进行检查的方块过滤器。
     * @param allowUnloadedChunks
     * 如果设置为 true，则当方块体积的部分或全部在已加载的区块之外时，将抑制 UnloadedChunksError。
     * 只会检查体积中在已加载区块内的方块位置。
     * 默认值：false
     * @returns
     * 如果体积中至少有一个方块满足过滤器则返回 true，否则返回 false。
     * @throws 此函数可能会抛出错误。
     *
     * {@link Error}
     *
     * {@link UnloadedChunksError}
     */
    containsBlock(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): boolean;
    /**
     * @remarks
     * 在指定位置创建爆炸。
     *
     * @worldMutation
     *
     * @param location
     * 爆炸的位置。
     * @param radius
     * 要创建的爆炸半径，以方块为单位。
     * @param explosionOptions
     * 爆炸的其他可配置选项。
     * @throws 此函数可能会抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @seeExample createExplosion.ts
     * @seeExample createNoBlockExplosion.ts
     * @seeExample createExplosions.ts
     */
    createExplosion(location: Vector3, radius: number, explosionOptions?: ExplosionOptions): boolean;
    /**
     * @remarks
     * 用特定类型的方块填充一个区域。
     *
     * @worldMutation
     *
     * @param volume
     * 要填充的方块体积。
     * @param block
     * 用于填充体积的方块类型。
     * @param options
     * 一组附加选项，例如可以用于包含/排除填充中特定方块的方块过滤器。
     * @returns
     * 返回包含所有被放置方块的 ListBlockVolume。
     * @throws 此函数可能会抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     *
     * {@link UnloadedChunksError}
     */
    fillBlocks(
        volume: BlockVolumeBase | CompoundBlockVolume,
        block: BlockPermutation | BlockType | string,
        options?: BlockFillOptions,
    ): ListBlockVolume;
    /**
     * @beta
     * @remarks
     * 查找特定类型的最接近的生物群系。注意 findClosestBiome 操作可能需要一些时间来完成，
     * 因此避免在单个游戏刻内使用过多这样的调用。
     *
     * @worldMutation
     *
     * @param pos
     * 开始寻找生物群系的位置。
     * @param biomeToFind
     * 要寻找的生物群系标识符。
     * @param options
     * 生物群系搜索的附加选择条件。
     * @returns
     * 返回生物群系的位置，如果找不到生物群系则返回 undefined。
     * @throws 此函数可能会抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     */
    findClosestBiome(pos: Vector3, biomeToFind: BiomeType | string, options?: BiomeSearchOptions): Vector3 | undefined;
    /**
     * @remarks
     * 返回给定位置的方块实例。
     *
     * @param location
     * 返回方块的位置。
     * @returns
     * 指定位置的方块，如果查询的是未加载的区块则返回 'undefined'。
     * @throws
     * PositionInUnloadedChunkError: 当尝试与不再处于已加载和活跃状态的区块中的方块对象交互时抛出的异常
     *
     * PositionOutOfWorldBoundariesError: 当尝试与超出维度高度范围的位置交互时抛出的异常
     *
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getBlock(location: Vector3): Block | undefined;
    /**
     * @remarks
     * 根据给定的选项获取给定方块位置上方的第一个方块（默认情况下会找到上方的第一个固体方块）。
     *
     * @worldMutation
     *
     * @param location
     * 检索上方方块的位置。
     * @param options
     * 决定方块是否为有效结果的选项。
     * @throws 此函数可能会抛出错误。
     */
    getBlockAbove(location: Vector3, options?: BlockRaycastOptions): Block | undefined;
    /**
     * @remarks
     * 根据给定的选项获取给定方块位置下方的第一个方块（默认情况下会找到下方的第一个固体方块）。
     *
     * @worldMutation
     *
     * @param location
     * 检索下方方块的位置。
     * @param options
     * 决定方块是否为有效结果的选项。
     * @throws 此函数可能会抛出错误。
     */
    getBlockBelow(location: Vector3, options?: BlockRaycastOptions): Block | undefined;
    /**
     * @remarks
     * 获取从位置发出并与向量相交的第一个方块。
     *
     * @param location
     * 发起射线检查的位置。
     * @param direction
     * 投射射线的向量方向。
     * @param options
     * 处理此射线检查查询的附加选项。
     * @throws 此函数可能会抛出错误。
     */
    getBlockFromRay(location: Vector3, direction: Vector3, options?: BlockRaycastOptions): BlockRaycastHit | undefined;
    /**
     * @remarks
     * 获取满足过滤器的体积中的所有方块。
     *
     * @param volume
     * 将被检查的方块体积。
     * @param filter
     * 将与体积中的每个方块进行检查的方块过滤器。
     * @param allowUnloadedChunks
     * 如果设置为 true，则当方块体积的部分或全部在已加载的区块之外时，将抑制 UnloadedChunksError。
     * 只会检查体积中在已加载区块内的方块位置。
     * 默认值：false
     * @returns
     * 返回包含所有满足方块过滤器的方块位置的 ListBlockVolume。
     * @throws 此函数可能会抛出错误。
     *
     * {@link Error}
     *
     * {@link UnloadedChunksError}
     */
    getBlocks(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): ListBlockVolume;
    /**
     * @remarks
     * 根据通过 EntityQueryOptions 过滤条件定义的一组条件返回实体集合。
     *
     * @param options
     * 可用于过滤返回实体集合的附加选项。
     * @returns
     * 实体数组。
     * @throws 此函数可能会抛出错误。
     *
     * {@link CommandError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     * @seeExample bounceSkeletons.ts
     * @seeExample tagsQuery.ts
     * @seeExample testThatEntityIsFeatherItem.ts
     */
    getEntities(options?: EntityQueryOptions): Entity[];
    /**
     * @remarks
     * 返回特定位置的一组实体。
     *
     * @param location
     * 返回实体的位置。
     * @returns
     * 指定位置的零个或多个实体。
     */
    getEntitiesAtBlockLocation(location: Vector3): Entity[];
    /**
     * @remarks
     * 获取与从位置发出的指定向量相交的实体。
     *
     * @param options
     * 处理此射线检查查询的附加选项。
     * @throws 此函数可能会抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    getEntitiesFromRay(location: Vector3, direction: Vector3, options?: EntityRaycastOptions): EntityRaycastHit[];
    /**
     * @beta
     * @remarks
     * 返回照射在特定方块位置上的总亮度等级。
     *
     * @worldMutation
     *
     * @param location
     * 我们想要检查亮度的方块位置。
     * @returns
     * 方块上的亮度等级。
     * @throws 此函数可能会抛出错误。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    getLightLevel(location: Vector3): number;
    /**
     * @remarks
     * 根据通过 EntityQueryOptions 过滤条件定义的一组条件返回玩家集合。
     *
     * @param options
     * 可用于过滤返回玩家集合的附加选项。
     * @returns
     * @returns
     * 玩家数组。
     * @throws 此函数可能会抛出错误。
     *
     * {@link CommandError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    getPlayers(options?: EntityQueryOptions): Player[];
    /**
     * @beta
     * @remarks
     * 返回从天空照射在特定方块位置上的亮度等级。
     *
     * @worldMutation
     *
     * @param location
     * 我们想要检查亮度的方块位置。
     * @returns
     * 方块上的亮度等级。
     * @throws 此函数可能会抛出错误。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    getSkyLightLevel(location: Vector3): number;
    /**
     * @remarks
     * 返回给定 XZ 位置的最高方块。
     *
     * @worldMutation
     *
     * @param locationXZ
     * 检索最顶层方块的位置。
     * @param minHeight
     * 开始搜索的 Y 高度。默认为维度最大高度。
     * @throws 此函数可能会抛出错误。
     */
    getTopmostBlock(locationXZ: VectorXZ, minHeight?: number): Block | undefined;
    /**
     * @beta
     * @remarks
     * 返回当前天气。
     *
     * @worldMutation
     *
     * @returns
     * 返回 WeatherType，说明当前正在进行的天气的广泛类别。
     */
    getWeather(): WeatherType;
    /**
     * @remarks
     * 在指定位置将给定的特征放置到维度中。
     *
     * @worldMutation
     *
     * @param featureName
     * 特征的字符串标识符。
     * @param location
     * 放置特征的位置。
     * @param shouldThrow
     * 指定如果无法放置特征，函数调用是否会抛出错误。
     * 注意：如果使用未知的特征名称或尝试在未加载的区块中放置，函数调用将始终抛出错误。
     * 默认值：false
     * @throws
     * 如果特征名称无效，将抛出错误。
     * 如果位置在未加载的区块中，将抛出错误。
     *
     * {@link Error}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    placeFeature(featureName: string, location: Vector3, shouldThrow?: boolean): boolean;
    /**
     * @remarks
     * 在指定位置将给定的特征规则放置到维度中。
     *
     * @worldMutation
     *
     * @param featureRuleName
     * 特征规则的字符串标识符。
     * @param location
     * 放置特征规则的位置。
     * @throws
     * 如果特征规则名称无效，将抛出错误。
     * 如果位置在未加载的区块中，将抛出错误。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    placeFeatureRule(featureRuleName: string, location: Vector3): boolean;
    /**
     * @remarks
     * 为所有玩家播放声音。
     *
     * @worldMutation
     *
     * @param soundId
     * 声音的标识符。
     * @param location
     * 声音的位置。
     * @param soundOptions
     * 用于配置声音附加效果的附加选项。
     * @throws
     * 如果音量小于 0.0，将抛出错误。
     * 如果淡出时间小于 0.0，将抛出错误。
     * 如果音调小于 0.01，将抛出错误。
     * 如果音量小于 0.0，将抛出错误。
     *
     * {@link minecraftcommon.PropertyOutOfBoundsError}
     */
    playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): void;
    /**
     * @remarks
     * 使用更广泛的维度上下文同步运行命令。
     *
     * @worldMutation
     *
     * @param commandString
     * 要运行的命令。注意命令字符串不应以斜杠开头。
     * @returns
     * 返回带有命令成功值计数的命令结果。
     * @throws
     * 如果命令因参数不正确或命令语法错误而失败，或者在命令的错误情况下会抛出异常。
     * 注意，在许多情况下，如果命令未执行（例如，目标选择器未找到匹配项），此方法不会抛出异常。
     *
     * {@link CommandError}
     */
    runCommand(commandString: string): CommandResult;
    /**
     * @remarks
     * 使用 BlockPermutation 在世界中设置方块。
     * BlockPermutation 是具有特定状态的方块。
     *
     * @worldMutation
     *
     * @param location
     * 维度内设置方块的位置。
     * @param permutation
     * 要设置的方块状态。
     * @throws
     * 如果位置在未加载的区块内或超出世界边界，则抛出异常。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setBlockPermutation(location: Vector3, permutation: BlockPermutation): void;
    /**
     * @remarks
     * 在维度内的给定位置设置方块。
     *
     * @worldMutation
     *
     * @param location
     * 维度内设置方块的位置。
     * @param blockType
     * 要设置的方块类型。这可以是字符串标识符或 BlockType。使用默认的方块状态。
     * @throws
     * 如果位置在未加载的区块内或超出世界边界，则抛出异常。
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setBlockType(location: Vector3, blockType: BlockType | string): void;
    /**
     * @remarks
     * 设置维度内的当前天气。
     *
     * @worldMutation
     *
     * @param weatherType
     * 设置要应用的天气类型。
     * @param duration
     * 设置天气的持续时间（以刻为单位）。如果未提供持续时间，
     * 持续时间将设置为 300 到 900 秒之间的随机持续时间。
     * @throws 此函数可能会抛出错误。
     */
    setWeather(weatherType: WeatherType, duration?: number): void;
    /**
     * @remarks
     * 在指定位置创建新实体（例如生物）。
     *
     * @worldMutation
     *
     * @param identifier
     * 要生成的实体类型的标识符。如果未指定命名空间，则假定为 'minecraft:'。
     * @param location
     * 创建实体的位置。
     * @returns
     * 在指定位置新创建的实体。
     * @throws 此函数可能会抛出错误。
     *
     * {@link EntitySpawnError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @seeExample spawnAdultHorse.ts
     * @seeExample quickFoxLazyDog.ts
     * @seeExample triggerEvent.ts b473e4eb
     */
    spawnEntity<T = never>(
        identifier: EntityIdentifierType<NoInfer<T>>,
        location: Vector3,
        options?: SpawnEntityOptions,
    ): Entity;
    /**
     * @remarks
     * 在指定位置将新物品堆作为实体创建。
     *
     * @worldMutation
     *
     * @param location
     * 创建物品堆的位置。
     * @returns
     * 在指定位置新创建的物品堆实体。
     * @throws 此函数可能会抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @seeExample itemStacks.ts
     * @seeExample spawnFeatherItem.ts
     */
    spawnItem(itemStack: ItemStack, location: Vector3): Entity;
    /**
     * @remarks
     * 在世界中的指定位置创建新的粒子发射器。
     *
     * @worldMutation
     *
     * @param effectName
     * 要创建的粒子的标识符。
     * @param location
     * 创建粒子发射器的位置。
     * @param molangVariables
     * 一组可选的可自定义变量，可以为此粒子进行调整。
     * @throws 此函数可能会抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @seeExample spawnParticle.ts 25a384c8
     */
    spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void;
    /**
     * @beta
     * @remarks
     * 停止为所有玩家播放所有声音。
     *
     * @worldMutation
     *
     */
    stopAllSounds(): void;
    /**
     * @beta
     * @remarks
     * 停止为所有玩家播放声音。
     *
     * @worldMutation
     *
     * @param soundId
     * 声音的标识符。
     */
    stopSound(soundId: string): void;
}