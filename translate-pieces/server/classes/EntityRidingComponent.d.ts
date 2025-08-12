/* IMPORT */ import { Entity, EntityComponent } from '../index';

/**
 * 当实体骑乘另一个实体时，此组件会被添加到该实体上。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityRidingComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 此实体当前骑乘的实体。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly entityRidingOn: Entity;
    static readonly componentId = 'minecraft:riding';
}