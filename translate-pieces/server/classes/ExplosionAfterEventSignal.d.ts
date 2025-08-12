/* IMPORT */ import { ExplosionAfterEvent } from '../index';

/**
 * 管理与爆炸发生相关的回调。
 */
export class ExplosionAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当爆炸发生后将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ExplosionAfterEvent) => void): (arg0: ExplosionAfterEvent) => void;
    /**
     * @remarks
     * 从爆炸发生的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ExplosionAfterEvent) => void): void;
}