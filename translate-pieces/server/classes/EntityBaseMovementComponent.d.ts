/* IMPORT */ import { EntityComponent } from '../index';

/**
 * 实体移动事件系列的基类。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityBaseMovementComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 此生物移动方式的最大转向速率。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly maxTurn: number;
}