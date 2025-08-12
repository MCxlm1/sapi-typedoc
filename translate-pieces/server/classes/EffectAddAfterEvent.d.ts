/* IMPORT */ import { Effect, Entity } from '../index';

/**
 * 包含添加到实体的效果（如中毒）发生变化的相关信息。
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
     * 正在添加效果的实体。
     *
     */
    readonly entity: Entity;
}