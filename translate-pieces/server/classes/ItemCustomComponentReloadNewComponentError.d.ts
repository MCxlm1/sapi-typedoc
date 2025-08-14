/**
 * Thrown when attempting to register a previously unregistered item custom component after using the /reload command.
 */
// @ts-ignore 类继承允许用于原生定义的类
export class ItemCustomComponentReloadNewComponentError extends Error {
    private constructor();
}