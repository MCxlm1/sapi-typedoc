/* IMPORT */ import { Dimension, Player, Vector3 } from '../index';

/**
 * 包含玩家维度变化事件的相关信息。
 */
export class PlayerDimensionChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 玩家进入的维度。
     *
     */
    readonly fromDimension: Dimension;
    /**
     * @remarks
     * 玩家离开的维度。
     *
     */
    readonly toDimension: Dimension;
    /**
     * @remarks
     * 发生维度变化的玩家。
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * 玩家在目标维度中的位置。
     *
     */
    readonly toPosition: Vector3;
}