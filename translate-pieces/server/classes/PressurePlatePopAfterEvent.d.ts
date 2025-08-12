/* IMPORT */ import { BlockEvent } from '../index';

/**
 * 包含压力板弹起变化的相关信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PressurePlatePopAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 压力板弹起前的红石能量。
     *
     */
    readonly previousRedstonePower: number;
    /**
     * @remarks
     * 压力板弹起时的红石能量。
     *
     */
    readonly redstonePower: number;
}