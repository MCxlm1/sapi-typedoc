/* IMPORT */ import { PlayerInputPermissionCategoryChangeAfterEvent } from '../index';

/**
 * 管理与玩家输入权限类别变化相关的回调。
 */
export class PlayerInputPermissionCategoryChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当玩家输入权限更改时将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PlayerInputPermissionCategoryChangeAfterEvent) => void): (arg0: PlayerInputPermissionCategoryChangeAfterEvent) => void;
    /**
     * @remarks
     * 从玩家输入权限更改的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerInputPermissionCategoryChangeAfterEvent) => void): void;
}