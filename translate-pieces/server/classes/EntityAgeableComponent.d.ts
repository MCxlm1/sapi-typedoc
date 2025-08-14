/* IMPORT */ import { EntityComponent, EntityDefinitionFeedItem, Trigger } from '../index';

/**
 * 为实体添加成长计时器。可以通过给实体提供它喜欢的物品（由 feedItems 定义）来加速成长。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAgeableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 实体成长所需的时长，-1 表示永远是幼体。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly duration: number;
    /**
     * @remarks
     * 实体成长时触发的事件。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly growUp: Trigger;
    /**
     * @remarks
     * 成功交互后，使用的饲料物品将转化为该物品。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly transformToItem: string;
    static readonly componentId = 'minecraft:ageable';
    /**
     * @remarks
     * 实体成长时掉落的物品列表。
     *
     * @throws 此函数可能抛出错误。
     */
    getDropItems(): string[];
    /**
     * @remarks
     * 可以喂给实体的物品列表。包括用于物品名称的 'item' 和定义成长时长增长的 'growth'。
     *
     * @throws 此函数可能抛出错误。
     */
    getFeedItems(): EntityDefinitionFeedItem[];
}