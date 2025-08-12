/* IMPORT */ import { EntityComponent } from '../index';

/**
 * 添加后，此组件表示该实体可以像马一样进行强力跳跃。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityCanPowerJumpComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:can_power_jump';
}