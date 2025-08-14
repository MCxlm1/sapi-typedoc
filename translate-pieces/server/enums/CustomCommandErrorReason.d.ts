/**
 * 自定义命令注册失败的原因。
 */
export enum CustomCommandErrorReason {
    /**
     * @remarks
     * 命令名称已被注册。
     *
     */
    AlreadyRegistered = 'AlreadyRegistered',
    /**
     * @remarks
     * 自定义命令引用了未注册的枚举。
     *
     */
    EnumDependencyMissing = 'EnumDependencyMissing',
    /**
     * @remarks
     * 提供的自定义命令命名空间与此前为此附加包注册的命名空间不匹配。
     *
     */
    NamespaceMismatch = 'NamespaceMismatch',
    /**
     * @remarks
     * 自定义命令中定义了过多的命令参数。
     *
     */
    ParameterLimit = 'ParameterLimit',
    /**
     * @remarks
     * 在世界初始化事件之后无法访问自定义命令注册表。
     *
     */
    RegistryInvalid = 'RegistryInvalid',
    /**
     * @remarks
     * 重载期间无法重新定义命令参数。只能更改脚本闭包本身。
     *
     */
    RegistryReadOnly = 'RegistryReadOnly',
    /**
     * @beta
     * @remarks
     * 非枚举类型的命令参数不能使用 enumName。
     *
     */
    UnexpectedEnumName = 'UnexpectedEnumName',
}