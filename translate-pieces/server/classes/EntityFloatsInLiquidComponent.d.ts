/* IMPORT */ import { EntityComponent } from '../index';

/**
 * 添加此组件时，表示该实体可以在液体方块中漂浮。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFloatsInLiquidComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:floats_in_liquid';
}