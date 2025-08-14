/* IMPORT */ import { Block, Entity, ScriptEventSource } from '../index';

/**
 * 返回有关 /scriptevent 命令调用的附加数据。
 */
export class ScriptEventCommandMessageAfterEvent {
    private constructor();
    /**
     * @remarks
     * 此 ScriptEvent 命令消息的标识符。
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 如果此命令是通过 NPC 发起的，则返回发起 NPC 对话的实体。
     *
     */
    readonly initiator?: Entity;
    /**
     * @remarks
     * 随脚本事件命令传入的可选附加数据。
     *
     */
    readonly message: string;
    /**
     * @remarks
     * 如果此命令是通过方块触发的，则为源方块（例如，命令方块）。
     *
     */
    readonly sourceBlock?: Block;
    /**
     * @remarks
     * 如果此命令是由实体触发的，则为源实体（例如，NPC）。
     *
     */
    readonly sourceEntity?: Entity;
    /**
     * @remarks
     * 返回触发此命令的源类型。
     *
     */
    readonly sourceType: ScriptEventSource;
}