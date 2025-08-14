/* IMPORT */ import { EntityComponent } from '../index';

/**
 * 允许此实体生成包含垂直墙壁的路径（例如，像 Minecraft 蜘蛛那样）。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 告诉路径查找器在寻找路径时避开会造成伤害的方块。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly avoidDamageBlocks: boolean;
    /**
     * @remarks
     * 告诉路径查找器在寻找路径时避开传送门（如下界传送门）。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly avoidPortals: boolean;
    /**
     * @remarks
     * 路径查找器在创建路径时是否应避开暴露在阳光下的方块。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly avoidSun: boolean;
    /**
     * @remarks
     * 告诉路径查找器在创建路径时避开水。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly avoidWater: boolean;
    /**
     * @remarks
     * 告诉路径查找器是否可以从水中跳出（像海豚一样）。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly canBreach: boolean;
    /**
     * @remarks
     * 告诉路径查找器它可以穿过关闭的门并破坏它。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly canBreakDoors: boolean;
    /**
     * @remarks
     * 告诉路径查找器是否可以漂浮。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly canFloat: boolean;
    /**
     * @remarks
     * 告诉路径查找器是否可以跳上方块。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly canJump: boolean;
    /**
     * @remarks
     * 告诉路径查找器它可以穿过关闭的门，假设 AI 会打开门。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly canOpenDoors: boolean;
    /**
     * @remarks
     * 告诉路径查找器它可以穿过关闭的铁门，假设 AI 会打开门。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly canOpenIronDoors: boolean;
    /**
     * @remarks
     * 是否可以通过门创建路径。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly canPassDoors: boolean;
    /**
     * @remarks
     * 告诉路径查找器它可以在空中开始寻路。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly canPathFromAir: boolean;
    /**
     * @remarks
     * 告诉路径查找器是否可以在熔岩表面行进。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly canPathOverLava: boolean;
    /**
     * @remarks
     * 告诉路径查找器是否可以在水面上行进。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly canPathOverWater: boolean;
    /**
     * @remarks
     * 告诉路径查找器在水中时是否会被重力拉下。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly canSink: boolean;
    /**
     * @remarks
     * 告诉路径查找器是否可以通过水中任何地方行进并沿该路径播放游泳动画。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly canSwim: boolean;
    /**
     * @remarks
     * 告诉路径查找器是否可以在水外地面上行走。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly canWalk: boolean;
    /**
     * @remarks
     * 告诉路径查找器是否可以像在地面上一样在熔岩中行走。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly canWalkInLava: boolean;
    /**
     * @remarks
     * 告诉路径查找器是否可以在地面上行走或在水下行走。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly isAmphibious: boolean;
}