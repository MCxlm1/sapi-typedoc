/* IMPORT */ import { EntityComponent } from '../index';

/**
 * 当实体上存在此组件时，表示该实体正在着火。
 * @seeExample setOnFire.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityOnFireComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 火焰熄灭前剩余的刻数。
     *
     */
    readonly onFireTicksRemaining: number;
    static readonly componentId = 'minecraft:onfire';
}