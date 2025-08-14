/* IMPORT */ import { Block, Direction, Vector3 } from '../index';

/**
 * 包含方块射线检测命中结果的信息。
 */
export interface BlockRaycastHit {
    /**
     * @remarks
     * 被命中的方块。
     */
    block: Block;
    /**
     * @remarks
     * 被命中的方块面。
     */
    face: Direction;
    /**
     * @remarks
     * 命中位置相对于方块底部西北角的坐标。
     */
    faceLocation: Vector3;
}