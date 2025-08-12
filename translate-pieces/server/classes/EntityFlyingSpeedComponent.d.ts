/* IMPORT */ import { EntityComponent } from '../index';

/**
 * 表示实体的飞行速度。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFlyingSpeedComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 关联实体的飞行速度当前值。
     *
     * @worldMutation
     *
     */
    value: number;
    static readonly componentId = 'minecraft:flying_speed';
}