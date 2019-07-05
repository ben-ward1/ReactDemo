const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: { 'main': './wwwroot/Source/app.js' },
    output: {
        path: path.resolve(__dirname, 'wwwroot/dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    mode: 'development',
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jquery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
        })],

    module: {
        rules: [
            { test: /\.css?$/, use: [{ loader: "style-loader" }, {loader: "css-loader"}]},
            {
                test: /\.js?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
            }
        }]
    }
};