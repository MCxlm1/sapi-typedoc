/* IMPORT */ import { DefinitionModifier, Entity } from '../index';

/**
 * 包含与数据驱动实体事件触发相关的信息 - 例如，鸡上的 minecraft:ageable_grow_up 事件。
 */
export class DataDrivenEntityTriggerAfterEvent {
    private constructor();
    /**
     * @remarks
     * 触发事件的实体。
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 正在触发的数据驱动事件的名称。
     *
     */
    readonly eventId: string;
    /**
     * @remarks
     * 可更新的组件状态修改列表，这些修改是此触发事件的效果。
     *
     */
    getModifiers(): DefinitionModifier[];
}