/* IMPORT */ import { BlockCustomComponent, BlockCustomComponentAlreadyRegisteredError, BlockCustomComponentReloadNewComponentError, BlockCustomComponentReloadNewEventError, BlockCustomComponentReloadVersionError, CustomComponentInvalidRegistryError, NamespaceNameError, minecraftcommon } from '../index';

/**
 * 方块组件注册表。用于注册方块自定义组件。
 */
export class BlockComponentRegistry {
    private constructor();
    /**
     * @remarks
     * 注册一个可在方块 JSON 配置中使用的方块自定义组件。
     * @earlyExecution
     *
     * @param name
     * 表示此自定义组件的 ID。必须具有命名空间。此 ID 可以在方块的 JSON 配置中的 'minecraft:custom_components' 方块组件下指定。
     * @param customComponent
     * 当使用此自定义组件 ID 的方块上发生事件时将调用的事件函数集合。
     * @throws 此函数可能抛出错误。
     *
     * {@link BlockCustomComponentAlreadyRegisteredError}
     *
     * {@link BlockCustomComponentReloadNewComponentError}
     *
     * {@link BlockCustomComponentReloadNewEventError}
     *
     * {@link BlockCustomComponentReloadVersionError}
     *
     * {@link CustomComponentInvalidRegistryError}
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link NamespaceNameError}
     */
    registerCustomComponent(name: string, customComponent: BlockCustomComponent): void;
}