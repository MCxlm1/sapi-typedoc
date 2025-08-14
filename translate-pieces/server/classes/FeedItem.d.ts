/* IMPORT */ import { FeedItemEffect } from '../index';

/**
 * 作为可治疗组件的一部分，代表可以喂给实体以产生健康效果的特定物品。
 */
export class FeedItem {
    private constructor();
    /**
     * @remarks
     * 当喂食此物品时实体获得的健康值。这个数值是从 0 开始的整数。示例值可以高达 40。
     *
     */
    readonly healAmount: number;
    /**
     * @remarks
     * 可以喂食的物品类型标识符。如果未指定命名空间，则假定为 'minecraft:'。示例值包括 'wheat' 或 'golden_apple'。
     *
     */
    readonly item: string;
    /**
     * @remarks
     * 作为可治疗组件的一部分，表示喂食物品时可能发生的副作用的可选集合。
     *
     */
    getEffects(): FeedItemEffect[];
}