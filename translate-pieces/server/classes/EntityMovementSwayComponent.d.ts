/* IMPORT */ import { EntityBaseMovementComponent } from '../index';

/**
 * 添加后，此移动控制会使生物左右摇摆，给人以游泳的印象。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementSwayComponent extends EntityBaseMovementComponent {
    private constructor();
    /**
     * @remarks
     * 摇摆动作的幅度。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly swayAmplitude: number;
    /**
     * @remarks
     * 摇摆频率的数量。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly swayFrequency: number;
    static readonly componentId = 'minecraft:movement.sway';
}