/* IMPORT */ import { BlockEvent, ItemStack, Player } from '../index';

/**
 * 包含玩家破坏方块前事件的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerBreakBlockBeforeEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为 true，则取消方块破坏事件。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 用于破坏方块的物品堆叠，如果空手则为 undefined。
     *
     */
    itemStack?: ItemStack;
    /**
     * @remarks
     * 为此事件破坏方块的玩家。
     *
     */
    readonly player: Player;
}