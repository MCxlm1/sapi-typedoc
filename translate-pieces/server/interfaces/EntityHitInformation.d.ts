/* IMPORT */ import { Entity } from '../index';

/**
 * 包含被击中实体的附加信息。
 */
export interface EntityHitInformation {
    /**
     * @remarks
     * 被击中的实体。
     */
    entity?: Entity;
}