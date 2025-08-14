/* IMPORT */ import { Player } from '../index';

/**
 * 包含动画播放方式的附加选项。
 */
export interface PlayAnimationOptions {
    /**
     * @remarks
     * 动画停止后淡出的时间量。
     */
    blendOutTime?: number;
    /**
     * @remarks
     * 指定在实体上定义的控制器。
     */
    controller?: string;
    /**
     * @remarks
     * 指定要过渡到的状态。
     */
    nextState?: string;
    /**
     * @remarks
     * 动画将对哪些玩家可见的列表。
     */
    players?: Player[];
    /**
     * @remarks
     * 指定此动画应完成时的 Molang 表达式。
     */
    stopExpression?: string;
}