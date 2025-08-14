/* IMPORT */ import { EntityBaseMovementComponent } from '../index';

/**
 * 添加后，此移动控制会使生物飞行。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementFlyComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.fly';
}