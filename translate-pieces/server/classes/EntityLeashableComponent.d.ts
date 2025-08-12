/* IMPORT */ import { Entity, EntityComponent } from '../index';

/**
 * 允许实体被拴绳牵引。定义实体被拴绳牵引时的条件和事件。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityLeashableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 如果另一个实体可以通过附加自己的拴绳来"偷走"被拴绳的实体，则返回 true。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly canBeStolen: boolean;
    /**
     * @remarks
     * 拴绳变硬限制移动的距离（以方块为单位）。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly hardDistance: number;
    /**
     * @remarks
     * 如果实体被拴绳牵引则返回 true。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly isLeashed: boolean;
    /**
     * @remarks
     * 持有拴绳的实体。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly leashHolder?: Entity;
    /**
     * @remarks
     * 持有拴绳的实体标识符。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly leashHolderEntityId?: string;
    /**
     * @remarks
     * 拴绳断裂的距离（以方块为单位）。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly maxDistance: number;
    /**
     * @remarks
     * "弹簧"效果开始作用以使此实体靠近拴住它的实体的距离（以方块为单位）。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly softDistance: number;
    static readonly componentId = 'minecraft:leashable';
    /**
     * @remarks
     * 将此实体拴绳牵引到另一个实体。
     *
     * @worldMutation
     *
     * @param leashHolder
     * 要将此实体拴绳牵引到的实体。
     * @throws
     * 如果要拴绳牵引的实体超出最大距离，或者玩家已死亡或处于旁观者模式，则抛出异常。
     */
    leashTo(leashHolder: Entity): void;
    /**
     * @remarks
     * 如果此实体被拴绳牵引到另一个实体，则将其解开。
     *
     * @worldMutation
     *
     * @throws 此函数可能抛出错误。
     */
    unleash(): void;
}