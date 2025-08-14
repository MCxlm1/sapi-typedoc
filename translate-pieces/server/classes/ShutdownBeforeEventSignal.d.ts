/* IMPORT */ import { ShutdownEvent } from '../index';

/**
 * 为调用者提供一个可适配的接口，用于订阅在游戏世界关闭前触发的事件。
 * 此事件在玩家离开后、世界关闭前发生。
 */
export class ShutdownBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个新的订阅者回调到此事件。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 当此事件触发时调用的函数回调。
     * @returns 用于取消订阅的回调函数引用。
     */
    subscribe(callback: (arg0: ShutdownEvent) => void): (arg0: ShutdownEvent) => void;
    /**
     * @remarks
     * Removes a subscriber callback previously subscribed to via
     * the subscribe method.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * Function closure that was previously passed to the subscribe
     * method.
     */
    unsubscribe(callback: (arg0: ShutdownEvent) => void): void;
}