//@ts-check
// --- utilities
console.log(`START: ${new Date().toISOString()}`);
function log(value) {
    const d = new Date().toISOString()
    console.log(`${d}: ${String(value)}`);
}

// --- code
const promise1 = new Promise((resolve, reject) => {
    console.debug('--- this line is executed only once');
    resolve("Value returned from promise");
    //setTimeout(resolve, 13000, "Value returned from promise");
})

setTimeout(() => {
    log('caller 4sec')
    promise1.then(log)
}, 4000)

setTimeout(() => {
    log('caller 2sec')
    promise1.then(log)
}, 2000)

setTimeout(() => {
    log('caller 3sec')
    promise1.then(log)
}, 3000)

