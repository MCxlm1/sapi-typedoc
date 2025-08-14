/* IMPORT */ import { EntityType, minecraftvanilladata } from '../index';

/**
 * 原生实体标识符类型
 * 
 * 定义了原生实体标识符的类型，包括实体类型、Minecraft 原生数据中的实体类型，
 * 以及带参数的实体类型字符串。
 * 
 * @beta
 */
export type VanillaEntityIdentifier =
    | EntityType
    | minecraftvanilladata.MinecraftEntityTypes
    | `${minecraftvanilladata.MinecraftEntityTypes}`
    | `${minecraftvanilladata.MinecraftEntityTypes}<${string}>`;