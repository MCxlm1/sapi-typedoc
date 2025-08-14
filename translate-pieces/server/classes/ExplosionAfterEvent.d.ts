/* IMPORT */ import { Block, Dimension, Entity } from '../index';

/**
 * 包含有关已发生爆炸的信息。
 */
export class ExplosionAfterEvent {
    private constructor();
    /**
     * @remarks
     * 发生爆炸的维度。
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * 爆炸的可选来源。
     *
     */
    readonly source?: Entity;
    /**
     * @remarks
     * 受此爆炸事件影响的方块集合。
     *
     */
    getImpactedBlocks(): Block[];
}