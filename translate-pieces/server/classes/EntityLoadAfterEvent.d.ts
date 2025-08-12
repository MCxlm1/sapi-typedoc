/* IMPORT */ import { Entity } from '../index';

/**
 * 包含实体加载事件的相关信息。
 */
export class EntityLoadAfterEvent {
    private constructor();
    /**
     * @remarks
     * 加载的实体。
     *
     */
    readonly entity: Entity;
}