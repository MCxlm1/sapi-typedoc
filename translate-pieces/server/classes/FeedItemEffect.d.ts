/**
 * 表示由于食物物品被喂给实体而应用的效果。
 */
export class FeedItemEffect {
    private constructor();
    /**
     * @remarks
     * 获取可能已应用于此效果的放大器。有效值是从 0 开始的整数，通常范围在 0 到 4 之间。
     *
     */
    readonly amplifier: number;
    /**
     * @remarks
     * 实体被喂食此物品后应用此效果的几率。有效值范围在 0 到 1 之间。
     *
     */
    readonly chance: number;
    /**
     * @remarks
     * 获取此效果的持续时间，以刻为单位。
     *
     */
    readonly duration: number;
    /**
     * @remarks
     * 获取要应用的效果标识符。示例值包括 'fire_resistance' 或 'regeneration'。
     *
     */
    readonly name: string;
}