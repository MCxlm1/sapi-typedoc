/* IMPORT */ import { NamespaceNameErrorReason } from '../index';

/**
 * 当名称需要命名空间但在验证命名空间时发生错误时抛出
 */
// @ts-ignore 类继承允许用于原生定义的类
export class NamespaceNameError extends Error {
    private constructor();
    /**
     * @remarks
     * 错误原因。
     * @earlyExecution
     *
     */
    reason: NamespaceNameErrorReason;
}