/* IMPORT */ import { BlockComponentRegistry, CustomCommandRegistry, ItemComponentRegistry } from '../index';

/**
 * 服务端启动事件。当服务端启动时触发此事件。
 */
export class StartupEvent {
    private constructor();
    /**
     * @remarks
     * 方块组件注册表。
     * @earlyExecution
     *
     */
    readonly blockComponentRegistry: BlockComponentRegistry;
    /**
     * @remarks
     * 自定义命令注册表。
     * @earlyExecution
     *
     */
    readonly customCommandRegistry: CustomCommandRegistry;
    /**
     * @remarks
     * 物品组件注册表。
     * @earlyExecution
     *
     */
    readonly itemComponentRegistry: ItemComponentRegistry;
}