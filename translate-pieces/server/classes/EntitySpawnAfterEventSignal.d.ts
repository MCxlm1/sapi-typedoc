/* IMPORT */ import { EntitySpawnAfterEvent } from '../index';

/**
 * 管理与实体生成相关的回调。
 */
export class EntitySpawnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当实体生成时将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EntitySpawnAfterEvent) => void): (arg0: EntitySpawnAfterEvent) => void;
    /**
     * @remarks
     * 从实体生成的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntitySpawnAfterEvent) => void): void;
}