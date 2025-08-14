/* IMPORT */ import { EntityComponent } from '../index';

/**
 * 添加此组件时，表示该实体当前已装备鞍。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsSaddledComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_saddled';
}