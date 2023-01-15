var SHOULD_LOAD: boolean = true;
import * as fs from "fs";
function load(): any {
    if(getStatus()){
        return require("../bin/")
    } else {
        class CoreLog {
            constructor(_: string) {}
            public corelog(_: any): void {}
            public toplog(_: any): void {}
        }
        return { CoreLog: CoreLog };
    }
}


interface Tracer {
    corelog(m: any): void,
    toplog(m: any): void
}

let TRACER: Tracer = {
    corelog(_: any): void {},
    toplog(_: any): void {}
};

/**
 * ## Initializes CORELOG
 * @param {fs.PathLike | undefined} location - The directory to store the logs
 * @returns {void}
*/
export function init(location?: fs.PathLike): void {
    let logger: any;
    logger = new (load()).CoreLog(location || ".turbo/corelogs");
    TRACER = {
        corelog(m: any): void {
            logger.corelog(m);
        },
        toplog(m) {
            logger.toplog(m);
        },
    }
}

/**
 * ## Logs a message
 * @param {"CORE" | "TOP"} type - The type of log
 * @param {string} m - The message to log
 * @returns {void}
 */
export function log(type: "CORE" | "TOP", m: string): void {
    if(type === "CORE") TRACER.corelog(m);
    else TRACER.toplog(m);
}

/**
 * ## Gets the binary status
 * @returns {boolean} - Whether or not the binary is loaded
 */
export function getStatus(): boolean { return SHOULD_LOAD}

/**
 * ## Sets the binary status
 * @param {boolean} load - Whether or not to load the binary
 * @returns {void}
 */
export function setStatus(load: boolean): void { SHOULD_LOAD = load;}
