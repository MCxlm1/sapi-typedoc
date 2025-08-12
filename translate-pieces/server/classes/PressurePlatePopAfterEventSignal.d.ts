/* IMPORT */ import { PressurePlatePopAfterEvent } from '../index';

/**
 * 管理与压力板弹起相关的回调。
 */
export class PressurePlatePopAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当压力板弹起（即，压力板上没有实体）时将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PressurePlatePopAfterEvent) => void): (arg0: PressurePlatePopAfterEvent) => void;
    /**
     * @remarks
     * 从压力板弹起的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PressurePlatePopAfterEvent) => void): void;
}