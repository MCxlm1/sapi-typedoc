/* IMPORT */ import { BlockFilter } from '../index';

/**
 * 包含方块填充操作的附加选项。
 */
export interface BlockFillOptions {
    /**
     * @remarks
     * 指定时，填充操作将包括/排除添加到方块过滤器中的方块。
     *
     */
    blockFilter?: BlockFilter;
    /**
     * @remarks
     * 如果为 true，则当填充体积的部分超出已加载区块边界时，fillBlocks 不会出错。
     * 而是只填充已加载区块边界内的方块，忽略边界外的方块。
     *
     */
    ignoreChunkBoundErrors?: boolean;
}