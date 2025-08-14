/* IMPORT */ import { Vector3 } from '../index';

/**
 * @beta
 * 包含 dimension.findNearestBiome API 搜索的附加选项。
 */
export interface BiomeSearchOptions {
    /**
     * @remarks
     * 要查找的边界体积大小。
     *
     */
    boundingSize?: Vector3;
}