/* IMPORT */ import { ButtonPushAfterEvent } from '../index';

/**
 * 管理与按钮被按下相关的回调。
 * @seeExample buttonPushEvent.ts
 */
export class ButtonPushAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当按钮被按下时将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ButtonPushAfterEvent) => void): (arg0: ButtonPushAfterEvent) => void;
    /**
     * @remarks
     * 从按钮被按下的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ButtonPushAfterEvent) => void): void;
}