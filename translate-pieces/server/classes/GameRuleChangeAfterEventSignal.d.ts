/* IMPORT */ import { GameRuleChangeAfterEvent } from '../index';

/**
 * 管理与游戏规则变化相关的回调。
 */
export class GameRuleChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当 world.gameRules 属性发生变化时将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: GameRuleChangeAfterEvent) => void): (arg0: GameRuleChangeAfterEvent) => void;
    /**
     * @remarks
     * 从游戏规则变化的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: GameRuleChangeAfterEvent) => void): void;
}