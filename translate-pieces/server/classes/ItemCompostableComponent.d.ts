/* IMPORT */ import { ItemComponent } from '../index';

/**
 * 当存在时，如果堆肥几率在 [1 - 100] 范围内，该物品可以在堆肥桶方块中堆肥。
 */
// @ts-ignore 类继承允许用于原生定义的类
export class ItemCompostableComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 这是物品在堆肥桶方块中堆肥并生成一层堆肥的百分比几率。请注意，
     * 此 API 也会返回可堆肥但不使用可堆肥物品组件的原版物品的堆肥几率。
     *
     * @throws
     * 当值在 [1 - 100] 范围外时抛出异常
     */
    readonly compostingChance: number;
    static readonly componentId = 'minecraft:compostable';
}