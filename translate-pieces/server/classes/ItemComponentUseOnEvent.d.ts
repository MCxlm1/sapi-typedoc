/* IMPORT */ import { BlockPermutation, Entity, ItemUseOnEvent } from '../index';

/**
 * 包含通过组件在方块上使用物品的相关信息。
 */
// @ts-ignore 类继承允许用于原生定义的类
export class ItemComponentUseOnEvent extends ItemUseOnEvent {
    private constructor();
    /**
     * @remarks
     * 在方块上使用物品的实体。
     *
     */
    readonly source: Entity;
    /**
     * @remarks
     * 物品被使用的方块状态。
     *
     */
    readonly usedOnBlockPermutation: BlockPermutation;
}