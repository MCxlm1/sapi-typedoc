/* IMPORT */ import { ItemStack, Player } from '../index';

/**
 * 包含可充能物品完成使用周期，或玩家释放物品使用动作的相关信息。
 */
export class ItemStopUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * 停止充能的受影响物品堆。当传送到不同维度时可以调用 ItemStopUseAfterEvent，此时该值可能是未定义的。
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
     * 返回充能完成其循环前剩余持续时间的刻数。
     *
     */
    readonly useDuration: number;
}