/* IMPORT */ import { Dimension, Player, Vector3 } from '../index';

/**
 * 包含与玩家维度更改相关的信息。
 */
export class PlayerDimensionChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 玩家正在从中更改的维度。
     *
     */
    readonly fromDimension: Dimension;
    /**
     * @remarks
     * 玩家在更改维度之前的位置。
     *
     */
    readonly fromLocation: Vector3;
    /**
     * @remarks
     * 正在更改维度的玩家句柄。
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * 玩家正在更改到的维度。
     *
     */
    readonly toDimension: Dimension;
    /**
     * @remarks
     * 玩家在更改维度后将生成到的位置。
     *
     */
    readonly toLocation: Vector3;
}