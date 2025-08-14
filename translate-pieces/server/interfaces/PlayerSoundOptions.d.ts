/* IMPORT */ import { Vector3 } from '../index';

/**
 * 玩家播放声音的附加选项。
 */
export interface PlayerSoundOptions {
    /**
     * @remarks
     * 声音的位置；如果未指定，则在玩家附近播放声音。
     */
    location?: Vector3;
    /**
     * @remarks
     * 声音的可选音调。
     */
    pitch?: number;
    /**
     * @remarks
     * 声音的可选音量。
     */
    volume?: number;
}