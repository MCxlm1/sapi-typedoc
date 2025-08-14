/* IMPORT */ import { BlockBoundingBoxUtils, Vector3 } from '../index';

/**
 * BlockBoundingBox 是一个接口，用于表示一个 AABB 对齐的矩形。
 * BlockBoundingBox 假设它是在有效状态下创建的（min <= max），但不能保证这一点（除非使用相关的 {@link BlockBoundingBoxUtils} 工具函数创建）。
 * 最小/最大坐标表示矩形的对角顶点。
 * BlockBoundingBox 不是方块的表示形式 - 它不与任何类型关联，只是一个数学构造 - 所以一个
 * ( 0,0,0 ) -> ( 0,0,0 ) 的矩形尺寸为 ( 0,0,0 )（与非常相似的 {@link BlockVolume} 对象不同）
 */
export interface BlockBoundingBox {
    /**
     * @remarks
     * 表示矩形最大顶点的 {@link Vector3}
     */
    max: Vector3;
    /**
     * @remarks
     * 表示矩形最小顶点的 {@link Vector3}
     */
    min: Vector3;
}