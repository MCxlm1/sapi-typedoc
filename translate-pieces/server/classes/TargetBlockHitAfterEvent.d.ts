/* IMPORT */ import { BlockEvent, Entity, Vector3 } from '../index';

/**
 * 包含目标方块被击中变化的相关信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class TargetBlockHitAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 源实体击中方块的位置。
     *
     */
    readonly hitVector: Vector3;
    /**
     * @remarks
     * 方块被击中前的红石能量。
     *
     */
    readonly previousRedstonePower: number;
    /**
     * @remarks
     * 方块被击中时的红石能量。
     *
     */
    readonly redstonePower: number;
    /**
     * @remarks
     * 击中目标方块的可选源实体。
     *
     */
    readonly source: Entity;
}