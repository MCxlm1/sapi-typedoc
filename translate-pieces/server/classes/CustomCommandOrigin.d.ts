/* IMPORT */ import { Block, CustomCommandSource, Entity } from '../index';

/**
 * 关于命令来源的详细信息。
 */
export class CustomCommandOrigin {
    private constructor();
    /**
     * @remarks
     * 如果此命令是通过 NPC 发起的，则返回发起 NPC 对话的实体。
     *
     */
    readonly initiator?: Entity;
    /**
     * @remarks
     * 如果此命令是通过方块触发的，则返回源方块（例如，命令方块）。
     *
     */
    readonly sourceBlock?: Block;
    /**
     * @remarks
     * 如果此命令是由实体触发的，则返回源实体（例如，NPC）。
     *
     */
    readonly sourceEntity?: Entity;
    /**
     * @remarks
     * 返回触发此命令的源类型。
     *
     */
    readonly sourceType: CustomCommandSource;
}