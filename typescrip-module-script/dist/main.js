// using .js extension on import is the only way for the moment
// to properly compile
// event if i
import * as greetings from "./greetings.js";
import * as vendor from "./vendor.js";
export function sayHi() {
    const greet = greetings.frHi();
    console.log(`${greet} module`);
}
export function testSlug(val) {
    console.log("slug is", vendor.slugify(val));
}
