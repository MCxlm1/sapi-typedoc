/* IMPORT */ import { PistonActivateAfterEvent } from '../index';

/**
 * 管理与活塞激活相关的回调。
 */
export class PistonActivateAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当活塞伸出或缩回时将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PistonActivateAfterEvent) => void): (arg0: PistonActivateAfterEvent) => void;
    /**
     * @remarks
     * 从活塞激活的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PistonActivateAfterEvent) => void): void;
}