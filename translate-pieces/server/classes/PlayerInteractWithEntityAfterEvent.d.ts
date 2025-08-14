/* IMPORT */ import { Entity, ItemStack, Player } from '../index';

/**
 * 包含有关玩家成功与实体交互后事件的信息。
 */
export class PlayerInteractWithEntityAfterEvent {
    private constructor();
    /**
     * @remarks
     * 交互成功前的 ItemStack，如果手为空则为 undefined。
     *
     */
    readonly beforeItemStack?: ItemStack;
    /**
     * @remarks
     * 交互成功后的 ItemStack，如果手为空则为 undefined。
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