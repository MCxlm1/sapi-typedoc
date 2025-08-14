/* IMPORT */ import { Entity } from '../index';

/**
 * {@link Dimension.createExplosion} 方法的附加配置选项。
 * @seeExample createNoBlockExplosion.ts
 * @seeExample createExplosions.ts
 */
export interface ExplosionOptions {
    /**
     * @remarks
     * 爆炸是否也影响水下部分。
     *
     */
    allowUnderwater?: boolean;
    /**
     * @remarks
     * 爆炸是否会破坏爆炸半径内的方块。
     *
     */
    breaksBlocks?: boolean;
    /**
     * @remarks
     * 如果为 true，则爆炸伴随在爆炸半径内或附近的火焰。
     *
     */
    causesFire?: boolean;
    /**
     * @remarks
     * 爆炸的可选来源。
     *
     */
    source?: Entity;
}