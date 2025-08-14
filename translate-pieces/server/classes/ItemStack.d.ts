/* IMPORT */ import { ItemComponent, ItemComponentRegistry, ItemComponentReturnType, ItemLockMode, ItemType, RawMessage, Vector3, minecraftcommon } from '../index';

/**
 * 定义物品集合。
 * @seeExample itemStacks.ts
 * @seeExample givePlayerEquipment.ts
 * @seeExample spawnFeatherItem.ts
 */
export class ItemStack {
    /**
     * @remarks
     * 物品堆叠的数量。有效值范围为 1-255。提供的值将被限制在物品的最大堆叠大小范围内。
     *
     * @worldMutation
     *
     * @throws
     * 当值在 1-255 范围之外时抛出异常。
     */
    amount: number;
    /**
     * @remarks
     * 返回物品是否可堆叠。当物品的最大堆叠大小大于 1 且物品不包含任何自定义数据或属性时，该物品被认为是可堆叠的。
     *
     */
    readonly isStackable: boolean;
    /**
     * @remarks
     * 获取或设置物品是否在死亡时保留。
     *
     * @worldMutation
     *
     */
    keepOnDeath: boolean;
    /**
     * @remarks
     * 用于在 .lang 文件中本地化此物品名称的键。
     *
     * @throws 使用此属性时可能抛出异常。
     *
     * {@link minecraftcommon.EngineError}
     */
    readonly localizationKey: string;
    /**
     * @remarks
     * 获取或设置物品的锁定模式。默认值为 `ItemLockMode.none`。
     *
     * @worldMutation
     *
     */
    lockMode: ItemLockMode;
    /**
     * @remarks
     * 最大堆叠数量。该值根据物品类型的不同而不同。例如，火把的最大堆叠数量为 64，而鸡蛋的最大堆叠数量为 16。
     *
     */
    readonly maxAmount: number;
    /**
     * @remarks
     * 此物品堆叠的指定名称。当鼠标悬停在物品上时会显示名称标签。将名称标签设置为空字符串或 `undefined` 将移除名称标签。
     *
     * @worldMutation
     *
     * @throws
     * 当长度超过 255 个字符时抛出异常。
     */
    nameTag?: string;
    /**
     * @remarks
     * 物品的类型。
     *
     */
    readonly 'type': ItemType;
    /**
     * @remarks
     * 物品堆叠类型的标识符。如果未指定命名空间，则假定为 'minecraft:'。
     * 示例包括 'wheat' 或 'apple'。
     *
     */
    readonly typeId: string;
    /**
     * @beta
     * @remarks
     * 物品堆叠中所有物品的总重量加上使用 `Storage Item` 组件定义的物品容器中所有物品的重量。每件物品的重量可以通过 `Storage Weight Modifier` 组件修改。
     *
     */
    readonly weight: number;
    /**
     * @remarks
     * 创建一个用于世界中的物品堆叠新实例。
     *
     * @param itemType
     * 要创建的物品类型。有关 Minecraft 体验中的标准物品类型列表，请参见 {@link
     * @minecraft/vanilla-data.MinecraftItemTypes} 枚举。
     * @param amount
     * 放置在堆叠中的物品数量，范围为 1-255。提供的值将被限制在物品的最大堆叠大小范围内。请注意，某些物品在堆叠中只能有一个。
     * 默认值：1
     * @throws
     * 当 `itemType` 无效或 `amount` 在 1-255 范围之外时抛出异常。
     */
    constructor(itemType: ItemType | string, amount?: number);
    /**
     * @remarks
     * 清除此物品堆叠上设置的所有动态属性。
     *
     */
    clearDynamicProperties(): void;
    /**
     * @remarks
     * 创建物品堆叠的精确副本，包括任何自定义数据或属性。
     *
     * @returns
     * 返回此物品堆叠的副本。
     */
    clone(): ItemStack;
    /**
     * @remarks
     * 获取此物品在冒险模式下可以破坏的方块类型列表。
     *
     * @worldMutation
     *
     */
    getCanDestroy(): string[];
    /**
     * @remarks
     * 获取此物品在冒险模式下可以放置在其上的方块类型列表。
     *
     * @worldMutation
     *
     */
    getCanPlaceOn(): string[];
    /**
     * @remarks
     * 获取物品堆叠的组件（代表附加功能）。
     *
     * @param componentId
     * 组件的标识符（例如，'minecraft:food'）。如果未指定命名空间前缀，则假定为 'minecraft:'。
     * 可用的组件 ID 包括 {@link ItemComponentTypes} 枚举中的组件 ID 和使用 {@link ItemComponentRegistry} 注册的自定义组件 ID。
     * @returns
     * 如果组件存在于物品堆叠上则返回该组件，否则返回 undefined。
     * @seeExample giveHurtDiamondSword.ts
     */
    getComponent<T extends string>(componentId: T): ItemComponentReturnType<T> | undefined;
    /**
     * @remarks
     * 返回在此物品堆叠上存在且受 API 支持的所有组件。
     *
     */
    getComponents(): ItemComponent[];
    /**
     * @remarks
     * 返回属性值。
     *
     * @param identifier
     * 属性标识符。
     * @returns
     * 返回属性的值，如果尚未设置属性则返回 undefined。
     */
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    /**
     * @remarks
     * 返回在此实体上使用过的动态属性标识符的可用集合。
     *
     * @returns
     * 在此实体上设置的动态属性的字符串数组。
     */
    getDynamicPropertyIds(): string[];
    /**
     * @remarks
     * 返回当前存储在此实体上的所有动态属性的总大小（以字节为单位）。这包括键和值的大小。
     * 这对于诊断性能警告信号很有用 - 例如，如果一个实体有数兆字节的关联动态属性，在各种设备上加载可能会很慢。
     *
     */
    getDynamicPropertyTotalByteCount(): number;
    /**
     * @remarks
     * 返回 ItemStack 的描述值 - 一个次要显示字符串。
     *
     * @returns
     * 描述行数组。如果物品没有描述，则返回空数组。
     */
    getLore(): string[];
    /**
     * @beta
     * @remarks
     * 返回 ItemStack 的描述值 - 一个次要显示字符串。字符串描述行将被转换为 {@link RawMessage} 并放在 {@link RawMessage.text} 下。
     *
     * @returns
     * 描述行数组。如果物品没有描述，则返回空数组。
     */
    getRawLore(): RawMessage[];
    /**
     * @remarks
     * 返回与此物品堆叠关联的标签集合。
     *
     */
    getTags(): string[];
    /**
     * @remarks
     * 返回指定组件是否存在于该物品堆叠上。
     *
     * @param componentId
     * 要检索的组件标识符（例如，'minecraft:food'）。如果未指定命名空间前缀，则假定为 'minecraft:'。
     */
    hasComponent(componentId: string): boolean;
    /**
     * @remarks
     * 检查此物品堆叠是否具有与之关联的特定标签。
     *
     * @param tag
     * 要搜索的标签。
     * @returns
     * 如果物品堆叠具有与之关联的标签则返回 true，否则返回 false。
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks
     * 返回此物品堆叠是否可以与给定的 `itemStack` 堆叠。这是通过比较物品类型以及与物品堆叠关联的任何自定义数据和属性来确定的。
     * 物品堆叠的数量不考虑在内，但对于不可堆叠的物品，这将始终返回 false。
     *
     * @param itemStack
     * 要检查堆叠兼容性的 ItemStack。
     * @returns
     * 如果物品堆叠可以与传入的 itemStack 堆叠则返回 true。对于不可堆叠的物品返回 false。
     */
    isStackableWith(itemStack: ItemStack): boolean;
    /**
     * @remarks
     * 安全检查物品是否匹配的版本。
     *
     * @param itemName
     * 物品的标识符。
     * @param states
     * 仅适用于方块。要比较的可选状态集。如果未指定 states，则匹配检查更广泛地针对类型集进行。
     * @returns
     * 返回指定物品是否匹配的布尔值。
     */
    matches(itemName: string, states?: Record<string, boolean | number | string>): boolean;
    /**
     * @remarks
     * 此物品在冒险模式下可以破坏的方块类型列表。方块名称显示在物品的工具提示中。将值设置为 undefined 将清除列表。
     *
     * @worldMutation
     *
     * @param blockIdentifiers
     * 物品可以破坏的方块类型的字符串列表。
     * @throws
     * 当提供的任何方块标识符无效时抛出异常。
     * @seeExample giveDestroyRestrictedPickaxe.ts
     */
    setCanDestroy(blockIdentifiers?: string[]): void;
    /**
     * @remarks
     * 此物品在冒险模式下可以放置在其上的方块类型列表。这仅适用于方块物品。方块名称显示在物品的工具提示中。
     * 将值设置为 undefined 将清除列表。
     *
     * @worldMutation
     *
     * @param blockIdentifiers
     * 物品可以放置在其上的方块类型的字符串列表。
     * @throws
     * 当提供的任何方块标识符无效时抛出异常。
     * @seeExample givePlaceRestrictedGoldBlock.ts
     */
    setCanPlaceOn(blockIdentifiers?: string[]): void;
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
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    setDynamicProperties(values: Record<string, boolean | number | string | Vector3>): void;
    /**
     * @remarks
     * 将指定属性设置为值。注意：此函数仅适用于不可堆叠的物品。
     *
     * @param identifier
     * 属性标识符。
     * @param value
     * 要设置的属性的数据值。
     * @throws
     * 当物品堆叠可堆叠时抛出异常。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    /**
     * @remarks
     * 设置 ItemStack 的描述值 - 一个次要显示字符串。如果设置为空字符串或 undefined，描述列表将被清除。
     *
     * @worldMutation
     *
     * @param loreList
     * 描述行列表。列表中的每个元素代表一个新行。最大描述行数为 20。最大描述行长度为 50 个字符。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link Error}
     * @seeExample diamondAwesomeSword.ts
     */
    setLore(loreList?: (RawMessage | string)[]): void;
}