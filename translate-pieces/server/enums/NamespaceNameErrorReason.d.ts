/**
 * 描述命名空间名称错误抛出原因的枚举
 */
export enum NamespaceNameErrorReason {
    /**
     * @remarks
     * 使用了受限的命名空间作为命名空间
     *
     */
    DisallowedNamespace = 'DisallowedNamespace',
    /**
     * @remarks
     * 当需要命名空间时名称缺少命名空间
     *
     */
    NoNamespace = 'NoNamespace',
}