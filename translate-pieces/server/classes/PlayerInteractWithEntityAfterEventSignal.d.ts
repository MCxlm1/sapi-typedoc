/* IMPORT */ import { PlayerInteractWithEntityAfterEvent } from '../index';

/**
 * 管理与玩家与实体交互相关的回调。
 */
export class PlayerInteractWithEntityAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当玩家与实体交互时将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PlayerInteractWithEntityAfterEvent) => void): (arg0: PlayerInteractWithEntityAfterEvent) => void;
    /**
     * @remarks
     * 从玩家与实体交互的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerInteractWithEntityAfterEvent) => void): void;
}