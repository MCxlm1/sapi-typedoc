/* IMPORT */ import { EntityNavigationComponent } from '../index';

/**
 * 允许此实体生成包含垂直墙壁的路径（例如，像 Minecraft 中的蜘蛛那样）。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationClimbComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.climb';
}