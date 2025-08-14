/* IMPORT */ import { Entity } from '../index';

/**
 * 包含与世界内加载实体相关的数据。
 * 当重新加载未加载的区块或实体更改维度时可能发生这种情况。
 */
export class EntityLoadAfterEvent {
    private constructor();
    /**
     * @remarks
     * 已加载的实体。
     *
     * @worldMutation
     *
     */
    entity: Entity;
}