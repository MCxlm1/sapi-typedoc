/* IMPORT */ import { EntityHealthChangedAfterEvent } from '../index';

/**
 * 管理与实体生命值改变相关的回调。
 */
export class EntityHealthChangedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当实体生命值以任何程度改变时将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: EntityHealthChangedAfterEvent) => void): (arg0: EntityHealthChangedAfterEvent) => void;
    /**
     * @remarks
     * 从实体生命值改变的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityHealthChangedAfterEvent) => void): void;
}