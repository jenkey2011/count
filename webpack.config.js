const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
    target: 'node',
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    // plugins: [
    //     new NodePolyfillPlugin()
    // ],
    // node: {
    // },
    // module: {
    //     rules: [
    //         {
    //             test: /\.mjs$/,
    //             include: /node_modules/,
    //             type: 'javascript/auto'
    //         }
    //     ]
    // },

};
