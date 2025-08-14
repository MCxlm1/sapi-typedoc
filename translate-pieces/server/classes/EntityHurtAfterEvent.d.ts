/* IMPORT */ import { Entity, EntityDamageSource } from '../index';

/**
 * 包含与实体受伤相关的信息。
 */
export class EntityHurtAfterEvent {
    private constructor();
    /**
     * @remarks
     * 描述造成的伤害量。
     *
     */
    readonly damage: number;
    /**
     * @remarks
     * 可能造成此伤害的实体的来源信息。
     *
     */
    readonly damageSource: EntityDamageSource;
    /**
     * @remarks
     * 受伤的实体。
     *
     */
    readonly hurtEntity: Entity;
}