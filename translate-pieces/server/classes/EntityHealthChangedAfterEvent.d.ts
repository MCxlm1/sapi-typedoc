/* IMPORT */ import { Entity } from '../index';

/**
 * 包含实体生命值变化事件的相关信息。
 */
export class EntityHealthChangedAfterEvent {
    private constructor();
    /**
     * @remarks
     * 生命值发生变化的实体。
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 实体的新生命值。
     *
     */
    readonly newValue: number;
    /**
     * @remarks
     * 实体的旧生命值。
     *
     */
    readonly oldValue: number;
}