/* IMPORT */ import { WeatherType } from '../index';

/**
 * 包含天气变化事件的相关信息。
 */
export class WeatherChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 天气变化前的天气类型。
     *
     */
    readonly fromWeather: WeatherType;
    /**
     * @remarks
     * 天气变化后的天气类型。
     *
     */
    readonly toWeather: WeatherType;
}