/* IMPORT */ import { CameraFadeTimeOptions, RGB } from '../index';

/**
 * 用于启动全屏颜色淡出效果。
 */
export interface CameraFadeOptions {
    /**
     * @remarks
     * 要使用的淡出颜色。
     */
    fadeColor?: RGB;
    /**
     * @remarks
     * 淡入、保持和淡出的秒数时间。
     */
    fadeTime?: CameraFadeTimeOptions;
}