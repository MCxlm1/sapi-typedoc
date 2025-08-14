/* IMPORT */ import { CustomCommand, CustomCommandError, CustomCommandOrigin, CustomCommandResult, NamespaceNameError, minecraftcommon } from '../index';

/**
 * 提供注册自定义命令的功能。
 */
export class CustomCommandRegistry {
    private constructor();
    /**
     * @remarks
     * 注册一个自定义命令，执行时会触发脚本回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param customCommand
     * 自定义命令的定义，包括名称、权限和参数。
     * @param callback
     * 命令执行时触发的回调。
     * @throws 此函数可能抛出错误。
     *
     * {@link CustomCommandError}
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link NamespaceNameError}
     */
    registerCommand(
        customCommand: CustomCommand,
        callback: (origin: CustomCommandOrigin, ...args: any[]) => CustomCommandResult | undefined,
    ): void;
    /**
     * @remarks
     * 注册一个自定义命令枚举。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param name
     * 枚举的名称。
     * @param values
     * 枚举的值数组。
     * @throws 此函数可能抛出错误。
     *
     * {@link CustomCommandError}
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link NamespaceNameError}
     */
    registerEnum(name: string, values: string[]): void;
}