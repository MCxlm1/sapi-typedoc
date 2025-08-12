/* IMPORT */ import { BlockEvent, BlockPistonComponent } from '../index';

/**
 * 包含活塞伸出或缩回变化的相关信息。
 * @seeExample pistonAfterEvent.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PistonActivateAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 如果活塞正在伸出则为 true。
     *
     */
    readonly isExpanding: boolean;
    /**
     * @remarks
     * 包含活塞的附加属性和详细信息。
     *
     */
    readonly piston: BlockPistonComponent;
}