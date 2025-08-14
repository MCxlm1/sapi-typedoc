/* IMPORT */ import { BlockPermutation, minecraftvanilladata } from '../index';

/**
 * 方块状态参数类型
 * 
 * 由 {@link BlockPermutation} 的 matches 和 resolve 函数使用的类型别名，
 * 用于将方块状态参数类型缩小到 {@link @minecraft/vanilla-data.BlockStateMapping} 映射的类型。
 * 
 * @beta
 */
export type BlockStateArg<T> = T extends `${minecraftvanilladata.MinecraftBlockTypes}`
    ? T extends keyof minecraftvanilladata.BlockStateMapping
        ? minecraftvanilladata.BlockStateMapping[T]
        : never
    : Record<string, boolean | number | string>;