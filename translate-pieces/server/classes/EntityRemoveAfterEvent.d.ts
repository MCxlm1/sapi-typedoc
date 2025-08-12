/**
 * 实体从世界中移除时发生的事件数据（例如，因为实体不在玩家附近而被卸载）。
 */
export class EntityRemoveAfterEvent {
    private constructor();
    /**
     * @remarks
     * 被移除的实体 ID。
     *
     */
    readonly removedEntityId: string;
    /**
     * @remarks
     * 被移除的实体类型标识符 - 例如，'minecraft:skeleton'。
     *
     */
    readonly typeId: string;
}