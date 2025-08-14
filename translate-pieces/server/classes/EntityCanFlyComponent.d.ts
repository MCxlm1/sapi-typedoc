/* IMPORT */ import { EntityComponent } from '../index';

/**
 * 添加此组件时，表示该实体可以飞行，并且路径查找器不会被限制在需要固体方块支撑的路径上。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityCanFlyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:can_fly';
}