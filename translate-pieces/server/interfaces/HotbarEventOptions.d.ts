/**
 * 包含快捷栏事件的附加过滤选项。
 */
export interface HotbarEventOptions {
    /**
     * @remarks
     * 要考虑的槽位索引。值应在 0 到 8 之间，包含两端。如果未指定，则考虑所有槽位。
     */
    allowedSlots?: number[];
}