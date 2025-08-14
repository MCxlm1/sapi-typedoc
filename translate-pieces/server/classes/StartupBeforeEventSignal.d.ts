/* IMPORT */ import { StartupEvent } from '../index';

/**
 * 管理在服务器启动前触发的回调函数。
 */
export class StartupBeforeEventSignal {
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
    subscribe(callback: (arg0: StartupEvent) => void): (arg0: StartupEvent) => void;
    /**
     * @remarks
     * 移除先前通过 subscribe 方法订阅的回调函数。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 先前传递给 subscribe 方法的函数闭包。
     */
    unsubscribe(callback: (arg0: StartupEvent) => void): void;
}