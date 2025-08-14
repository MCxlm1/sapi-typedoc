/* IMPORT */ import { NamespaceNameError, SystemAfterEvents, SystemBeforeEvents, SystemInfo, minecraftcommon } from '../index';

/**
 * 提供系统级事件和函数的类。
 */
export class System {
    private constructor();
    /**
     * @remarks
     * 返回系统级操作的后置事件集合。
     *
     * @earlyExecution
     *
     */
    readonly afterEvents: SystemAfterEvents;
    /**
     * @remarks
     * 返回系统级操作的前置事件集合。
     *
     * @earlyExecution
     *
     */
    readonly beforeEvents: SystemBeforeEvents;
    /**
     * @remarks
     * 表示服务器的当前世界刻。
     *
     * @earlyExecution
     *
     */
    readonly currentTick: number;
    /**
     * @remarks
     * 如果这是当前加载了编辑器的世界，则返回 true，否则返回 false。
     *
     * @earlyExecution
     *
     */
    readonly isEditorWorld: boolean;
    /**
     * @remarks
     * 包含服务器的设备信息。
     *
     * @earlyExecution
     *
     */
    readonly serverSystemInfo: SystemInfo;
    /**
     * @remarks
     * 取消通过 {@link System.runJob} 排队的作业执行。
     *
     * @earlyExecution
     *
     * @param jobId
     * 从 {@link System.runJob} 返回的作业 ID。
     */
    clearJob(jobId: number): void;
    /**
     * @remarks
     * 取消先前通过 {@link System.run} 调度的函数执行。
     *
     * @earlyExecution
     *
     */
    clearRun(runId: number): void;
    /**
     * @remarks
     * 在下一个可用的未来时间运行指定的函数。这经常用于实现延迟行为和游戏循环。
     * 在事件处理程序的上下文中运行时，这通常会在事件发生的同一刻末尾运行代码。
     * 在其他代码（system.run 调用）中运行时，这将在下一刻运行函数。
     * 但请注意，根据系统负载情况，无法保证在相同或下一刻运行。
     *
     * @earlyExecution
     *
     * @param callback
     * 在下一个游戏刻运行的函数回调。
     * @returns
     * 一个不透明的标识符，可与 `clearRun` 函数一起使用以取消此运行的执行。
     * @seeExample trapTick.ts
     */
    run(callback: () => void): number;
    /**
     * @remarks
     * 按时间间隔运行代码集。
     *
     * @earlyExecution
     *
     * @param callback
     * 当此时间间隔发生时将运行的功能性代码。
     * @param tickInterval
     * 回调将被调用的每 N 个刻的间隔。
     * @returns
     * 一个不透明的句柄，可以与 clearRun 方法一起使用以停止此函数在时间间隔上的运行。
     * @seeExample every30Seconds.ts
     */
    runInterval(callback: () => void, tickInterval?: number): number;
    /**
     * @remarks
     * 将生成器排队运行直到完成。生成器将在每刻获得一个时间片，并将运行直到它暂停或完成。
     *
     * @earlyExecution
     *
     * @param generator
     * 要运行的生成器实例。
     * @returns
     * 一个不透明的句柄，可以与 {@link System.clearJob} 一起使用以停止此生成器的运行。
     * @seeExample cubeGenerator.ts
     */
    runJob(generator: Generator<void, void, void>): number;
    /**
     * @remarks
     * 在 tickDelay 指定的未来时间运行代码集。
     *
     * @earlyExecution
     *
     * @param callback
     * 当此超时发生时将运行的功能性代码。
     * @param tickDelay
     * 在调用时间间隔之前的 ticks 数量。
     * @returns
     * 一个不透明的句柄，可以与 clearRun 方法一起使用以停止此函数在时间间隔上的运行。
     */
    runTimeout(callback: () => void, tickDelay?: number): number;
    /**
     * @remarks
     * 使用指定的消息 ID 和有效载荷在脚本中触发事件。
     *
     * @param id
     * 要发送的消息的标识符。这是自定义的，取决于您可能在世界中安装的行为包和内容的类型。
     * @param message
     * 要发送的消息的数据组件。这是自定义的，取决于您可能在世界中安装的行为包和内容的类型。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link NamespaceNameError}
     */
    sendScriptEvent(id: string, message: string): void;
    /**
     * @remarks
     * waitTicks 返回一个在请求的刻数后解析的 promise。
     *
     * @earlyExecution
     *
     * @param ticks
     * 要等待的刻数。最小值为 1。
     * @returns
     * 当指定数量的刻发生时解析的 promise。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     */
    waitTicks(ticks: number): Promise<void>;
}