/* IMPORT */ import { CustomCommandParamType } from '../index';

/**
 * 自定义命令期望的每个参数的定义。
 */
export interface CustomCommandParameter {
    /**
     * @beta
     * @remarks
     * 当 {@link CustomCommandParamType} 为 'Enum' 时可以用来引用枚举名称。允许参数名称与枚举名称不同。
     *
     */
    enumName?: string;
    /**
     * @remarks
     * 命令行中显示的参数名称。
     *
     */
    name: string;
    /**
     * @remarks
     * 参数的数据类型。
     *
     */
    type: CustomCommandParamType;
}