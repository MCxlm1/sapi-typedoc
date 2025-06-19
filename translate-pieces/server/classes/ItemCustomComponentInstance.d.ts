/* IMPORT */ import { CustomComponentParameters, ItemComponent } from '../index';

/**
 * An instance of a custom component on an item.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentInstance extends ItemComponent {
    private constructor();
    readonly customComponentParameters: CustomComponentParameters;
}