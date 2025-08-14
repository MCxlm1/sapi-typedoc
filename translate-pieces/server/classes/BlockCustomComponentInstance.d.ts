/* IMPORT */ import { BlockComponent, CustomComponentParameters } from '../index';

/**
 * 方块上自定义组件的实例。
 */
// @ts-ignore 类继承允许用于原生定义的类
export class BlockCustomComponentInstance extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * 自定义组件参数。
     */
    readonly customComponentParameters: CustomComponentParameters;
}