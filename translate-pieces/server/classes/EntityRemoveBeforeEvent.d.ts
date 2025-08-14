/* IMPORT */ import { Entity } from '../index';

/**
 * 实体从世界中移除时发生的事件数据（例如，因为实体离玩家较远而被卸载。）
 */
export class EntityRemoveBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 指向正在被移除的实体的引用。
     *
     */
    readonly removedEntity: Entity;
}