/* IMPORT */ import { LiquidSettings } from '../index';

/**
 * 为 {@link StructureManager.placeJigsaw} 提供附加选项。
 */
export interface JigsawPlaceOptions {
    /**
     * @remarks
     * 结构中是否应包含实体。默认为 true。
     */
    includeEntities?: boolean;
    /**
     * @remarks
     * 生成结构时是否应保留拼图方块。默认为 false。
     */
    keepJigsaws?: boolean;
    /**
     * @beta
     * @remarks
     * 指定如何处理与现有液体重叠的可水浸方块。默认为 `ApplyWaterlogging`。
     */
    liquidSettings?: LiquidSettings;
}