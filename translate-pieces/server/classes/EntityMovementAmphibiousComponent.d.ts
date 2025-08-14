/* IMPORT */ import { EntityBaseMovementComponent } from '../index';

/**
 * 添加后，此移动控制允许生物在水中游泳和在陆地上行走。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementAmphibiousComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.amphibious';
}