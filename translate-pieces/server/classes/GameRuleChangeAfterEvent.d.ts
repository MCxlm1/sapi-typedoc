/* IMPORT */ import { GameRule } from '../index';

/**
 * 包含世界.gameRules属性变化的相关信息。
 */
export class GameRuleChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 与变化的 world.gameRules 属性相关的规则标识符。
     *
     */
    readonly rule: GameRule;
    /**
     * @remarks
     * world.gameRules 属性变化后的值。
     *
     */
    readonly value: boolean | number;
}