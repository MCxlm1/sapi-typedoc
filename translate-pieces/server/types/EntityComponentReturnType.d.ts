/* IMPORT */ import { EntityComponent, EntityComponentTypeMap } from '../index';

/**
 * 实体组件返回类型
 * 
 * 用于确定实体组件的返回类型。如果指定的类型存在于 EntityComponentTypeMap 中，
 * 则返回对应的组件类型；否则返回 EntityComponent 类型。
 * 
 * @beta
 */
export type EntityComponentReturnType<T extends string> = T extends keyof EntityComponentTypeMap
    ? EntityComponentTypeMap[T]
    : EntityComponent;