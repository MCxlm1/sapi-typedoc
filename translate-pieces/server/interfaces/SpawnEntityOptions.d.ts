/**
 * 包含生成实体的附加选项。
 */
export interface SpawnEntityOptions {
    /**
     * @beta
     * @remarks
     * 可选的布尔值，用于确定此实体是否应在游戏世界中持续存在。
     * 持久性防止实体自动消失。
     *
     */
    initialPersistence?: boolean;
    /**
     * @beta
     * @remarks
     * 实体生成时设置的可选初始旋转角度（以度为单位）。
     *
     */
    initialRotation?: number;
    /**
     * @remarks
     * 实体生成后发送给实体的可选生成事件。
     *
     */
    spawnEvent?: string;
}