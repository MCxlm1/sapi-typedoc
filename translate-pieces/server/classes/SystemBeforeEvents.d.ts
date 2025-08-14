/* IMPORT */ import { ShutdownBeforeEventSignal, StartupBeforeEventSignal, WatchdogTerminateBeforeEventSignal } from '../index';

/**
 * 一组在实际操作发生之前触发的事件。在大多数情况下，您可以取消或修改即将发生的事件。
 * 注意，在 before 事件中，任何修改游戏状态的 API 都不会起作用，并会抛出错误。
 */
export class SystemBeforeEvents {
    private constructor();
    /**
     * @remarks
     * 关闭事件信号。
     * @earlyExecution
     *
     */
    readonly shutdown: ShutdownBeforeEventSignal;
    /**
     * @remarks
     * 启动事件信号。
     * @earlyExecution
     *
     */
    readonly startup: StartupBeforeEventSignal;
    /**
     * @beta
     * @remarks
     * 当脚本监视器关闭服务器时触发。这可能是由于使用了过多内存，或导致显著的减速或挂起。
     * 要防止关闭，将事件的 cancel 属性设置为 true。
     *
     * @earlyExecution
     *
     */
    readonly watchdogTerminate: WatchdogTerminateBeforeEventSignal;
}