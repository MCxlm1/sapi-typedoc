/* IMPORT */ import { Entity, EntityComponent, ProjectileShootOptions, Vector3 } from '../index';

/**
 * 投射物组件控制投射物实体的属性，并允许其沿给定方向射击。
 * 当实体具有 minecraft:projectile 组件时，该组件存在。
 * @seeExample shootArrow.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityProjectileComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 投射物在空气中行进时每刻保持的速度比例。
     *
     * @worldMutation
     *
     */
    airInertia: number;
    /**
     * @remarks
     * 如果为 true，则实体在受伤时会被点燃。默认燃烧持续时间为 5 秒。
     * 可通过 onFireTime 属性修改此持续时间。如果实体免疫或实体处于湿润状态，则不会着火。
     *
     * @worldMutation
     *
     */
    catchFireOnHurt: boolean;
    /**
     * @remarks
     * 如果为 true，则玩家击中投射物时会产生暴击粒子。例如玩家攻击潜影弹。
     *
     * @worldMutation
     *
     */
    critParticlesOnProjectileHurt: boolean;
    /**
     * @remarks
     * 如果为 true，则投射物受到伤害时会被摧毁。例如玩家攻击潜影弹。
     *
     * @worldMutation
     *
     */
    destroyOnProjectileHurt: boolean;
    /**
     * @remarks
     * 应用于投射物的重力。当实体不在地面上时，每刻从投射物的垂直位置变化中减去此数值。
     * 值越高，投射物下落越快。如果为负值，则实体会上升而不是下落。
     *
     * @worldMutation
     *
     */
    gravity: number;
    /**
     * @remarks
     * 投射物击中实体时播放的声音。
     *
     * @worldMutation
     *
     */
    hitEntitySound?: string;
    /**
     * @remarks
     * 投射物击中方块时播放的声音。
     *
     * @worldMutation
     *
     */
    hitGroundSound?: string;
    /**
     * @remarks
     * 投射物击中物体时产生的粒子。
     *
     * @worldMutation
     *
     */
    hitParticle?: string;
    /**
     * @remarks
     * 如果为 true 且天气为雷雨，实体能看见天空，则击中时实体会被闪电击中。
     * 例如带有引雷附魔的投掷三叉戟。
     *
     * @worldMutation
     *
     */
    lightningStrikeOnHit: boolean;
    /**
     * @remarks
     * 投射物在液体中行进时每刻保持的速度比例。
     *
     * @worldMutation
     *
     */
    liquidInertia: number;
    /**
     * @remarks
     * 当 catchFireOnHurt 设置为 true 时，被击中实体着火的持续时间（以秒为单位）。
     *
     * @worldMutation
     *
     */
    onFireTime: number;
    /**
     * @remarks
     * 投射物的所有者。这用于确定投射物可以与什么碰撞和造成伤害。
     * 它还确定哪个实体被指定为攻击者。
     *
     * @worldMutation
     *
     */
    owner?: Entity;
    /**
     * @remarks
     * 如果为 true，则投射物在未受到伤害时会从生物身上弹开。例如生成时的凋灵。
     *
     * @worldMutation
     *
     */
    shouldBounceOnHit: boolean;
    /**
     * @remarks
     * 如果为 true，则投射物击中实体时会停止移动，就像被阻挡了一样。
     * 例如投掷三叉戟的击中行为。
     *
     * @worldMutation
     *
     */
    stopOnHit: boolean;
    static readonly componentId = 'minecraft:projectile';
    /**
     * @remarks
     * 以给定速度射击投射物。投射物将从其当前位置发射。
     *
     * @worldMutation
     *
     * @param velocity
     * 发射投射物的速度。这控制了投射物射击的速度和方向。
     * @param options
     * 射击的可选配置。
     * @throws
     * 如果组件或实体不再存在则抛出异常。
     */
    shoot(velocity: Vector3, options?: ProjectileShootOptions): void;
}