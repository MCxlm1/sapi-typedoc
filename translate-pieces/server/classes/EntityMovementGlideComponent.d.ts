/* IMPORT */ import { EntityBaseMovementComponent } from '../index';

/**
 * 添加后，此移动控制允许生物滑翔。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementGlideComponent extends EntityBaseMovementComponent {
    private constructor();
    /**
     * @remarks
     * 实体转向时的速度。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly speedWhenTurning: number;
    /**
     * @remarks
     * 滑翔时的起始速度。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly startSpeed: number;
    static readonly componentId = 'minecraft:movement.glide';
}