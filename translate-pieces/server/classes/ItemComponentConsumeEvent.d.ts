/* IMPORT */ import { Entity, ItemStack } from '../index';

/**
 * 包含与食物物品被消耗相关的信息。
 */
export class ItemComponentConsumeEvent {
    private constructor();
    /**
     * @remarks
     * 被消耗的物品堆。
     *
     */
    readonly itemStack: ItemStack;
    /**
     * @remarks
     * 消耗该物品的源实体。
     *
     */
    readonly source: Entity;
}