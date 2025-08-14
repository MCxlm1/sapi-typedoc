/* IMPORT */ import { ItemComponent } from '../index';

/**
 * 表示物品食物组件。当出现在物品上时，实体可以消耗此物品。
 * 注意，只能在数驱物品上获取和使用该组件。
 * 
 * 当出现在物品上时，实体可以消耗此物品。注意，此组件仅适用于数据驱动的物品。
 */
// @ts-ignore 类继承允许用于原生定义的类
export class ItemFoodComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 若为 `true` ，则无论饥饿值是否已满，玩家始终可以食用该物品。
     * 
     * 如果为 true，玩家可以始终食用此物品（即使不饿）。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly canAlwaysEat: boolean;
    /**
     * @remarks
     * 表示实体在食用该物品后恢复的饥饿值，即营养值。
     * 
     * 表示此食物物品在被实体食用时将提供的营养量。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly nutrition: number;
    /**
     * @remarks
     * 当一个物品被食用，
     * 将根据公式 `nutrition * saturation_modifier * 2`
     * 来为玩家添加饱和状态。
     * 
     * 当物品被食用时，根据此公式 (nutrition * saturation_modifier * 2) 应用饱和度增益。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly saturationModifier: number;
    /**
     * @remarks
     * 若给出，则使用时将该物品转换为标识符指定的物品。
     * 
     * 如果指定，则将活动物品转换为此属性指定的物品。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly usingConvertsTo: string;
    static readonly componentId = 'minecraft:food';
}