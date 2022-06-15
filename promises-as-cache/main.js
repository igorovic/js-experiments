//@ts-check

const promise = new Promise((resolve, reject) => {
    console.debug('--- this line is printed only once');
    setTimeout(reject, 1000, "error message here")
    //setTimeout(resolve, 1000, "Value returned after delay");
}).catch((e) => {
    console.error("top level error")
    return String(e) + "---"
})

//promise.then(console.log)


setTimeout(() => {
    promise.then(console.log).catch(console.error)
}, 2000)

setTimeout(() => {
    promise.then(console.log).catch(console.error)
}, 3000)

setTimeout(() => {
    promise.then(console.log).catch(console.error)
}, 4500)