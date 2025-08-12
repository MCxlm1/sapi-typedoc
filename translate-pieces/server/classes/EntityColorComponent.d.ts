/* IMPORT */ import { EntityComponent } from '../index';

/**
 * 定义实体的颜色。仅适用于具有预定义颜色值的某些实体（例如：绵羊、羊驼、潜影贝）。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityColorComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 此特定颜色的值。
     *
     * @worldMutation
     *
     */
    value: number;
    static readonly componentId = 'minecraft:color';
}