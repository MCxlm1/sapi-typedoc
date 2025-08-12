/* IMPORT */ import { EntityComponent } from '../index';

/**
 * 添加后，此组件表示该实体已充能。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsChargedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_charged';
}