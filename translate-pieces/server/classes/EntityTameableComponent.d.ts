/* IMPORT */ import { EntityComponent, ItemStack, Player } from '../index';

/**
 * 定义实体被玩家驯服的规则。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTameableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 返回可用于驯服此实体的一组物品。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly getTameItems: ItemStack[];
    /**
     * @remarks
     * 如果实体被玩家驯服则返回 true。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly isTamed: boolean;
    /**
     * @remarks
     * 每次使用物品驯服实体的概率，介于 0.0 和 1.0 之间，其中 1.0 表示 100%
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly probability: number;
    /**
     * @remarks
     * 返回驯服该实体的玩家，如果实体未被驯服则返回 'undefined'。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly tamedToPlayer?: Player;
    /**
     * @remarks
     * 返回驯服该实体的玩家 ID，如果实体未被驯服则返回 'undefined'。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly tamedToPlayerId?: string;
    static readonly componentId = 'minecraft:tameable';
    /**
     * @remarks
     * 将此实体设置为由给定玩家驯服。
     *
     * @worldMutation
     *
     * @param player
     * 应该驯服此实体的玩家。
     * @returns
     * 如果实体被驯服则返回 true。
     * @throws 此函数可能抛出错误。
     */
    tame(player: Player): boolean;
}