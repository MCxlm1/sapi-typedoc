/* IMPORT */ import { ExplosionBeforeEvent } from '../index';

/**
 * 管理与爆炸发生前相关的回调。
 */
export class ExplosionBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当爆炸发生前将被调用。回调可以可选地更改或取消爆炸行为。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ExplosionBeforeEvent) => void): (arg0: ExplosionBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在爆炸发生前不再被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ExplosionBeforeEvent) => void): void;
}