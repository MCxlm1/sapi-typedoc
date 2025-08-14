/* IMPORT */ import { ItemComponentTypeMap, ItemCustomComponentInstance } from '../index';

/**
 * 物品组件返回类型
 * 
 * 用于确定物品组件的返回类型。如果指定的类型存在于 ItemComponentTypeMap 中，
 * 则返回对应的组件类型；否则返回 ItemCustomComponentInstance 类型。
 * 
 * @beta
 */
export type ItemComponentReturnType<T extends string> = T extends keyof ItemComponentTypeMap
    ? ItemComponentTypeMap[T]
    : ItemCustomComponentInstance;