/* IMPORT */ import { BlockFilter } from '../index';

/**
 * 包含用于配置方块射线检查查询的附加选项。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface BlockRaycastOptions extends BlockFilter {
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