/* IMPORT */ import { ItemStack, Player } from '../index';

/**
 * 包含与可充能物品相关的信息，当玩家使用完该物品并释放构建动作时触发。
 */
export class ItemReleaseUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * 返回触发此物品事件的物品堆叠。
     *
     */
    readonly itemStack?: ItemStack;
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