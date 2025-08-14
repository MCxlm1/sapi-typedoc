/* IMPORT */ import { Entity } from '../index';

/**
 * 通过抛射物造成伤害时的附加选项。
 */
export interface EntityApplyDamageByProjectileOptions {
    /**
     * @remarks
     * 发射抛射物的可选实体。
     */
    damagingEntity?: Entity;
    /**
     * @remarks
     * 造成伤害的抛射物。
     */
    damagingProjectile: Entity;
}