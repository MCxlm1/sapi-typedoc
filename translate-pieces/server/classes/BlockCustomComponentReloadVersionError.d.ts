/**
 * 在使用 /reload 命令时，尝试使用较新的 API 版本注册先前已注册的方块自定义组件后抛出。
 */
// @ts-ignore 类继承允许用于原生定义的类
export class BlockCustomComponentReloadVersionError extends Error {
    private constructor();
}