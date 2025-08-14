/* IMPORT */ import { BlockPermutation } from '../index';

/**
 * 基于类型、标签或状态的包含或排除方块的选项。如果没有添加包含选项，
 * 则会选择所有未被排除选项拒绝的方块。如果添加了至少一个包含选项，
 * 则方块必须匹配其中一个包含选项才不会被拒绝。
 */
export interface BlockFilter {
    /**
     * @remarks
     * 方块状态数组，如果任何状态匹配则过滤器应拒绝这些方块。
     *
     */
    excludePermutations?: BlockPermutation[];
    /**
     * @remarks
     * 方块标签数组，如果任何标签匹配则过滤器应拒绝这些方块。
     *
     */
    excludeTags?: string[];
    /**
     * @remarks
     * 方块类型数组，如果任何类型匹配则过滤器应拒绝这些方块。
     *
     */
    excludeTypes?: string[];
    /**
     * @remarks
     * 方块状态数组，如果至少一个状态匹配则过滤器应选择这些方块。
     *
     */
    includePermutations?: BlockPermutation[];
    /**
     * @remarks
     * 方块标签数组，如果至少一个标签匹配则过滤器应选择这些方块。
     *
     */
    includeTags?: string[];
    /**
     * @remarks
     * 方块类型数组，如果至少一个类型匹配则过滤器应选择这些方块。
     *
     */
    includeTypes?: string[];
}