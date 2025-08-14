/* IMPORT */ import { AimAssistTargetMode, Vector2 } from '../index';

/**
 * @beta
 * 与玩家瞄准辅助目标相关的设置。
 */
export interface PlayerAimAssistSettings {
    /**
     * @remarks
     * 用于瞄准辅助目标的视距限制。
     */
    distance?: number;
    /**
     * @remarks
     * 要激活的瞄准辅助预设的 ID。必须有命名空间。
     */
    presetId: string;
    /**
     * @remarks
     * 用于瞄准辅助目标的模式。
     */
    targetMode?: AimAssistTargetMode;
    /**
     * @remarks
     * 用于瞄准辅助目标的视角限制。
     */
    viewAngle?: Vector2;
}