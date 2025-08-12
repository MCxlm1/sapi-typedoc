/* IMPORT */ import { Entity, ItemStack, Player } from '../index';

/**
 * 包含玩家与实体交互事件的相关信息。
 */
export class PlayerInteractWithEntityAfterEvent {
    private constructor();
    /**
     * @remarks
     * 与实体交互的玩家。
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * 用于与实体交互的物品堆。可能是 undefined。
     *
     */
    readonly itemStack: ItemStack | undefined;
    /**
     * @remarks
     * 与之交互的实体。
     *
     */
    readonly target: Entity;
}