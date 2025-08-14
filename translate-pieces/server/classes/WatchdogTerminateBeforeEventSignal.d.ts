/* IMPORT */ import { WatchdogTerminateBeforeEvent } from '../index';

/**
 * @beta
 * 管理与性能监视系统违规导致脚本运行时终止时调用的回调函数。
 */
export class WatchdogTerminateBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调函数，当脚本运行时因违反性能监视系统而被终止时调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 当此事件触发时调用的函数回调。
     * @returns 用于取消订阅的回调函数引用。
     */
    subscribe(callback: (arg0: WatchdogTerminateBeforeEvent) => void): (arg0: WatchdogTerminateBeforeEvent) => void;
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
    unsubscribe(callback: (arg0: WatchdogTerminateBeforeEvent) => void): void;
}