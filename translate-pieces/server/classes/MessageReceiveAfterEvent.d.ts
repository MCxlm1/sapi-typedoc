/* IMPORT */ import { Player } from '../index';

/**
 * @beta
 * 用于在客户端和服务器之间传递消息的特定内部事件。
 */
export class MessageReceiveAfterEvent {
    private constructor();
    /**
     * @remarks
     * 消息标识符。
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 消息内容。
     *
     */
    readonly message: string;
    /**
     * @remarks
     * 发送消息的玩家。
     *
     */
    readonly player: Player;
}