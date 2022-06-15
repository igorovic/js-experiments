//@ts-check
export class InitEvent extends CustomEvent {
    constructor(detail) {
        super("INIT", { bubbles: false, detail })
    }
}

export class BubblyEvent extends CustomEvent {
    constructor(detail) {
        super("BUBBLY", { bubbles: true, detail })
    }
}