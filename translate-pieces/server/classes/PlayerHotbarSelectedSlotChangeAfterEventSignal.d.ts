/* IMPORT */ import { PlayerHotbarSelectedSlotChangeAfterEvent } from '../index';

/**
 * 管理与玩家快捷栏选中槽位变化相关的回调。
 */
export class PlayerHotbarSelectedSlotChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当玩家选择的槽位改变时将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PlayerHotbarSelectedSlotChangeAfterEvent) => void): (arg0: PlayerHotbarSelectedSlotChangeAfterEvent) => void;
    /**
     * @remarks
     * 从玩家选择槽位改变的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerHotbarSelectedSlotChangeAfterEvent) => void): void;
}