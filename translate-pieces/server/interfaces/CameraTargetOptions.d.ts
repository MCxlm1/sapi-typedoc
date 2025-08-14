/* IMPORT */ import { Entity, Vector3 } from '../index';

/**
 * 用于使用自由摄像机瞄准实体。
 */
export interface CameraTargetOptions {
    /**
     * @remarks
     * 从目标实体中心设置 <x, y, z> 偏移量。
     */
    offsetFromTargetCenter?: Vector3;
    /**
     * @remarks
     * 您想要瞄准的单个实体。
     */
    targetEntity: Entity;
}