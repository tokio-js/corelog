/// <reference types="node" />
import * as fs from "fs";
/**
 * ## Initializes CORELOG
 * @param {fs.PathLike | undefined} location - The directory to store the logs
 * @returns {void}
*/
export declare function init(location?: fs.PathLike): void;
/**
 * ## Logs a message
 * @param {"CORE" | "TOP"} type - The type of log
 * @param {string} m - The message to log
 * @returns {void}
 */
export declare function log(type: "CORE" | "TOP", m: string): void;
/**
 * ## Gets the binary status
 * @returns {boolean} - Whether or not the binary is loaded
 */
export declare function getStatus(): boolean;
/**
 * ## Sets the binary status
 * @param {boolean} load - Whether or not to load the binary
 * @returns {void}
 */
export declare function setStatus(load: boolean): void;
//# sourceMappingURL=lib.d.ts.map