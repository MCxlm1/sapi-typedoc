/* IMPORT */ import { EntityNavigationComponent } from '../index';

/**
 * 允许此实体像普通的恶魂一样在空中飞行生成路径。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationFloatComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.float';
}