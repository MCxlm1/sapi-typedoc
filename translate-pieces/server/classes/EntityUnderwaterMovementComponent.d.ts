/* IMPORT */ import { EntityAttributeComponent } from '../index';

/**
 * 定义此实体在水下的总体移动速度。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityUnderwaterMovementComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:underwater_movement';
}