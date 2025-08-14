/**
 * 当尝试使用已注册的名称注册方块自定义组件时抛出。
 */
// @ts-ignore 类继承允许用于原生定义的类
export class BlockCustomComponentAlreadyRegisteredError extends Error {
    private constructor();
}