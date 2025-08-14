/* IMPORT */ import { ChatSendBeforeEvent } from '../index';

/**
 * @beta
 * 管理与聊天消息发送前触发事件相关的回调。
 * @seeExample customCommand.ts
 */
export class ChatSendBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当新聊天消息发送前将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ChatSendBeforeEvent) => void): (arg0: ChatSendBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在新聊天消息发送前不再被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ChatSendBeforeEvent) => void): void;
}