/* IMPORT */ import { PlayerInteractWithBlockAfterEvent } from '../index';

/**
 * 管理与玩家与方块交互相关的回调。
 */
export class PlayerInteractWithBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当玩家与方块交互时将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PlayerInteractWithBlockAfterEvent) => void): (arg0: PlayerInteractWithBlockAfterEvent) => void;
    /**
     * @remarks
     * 从玩家与方块交互的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerInteractWithBlockAfterEvent) => void): void;
}