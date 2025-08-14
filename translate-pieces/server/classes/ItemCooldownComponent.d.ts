/* IMPORT */ import { ItemComponent, Player } from '../index';

/**
 * 表示物品使用冷却组件。当出现在物品上时，表示该物品被实体使用后会有冷却效果。
 * 注意，若使用后不会进入冷却，原版物品会获取到没有实际作用的该组件。
 * 
 * 当出现在物品上时，此物品在被实体使用时具有冷却效果。
 */
// @ts-ignore 类继承允许用于原生定义的类
export class ItemCooldownComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 表示物品的冷却类别。
     * 
     * 表示与此物品关联的冷却类别。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly cooldownCategory: string;
    /**
     * @remarks
     * 物品冷却所需的时间，单位为刻。
     * 
     * 此物品冷却所需的时间，以刻为单位。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly cooldownTicks: number;
    static readonly componentId = 'minecraft:cooldown';
    /**
     * @remarks
     * @worldMutation
     *
     * @throws 此函数可能抛出错误。
     */
    getCooldownTicksRemaining(player: Player): number;
    /**
     * @remarks
     * 如果物品是传入的冷却类别则返回 true，否则返回 false。
     *
     * @worldMutation
     *
     * @param cooldownCategory
     * 可能与此物品关联的冷却类别。
     * @returns
     * 如果物品是给定的冷却类别则返回 true。
     * @throws 此函数可能抛出错误。
     */
    isCooldownCategory(cooldownCategory: string): boolean;
    /**
     * @remarks
     * 此函数不能在只读模式下调用。
     *
     * @throws 此函数可能抛出错误。
     */
    getCooldownTicksRemaining(player: Player): number;
    /**
     * @remarks
     * 如果物品是传入的冷却类别则返回 true，否则返回 false。
     *
     * 此函数不能在只读模式下调用。
     *
     * @param cooldownCategory
     * 可能与此物品关联的冷却类别。
     * @returns
     * 如果物品是给定的冷却类别则返回 true。
     * @throws 此函数可能抛出错误。
     */
    isCooldownCategory(cooldownCategory: string): boolean;
    /**
     * @remarks
     * 开始物品的冷却周期。
     * 如果物品已在冷却中，将重新开始冷却。
     * 
     * 为此物品开始新的冷却期。
     *
     * @worldMutation
     *
     * @throws 此函数可能抛出错误。
     */
    startCooldown(player: Player): void;
}