/* IMPORT */ import { Effect, Entity } from '../index';

/**
 * 包含与添加到实体的效果（如中毒）变化相关的信息。
 */
export class EffectAddAfterEvent {
    private constructor();
    /**
     * @remarks
     * 效果的附加属性和详细信息。
     *
     */
    readonly effect: Effect;
    /**
     * @remarks
     * 添加效果的实体。
     *
     */
    readonly entity: Entity;
}