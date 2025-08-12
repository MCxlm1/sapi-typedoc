/* IMPORT */ import { ChatSendAfterEvent } from '../index';

/**
 * 管理与聊天消息广播或发送给玩家相关的回调。
 */
export class ChatSendAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当聊天消息广播或发送给玩家后将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ChatSendAfterEvent) => void): (arg0: ChatSendAfterEvent) => void;
    /**
     * @remarks
     * 从聊天消息广播或发送给玩家的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ChatSendAfterEvent) => void): void;
}