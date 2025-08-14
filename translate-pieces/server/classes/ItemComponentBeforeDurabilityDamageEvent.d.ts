/* IMPORT */ import { Entity, ItemStack } from '../index';

/**
 * 包含物品在击中实体前被损坏的相关信息。
 */
export class ItemComponentBeforeDurabilityDamageEvent {
    private constructor();
    /**
     * @remarks
     * 攻击实体。
     *
     */
    readonly attackingEntity: Entity;
    /**
     * @remarks
     * 事件发生时应用于物品耐久度的损坏值。
     *
     */
    durabilityDamage: number;
    /**
     * @remarks
     * 被击中的实体。
     *
     */
    readonly hitEntity: Entity;
    /**
     * @remarks
     * 用于击中实体的物品堆。
     *
     */
    itemStack?: ItemStack;
}