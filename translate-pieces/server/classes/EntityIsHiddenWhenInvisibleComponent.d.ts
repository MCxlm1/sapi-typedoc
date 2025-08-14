/* IMPORT */ import { EntityComponent } from '../index';

/**
 * 添加此组件时，表示该实体在隐形时可以躲避敌对生物。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsHiddenWhenInvisibleComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_hidden_when_invisible';
}