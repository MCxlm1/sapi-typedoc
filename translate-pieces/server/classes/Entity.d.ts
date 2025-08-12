/* IMPORT */ import { BlockRaycastHit, BlockRaycastOptions, CommandError, CommandResult, Dimension, Effect, EffectType, EntityApplyDamageByProjectileOptions, EntityApplyDamageOptions, EntityComponent, EntityComponentReturnType, EntityComponentTypes, EntityEffectOptions, EntityQueryOptions, EntityRaycastHit, EntityRaycastOptions, InvalidEntityError, PlayAnimationOptions, ScoreboardIdentity, TeleportOptions, TicksPerSecond, Vector2, Vector3, VectorXZ, minecraftcommon } from '../index';

/**
 * 表示世界中的一个实体状态（可以是生物、玩家或其他移动对象，例如矿车）。
 */
export class Entity {
    private constructor();
    /**
     * @remarks
     * 实体当前所在的维度。
     *
     * @throws 使用此属性时可能抛出异常。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidEntityError}
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * 实体的唯一标识符。该标识符在世界实例加载期间保持一致。
     * 不要解析或解释此唯一标识符的值和结构，它没有特定含义。
     * 即使 {@link Entity.isValid} 为 false，此属性也可访问。
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 实体是否正在接触可攀爬方块。
     * 例如，玩家在梯子旁边或蜘蛛在石墙旁边。
     *
     * @throws 使用此属性时可能抛出异常。
     *
     * {@link InvalidEntityError}
     */
    readonly isClimbing: boolean;
    /**
     * @remarks
     * 实体的坠落距离是否大于0，或者滑翔时是否大于1。
     *
     * @throws 使用此属性时可能抛出异常。
     *
     * {@link InvalidEntityError}
     */
    readonly isFalling: boolean;
    /**
     * @remarks
     * 实体的任何部分是否在水中。
     *
     * @throws 使用此属性时可能抛出异常。
     *
     * {@link InvalidEntityError}
     */
    readonly isInWater: boolean;
    /**
     * @remarks
     * 实体是否站在固体方块上。
     * 当实体首次生成时此属性始终为 true，
     * 如果实体没有重力，此属性可能不正确。
     *
     * @throws 使用此属性时可能抛出异常。
     *
     * {@link InvalidEntityError}
     */
    readonly isOnGround: boolean;
    /**
     * @remarks
     * 实体是否正在睡觉。
     *
     * @throws 使用此属性时可能抛出异常。
     *
     * {@link InvalidEntityError}
     */
    readonly isSleeping: boolean;
    /**
     * @remarks
     * 实体是否正在潜行，即移动得更慢更安静。
     *
     * @worldMutation
     *
     */
    isSneaking: boolean;
    /**
     * @remarks
     * 实体是否正在冲刺。
     * 例如，使用冲刺动作的玩家、逃跑的豹猫或使用胡萝卜钓竿加速的猪。
     *
     * @throws 使用此属性时可能抛出异常。
     *
     * {@link InvalidEntityError}
     */
    readonly isSprinting: boolean;
    /**
     * @remarks
     * 实体是否处于游泳状态。
     * 例如，使用游泳动作的玩家或水中的鱼。
     *
     * @throws 使用此属性时可能抛出异常。
     *
     * {@link InvalidEntityError}
     */
    readonly isSwimming: boolean;
    /**
     * @remarks
     * 返回实体是否可以被脚本操作。
     * 当 Player 的 EntityLifetimeState 设置为 Loaded 时，该 Player 被视为有效。
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 用于 .lang 文件中实体名称本地化的键。
     *
     * @throws 使用此属性时可能抛出异常。
     *
     * {@link InvalidEntityError}
     */
    readonly localizationKey: string;
    /**
     * @remarks
     * 实体的当前位置。
     *
     * @throws 使用此属性时可能抛出异常。
     *
     * {@link InvalidEntityError}
     */
    readonly location: Vector3;
    /**
     * @remarks
     * 实体的命名。
     *
     * @worldMutation
     *
     */
    nameTag: string;
    /**
     * @remarks
     * 返回代表此实体的记分板身份。
     * 即使实体被杀死，该身份也将保持有效。
     *
     */
    readonly scoreboardIdentity?: ScoreboardIdentity;
    /**
     * @beta
     * @remarks
     * 获取或设置用作 AI 相关行为目标的实体，例如攻击。
     * 如果实体当前没有目标，则返回 undefined。
     *
     * @throws 使用此属性时可能抛出异常。
     *
     * {@link InvalidEntityError}
     */
    readonly target?: Entity;
    /**
     * @remarks
     * 实体类型的标识符。
     * 例如，'minecraft:skeleton'。
     * 即使 {@link Entity.isValid} 为 false，此属性也可访问。
     *
     */
    readonly typeId: string;
    /**
     * @remarks
     * 给实体添加或更新一个状态效果，例如中毒。
     *
     * @worldMutation
     *
     * @param effectType
     * 要添加到实体的效果类型。
     * @param duration
     * 效果持续的时间，以刻为单位。每秒有 20 刻。
     * 使用 {@link TicksPerSecond} 常量在刻和秒之间进行转换。
     * 该值必须在 [0, 20000000] 范围内。
     * @param options
     * 效果的附加选项。
     * @returns
     * 如果效果成功添加或更新则不返回任何内容。
     * 如果持续时间或强度超出了有效范围，或者效果不存在，则可能抛出错误。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     * @seeExample spawnPoisonedVillager.ts
     * @seeExample quickFoxLazyDog.ts
     */
    addEffect(effectType: EffectType | string, duration: number, options?: EntityEffectOptions): Effect | undefined;
    /**
     * @remarks
     * 给实体添加指定的标签。
     *
     * @worldMutation
     *
     * @param tag
     * 要添加的标签内容。标签必须少于 256 个字符。
     * @returns
     * 如果标签成功添加则返回 true。如果标签已存在于实体上则可能失败。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     * @seeExample tagsQuery.ts
     */
    addTag(tag: string): boolean;
    /**
     * @remarks
     * 对实体应用一组伤害。
     *
     * @worldMutation
     *
     * @param amount
     * 要应用的伤害量。
     * @param options
     * 关于伤害来源的附加选项，可能添加额外效果或激发此实体上的附加行为。
     * @returns
     * 实体是否受到任何伤害。
     * 如果实体无敌或应用的伤害小于等于 0 则返回 false。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     * @seeExample applyDamageThenHeal.ts
     */
    applyDamage(amount: number, options?: EntityApplyDamageByProjectileOptions | EntityApplyDamageOptions): boolean;
    /**
     * @remarks
     * 对实体的当前速度应用冲量向量。
     *
     * @worldMutation
     *
     * @param vector
     * 冲量向量。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     * @seeExample applyImpulse.ts
     */
    applyImpulse(vector: Vector3): void;
    /**
     * @remarks
     * 对实体的当前速度应用冲量向量。
     *
     * @worldMutation
     *
     * @param verticalStrength
     * 垂直方向的击退强度。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     * @seeExample bounceSkeletons.ts
     */
    applyKnockback(horizontalForce: VectorXZ, verticalStrength: number): void;
    /**
     * @remarks
     * 清除在此实体上设置的所有动态属性。
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    clearDynamicProperties(): void;
    /**
     * @remarks
     * 将实体的当前速度设置为零。
     *
     * @worldMutation
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     * @seeExample applyImpulse.ts
     */
    clearVelocity(): void;
    /**
     * @remarks
     * 如果实体着火，则熄灭火焰。
     * 注意，你可以调用 getComponent('minecraft:onfire')，
     * 如果存在，则实体正在着火。
     *
     * @worldMutation
     *
     * @param useEffects
     * 是否显示与熄灭相关的视觉效果。
     * 默认值: true
     * @returns
     * 返回实体是否着火。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     * @seeExample setOnFire.ts
     */
    extinguishFire(useEffects?: boolean): boolean;
    /**
     * @remarks
     * 返回从实体视线方向看的第一个相交方块。
     *
     * @param options
     * 射线追踪的附加配置选项。
     * @returns
     * 返回从实体视线方向看的第一个相交方块。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getBlockFromViewDirection(options?: BlockRaycastOptions): BlockRaycastHit | undefined;
    /**
     * @remarks
     * 获取实体的组件（代表附加功能）。
     *
     * @param componentId
     * 组件的标识符（例如，'minecraft:health'）。
     * 如果未指定命名空间前缀，则假定为 'minecraft:'。
     * 可用的组件 ID 可在 {@link EntityComponentTypes} 枚举中找到。
     * @returns
     * 如果组件存在于实体上则返回该组件，否则返回 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getComponent<T extends string>(componentId: T): EntityComponentReturnType<T> | undefined;
    /**
     * @remarks
     * 返回此实体上存在且受 API 支持的所有组件。
     *
     * @returns
     * 返回此实体上存在且受 API 支持的所有组件。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getComponents(): EntityComponent[];
    /**
     * @remarks
     * 返回属性值。
     *
     * @param identifier
     * 属性标识符。
     * @returns
     * 返回属性的值，如果属性未设置则返回 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    /**
     * @remarks
     * 返回在此实体上使用的所有动态属性标识符集合。
     *
     * @returns
     * 返回在此实体上设置的动态属性字符串数组。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getDynamicPropertyIds(): string[];
    /**
     * @remarks
     * 返回当前存储在此实体上的所有动态属性的总大小（以字节为单位）。
     * 这包括键和值的大小。
     * 这对诊断性能警告标志很有用，例如，如果实体有大量相关的动态属性，
     * 在各种设备上加载可能会很慢。
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getDynamicPropertyTotalByteCount(): number;
    /**
     * @remarks
     * 返回实体上指定 EffectType 的效果，
     * 如果效果不存在则返回 undefined，如果效果不存在则抛出错误。
     *
     * @param effectType
     * 效果标识符。
     * @returns
     * 指定效果的效果对象，如果效果不存在则返回 undefined，
     * 如果效果不存在则抛出错误。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     */
    getEffect(effectType: EffectType | string): Effect | undefined;
    /**
     * @remarks
     * 返回应用于此实体的效果集合。
     *
     * @returns
     * 效果列表。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getEffects(): Effect[];
    /**
     * @remarks
     * 通过从此实体的视角执行射线追踪，获取此实体正在查看的实体。
     *
     * @param options
     * 射线追踪的附加配置选项。
     * @returns
     * 返回从此实体视线方向看到的实体集合。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    getEntitiesFromViewDirection(options?: EntityRaycastOptions): EntityRaycastHit[];
    /**
     * @remarks
     * 返回此实体头部组件的当前位置。
     *
     * @returns
     * 返回此实体头部组件的当前位置。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getHeadLocation(): Vector3;
    /**
     * @remarks
     * 获取实体属性值。
     * 如果在同一刻内使用 setProperty 函数设置了属性，
     * 则更新后的值直到下一刻才会反映出来。
     *
     * @param identifier
     * 实体属性标识符。
     * @returns
     * 返回当前属性值。
     * 对于枚举属性，返回字符串。
     * 对于浮点数和整数属性，返回数字。
     * 对于未定义的属性，返回 undefined。
     * @throws
     * 如果实体无效则抛出异常。
     *
     * {@link InvalidEntityError}
     */
    getProperty(identifier: string): boolean | number | string | undefined;
    /**
     * @remarks
     * 返回此实体的当前旋转组件。
     *
     * @returns
     * 返回包含此实体旋转（以度为单位）的 Vec2。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getRotation(): Vector2;
    /**
     * @remarks
     * 返回与实体关联的所有标签。
     *
     * @returns
     * 包含所有标签的字符串数组。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getTags(): string[];
    /**
     * @remarks
     * 返回实体的当前速度向量。
     *
     * @returns
     * 返回实体的当前速度向量。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     * @seeExample getFireworkVelocity.ts
     */
    getVelocity(): Vector3;
    /**
     * @remarks
     * 返回实体的当前视线方向。
     *
     * @returns
     * 返回实体的当前视线方向。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getViewDirection(): Vector3;
    /**
     * @remarks
     * 返回指定组件是否存在于该实体上。
     *
     * @param componentId
     * 要检索的组件标识符（例如，'minecraft:rideable'）。
     * 如果未指定命名空间前缀，则假定为 'minecraft:'。
     * @returns
     * 如果指定的组件存在于该实体上则返回 true。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    hasComponent(componentId: string): boolean;
    /**
     * @remarks
     * 返回实体是否具有特定标签。
     *
     * @param tag
     * 要测试的标签标识符。
     * @returns
     * 返回实体是否具有特定标签。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks
     * 杀死此实体。实体将正常掉落战利品。
     *
     * @worldMutation
     *
     * @returns
     * 如果实体可以被杀死（即使它已经死亡）则返回 true，
     * 否则返回 false。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     * @seeExample tagsQuery.ts
     */
    kill(): boolean;
    /**
     * @remarks
     * 设置实体的旋转以面向目标位置。
     * 如果适用，将设置俯仰和偏航，例如对于生物，
     * 俯仰控制头部倾斜，偏航控制身体旋转。
     *
     * @worldMutation
     *
     * @param targetLocation
     * 此实体应该面向/注视的目标位置。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    lookAt(targetLocation: Vector3): void;
    /**
     * @remarks
     * 根据传入的选项匹配实体。
     * 如果在传入的 EntityQueryOptions 中未指定位置，
     * 则使用实体的位置进行匹配。
     *
     * @param options
     * 要执行匹配的查询。
     * @returns
     * 如果实体匹配传入的 EntityQueryOptions 中的条件则返回 true，
     * 否则返回 false。
     * @throws
     * 如果查询选项配置错误则抛出异常。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    matches(options: EntityQueryOptions): boolean;
    /**
     * @remarks
     * 使实体播放给定的动画。
     *
     * @worldMutation
     *
     * @param animationName
     * 动画标识符。例如 animation.creeper.swelling
     * @param options
     * 控制动画播放和转换的附加选项。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    playAnimation(animationName: string, options?: PlayAnimationOptions): void;
    /**
     * @remarks
     * 立即从世界中移除实体。
     * 移除的实体不会执行死亡动画或在移除时掉落战利品。
     *
     * @worldMutation
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    remove(): void;
    /**
     * @remarks
     * 移除实体上的指定 EffectType，如果效果不存在则返回 false。
     *
     * @worldMutation
     *
     * @param effectType
     * 效果标识符。
     * @returns
     * 如果效果已移除则返回 true。
     * 如果未找到效果或效果不存在则返回 false。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     */
    removeEffect(effectType: EffectType | string): boolean;
    /**
     * @remarks
     * 从实体中移除指定的标签。
     *
     * @worldMutation
     *
     * @param tag
     * 要移除的标签内容。
     * @returns
     * 返回标签是否存在于实体上。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    removeTag(tag: string): boolean;
    /**
     * @remarks
     * 将实体属性重置为其默认值，如实体定义中指定的那样。
     * 此属性更改直到下一刻才会应用。
     *
     * @worldMutation
     *
     * @param identifier
     * 实体属性标识符。
     * @returns
     * 返回默认属性值。
     * 对于枚举属性，返回字符串。
     * 对于浮点数和整数属性，返回数字。
     * 对于未定义的属性，返回 undefined。
     * @throws
     * 如果实体无效则抛出异常。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     *
     * {@link InvalidEntityError}
     */
    resetProperty(identifier: string): boolean | number | string;
    /**
     * @remarks
     * 在实体上运行同步命令。
     *
     * @worldMutation
     *
     * @param commandString
     * 命令字符串。注意：这不应包含前导斜杠。
     * @returns
     * 包含命令是否成功的命令结果。
     * @throws 此函数可能抛出错误。
     *
     * {@link CommandError}
     *
     * {@link InvalidEntityError}
     */
    runCommand(commandString: string): CommandResult;
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
     *
     * {@link InvalidEntityError}
     */
    setDynamicProperties(values: Record<string, boolean | number | string | Vector3>): void;
    /**
     * @remarks
     * 将指定属性设置为值。
     *
     * @param identifier
     * 属性标识符。
     * @param value
     * 要设置的属性数据值。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    /**
     * @remarks
     * 使实体着火（如果它不在水中或雨中）。
     * 注意，你可以调用 getComponent('minecraft:onfire')，
     * 如果存在，则实体正在着火。
     *
     * @worldMutation
     *
     * @param seconds
     * 设置实体着火的时间长度。
     * @param useEffects
     * 是否应用副作用（例如解冻冻结）
     * 以及是否应考虑其他条件，如雨水或防火保护。
     * 默认值: true
     * @returns
     * 实体是否被点燃。
     * 如果秒数小于或等于零、实体湿润或实体对火免疫，则此操作可能失败。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     * @seeExample setOnFire.ts
     */
    setOnFire(seconds: number, useEffects?: boolean): boolean;
    /**
     * @remarks
     * 将实体属性设置为提供的值。
     * 此属性更改直到下一刻才会应用。
     *
     * @worldMutation
     *
     * @param identifier
     * 实体属性标识符。
     * @param value
     * 属性值。提供的类型必须与实体定义中指定的类型兼容。
     * @throws
     * 如果实体无效则抛出异常。
     * 如果提供了无效的标识符则抛出异常。
     * 如果提供的值类型与属性类型不匹配则抛出异常。
     * 如果提供的值超出预期范围（整数、浮点数属性）则抛出异常。
     * 如果提供的字符串值与接受的枚举值集合不匹配（枚举属性）则抛出异常。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     */
    setProperty(identifier: string, value: boolean | number | string): void;
    /**
     * @remarks
     * 设置实体的主要旋转。
     *
     * @worldMutation
     *
     * @param rotation
     * 实体的 x 和 y 旋转（以度为单位）。
     * 对于大多数生物，x 旋转控制头部倾斜，y 旋转控制身体旋转。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    setRotation(rotation: Vector2): void;
    /**
     * @remarks
     * 将选定的实体传送到新位置
     *
     * @worldMutation
     *
     * @param location
     * 实体的新位置。
     * @param teleportOptions
     * 传送操作的选项。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     * @seeExample teleport.ts
     * @seeExample teleportMovement.ts
     */
    teleport(location: Vector3, teleportOptions?: TeleportOptions): void;
    /**
     * @remarks
     * 触发实体类型事件。
     * 对于每个实体，在实体定义中都定义了许多事件用于关键实体行为；
     * 例如，苦力怕有 minecraft:start_exploding 类型事件。
     *
     * @worldMutation
     *
     * @param eventName
     * 要触发的实体类型事件的名称。
     * 如果未指定命名空间，则假定为 minecraft:。
     * @throws
     * 如果事件未在实体定义中定义，则会抛出错误。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     * @seeExample triggerEvent.ts e0d38a47
     * @seeExample triggerEvent.ts b473e4eb
     */
    triggerEvent(eventName: string): void;
    /**
     * @remarks
     * 尝试进行传送，但可能无法完成传送操作
     * （例如，如果目标位置有方块）。
     *
     * @worldMutation
     *
     * @param location
     * 要传送实体的位置。
     * @param teleportOptions
     * 传送操作的选项。
     * @returns
     * 返回传送是否成功。
     * 如果目标区块未加载或者传送会导致与方块相交则可能失败。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    tryTeleport(location: Vector3, teleportOptions?: TeleportOptions): boolean;
}