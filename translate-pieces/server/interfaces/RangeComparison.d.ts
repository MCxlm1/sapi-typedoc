/**
 * 运算符表示用于表达潜在数字范围的下限/上限结构。
 */
export interface RangeComparison {
    /**
     * @remarks
     * 范围内的下限。
     */
    lowerBound: number;
    /**
     * @remarks
     * 范围内的上限。
     */
    upperBound: number;
}