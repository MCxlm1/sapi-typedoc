/* IMPORT */ import { Container, EntityComponent, InvalidEntityError } from '../index';

/**
 * 表示一个实体的物品栏属性。
 * 
 * 定义此实体的物品栏属性。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityInventoryComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 表示实体每层强度（实体组件 `minecraft:strength`）可以获得的额外槽数。
     * 
     * 实体每层额外强度可获得的槽数。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly additionalSlotsPerStrength: number;
    /**
     * @remarks
     * 若为 `true`，则表示实体物品栏中的物品可被漏斗或漏斗矿车转移走。
     * 
     * 如果为 true，则漏斗可以从此物品栏中移除内容物。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly canBeSiphonedFrom: boolean;
    /**
     * @remarks
     * 表示实体的容器。若实体已被移除则为 `undefined`。
     * 
     * 定义此实体的容器。如果实体已被移除，则容器将为 undefined。
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
     * 此实体拥有的容器类型。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly containerType: string;
    /**
     * @remarks
     * 表示实体容器的槽位数量。
     * 
     * 容器的槽数。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly inventorySize: number;
    /**
     * @remarks
     * 若为 `true`，则表示实体死亡不会掉落物品栏的物品。
     * 
     * 如果为 true，则实体死亡时不会掉落其物品栏。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly 'private': boolean;
    /**
     * @remarks
     * 若为 `true`，则表示实体物品栏仅能被其主人或实体自己访问和操作。
     * 
     * 如果为 true，则只有实体的所有者或实体本身可以访问其物品栏。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly restrictToOwner: boolean;
    static readonly componentId = 'minecraft:inventory';
}