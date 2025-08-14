/* IMPORT */ import { VanillaEntityIdentifier } from '../index';

/**
 * 实体标识符类型
 * 
 * 用于定义实体标识符的类型，可以是原生实体类型或自定义实体类型。
 * 
 * @beta
 */
export type EntityIdentifierType<T> = [T] extends [never]
    ? VanillaEntityIdentifier
    : T extends string
      ? VanillaEntityIdentifier | T
      : never;