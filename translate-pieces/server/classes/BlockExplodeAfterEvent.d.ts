/* IMPORT */ import { Block, Vector3 } from '../index';

/**
 * 包含方块爆炸事件的相关信息。
 */
export class BlockExplodeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 爆炸的方块。
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * 爆炸的位置。
     *
     */
    readonly explosionLocation: Vector3;
    /**
     * @remarks
     * 爆炸的半径。
     *
     */
    readonly radius: number;
}