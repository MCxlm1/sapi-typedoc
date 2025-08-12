/* IMPORT */ import { ItemStack, Player } from '../index';

/**
 * 包含可充能物品的相关信息，当玩家使用完该物品并释放构建动作时触发。
 */
export class ItemReleaseUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * 返回触发此物品事件的物品堆。
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