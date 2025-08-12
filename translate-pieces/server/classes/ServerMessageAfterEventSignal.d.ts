/* IMPORT */ import { MessageReceiveAfterEvent } from '../index';

/**
 * 管理与服务器消息接收相关的回调。
 */
export class ServerMessageAfterEventSignal {
    private constructor();
    /**
     * @beta
     * @remarks
     * 添加一个回调，当服务器接收消息时将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: MessageReceiveAfterEvent) => void): (arg0: MessageReceiveAfterEvent) => void;
    /**
     * @beta
     * @remarks
     * 从服务器接收消息的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: MessageReceiveAfterEvent) => void): void;
}