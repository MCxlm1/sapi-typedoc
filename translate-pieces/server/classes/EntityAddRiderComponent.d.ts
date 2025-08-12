/* IMPORT */ import { EntityComponent } from '../index';

/**
 * 添加后，此组件使实体在特定条件下生成时带有指定 entityType 的骑手。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAddRiderComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 在特定条件下生成此实体时作为骑手添加的实体类型。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly entityType: string;
    /**
     * @remarks
     * 当骑手为此实体生成时，在该骑手身上触发的可选生成事件。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly spawnEvent: string;
    static readonly componentId = 'minecraft:addrider';
}