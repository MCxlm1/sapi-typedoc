/* IMPORT */ import { BlockEvent, Entity } from '../index';

/**
 * 包含与压力板被按下变化相关的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PressurePlatePushAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 压力板被按下前的红石能量。
     *
     */
    readonly previousRedstonePower: number;
    /**
     * @remarks
     * 压力板被按下时的红石能量。
     *
     */
    readonly redstonePower: number;
    /**
     * @remarks
     * 触发压力板被按下的源实体。
     *
     */
    readonly source: Entity;
}