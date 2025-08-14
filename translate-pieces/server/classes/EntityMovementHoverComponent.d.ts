/* IMPORT */ import { EntityBaseMovementComponent } from '../index';

/**
 * 添加后，此移动控制会使生物悬停。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementHoverComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.hover';
}