/* IMPORT */ import { EntityComponent } from '../index';

/**
 * 用于区分实体变种的组件组与其他组件组。（例如豹猫、村民）。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityVariantComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 通过组件指定的此实体变种的当前值。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly value: number;
    static readonly componentId = 'minecraft:variant';
}