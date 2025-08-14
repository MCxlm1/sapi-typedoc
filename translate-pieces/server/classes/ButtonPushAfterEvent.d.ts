/* IMPORT */ import { BlockEvent, Entity } from '../index';

/**
 * 包含与按钮按下变化相关的信息。
 * @seeExample buttonPushEvent.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ButtonPushAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 触发按钮按下的可选来源。
     *
     */
    readonly source: Entity;
}