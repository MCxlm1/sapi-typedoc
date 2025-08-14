/* IMPORT */ import { Enchantment, EnchantmentLevelOutOfBoundsError, EnchantmentSlot, EnchantmentType, EnchantmentTypeNotCompatibleError, EnchantmentTypeUnknownIdError, ItemComponent } from '../index';

/**
 * 当出现在物品上时，此物品可以应用附魔。
 */
// @ts-ignore 类继承允许用于原生定义的类
export class ItemEnchantableComponent extends ItemComponent {
    private constructor();
    /**
     * @throws 使用此属性时可能抛出异常。
     */
    readonly slots: EnchantmentSlot[];
    static readonly componentId = 'minecraft:enchantable';
    /**
     * @remarks
     * 向物品堆叠添加附魔。
     *
     * @worldMutation
     *
     * @param enchantment
     * 要添加的附魔接口。
     * @throws
     * ScriptItemEnchantmentUnknownIdError: 如果附魔类型不存在则抛出异常。
     *
     * ScriptItemEnchantmentLevelOutOfBoundsError: 如果附魔等级超出给定附魔类型的允许范围则抛出异常。
     *
     * ScriptItemEnchantmentTypeNotCompatibleError: 如果附魔与物品堆叠不兼容则抛出异常。
     *
     *
     * {@link EnchantmentLevelOutOfBoundsError}
     *
     * {@link EnchantmentTypeNotCompatibleError}
     *
     * {@link EnchantmentTypeUnknownIdError}
     *
     * {@link Error}
     */
    addEnchantment(enchantment: Enchantment): void;
    /**
     * @remarks
     * 向物品堆叠添加附魔列表。
     *
     * @worldMutation
     *
     * @param enchantments
     * 要添加的附魔列表。
     * @throws
     * ScriptItemEnchantmentUnknownIdError: 如果任何附魔类型不存在则抛出异常。
     *
     * ScriptItemEnchantmentLevelOutOfBoundsError: 如果任何附魔等级超出给定附魔类型的允许范围则抛出异常。
     *
     * ScriptItemEnchantmentTypeNotCompatibleError: 如果任何附魔与物品堆叠不兼容则抛出异常。
     *
     *
     * {@link EnchantmentLevelOutOfBoundsError}
     *
     * {@link EnchantmentTypeNotCompatibleError}
     *
     * {@link EnchantmentTypeUnknownIdError}
     *
     * {@link Error}
     */
    addEnchantments(enchantments: Enchantment[]): void;
    /**
     * @remarks
     * 检查附魔是否可以添加到物品堆叠。
     *
     * @param enchantment
     * 要添加的附魔接口。
     * @returns
     * 如果附魔可以添加到物品堆叠则返回 true。
     * @throws
     * ScriptItemEnchantmentUnknownIdError: 如果附魔类型不存在则抛出异常。
     *
     * ScriptItemEnchantmentLevelOutOfBoundsError: 如果附魔等级超出给定附魔类型的允许范围则抛出异常。
     *
     *
     * {@link EnchantmentLevelOutOfBoundsError}
     *
     * {@link EnchantmentTypeUnknownIdError}
     */
    canAddEnchantment(enchantment: Enchantment): boolean;
    /**
     * @remarks
     * 从物品堆叠中获取给定类型的附魔。
     *
     * @param enchantmentType
     * 要获取的附魔类型。
     * @returns
     * 如果物品堆叠上存在附魔则返回该附魔。
     * @throws
     * ScriptItemEnchantmentUnknownIdError: 如果附魔类型不存在则抛出异常。
     *
     *
     * {@link EnchantmentTypeUnknownIdError}
     */
    getEnchantment(enchantmentType: EnchantmentType | string): Enchantment | undefined;
    /**
     * @remarks
     * 获取物品堆叠上的所有附魔。
     *
     * @returns
     * 返回物品堆叠上的附魔列表。
     * @throws 此函数可能抛出错误。
     */
    getEnchantments(): Enchantment[];
    /**
     * @remarks
     * 检查物品堆叠是否具有给定的附魔类型。
     *
     * @param enchantmentType
     * 要检查的附魔类型。
     * @returns
     * 如果物品堆叠具有该附魔类型则返回 true。
     * @throws
     * ScriptItemEnchantmentUnknownIdError: 如果附魔类型不存在则抛出异常。
     *
     *
     * {@link EnchantmentTypeUnknownIdError}
     */
    hasEnchantment(enchantmentType: EnchantmentType | string): boolean;
    /**
     * @remarks
     * 移除此物品堆叠上的所有附魔。
     *
     * @worldMutation
     *
     * @throws 此函数可能抛出错误。
     */
    removeAllEnchantments(): void;
    /**
     * @remarks
     * 移除给定类型的附魔。
     *
     * @worldMutation
     *
     * @param enchantmentType
     * 要移除的附魔类型。
     * @throws
     * ScriptItemEnchantmentUnknownIdError: 如果附魔类型不存在则抛出异常。
     *
     *
     * {@link EnchantmentTypeUnknownIdError}
     *
     * {@link Error}
     */
    removeEnchantment(enchantmentType: EnchantmentType | string): void;
}