const corelog = require("../src/lib");
const tru = require("trutrace");

corelog.init("corelogs");

function trace(msg) {
    const [simple, clog, toplog] = tru.format(msg, "TRC", tru.trace(), new Date());
    console.log(simple);
    corelog.log("CORE", clog);
    corelog.log("TOP", toplog);
}

function add(x, y) {
    let result = x + y;
    trace("Added " + x + " and " + y + " to get " + result);
    return result;
}

function main() {
    let result = add(1, 2);
    console.log("Result: " + result);
}

main();
