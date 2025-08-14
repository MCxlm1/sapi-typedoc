/* IMPORT */ import { BlockVolume, CompoundBlockVolumeAction, CompoundBlockVolumePositionRelativity } from '../index';

/**
 * @beta
 * 此接口定义了 {@link CompoundBlockVolume} 中的一项条目，表示正空间或负空间的体积。
 */
export interface CompoundBlockVolumeItem {
    /**
     * @remarks
     * "action" 定义了块体积在复合块体积堆栈中的表示方式。
     * "Add" 创建一个被正选择的块体积
     * "Subtract" 创建一个在整体复合块体积中表示孔洞或负空间的块体积。
     */
    action?: CompoundBlockVolumeAction;
    /**
     * @remarks
     * 相对性枚举确定指定的 BlockVolume 是相对于父复合块体积原点定位，还是在绝对世界空间中定位。
     */
    locationRelativity?: CompoundBlockVolumePositionRelativity;
    /**
     * @remarks
     * 空间体积
     */
    volume: BlockVolume;
}