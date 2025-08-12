/* IMPORT */ import { EntityRemoveAfterEvent } from '../index';

/**
 * 管理与实体移除相关的回调。
 */
export class EntityRemoveAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当实体被移除时（例如，可能未加载，或在被杀死后移除）将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EntityRemoveAfterEvent) => void): (arg0: EntityRemoveAfterEvent) => void;
    /**
     * @remarks
     * 从实体移除的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityRemoveAfterEvent) => void): void;
}