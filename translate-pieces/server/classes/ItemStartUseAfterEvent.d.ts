/* IMPORT */ import { ItemStack, Player } from '../index';

/**
 * 包含与可充能物品开始充能相关的信息。
 */
export class ItemStartUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * 开始充能的受影响物品堆叠。
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
     * 返回在充能完成其周期前剩余持续时间的刻数。
     *
     */
    readonly useDuration: number;
}