"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setStatus = exports.getStatus = exports.log = exports.init = void 0;
var SHOULD_LOAD = true;
function load() {
    if (getStatus()) {
        return require("../bin/");
    }
    else {
        class CoreLog {
            constructor(_) { }
            corelog(_) { }
            toplog(_) { }
        }
        return { CoreLog: CoreLog };
    }
}
let TRACER = {
    corelog(_) { },
    toplog(_) { }
};
/**
 * ## Initializes CORELOG
 * @param {fs.PathLike | undefined} location - The directory to store the logs
 * @returns {void}
*/
function init(location) {
    let logger;
    logger = new (load()).CoreLog(location || ".turbo/corelogs");
    TRACER = {
        corelog(m) {
            logger.corelog(m);
        },
        toplog(m) {
            logger.toplog(m);
        },
    };
}
exports.init = init;
/**
 * ## Logs a message
 * @param {"CORE" | "TOP"} type - The type of log
 * @param {string} m - The message to log
 * @returns {void}
 */
function log(type, m) {
    if (type === "CORE")
        TRACER.corelog(m);
    else
        TRACER.toplog(m);
}
exports.log = log;
/**
 * ## Gets the binary status
 * @returns {boolean} - Whether or not the binary is loaded
 */
function getStatus() { return SHOULD_LOAD; }
exports.getStatus = getStatus;
/**
 * ## Sets the binary status
 * @param {boolean} load - Whether or not to load the binary
 * @returns {void}
 */
function setStatus(load) { SHOULD_LOAD = load; }
exports.setStatus = setStatus;
