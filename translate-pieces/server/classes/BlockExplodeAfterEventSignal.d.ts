/* IMPORT */ import { BlockExplodeAfterEvent } from '../index';

/**
 * 管理与爆炸影响单个方块相关的回调。
 */
export class BlockExplodeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当爆炸影响单个方块时将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: BlockExplodeAfterEvent) => void): (arg0: BlockExplodeAfterEvent) => void;
    /**
     * @remarks
     * 从爆炸影响单个方块的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: BlockExplodeAfterEvent) => void): void;
}