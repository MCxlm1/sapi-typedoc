/* IMPORT */ import { CustomComponentInvalidRegistryError, ItemCustomComponent, ItemCustomComponentAlreadyRegisteredError, ItemCustomComponentReloadNewComponentError, ItemCustomComponentReloadNewEventError, ItemCustomComponentReloadVersionError, NamespaceNameError, minecraftcommon } from '../index';

/**
 * 提供注册物品自定义组件的功能。
 */
export class ItemComponentRegistry {
    private constructor();
    /**
     * @remarks
     * 注册一个可在物品 JSON 配置中使用的物品自定义组件。
     *
     * @earlyExecution
     *
     * @param name
     * 表示此自定义组件的 ID。必须具有命名空间。此 ID 可以在物品的 JSON 配置中的 'minecraft:custom_components' 物品组件下指定。
     * @param itemCustomComponent
     * 当使用此自定义组件 ID 的物品上发生事件时将调用的事件函数集合。
     * @throws 此函数可能抛出错误。
     *
     * {@link CustomComponentInvalidRegistryError}
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link ItemCustomComponentAlreadyRegisteredError}
     *
     * {@link ItemCustomComponentReloadNewComponentError}
     *
     * {@link ItemCustomComponentReloadNewEventError}
     *
     * {@link ItemCustomComponentReloadVersionError}
     *
     * {@link NamespaceNameError}
     */
    registerCustomComponent(name: string, itemCustomComponent: ItemCustomComponent): void;
}