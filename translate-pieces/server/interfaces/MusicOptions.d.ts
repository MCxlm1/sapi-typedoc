/* IMPORT */ import { World } from '../index';

/**
 * {@link World.playMusic}/{@link World.queueMusic} 方法的附加配置选项。
 */
export interface MusicOptions {
    /**
     * @remarks
     * 指定播放结束时音乐的淡出重叠。
     */
    fade?: number;
    /**
     * @remarks
     * 如果设置为 true，此音乐曲目将重复播放。
     */
    loop?: boolean;
    /**
     * @remarks
     * 音乐的相对音量级别。
     */
    volume?: number;
}