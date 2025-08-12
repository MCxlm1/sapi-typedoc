/* IMPORT */ import { EntityComponent } from '../index';

/**
 * 当存在于实体上时，表示该实体正在燃烧。
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