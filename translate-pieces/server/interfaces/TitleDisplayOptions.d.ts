/* IMPORT */ import { RawMessage, TicksPerSecond } from '../index';

/**
 * 包含显示标题和可选副标题的附加选项。
 */
export interface TitleDisplayOptions {
    /**
     * @remarks
     * 标题和副标题的淡入持续时间，以刻为单位。每秒有 20 刻。
     * 使用 {@link TicksPerSecond} 常量在刻和秒之间进行转换。
     */
    fadeInDuration: number;
    /**
     * @remarks
     * 标题和副标题的淡出时间，以刻为单位。每秒有 20 刻。
     * 使用 {@link TicksPerSecond} 常量在刻和秒之间进行转换。
     */
    fadeOutDuration: number;
    /**
     * @remarks
     * 标题和副标题保持在原位的时间，以刻为单位。每秒有 20 刻。
     * 使用 {@link TicksPerSecond} 常量在刻和秒之间进行转换。
     */
    stayDuration: number;
    /**
     * @remarks
     * 可选的副标题文本。
     */
    subtitle?: (RawMessage | string)[] | RawMessage | string;
}