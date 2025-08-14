/* IMPORT */ import { ItemComponent, RGB } from '../index';

/**
 * 当出现在物品上时，此物品可以被染色。
 */
// @ts-ignore 类继承允许用于原生定义的类
export class ItemDyeableComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 设置并返回物品的当前颜色。
     *
     * @worldMutation
     *
     */
    color?: RGB;
    /**
     * @remarks
     * 返回物品的默认颜色。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly defaultColor?: RGB;
    static readonly componentId = 'minecraft:dyeable';
}