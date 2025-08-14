/* IMPORT */ import { BlockEvent, Player } from '../index';

/**
 * 包含与拉杆激活或停用变化相关的信息。
 * @seeExample leverActionEvent.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LeverActionAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 如果拉杆已激活（即正在传输能量）则为 true。
     *
     */
    readonly isPowered: boolean;
    /**
     * @remarks
     * 触发拉杆激活的可选玩家。
     *
     */
    readonly player: Player;
}