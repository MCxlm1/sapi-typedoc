/* IMPORT */ import { ItemStack, Player } from '../index';

/**
 * 包含与可充能物品完成使用周期或玩家释放物品使用动作相关的信息。
 */
export class ItemStopUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * 停止充能的受影响物品堆叠。当传送到不同维度时可能会调用 ItemStopUseAfterEvent，此时可能未定义。
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