/* IMPORT */ import { Container, InvalidContainerError, ItemComponent } from '../index';

/**
 * @beta
 * 此组件添加到具有 `Storage Item` 组件的物品上。可以访问和修改此物品的库存容器。
 */
// @ts-ignore 类继承允许用于原生定义的类
export class ItemInventoryComponent extends ItemComponent {
    private constructor();
    /**
     * @throws 使用此属性时可能抛出异常。
     *
     * {@link InvalidContainerError}
     */
    readonly container: Container;
    static readonly componentId = 'minecraft:inventory';
}