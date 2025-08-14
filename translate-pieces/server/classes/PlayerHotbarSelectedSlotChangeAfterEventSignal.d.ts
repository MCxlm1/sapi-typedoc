/* IMPORT */ import { HotbarEventOptions, PlayerHotbarSelectedSlotChangeAfterEvent } from '../index';

/**
 * 管理与玩家更改选定快捷栏槽位后相关的回调。
 */
export class PlayerHotbarSelectedSlotChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当玩家更改选定快捷栏槽位后将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * 此事件触发时调用的函数回调。
     * @param options
     * 事件订阅的附加过滤选项。
     */
    subscribe(
        callback: (arg0: PlayerHotbarSelectedSlotChangeAfterEvent) => void,
        options?: HotbarEventOptions,
    ): (arg0: PlayerHotbarSelectedSlotChangeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，当玩家更改选定快捷栏槽位后不再被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerHotbarSelectedSlotChangeAfterEvent) => void): void;
}