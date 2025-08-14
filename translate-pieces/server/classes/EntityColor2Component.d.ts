/* IMPORT */ import { EntityComponent, PaletteColor } from '../index';

/**
 * 定义实体的次要颜色。仅在某些具有次要预定义颜色值的实体上有效（例如，热带鱼）。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityColor2Component extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 此特定颜色的值。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly value: PaletteColor;
    static readonly componentId = 'minecraft:color2';
}