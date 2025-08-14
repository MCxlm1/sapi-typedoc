/* IMPORT */ import { ItemUseAfterEvent } from '../index';

/**
 * 包含与物品使用相关的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemUseBeforeEvent extends ItemUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为 true，则取消物品使用行为。
     *
     */
    cancel: boolean;
}