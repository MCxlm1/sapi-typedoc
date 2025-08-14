/* IMPORT */ import { StructureSaveMode } from '../index';

/**
 * 为 {@link StructureManager.createFromWorld} 提供附加选项
 */
export interface StructureCreateOptions {
    /**
     * @remarks
     * 结构中是否应包含方块。默认为 true。
     */
    includeBlocks?: boolean;
    /**
     * @remarks
     * 结构中是否应包含实体。默认为 true。
     */
    includeEntities?: boolean;
    /**
     * @remarks
     * 结构应如何保存。默认为 StructureSaveMode.World。
     */
    saveMode?: StructureSaveMode;
}