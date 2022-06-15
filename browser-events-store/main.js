//@ts-check
import { Store } from "./store.js";
export * from "./events.js"

export const store = new Store();

globalThis.__mystore = store;