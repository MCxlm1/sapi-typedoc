/* IMPORT */ import { EntityComponent, ItemStack } from '../index';

/**
 * 如果添加到实体上，则表示该实体代表世界中的一个自由浮动的物品。可以通过 itemStack
 * 属性获取实际的物品堆叠内容。
 * @seeExample testThatEntityIsFeatherItem.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityItemComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 世界中由此实体表示的物品堆叠。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly itemStack: ItemStack;
    static readonly componentId = 'minecraft:item';
}