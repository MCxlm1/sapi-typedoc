/* IMPORT */ import { PackSettingChangeAfterEvent } from '../index';

/**
 * 管理与包设置更改相关的回调。
 */
export class PackSettingChangeAfterEventSignal {
    private constructor();
    /**
     * @beta
     * @remarks
     * 添加一个回调，当包设置更改时将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PackSettingChangeAfterEvent) => void): (arg0: PackSettingChangeAfterEvent) => void;
    /**
     * @beta
     * @remarks
     * 从包设置更改的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PackSettingChangeAfterEvent) => void): void;
}