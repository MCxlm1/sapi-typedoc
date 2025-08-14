/* IMPORT */ import { ButtonState, InputButton } from '../index';

/**
 * 传递给 {@link @minecraft/Server.PlayerButtonInputAfterEventSignal.subscribe} 的接口，
 * 用于过滤传递给提供回调函数的事件。
 */
export interface InputEventOptions {
    /**
     * @remarks
     * 回调函数应被调用的按钮。如果未定义，则回调函数将为所有按钮调用。
     */
    buttons?: InputButton[];
    /**
     * @remarks
     * 回调函数应被调用的状态。如果未定义，则回调函数将为所有按钮状态调用。
     */
    state?: ButtonState;
}