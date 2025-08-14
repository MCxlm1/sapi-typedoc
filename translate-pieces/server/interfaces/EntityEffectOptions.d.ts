/**
 * 包含实体效果的附加选项。
 */
export interface EntityEffectOptions {
    /**
     * @remarks
     * 效果的强度。
     */
    amplifier?: number;
    /**
     * @remarks
     * 如果为 true，则实体拥有该效果时会显示粒子效果。
     */
    showParticles?: boolean;
}