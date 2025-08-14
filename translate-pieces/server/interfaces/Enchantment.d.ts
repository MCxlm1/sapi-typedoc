/* IMPORT */ import { EnchantmentType } from '../index';

/**
 * 此接口表示应用于物品的特定等级的附魔。
 */
export interface Enchantment {
    /**
     * @remarks
     * 此附魔实例的等级。
     */
    level: number;
    /**
     * @remarks
     * 此实例的附魔类型。
     */
    type: EnchantmentType;
}