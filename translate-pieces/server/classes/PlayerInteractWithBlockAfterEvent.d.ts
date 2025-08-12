/* IMPORT */ import { Block, Direction, ItemStack, Player, Vector3 } from '../index';

/**
 * 包含玩家成功与方块交互后事件的相关信息。
 */
export class PlayerInteractWithBlockAfterEvent {
    private constructor();
    /**
     * @remarks
     * 交互成功前的 ItemStack，如果手空则为 undefined。
     *
     */
    readonly beforeItemStack?: ItemStack;
    /**
     * @remarks
     * 将要交互的方块。
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
     * 相对于方块底部西北角的放置位置。
     *
     */
    readonly faceLocation: Vector3;
    /**
     * @remarks
     * 如果事件由玩家初始交互按钮按下触发则为 true，如果由按住交互按钮触发的事件则为 false。
     *
     */
    readonly isFirstEvent: boolean;
    /**
     * @remarks
     * 交互成功后的 ItemStack，如果手空则为 undefined。
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