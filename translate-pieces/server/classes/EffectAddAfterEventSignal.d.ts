/* IMPORT */ import { EffectAddAfterEvent } from '../index';

/**
 * 管理与向实体添加效果相关的回调。
 */
export class EffectAddAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当向实体添加效果时将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EffectAddAfterEvent) => void): (arg0: EffectAddAfterEvent) => void;
    /**
     * @remarks
     * 从向实体添加效果的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EffectAddAfterEvent) => void): void;
}