/* IMPORT */ import { Dimension, Vector2, Vector3 } from '../index';

/**
 * 包含传送实体的附加选项。
 * @seeExample teleport.ts
 * @seeExample teleportMovement.ts
 */
export interface TeleportOptions {
    /**
     * @remarks
     * 传送后是否检查方块是否会阻挡实体。
     */
    checkForBlocks?: boolean;
    /**
     * @remarks
     * 可能将实体移动到的维度。如果未指定，则实体在其所在的维度内传送。
     */
    dimension?: Dimension;
    /**
     * @remarks
     * 实体传送后应面向的位置。
     */
    facingLocation?: Vector3;
    /**
     * @remarks
     * 传送后是否保留实体的速度。
     */
    keepVelocity?: boolean;
    /**
     * @remarks
     * 实体传送后的旋转角度。
     */
    rotation?: Vector2;
}