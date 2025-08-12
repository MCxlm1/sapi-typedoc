/* IMPORT */ import { EntityComponent } from '../index';

/**
 * 添加后，此组件表示该实体可以爬上梯子。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityCanClimbComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:can_climb';
}