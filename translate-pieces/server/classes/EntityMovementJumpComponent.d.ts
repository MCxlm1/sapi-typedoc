/* IMPORT */ import { EntityBaseMovementComponent } from '../index';

/**
 * 移动控制使生物在移动时跳跃，并在跳跃之间有指定的延迟。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementJumpComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.jump';
}