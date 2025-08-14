/* IMPORT */ import { EntityComponent } from '../index';

/**
 * 添加此组件时，表示该实体当前携带箱子。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsChestedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_chested';
}