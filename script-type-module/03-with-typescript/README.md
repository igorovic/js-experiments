# Note

The trick is to use the `.js` extension in your typescript imports.

```ts
// file: worker.ts
import { job } from "./date.js";
// this works even though the file on disk has the extension `.ts`
```

# configure extensions on static server

It is also possible to configure a static server to resolve path to `.js` extensions when requesting an file.

for instance with express: [express static](https://expressjs.com/en/resources/middleware/serve-static.html#extensions)

```js
 express.static(…, { extensions: ['js'] })
```
