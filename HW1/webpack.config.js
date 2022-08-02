const path = require('path');

module.exports = {
    target: 'node',
    entry: './src/index.ts',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'program.js',
        clean: true
    },
    devtool: 'source-map',
    mode: 'development',
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
        ],
    }
}