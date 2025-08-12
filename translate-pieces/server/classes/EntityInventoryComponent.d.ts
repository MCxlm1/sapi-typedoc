/* IMPORT */ import { Container, EntityComponent, InvalidEntityError } from '../index';

/**
 * 表示一个实体的物品栏属性。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityInventoryComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 表示实体每层强度（实体组件 `minecraft:strength`）可以获得的额外槽数。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly additionalSlotsPerStrength: number;
    /**
     * @remarks
     * 若为 `true`，则表示实体物品栏中的物品可被漏斗或漏斗矿车转移走。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly canBeSiphonedFrom: boolean;
    /**
     * @remarks
     * 表示实体的容器。若实体已被移除则为 `undefined`。
     *
     * @throws 使用此属性时可能抛出异常。
     *
     * {@link InvalidEntityError}
     */
    readonly container: Container;
    /**
     * @remarks
     * 表示实体容器的种类。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly containerType: string;
    /**
     * @remarks
     * 表示实体容器的槽位数量。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly inventorySize: number;
    /**
     * @remarks
     * 若为 `true`，则表示实体死亡不会掉落物品栏的物品。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly 'private': boolean;
    /**
     * @remarks
     * 若为 `true`，则表示实体物品栏仅能被其主人或实体自己访问和操作。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly restrictToOwner: boolean;
    static readonly componentId = 'minecraft:inventory';
}