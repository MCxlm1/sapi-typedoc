/* IMPORT */ import { Entity } from '../index';

/**
 * 包含实体射线检测命中结果的信息。
 */
export interface EntityRaycastHit {
    /**
     * @remarks
     * 从射线原点到实体边界的距离。
     */
    distance: number;
    /**
     * @remarks
     * 被命中的实体。
     */
    entity: Entity;
}