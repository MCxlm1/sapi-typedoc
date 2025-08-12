/* IMPORT */ import { BlockPermutation, EntityComponent } from '../index';

/**
 * 定义此实体可以在哪些方块中呼吸，并赋予它们窒息的能力。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityBreathableComponent extends EntityComponent {
    private constructor();
    /**
     * @beta
     * @remarks
     * 实体的当前空气供应量。
     *
     * @worldMutation
     *
     * @throws
     * 如果空气供应量超出范围 [suffocationTime, maxAirSupply] 则抛出错误。
     */
    airSupply: number;
    /**
     * @remarks
     * 如果为 true，则此实体可以在空气中呼吸。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly breathesAir: boolean;
    /**
     * @remarks
     * 如果为 true，则此实体可以在熔岩中呼吸。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly breathesLava: boolean;
    /**
     * @remarks
     * 如果为 true，则此实体可以在固体方块中呼吸。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly breathesSolids: boolean;
    /**
     * @remarks
     * 如果为 true，则此实体可以在水中呼吸。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly breathesWater: boolean;
    /**
     * @beta
     * @remarks
     * 如果为 true，则实体能够呼吸。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly canBreathe: boolean;
    /**
     * @remarks
     * 如果为 true，则此实体在水中时将有可见的气泡。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly generatesBubbles: boolean;
    /**
     * @remarks
     * 恢复呼吸到最大值所需的时间（秒）。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly inhaleTime: number;
    /**
     * @remarks
     * 窒息伤害之间的时间（秒）。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly suffocateTime: number;
    /**
     * @remarks
     * 实体可以屏住呼吸的时间（秒）。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly totalSupply: number;
    static readonly componentId = 'minecraft:breathable';
    /**
     * @remarks
     * 此实体可以呼吸的方块列表，除了各类方块的单独属性之外。
     *
     * @throws 此函数可能抛出错误。
     */
    getBreatheBlocks(): BlockPermutation[];
    /**
     * @remarks
     * 此实体无法呼吸的方块列表。
     *
     * @throws 此函数可能抛出错误。
     */
    getNonBreatheBlocks(): BlockPermutation[];
}