/* IMPORT */ import { EntityAttributeComponent } from '../index';

/**
 * 定义此实体的一般移动速度。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement';
}