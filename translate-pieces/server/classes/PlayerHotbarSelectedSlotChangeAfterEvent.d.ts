/* IMPORT */ import { ItemStack, Player } from '../index';

/**
 * 包含玩家更改选定快捷栏槽位后事件的相关信息。
 */
export class PlayerHotbarSelectedSlotChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 新选定槽位的物品堆。
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * 新选定的快捷栏槽位索引。
     *
     */
    readonly newSlotSelected: number;
    /**
     * @remarks
     * 此事件的源玩家。
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * 之前选定的快捷栏槽位索引。
     *
     */
    readonly previousSlotSelected: number;
}