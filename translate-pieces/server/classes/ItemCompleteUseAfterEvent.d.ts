/* IMPORT */ import { ItemStack, Player } from '../index';

/**
 * 包含可充能物品完成充能相关信息。
 */
export class ItemCompleteUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * 返回已完成充能的物品堆。
     *
     */
    readonly itemStack: ItemStack;
    /**
     * @remarks
     * 返回触发此物品事件的源实体。
     *
     */
    readonly source: Player;
    /**
     * @remarks
     * 返回充能完成其循环前剩余持续时间的刻数。
     *
     */
    readonly useDuration: number;
}