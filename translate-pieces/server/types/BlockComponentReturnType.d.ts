/* IMPORT */ import { BlockComponentTypeMap, BlockCustomComponentInstance } from '../index';

/**
 * 方块组件返回类型
 * 
 * 用于确定方块组件的返回类型。如果指定的类型存在于 BlockComponentTypeMap 中，
 * 则返回对应的组件类型；否则返回 BlockCustomComponentInstance 类型。
 * 
 * @beta
 */
export type BlockComponentReturnType<T extends string> = T extends keyof BlockComponentTypeMap
    ? BlockComponentTypeMap[T]
    : BlockCustomComponentInstance;