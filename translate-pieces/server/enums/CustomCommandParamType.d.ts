/* IMPORT */ import { BlockType, Entity, EntityType, ItemType, Player } from '../index';

/**
 * 自定义命令接受的参数类型。
 */
export enum CustomCommandParamType {
    /**
     * @remarks
     * 方块类型参数提供一个 {@link BlockType}。
     *
     */
    BlockType = 'BlockType',
    /**
     * @remarks
     * 布尔值参数。
     *
     */
    Boolean = 'Boolean',
    /**
     * @remarks
     * 实体选择器参数提供一个 {@link Entity}。
     *
     */
    EntitySelector = 'EntitySelector',
    /**
     * @remarks
     * 实体类型参数提供一个 {@link EntityType}。
     *
     */
    EntityType = 'EntityType',
    /**
     * @remarks
     * 命令枚举参数。
     *
     */
    Enum = 'Enum',
    /**
     * @remarks
     * 浮点数参数。
     *
     */
    Float = 'Float',
    /**
     * @remarks
     * 整数参数。
     *
     */
    Integer = 'Integer',
    /**
     * @remarks
     * 物品类型参数提供一个 {@link ItemType}。
     *
     */
    ItemType = 'ItemType',
    /**
     * @remarks
     * 位置参数提供一个 {@link
     * @minecraft/server.Location}。
     *
     */
    Location = 'Location',
    /**
     * @remarks
     * 玩家选择器参数提供一个 {@link Player}。
     *
     */
    PlayerSelector = 'PlayerSelector',
    /**
     * @remarks
     * 字符串参数。
     *
     */
    String = 'String',
}