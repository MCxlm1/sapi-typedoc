/* IMPORT */ import { EntityComponent } from '../index';

/**
 * 添加此组件时，表示该实体是灾厄村民队长。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsIllagerCaptainComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_illager_captain';
}