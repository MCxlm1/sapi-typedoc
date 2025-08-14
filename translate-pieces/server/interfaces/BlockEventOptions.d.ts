/* IMPORT */ import { BlockPermutation } from '../index';

/**
 * 包含注册方块事件的可选参数。
 */
export interface BlockEventOptions {
    /**
     * @remarks
     * 如果设置了此值，则只有当受影响方块的类型与此参数匹配时才会触发此事件。
     */
    blockTypes?: string[];
    /**
     * @remarks
     * 如果设置了此值，则只有当受影响方块的方块状态与此参数匹配时才会触发此事件。
     */
    permutations?: BlockPermutation[];
}