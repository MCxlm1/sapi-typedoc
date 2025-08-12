/* IMPORT */ import { EntityComponent } from '../index';

/**
 * 设置实体的视觉大小。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityScaleComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 设置在实体上的缩放属性的当前值。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly value: number;
    static readonly componentId = 'minecraft:scale';
}