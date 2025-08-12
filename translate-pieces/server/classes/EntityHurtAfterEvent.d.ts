/* IMPORT */ import { Entity, ItemStack } from '../index';

/**
 * 包含实体受伤事件的相关信息。
 */
export class EntityHurtAfterEvent {
    private constructor();
    /**
     * @remarks
     * 伤害来源。可能是 undefined。
     *
     */
    readonly damageSource: ItemStack | undefined;
    /**
     * @remarks
     * 受伤的实体。
     *
     */
    readonly hurtEntity: Entity;
}