/**
 * Thrown when attempting to register a previously registered item custom component 
 * for handling new events after using the /reload command.
 */
// @ts-ignore Class inheritance is allowed for natively defined classes
export class ItemCustomComponentReloadNewEventError extends Error {
    private constructor();
}