/* IMPORT */ import { EntityComponent } from '../index';

/**
 * 添加此组件时，表示可以在此实体上使用染料来改变其颜色。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsDyeableComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_dyeable';
}