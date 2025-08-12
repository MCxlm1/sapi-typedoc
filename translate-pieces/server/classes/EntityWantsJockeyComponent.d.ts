/* IMPORT */ import { EntityComponent } from '../index';

/**
 * 添加后，此组件表示该实体想要成为骑手。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityWantsJockeyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:wants_jockey';
}