/* IMPORT */ import { StructureAnimationMode, StructureMirrorAxis, StructureRotation } from '../index';

/**
 * 为 {@link StructureManager.place} 提供附加选项
 */
export interface StructurePlaceOptions {
    /**
     * @remarks
     * 放置时结构应如何动画化。
     */
    animationMode?: StructureAnimationMode;
    /**
     * @remarks
     * 动画应持续多少秒。
     */
    animationSeconds?: number;
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
     * 应放置的方块百分比。值为 1 将放置 100% 的方块，而值为 0 将不放置任何方块。
     * 方块的选择基于 {@link StructurePlaceOptions.integritySeed} 随机确定。
     */
    integrity?: number;
    /**
     * @remarks
     * 确定随机选择哪些方块放置的种子。默认为随机种子。
     */
    integritySeed?: string;
    /**
     * @remarks
     * 放置时结构应在哪些轴上镜像。默认为 StructureMirrorAxis.None。
     */
    mirror?: StructureMirrorAxis;
    /**
     * @remarks
     * 放置时结构应如何旋转。默认为 AxisAlignedRotation.None。
     */
    rotation?: StructureRotation;
    /**
     * @remarks
     * 放置时结构是否应含水。默认为 false。如果为 true，方块在水中放置时将含水。
     */
    waterlogged?: boolean;
}