/* IMPORT */ import { EntityFilter, Vector3 } from '../index';

/**
 * 包含用于在区域内选择实体的选项。
 * @seeExample blockConditional.ts
 * @seeExample findEntitiesHavingPropertyEqualsTo.ts
 * @seeExample playSoundChained.ts
 * @seeExample setScoreboardChained.ts
 * @seeExample summonMobChained.ts
 * @seeExample bounceSkeletons.ts
 * @seeExample tagsQuery.ts
 * @seeExample testThatEntityIsFeatherItem.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface EntityQueryOptions extends EntityFilter {
    /**
     * @remarks
     * 限制返回的实体数量，选择最近的 N 个实体，N 由该属性指定。
     * location 值必须在查询选项对象上指定。
     *
     */
    closest?: number;
    /**
     * @remarks
     * 限制返回的实体数量，选择最远的 N 个实体，N 由该属性指定。
     * location 值必须在查询选项对象上指定。
     *
     */
    farthest?: number;
    /**
     * @remarks
     * 向查询中添加一个种子位置，与 closest、farthest、limit、volume 和 distance 属性结合使用。
     *
     */
    location?: Vector3;
    /**
     * @remarks
     * 如果指定，则包括距离 location 属性中指定位置小于此距离的实体。
     *
     */
    maxDistance?: number;
    /**
     * @remarks
     * 如果指定，则包括距离 location 属性中指定位置至少为此距离的实体。
     *
     */
    minDistance?: number;
    /**
     * @remarks
     * 与 location 结合，指定要包括的实体的立方体体积。
     *
     */
    volume?: Vector3;
}