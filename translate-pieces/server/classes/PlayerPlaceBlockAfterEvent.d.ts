/* IMPORT */ import { BlockEvent, Player } from '../index';

/**
 * 包含有关玩家放置方块事件的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerPlaceBlockAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 为此事件放置方块的玩家。
     *
     */
    readonly player: Player;
}