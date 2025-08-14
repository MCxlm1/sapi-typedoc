/* IMPORT */ import { EaseOptions } from '../index';

/**
 * @beta
 * 用于更改当前摄像机的视野。
 *
 * 必需的实验性功能：
 * - 必需的实验性功能开关：实验性创作者摄像机
 */
export interface CameraFovOptions {
    easeOptions?: EaseOptions;
    /**
     * @remarks
     * 设置视野值。
     */
    fov?: number;
}