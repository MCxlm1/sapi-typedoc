/**
 * 作为可成长组件的一部分，代表一组可以喂给实体的物品以及它们导致实体成长的速率。
 */
export class EntityDefinitionFeedItem {
    private constructor();
    /**
     * @remarks
     * 当喂食此物品时实体年龄增加的数量。值通常在 0 到 1 之间。
     *
     */
    readonly growth: number;
    /**
     * @remarks
     * 可以喂食的物品类型标识符。如果未指定命名空间，则假定为 'minecraft:'。示例值包括 'wheat' 或 'golden_apple'。
     *
     */
    readonly item: string;
}