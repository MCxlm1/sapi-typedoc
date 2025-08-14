/* IMPORT */ import { EntityComponent } from '../index';

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTypeFamilyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:type_family';
    /**
     * @throws 此函数可能抛出错误。
     */
    getTypeFamilies(): string[];
    /**
     * @throws 此函数可能抛出错误。
     */
    hasTypeFamily(typeFamily: string): boolean;
}