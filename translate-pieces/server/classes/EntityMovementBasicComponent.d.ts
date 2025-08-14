/* IMPORT */ import { EntityBaseMovementComponent } from '../index';

/**
 * 此组件增强了实体的移动能力。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementBasicComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.basic';
}