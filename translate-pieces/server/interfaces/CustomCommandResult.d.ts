/* IMPORT */ import { CustomCommandStatus } from '../index';

/**
 * 从自定义命令回调函数返回的接口。
 */
export interface CustomCommandResult {
    /**
     * @remarks
     * 命令执行后显示到聊天栏的消息。
     *
     */
    message?: string;
    /**
     * @remarks
     * 命令执行成功或失败。决定状态消息的显示方式。
     *
     */
    status: CustomCommandStatus;
}