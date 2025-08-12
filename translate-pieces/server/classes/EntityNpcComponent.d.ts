/* IMPORT */ import { EntityComponent } from '../index';

/**
 * @beta
 * 为实体添加 NPC 功能，如自定义皮肤、名称和对话交互。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNpcComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 玩家首次与 NPC 交互时打开的对话场景。
     *
     * @worldMutation
     *
     */
    defaultScene: string;
    /**
     * @remarks
     * 向玩家显示的 NPC 名称。
     *
     * @worldMutation
     *
     */
    name: string;
    /**
     * @remarks
     * NPC 将使用的皮肤索引。
     *
     * @worldMutation
     *
     */
    skinIndex: number;
    static readonly componentId = 'minecraft:npc';
}