/* IMPORT */ import { Entity } from '../index';

/**
 * 包含实体生成事件的相关信息。
 */
export class EntitySpawnAfterEvent {
    private constructor();
    /**
     * @remarks
     * 生成的实体。
     *
     */
    readonly entity: Entity;
}