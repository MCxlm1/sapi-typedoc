/* IMPORT */ import { ItemComponent, PotionDeliveryType, PotionEffectType, minecraftcommon } from '../index';

/**
 * @beta
 * 当出现在物品上时，此物品是药水物品。
 */
// @ts-ignore 类继承允许用于原生定义的类
export class ItemPotionComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 与药水物品关联的 PotionDeliveryType。
     *
     * @throws 使用此属性时可能抛出异常。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     */
    readonly potionDeliveryType: PotionDeliveryType;
    /**
     * @remarks
     * 与药水物品关联的 PotionEffectType。
     *
     * @throws 使用此属性时可能抛出异常。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     */
    readonly potionEffectType: PotionEffectType;
    static readonly componentId = 'minecraft:potion';
}