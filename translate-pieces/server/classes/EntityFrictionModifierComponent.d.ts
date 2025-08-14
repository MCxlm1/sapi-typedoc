/* IMPORT */ import { EntityComponent } from '../index';

/**
 * 定义摩擦力对此实体的影响程度。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFrictionModifierComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 关联实体的摩擦力修正器当前值。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly value: number;
    static readonly componentId = 'minecraft:friction_modifier';
}