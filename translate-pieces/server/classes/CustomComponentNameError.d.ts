/* IMPORT */ import { CustomComponentNameErrorReason } from '../index';

export class CustomComponentNameError extends Error {
    private constructor();
    /**
     * @remarks
     * @earlyExecution
     * 自定义组件名称错误的原因
     */
    reason: CustomComponentNameErrorReason;
}