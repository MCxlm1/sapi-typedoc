/* IMPORT */ import { BlockEvent, Entity } from '../index';

/**
 * 包含绊线被触发变化的相关信息。
 * @seeExample tripWireTripEvent.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class TripWireTripAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 方块是否有红石能量。
     *
     */
    readonly isPowered: boolean;
    /**
     * @remarks
     * 触发绊线的源实体。
     *
     */
    readonly sources: Entity[];
}