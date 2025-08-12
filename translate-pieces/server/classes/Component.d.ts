/**
 * 下游组件实现的基类。
 */
export class Component {
    private constructor();
    /**
     * @remarks
     * 返回组件是否有效。如果其所有者有效，则组件被视为有效，
     * 此外还包括组件所需的任何其他验证。
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 组件的标识符。
     *
     */
    readonly typeId: string;
}