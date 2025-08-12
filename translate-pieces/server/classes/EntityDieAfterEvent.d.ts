/* IMPORT */ import { Entity, ItemStack } from '../index';

/**
 * 包含实体死亡事件的相关信息。
 */
export class EntityDieAfterEvent {
    private constructor();
    /**
     * @remarks
     * 死亡实体上的物品堆。可能是 undefined。
     *
     */
    readonly damageSource: ItemStack | undefined;
    /**
     * @remarks
     * 已死亡的实体。
     *
     */
    readonly deadEntity: Entity;
}