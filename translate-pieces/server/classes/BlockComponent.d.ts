/* IMPORT */ import { Block, Component } from '../index';

/**
 * 与方块关联的组件的基类。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponent extends Component {
    private constructor();
    /**
     * @remarks
     * 此组件所属的方块实例。
     *
     */
    readonly block: Block;
}