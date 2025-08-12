/* IMPORT */ import { EntityComponent } from '../index';

/**
 * 添加后，此组件表示该实体当前正在燃烧。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsIgnitedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_ignited';
}