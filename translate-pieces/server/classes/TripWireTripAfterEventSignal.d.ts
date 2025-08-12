/* IMPORT */ import { TripWireTripAfterEvent } from '../index';

/**
 * 管理与绊线被触发相关的回调。
 */
export class TripWireTripAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当绊线被触发时将被调用。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: TripWireTripAfterEvent) => void): (arg0: TripWireTripAfterEvent) => void;
    /**
     * @remarks
     * 从绊线被触发的回调中移除一个回调。
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: TripWireTripAfterEvent) => void): void;
}