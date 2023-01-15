import * as corelog from "../src/lib";
import * as tru from "@tokio-js/trutrace";

corelog.init("corelogs");

function trace(msg: any) {
    const trutrace = tru.trace();
    const traces = tru.format(msg, "TRC", trutrace, new Date());
    console.log(traces[0]);
    corelog.log("CORE", traces[1]);
    corelog.log("TOP", traces[2]);
}

function add(x: number, y: number): number {
    let result = x + y;
    trace("Added " + x + " and " + y + " to get " + result);
    return result;
}

function main() {
    let result = add(1, 2);
    console.log("Result: " + result);
}

main();
