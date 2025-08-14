/* IMPORT */ import { Entity, EntityDamageSource } from '../index';

/**
 * 包含与游戏中实体死亡相关的数据。
 */
export class EntityDieAfterEvent {
    private constructor();
    /**
     * @remarks
     * 如果指定，提供有关导致此实体死亡的伤害来源的更多信息。
     *
     */
    readonly damageSource: EntityDamageSource;
    /**
     * @remarks
     * 现在已死亡的实体对象。
     *
     */
    readonly deadEntity: Entity;
}