/**
 * 在使用 /reload 命令时，尝试注册先前未注册的方块自定义组件后抛出。
 */
// @ts-ignore 类继承允许用于原生定义的类
export class BlockCustomComponentReloadNewComponentError extends Error {
    private constructor();
}