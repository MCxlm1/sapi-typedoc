/* IMPORT */ import { BlockEvent, BlockPermutation, Direction, Player, Vector3 } from '../index';

/**
 * @beta
 * 包含玩家放置方块前事件的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerPlaceBlockBeforeEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为 true，则取消方块放置事件。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 新方块被放置在其上的方块面。
     *
     */
    readonly face: Direction;
    /**
     * @remarks
     * 相对于方块的底部西北角，新方块被放置到的位置。
     *
     */
    readonly faceLocation: Vector3;
    /**
     * @remarks
     * 如果事件未被取消，将被放置的方块排列。
     *
     */
    readonly permutationToPlace: BlockPermutation;
    /**
     * @remarks
     * 为此事件放置方块的玩家。
     *
     */
    readonly player: Player;
}