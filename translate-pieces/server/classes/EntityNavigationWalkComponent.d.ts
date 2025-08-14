/* IMPORT */ import { EntityNavigationComponent } from '../index';

/**
 * 允许此实体像普通生物一样通过四处行走和上下方块跳跃来生成路径。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationWalkComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.walk';
}