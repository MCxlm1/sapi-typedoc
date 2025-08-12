/* IMPORT */ import { ContainerSlot, EntityComponent, EquipmentSlot, InvalidEntityError, ItemStack } from '../index';

/**
 * 提供对生物装备槽的访问。此组件存在于玩家实体上。
 * @seeExample givePlayerElytra.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityEquippableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 返回拥有者的总护甲等级。
     *
     * @throws 使用此属性时可能抛出异常。
     *
     * {@link InvalidEntityError}
     */
    readonly totalArmor: number;
    /**
     * @remarks
     * 返回拥有者的总韧性等级。
     *
     * @throws 使用此属性时可能抛出异常。
     *
     * {@link InvalidEntityError}
     */
    readonly totalToughness: number;
    static readonly componentId = 'minecraft:equippable';
    /**
     * @remarks
     * 获取给定装备槽的已装备物品。
     *
     * @param equipmentSlot
     * 装备槽。例如 "head", "chest", "offhand"
     * @returns
     * 返回装备到给定装备槽的物品。如果为空，则返回 undefined。
     * @throws 此函数可能抛出错误。
     */
    getEquipment(equipmentSlot: EquipmentSlot): ItemStack | undefined;
    /**
     * @remarks
     * 获取与给定装备槽对应的容器槽。
     *
     * @param equipmentSlot
     * 装备槽。例如 "head", "chest", "offhand"。
     * @returns
     * 返回与给定装备槽对应的容器槽。
     * @throws 此函数可能抛出错误。
     */
    getEquipmentSlot(equipmentSlot: EquipmentSlot): ContainerSlot;
    /**
     * @remarks
     * 替换给定装备槽中的物品。
     *
     * @worldMutation
     *
     * @param equipmentSlot
     * 装备槽。例如 "head", "chest", "offhand"。
     * @param itemStack
     * 要装备的物品。如果为 undefined，则清空该槽。
     * @throws 此函数可能抛出错误。
     */
    setEquipment(equipmentSlot: EquipmentSlot, itemStack?: ItemStack): boolean;
}