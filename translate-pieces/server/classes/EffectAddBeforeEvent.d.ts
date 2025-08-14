/* IMPORT */ import { Entity } from '../index';

/**
 * 包含与添加到实体的效果（如中毒）变化相关的信息。
 */
export class EffectAddBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 当设置为 true 时将取消事件。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 效果持续时间。
     *
     */
    duration: number;
    /**
     * @remarks
     * 正在添加的效果类型。
     *
     */
    readonly effectType: string;
    /**
     * @remarks
     * 效果正在添加到的实体。
     *
     */
    readonly entity: Entity;
}