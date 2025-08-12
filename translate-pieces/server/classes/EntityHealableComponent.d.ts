/* IMPORT */ import { EntityComponent, FeedItem } from '../index';

/**
 * 定义与此实体交互以治疗它的行为。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHealableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 确定是否可以使用物品，而不管实体是否处于满血状态。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly forceUse: boolean;
    static readonly componentId = 'minecraft:healable';
    /**
     * @remarks
     * 一组可以专门治疗此实体的物品。
     *
     * @returns
     * 与此组件关联的实体。
     * @throws 此函数可能抛出错误。
     */
    getFeedItems(): FeedItem[];
}