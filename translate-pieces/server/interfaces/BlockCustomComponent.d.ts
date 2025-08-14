/* IMPORT */ import { BlockComponentEntityFallOnEvent, BlockComponentOnPlaceEvent, BlockComponentPlayerBreakEvent, BlockComponentPlayerInteractEvent, BlockComponentPlayerPlaceBeforeEvent, BlockComponentRandomTickEvent, BlockComponentStepOffEvent, BlockComponentStepOnEvent, BlockComponentTickEvent, CustomComponentParameters } from '../index';

/**
 * 包含一组将为方块触发的事件。
 * 此对象必须使用 BlockRegistry 进行绑定。
 */
export interface BlockCustomComponent {
    /**
     * @remarks
     * 玩家放置方块前会调用此函数。
     */
    beforeOnPlayerPlace?: (arg0: BlockComponentPlayerPlaceBeforeEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当实体落到绑定此自定义组件的方块上时，将调用此函数。
     */
    onEntityFallOn?: (arg0: BlockComponentEntityFallOnEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当放置绑定此自定义组件的方块时，将调用此函数。
     */
    onPlace?: (arg0: BlockComponentOnPlaceEvent, arg1: CustomComponentParameters) => void;
    onPlayerBreak?: (arg0: BlockComponentPlayerBreakEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当玩家成功与绑定此自定义组件的方块交互时，将调用此函数。
     */
    onPlayerInteract?: (arg0: BlockComponentPlayerInteractEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当方块随机刻时调用此函数。
     */
    onRandomTick?: (arg0: BlockComponentRandomTickEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当实体走下绑定此自定义组件的方块时，将调用此函数。
     */
    onStepOff?: (arg0: BlockComponentStepOffEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当实体走上绑定此自定义组件的方块时，将调用此函数。
     */
    onStepOn?: (arg0: BlockComponentStepOnEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当方块刻时调用此函数。
     */
    onTick?: (arg0: BlockComponentTickEvent, arg1: CustomComponentParameters) => void;
}