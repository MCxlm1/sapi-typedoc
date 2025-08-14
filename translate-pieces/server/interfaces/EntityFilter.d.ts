/* IMPORT */ import { EntityQueryPropertyOptions, EntityQueryScoreOptions, GameMode } from '../index';

/**
 * 包含过滤实体的选项。
 */
export interface EntityFilter {
    /**
     * @remarks
     * 排除匹配一个或多个指定家族的实体。
     *
     */
    excludeFamilies?: string[];
    /**
     * @remarks
     * 如果实体具有与指定游戏模式匹配的特定游戏模式，则排除这些实体。
     *
     */
    excludeGameModes?: GameMode[];
    /**
     * @remarks
     * 排除名称与指定值之一匹配的实体。
     *
     */
    excludeNames?: string[];
    /**
     * @remarks
     * 排除带有与指定值之一匹配的标签的实体。
     *
     */
    excludeTags?: string[];
    /**
     * @remarks
     * 如果实体是指定类型之一，则排除这些实体。
     *
     */
    excludeTypes?: string[];
    /**
     * @remarks
     * 如果指定，则包括匹配所有指定家族的实体。
     *
     */
    families?: string[];
    /**
     * @remarks
     * 如果指定，则包括具有与指定游戏模式匹配的游戏模式的实体。
     *
     */
    gameMode?: GameMode;
    /**
     * @remarks
     * 如果指定，则仅包括最多具有此水平旋转角度的实体。
     *
     */
    maxHorizontalRotation?: number;
    /**
     * @remarks
     * 如果定义，则仅返回最多具有此等级的玩家。
     *
     */
    maxLevel?: number;
    /**
     * @remarks
     * 如果指定，则仅返回最多具有此垂直旋转角度的实体。
     *
     */
    maxVerticalRotation?: number;
    /**
     * @remarks
     * 如果指定，则仅包括至少具有此水平旋转角度的实体。
     *
     */
    minHorizontalRotation?: number;
    /**
     * @remarks
     * 如果定义，则仅返回至少具有此等级的玩家。
     *
     */
    minLevel?: number;
    /**
     * @remarks
     * 如果指定，则仅包括至少具有此垂直旋转角度的实体。
     *
     */
    minVerticalRotation?: number;
    /**
     * @remarks
     * 包括具有指定名称的实体。
     *
     */
    name?: string;
    propertyOptions?: EntityQueryPropertyOptions[];
    /**
     * @remarks
     * 获取/设置 EntityQueryScoreOptions 对象集合，其中包含特定记分项的过滤器。
     *
     */
    scoreOptions?: EntityQueryScoreOptions[];
    /**
     * @remarks
     * 包括匹配所有指定标签的实体。
     *
     */
    tags?: string[];
    /**
     * @remarks
     * 如果定义，则包括匹配此类型的实体。
     *
     */
    type?: string;
}