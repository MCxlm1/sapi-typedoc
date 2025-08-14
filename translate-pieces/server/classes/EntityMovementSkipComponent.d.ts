/* IMPORT */ import { EntityBaseMovementComponent } from '../index';

/**
 * 添加后，此移动控制会使生物在移动时跳跃。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementSkipComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.skip';
}