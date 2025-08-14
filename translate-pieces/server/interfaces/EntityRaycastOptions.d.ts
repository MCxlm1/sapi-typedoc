/* IMPORT */ import { EntityFilter } from '../index';

/**
 * 包含实体射线操作的附加选项。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface EntityRaycastOptions extends EntityFilter {
    /**
     * @remarks
     * 如果为 true，则方块不会被视为"阻挡"射线的方块。
     *
     */
    ignoreBlockCollision?: boolean;
    /**
     * @remarks
     * 如果为 true，则液态方块将被视为"阻挡"射线的方块。
     *
     */
    includeLiquidBlocks?: boolean;
    /**
     * @remarks
     * 如果为 true，则可穿过的方块（如藤蔓和花朵）将被视为"阻挡"射线的方块。
     *
     */
    includePassableBlocks?: boolean;
    /**
     * @remarks
     * 射线检查的最大距离，以方块为单位。
     *
     */
    maxDistance?: number;
}