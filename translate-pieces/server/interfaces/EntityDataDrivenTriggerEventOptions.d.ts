/* IMPORT */ import { Entity } from '../index';

/**
 * 指定用于为实体注册数据驱动触发事件的附加过滤器。
 */
export interface EntityDataDrivenTriggerEventOptions {
    /**
     * @remarks
     * 如果设置了此值，则此事件只会为与此集合内的实体匹配的实体触发。
     */
    entities?: Entity[];
    /**
     * @remarks
     * 如果设置了此值，则此事件只会为受影响实体的类型与此参数匹配时触发。
     */
    entityTypes?: string[];
    /**
     * @remarks
     * 如果设置了此值，则此事件只会为受影响的触发事件与此参数中列出的事件之一匹配时触发。
     */
    eventTypes?: string[];
}