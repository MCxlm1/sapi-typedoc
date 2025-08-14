/* IMPORT */ import { Entity, EntityComponent, Seat } from '../index';

/**
 * 添加后，此组件将添加实体可以被另一个实体骑乘的功能。
 * @seeExample minibiomes.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityRideableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 可用于控制此实体的座位的从零开始的索引。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly controllingSeat: number;
    /**
     * @remarks
     * 确定如果实体蹲下是否不支持交互。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly crouchingSkipInteract: boolean;
    /**
     * @remarks
     * 当玩家 looking to ride on this entity 时应显示的一组文本（通常使用触摸屏控件）。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly interactText: string;
    /**
     * @remarks
     * 乘客可以拥有的最大宽度。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly passengerMaxWidth: number;
    /**
     * @remarks
     * 如果为 true，则此实体将把正确 family_types 中的实体拉入任何可用座位。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly pullInEntities: boolean;
    /**
     * @remarks
     * 如果为 true，则当骑手看着此实体时将选择此实体。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly riderCanInteract: boolean;
    /**
     * @remarks
     * 为此实体定义的骑手座位数。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly seatCount: number;
    static readonly componentId = 'minecraft:rideable';
    /**
     * @remarks
     * 将实体添加为此实体的骑手。
     *
     * @worldMutation
     *
     * @param rider
     * 将成为此实体骑手的实体。
     * @returns
     * 如果骑手实体已成功添加则返回 true。
     * @throws 此函数可能抛出错误。
     * @seeExample minibiomes.ts
     */
    addRider(rider: Entity): boolean;
    /**
     * @remarks
     * 将指定骑手从此实体中弹出。
     *
     * @worldMutation
     *
     * @param rider
     * 应从此实体中弹出的实体。
     * @throws 此函数可能抛出错误。
     */
    ejectRider(rider: Entity): void;
    /**
     * @remarks
     * 将所有骑手从此实体中弹出。
     *
     * @worldMutation
     *
     * @throws 此函数可能抛出错误。
     */
    ejectRiders(): void;
    /**
     * @remarks
     * 此实体可以支持作为骑手的实体类型字符串列表。
     *
     * @throws 此函数可能抛出错误。
     */
    getFamilyTypes(): string[];
    /**
     * @remarks
     * 获取当前骑乘此实体的所有实体列表。
     *
     * @throws 此函数可能抛出错误。
     */
    getRiders(): Entity[];
    /**
     * @remarks
     * 获取骑乘此实体的每个位置的座位位置和骑手数量列表。
     *
     * @throws 此函数可能抛出错误。
     */
    getSeats(): Seat[];
}