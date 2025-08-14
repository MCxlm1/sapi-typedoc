/* IMPORT */ import { GameRule } from '../index';

/**
 * 包含有关 world.gameRules 属性更改的信息。
 */
export class GameRuleChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 与更改的 world.gameRules 属性相关的规则标识符。
     *
     */
    readonly rule: GameRule;
    /**
     * @remarks
     * 更改后 world.gameRules 属性的值。
     *
     */
    readonly value: boolean | number;
}