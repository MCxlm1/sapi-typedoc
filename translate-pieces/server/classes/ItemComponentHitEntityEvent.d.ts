/* IMPORT */ import { Entity, ItemStack } from '../index';

/**
 * 包含当物品用于击中实体时的相关信息。
 */
export class ItemComponentHitEntityEvent {
    private constructor();
    /**
     * @remarks
     * 攻击实体。
     *
     */
    readonly attackingEntity: Entity;
    /**
     * @remarks
     * 击中是否命中或有任何效果。
     *
     */
    readonly hadEffect: boolean;
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
    readonly itemStack?: ItemStack;
}