/* IMPORT */ import { ItemComponent, minecraftcommon } from '../index';

/**
 * 表示物品耐久组件。当出现在物品上时，表示该物品可以在使用中受到损坏。
 * 注意，只能在数驱物品上获取和使用该组件。
 * 
 * 当出现在物品上时，表示此物品在使用过程中会受到损坏。注意，此组件仅适用于数据驱动的物品。
 * @seeExample giveHurtDiamondSword.ts
 */
// @ts-ignore 类继承允许用于原生定义的类
export class ItemDurabilityComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 此物品当前的损坏值。
     * 物品当前耐久度为 `maxDurability - damage`。
     * 当被设置为 负数，`Infinity`，`NaN` 等值时，值为 0。
     * 
     * 返回此特定物品的当前损坏等级。
     *
     * @worldMutation
     *
     */
    damage: number;
    /**
     * @remarks
     * 表示该物品在损坏前可以承受的损坏值。
     * 
     * 表示此物品在损坏前可以承受的损坏量。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly maxDurability: number;
    static readonly componentId = 'minecraft:durability';
    /**
     * @remarks
     * 返回根据 `damageRange` 属性生成的最大损坏概率，
     * 附带一个耐久附魔等级作为可选参数。
     * 
     * 返回使用 damageRange 属性计算出的此物品的最大损坏概率，给定一个耐久魔咒等级。
     *
     * @worldMutation
     *
     * @param unbreakingEnchantmentLevel
     * 计算损坏概率时要考虑的耐久因子。传入的耐久参数必须在 [0, 3] 范围内。
     * 传入的 `unbreakingEnchantmentLevel` 参数必须介于 [0, 3]。
     * 
     * 考虑在计算损坏概率时的耐久因子。传入的耐久参数必须在 [0, 3] 范围内。
     * 默认值：0
     * @returns 使用时的最大损坏概率。
     * @throws
     * 若 `unbreakingEnchantmentLevel` 参数未在范围内时，抛出 `TypeError` 。
     */
    getDamageChance(unbreakingEnchantmentLevel?: number): number;
    /**
     * @remarks
     * 返回用于计算物品损失耐久的概率范围。最终物品损失耐久的概率将落在此范围中。
     * 
     * 用于计算物品损坏概率的数字范围。损坏概率将在此范围内。
     *
     * @worldMutation
     *
     * @throws 此函数可能抛出错误。
     */
    getDamageChanceRange(): minecraftcommon.NumberRange;
}