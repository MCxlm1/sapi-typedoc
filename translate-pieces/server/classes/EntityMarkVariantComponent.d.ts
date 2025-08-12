/* IMPORT */ import { EntityComponent } from '../index';

/**
 * 附加变种值。可用于进一步区分变种。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMarkVariantComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 此实体的标记变种值。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly value: number;
    static readonly componentId = 'minecraft:mark_variant';
}