/* IMPORT */ import { Entity, EntityInitializationCause } from '../index';

/**
 * 包含与实体在世界中生成相关的数据。
 * @seeExample logEntitySpawnEvent.ts
 */
export class EntitySpawnAfterEvent {
    private constructor();
    /**
     * @remarks
     * 获取实体初始化的原因，例如生成或出生等。
     *
     */
    readonly cause: EntityInitializationCause;
    /**
     * @remarks
     * 获取已经生成的实体对象。
     *
     * @worldMutation 允许对世界进行修改。
     *
     */
    entity: Entity;
}