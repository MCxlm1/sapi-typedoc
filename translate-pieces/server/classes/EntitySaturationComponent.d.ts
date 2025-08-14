/* IMPORT */ import { EntityAttributeComponent } from '../index';

/**
 * 定义与此实体的饱和度交互。包装了 `minecraft.player.saturation` 属性。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntitySaturationComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:player.saturation';
}