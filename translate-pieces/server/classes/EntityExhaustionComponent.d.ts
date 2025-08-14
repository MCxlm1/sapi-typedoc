/* IMPORT */ import { EntityAttributeComponent } from '../index';

/**
 * 定义与此实体的 exhaustion（耗竭值）交互。包装了 `minecraft.player.exhaustion` 属性。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityExhaustionComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:player.exhaustion';
}