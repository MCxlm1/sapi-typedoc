/**
 * 在使用 /reload 命令时，尝试注册处理新事件的先前已注册方块自定义组件后抛出。
 */
// @ts-ignore 类继承允许用于原生定义的类
export class BlockCustomComponentReloadNewEventError extends Error {
    private constructor();
}