/* IMPORT */ import { Block, Direction, ItemStack, Player, Vector3 } from '../index';

/**
 * 包含玩家与方块交互前事件的信息。
 */
export class PlayerInteractWithBlockBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 将与之交互的方块。
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * 正在交互的方块面。
     *
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * 如果设置为 true，则取消交互。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 相对于方块的底部西北角，物品被放置的位置。
     *
     */
    readonly faceLocation: Vector3;
    /**
     * @remarks
     * 如果事件是在玩家初次按下交互按钮时触发则为 true，如果是按住交互按钮触发的事件则为 false。
     *
     */
    readonly isFirstEvent: boolean;
    /**
     * @remarks
     * 交互中使用的物品堆叠，如果空手则为 undefined。
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * 此事件的源玩家。
     *
     */
    readonly player: Player;
}