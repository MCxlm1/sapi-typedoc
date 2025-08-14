/* IMPORT */ import { CustomComponentParameters, ItemComponent } from '../index';

/**
 * 物品上自定义组件的实例。
 */
// @ts-ignore 类继承允许用于原生定义的类
export class ItemCustomComponentInstance extends ItemComponent {
    private constructor();
    readonly customComponentParameters: CustomComponentParameters;
}