/**
 * Thrown when attempting to register a previously registered item custom component 
 * with a newer API version while using the /reload command.
 */
// @ts-ignore Class inheritance is allowed for native defined classes
export class ItemCustomComponentReloadVersionError extends Error {
    private constructor();
}