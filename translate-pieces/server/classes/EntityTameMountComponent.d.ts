/* IMPORT */ import { EntityComponent, Player } from '../index';

/**
 * 包含基于骑乘它的实体来驯服可骑乘实体的选项。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTameMountComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 如果实体被驯服则返回 true。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly isTamed: boolean;
    /**
     * @remarks
     * 如果实体被玩家驯服则返回 true。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly isTamedToPlayer: boolean;
    /**
     * @remarks
     * 返回驯服该实体的玩家，如果实体未被玩家驯服则返回 'undefined'。
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
    static readonly componentId = 'minecraft:tamemount';
    /**
     * @remarks
     * 将此可骑乘实体设置为已驯服。
     *
     * @worldMutation
     *
     * @param showParticles
     * 驯服此实体时是否显示效果粒子。
     * @throws 此函数可能抛出错误。
     */
    tame(showParticles: boolean): void;
    /**
     * @remarks
     * 将此可骑乘实体设置为由给定玩家驯服。
     *
     * @worldMutation
     *
     * @param showParticles
     * 驯服此实体时是否显示效果粒子。
     * @param player
     * 应该驯服此实体的玩家。
     * @returns
     * 如果实体被驯服则返回 true。
     * @throws 此函数可能抛出错误。
     */
    tameToPlayer(showParticles: boolean, player: Player): boolean;
}