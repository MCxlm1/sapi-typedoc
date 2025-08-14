/* IMPORT */ import { BlockEvent, BlockPermutation, ItemStack, Player } from '../index';

/**
 * 包含有关玩家破坏方块后事件的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerBreakBlockAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 返回此方块被破坏前的排列信息。
     *
     */
    readonly brokenBlockPermutation: BlockPermutation;
    /**
     * @remarks
     * 方块被破坏后用于破坏方块的物品堆叠，如果为空手则为 undefined。
     *
     */
    readonly itemStackAfterBreak?: ItemStack;
    /**
     * @remarks
     * 方块被破坏前用于破坏方块的物品堆叠，如果为空手则为 undefined。
     *
     */
    readonly itemStackBeforeBreak?: ItemStack;
    /**
     * @remarks
     * 为此事件破坏方块的玩家。
     *
     */
    readonly player: Player;
}