/* IMPORT */ import { BlockEvent, BlockPistonComponent } from '../index';

/**
 * 包含与活塞伸展或缩回变化相关的信息。
 * @seeExample pistonAfterEvent.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PistonActivateAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 如果活塞正在伸展过程中则为 true。
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