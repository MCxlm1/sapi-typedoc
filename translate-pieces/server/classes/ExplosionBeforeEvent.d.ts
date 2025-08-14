/* IMPORT */ import { Block, ExplosionAfterEvent } from '../index';

/**
 * 包含有关已发生爆炸的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ExplosionBeforeEvent extends ExplosionAfterEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为 true，则取消爆炸事件。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 更新受此爆炸事件影响的方块集合。
     *
     * @param blocks
     * 受此爆炸影响的新方块列表。
     */
    setImpactedBlocks(blocks: Block[]): void;
}