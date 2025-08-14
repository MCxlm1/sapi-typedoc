/**
 * 包含基于记分项分数过滤玩家的附加选项。
 */
export interface EntityQueryScoreOptions {
    /**
     * @remarks
     * 如果设置为 true，则此分数范围内的实体和玩家将被排除在查询结果之外。
     */
    exclude?: boolean;
    /**
     * @remarks
     * 如果定义，则仅包括分数等于或低于 maxScore 的玩家。
     */
    maxScore?: number;
    /**
     * @remarks
     * 如果定义，则仅包括分数等于或高于 minScore 的玩家。
     */
    minScore?: number;
    /**
     * @remarks
     * 要过滤的记分项标识符。
     */
    objective?: string;
}
/**
 * Contains additional options for filtering players based on
 * their score for an objective.
 */
export interface EntityQueryScoreOptions {
    /**
     * @remarks
     * If set to true, entities and players within this score range
     * are excluded from query results.
     *
     */
    exclude?: boolean;
    /**
     * @remarks
     * If defined, only players that have a score equal to or under
     * maxScore are included.
     *
     */
    maxScore?: number;
    /**
     * @remarks
     * If defined, only players that have a score equal to or over
     * minScore are included.
     *
     */
    minScore?: number;
    /**
     * @remarks
     * Identifier of the scoreboard objective to filter on.
     *
     */
    objective?: string;
}