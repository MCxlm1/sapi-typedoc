/* IMPORT */ import { BookError, BookPageContentError, InvalidEntityError, InvalidItemStackError, ItemComponent, RawMessage } from '../index';

/**
 * @beta
 * 当出现在物品上时，此物品是书本物品。可以访问和修改书本的内容并签名。
 */
// @ts-ignore 类继承允许用于原生定义的类
export class ItemBookComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 如果书本已签名，则为作者的名称，否则为 undefined。
     *
     * @throws 使用此属性时可能抛出异常。
     *
     * {@link InvalidItemStackError}
     */
    readonly author?: string;
    /**
     * @remarks
     * 书本中页面的内容，以字符串格式表示。不是字符串格式的条目将为 undefined。
     *
     * @throws 使用此属性时可能抛出异常。
     *
     * {@link InvalidItemStackError}
     */
    readonly contents: (string | undefined)[];
    /**
     * @remarks
     * 确定书本是否已签名。
     *
     * @throws 使用此属性时可能抛出异常。
     *
     * {@link InvalidItemStackError}
     */
    readonly isSigned: boolean;
    /**
     * @remarks
     * 书本的页数。
     *
     * @throws 使用此属性时可能抛出异常。
     *
     * {@link InvalidItemStackError}
     */
    readonly pageCount: number;
    /**
     * @remarks
     * 书本中页面的内容，以 {@link RawMessage} 格式表示。不是 {@link RawMessage} 格式的条目将为 undefined。
     *
     * @throws 使用此属性时可能抛出异常。
     *
     * {@link InvalidItemStackError}
     */
    readonly rawContents: (RawMessage | undefined)[];
    /**
     * @remarks
     * 如果书本已签名，则为书本的标题，否则为 undefined。
     *
     * @throws 使用此属性时可能抛出异常。
     *
     * {@link InvalidItemStackError}
     */
    readonly title?: string;
    static readonly componentId = 'minecraft:book';
    /**
     * @remarks
     * 获取给定索引页面的字符串格式内容。
     *
     * @param pageIndex
     * 页面的索引。
     * @returns
     * 如果提供了有效索引且为字符串格式，则返回页面的内容，否则返回 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidItemStackError}
     */
    getPageContent(pageIndex: number): string | undefined;
    /**
     * @remarks
     * 获取给定索引页面的 {@link RawMessage} 格式内容。
     *
     * @param pageIndex
     * 页面的索引。
     * @returns
     * 如果提供了有效索引且为 {@link RawMessage} 格式，则返回页面的内容，否则返回 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidItemStackError}
     */
    getRawPageContent(pageIndex: number): RawMessage | undefined;
    /**
     * @remarks
     * 在给定索引处插入页面。如果索引大于当前书本大小，则会创建空页面。
     * 页面对于字符串和 {@link RawMessage} 的 JSON 表示形式最大限制为 256 个字符。
     * 书本最大限制为 50 页。
     *
     * @worldMutation
     *
     * @param pageIndex
     * 页面的索引。
     * @param content
     * 要为页面设置的内容。可以是单个字符串或 {@link RawMessage} 或字符串和/或 {@link RawMessage} 的数组
     * @throws 此函数可能抛出错误。
     *
     * {@link BookError}
     *
     * {@link BookPageContentError}
     *
     * {@link InvalidItemStackError}
     */
    insertPage(pageIndex: number, content: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks
     * 移除给定索引处的页面。此页面后面的现有页面将向后移动以填充空白空间。
     *
     * @worldMutation
     *
     * @param pageIndex
     * 页面的索引。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidItemStackError}
     */
    removePage(pageIndex: number): void;
    /**
     * @remarks
     * 设置书本页面的内容。预先存在的页面将被清除。
     * 页面对于字符串和 {@link RawMessage} 的 JSON 表示形式最大限制为 256 个字符。
     * 书本最大限制为 50 页。
     *
     * @worldMutation
     *
     * @param contents
     * 每个页面内容的数组。每个页面可以是单个字符串或 {@link RawMessage} 或字符串和/或 {@link RawMessage} 的数组。
     * @throws 此函数可能抛出错误。
     *
     * {@link BookError}
     *
     * {@link BookPageContentError}
     *
     * {@link InvalidItemStackError}
     */
    setContents(contents: ((RawMessage | string)[] | RawMessage | string)[]): void;
    /**
     * @remarks
     * 设置或创建特定页面的内容。如果索引大于当前书本大小，则会创建空页面。
     * 页面对于字符串和 {@link RawMessage} 的 JSON 表示形式最大限制为 256 个字符。
     * 书本最大限制为 50 页。
     *
     * @worldMutation
     *
     * @param pageIndex
     * 页面的索引。
     * @param content
     * 要为页面设置的内容。可以是单个字符串或 {@link RawMessage} 或字符串和/或 {@link RawMessage} 的数组
     * @throws 此函数可能抛出错误。
     *
     * {@link BookError}
     *
     * {@link BookPageContentError}
     *
     * {@link InvalidItemStackError}
     */
    setPageContent(pageIndex: number, content: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks
     * 签名书本，给它一个标题和作者名称。签名后，玩家不能再直接编辑书本。
     * 标题最大字符限制为 16。
     *
     * @worldMutation
     *
     * @param title
     * 要给书本的标题。
     * @param author
     * 书本作者的名称。
     * @throws 此函数可能抛出错误。
     *
     * {@link BookError}
     *
     * {@link InvalidEntityError}
     *
     * {@link InvalidItemStackError}
     */
    signBook(title: string, author: string): void;
}