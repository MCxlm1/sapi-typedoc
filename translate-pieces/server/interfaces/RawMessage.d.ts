/* IMPORT */ import { RawMessageScore } from '../index';

/**
 * 定义用于更灵活的 JSON 结构。
 * @seeExample addTranslatedSign.ts 9d3a2d98
 * @seeExample showTranslatedMessageForm.ts
 * @seeExample addTranslatedSign.ts 604a92ba
 */
export interface RawMessage {
    /**
     * @remarks
     * 提供当前消息的原始文本等效内容。
     */
    rawtext?: RawMessage[];
    /**
     * @remarks
     * 提供一个将被分数值替换的标记。
     */
    score?: RawMessageScore;
    /**
     * @remarks
     * 提供要使用的字符串文字值。
     */
    text?: string;
    /**
     * @remarks
     * 提供翻译标记，如果客户端在玩家语言中有匹配该标记的可用资源，则会在客户端上进行翻译。
     */
    translate?: string;
    /**
     * @remarks
     * 翻译标记的参数。可以是字符串数组或包含原始文本对象数组的 RawMessage。
     */
    with?: string[] | RawMessage;
}