/* IMPORT */ import { PressurePlatePushAfterEvent } from '../index';

/**
 * 管理与压力板被按下相关的回调。
 */
export class PressurePlatePushAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当压力板被按下（至少有一个实体移动到压力板上）时将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PressurePlatePushAfterEvent) => void): (arg0: PressurePlatePushAfterEvent) => void;
    /**
     * @remarks
     * 从压力板被按下的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PressurePlatePushAfterEvent) => void): void;
}