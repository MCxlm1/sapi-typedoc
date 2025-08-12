/* IMPORT */ import { EntityAttributeComponent } from '../index';

/**
 * 定义实体的健康属性。
 * @seeExample applyDamageThenHeal.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHealthComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:health';
}