//@ts-check
export class Store extends EventTarget {
    constructor() {
        super();
        this.addEventListener('INIT', this.#init);
        this.addEventListener('BUBBLY', () => console.log("*** store catched event bubbly"))
    }

    #init(event) {
        console.debug("*** store event received", event)
    }

    dispatch = (event) => this.dispatchEvent(event)
}