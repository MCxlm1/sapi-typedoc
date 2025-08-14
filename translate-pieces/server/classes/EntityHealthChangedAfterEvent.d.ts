/* IMPORT */ import { Entity } from '../index';

/**
 * 包含与实体健康值变化相关的信息。警告：不要在此事件中更改实体的健康值，否则将导致无限循环！
 */
export class EntityHealthChangedAfterEvent {
    private constructor();
    /**
     * @remarks
     * 健康值发生变化的实体。
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 实体的新健康值。
     *
     */
    readonly newValue: number;
    /**
     * @remarks
     * 实体的旧健康值。
     *
     */
    readonly oldValue: number;
}