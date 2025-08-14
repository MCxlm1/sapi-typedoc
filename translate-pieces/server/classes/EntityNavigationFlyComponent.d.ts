/* IMPORT */ import { EntityNavigationComponent } from '../index';

/**
 * 允许此实体在空中生成路径（例如，像 Minecraft 中的鹦鹉那样）。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationFlyComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.fly';
}