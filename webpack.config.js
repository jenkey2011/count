const path = require('path');

module.exports = {
    target: 'webworker',
    entry: './src/index.js',
    ouput: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    node: {
        fs: 'empty',
    },
    module: {
        rules: [
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: 'javascript/auto'
            }
        ]
    }

};
