/* IMPORT */ import { EntityComponent } from '../index';

/**
 * 添加后，此组件表示该实体当前正在摇晃。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsShakingComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_shaking';
}