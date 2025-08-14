/* IMPORT */ import { Entity } from '../index';

/**
 * 包含注册实体事件的可选参数。
 */
export interface EntityEventOptions {
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
}