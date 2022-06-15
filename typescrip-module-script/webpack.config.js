const path = require('path');
const outputPath = path.resolve(__dirname, 'dist');
console.log("outputPath", outputPath)
/** @type {import('webpack').Configuration} */
module.exports = {
    entry: "./vendor.ts",
    mode: "development",
    output: {
        filename: "vendor.js",
        path: outputPath,
        library: {
            type: "module"
        }
        //chunkFormat: "module"
    },
    experiments: {
        outputModule: true
    }
}