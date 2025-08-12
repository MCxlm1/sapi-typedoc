/* IMPORT */ import { Entity, Vector3 } from '../index';

/**
 * 包含爆炸事件的相关信息。
 */
export class ExplosionAfterEvent {
    private constructor();
    /**
     * @remarks
     * 导致爆炸的实体。可能是 undefined。
     *
     */
    readonly source: Entity | undefined;
    /**
     * @remarks
     * 爆炸的位置。
     *
     */
    readonly explosionLocation: Vector3;
    /**
     * @remarks
     * 爆炸的半径。
     *
     */
    readonly radius: number;
}