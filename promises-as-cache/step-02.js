//@ts-check
// --- utilities
console.log(`START: ${new Date().toISOString()}`);
function log(value) {
    const d = new Date().toISOString()
    console.log(`${d}: ${String(value)}`);
}

// --- code
let P;
function getPromise() {
    if (Boolean(P)) return P;
    P = new Promise((resolve, reject) => {
        console.debug(`--- this line is executed only once ${new Date().getSeconds()}`);
        resolve("Value returned from promise");
        //setTimeout(resolve, 13000, "Value returned from promise");
    })
    return P;
}

setTimeout(() => {
    log('caller 4sec')
    getPromise().then(log)
}, 4000)

setTimeout(() => {
    log('caller 2sec')
    getPromise().then(log)
}, 2000)

setTimeout(() => {
    log('caller 3sec')
    getPromise().then(log)
}, 3000)