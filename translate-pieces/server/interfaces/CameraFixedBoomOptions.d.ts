/* IMPORT */ import { Vector2, Vector3 } from '../index';

/**
 * 控制第三人称视角预设的支点和偏移量的选项。
 */
export interface CameraFixedBoomOptions {
    /**
     * @remarks
     * 更改支点，使其距离玩家 <x, y, z>。
     */
    entityOffset?: Vector3;
    /**
     * @remarks
     * 使摄像机从中心偏移 <x, y>。
     */
    viewOffset?: Vector2;
}