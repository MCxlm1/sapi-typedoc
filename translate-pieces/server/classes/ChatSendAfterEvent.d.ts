/* IMPORT */ import { Player } from '../index';

/**
 * @beta
 * 玩家输入聊天消息时触发的事件。
 */
export class ChatSendAfterEvent {
    private constructor();
    /**
     * @remarks
     * 正在广播的消息。
     *
     */
    readonly message: string;
    /**
     * @remarks
     * 发送聊天消息的玩家。
     *
     */
    readonly sender: Player;
    /**
     * @remarks
     * 将接收此消息的可选玩家列表。如果已定义，则此消息直接针对一个或多个玩家（即不进行广播）。
     *
     */
    readonly targets?: Player[];
}