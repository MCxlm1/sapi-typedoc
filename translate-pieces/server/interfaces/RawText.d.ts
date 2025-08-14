/* IMPORT */ import { RawMessage } from '../index';

/**
 * 仅包含 `rawtext` 属性的 `RawMessage`。当 `RawMessage` 被序列化时，内容会被放入 rawtext 属性中，
 * 因此在读取保存的 RawMessages 时这很有用。参见 `BlockSignComponent.setText` 和 
 * `BlockSignComponent.getRawText` 的示例。
 */
export interface RawText {
    /**
     * @remarks
     * 关联告示牌当前值的序列化。
     */
    rawtext?: RawMessage[];
}