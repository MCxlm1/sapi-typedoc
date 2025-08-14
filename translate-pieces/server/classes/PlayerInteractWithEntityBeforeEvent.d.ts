/* IMPORT */ import { Entity, ItemStack, Player } from '../index';

/**
 * 包含玩家与实体交互前事件的信息。
 */
export class PlayerInteractWithEntityBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为 true，则取消交互。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 交互中使用的物品堆叠，如果空手则为 undefined。
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * 此事件的源玩家。
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * 将与之交互的实体。
     *
     */
    readonly target: Entity;
}