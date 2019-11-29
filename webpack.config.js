const path = require('path');

module.exports = {
    entry:{
        app: ['@babel/polyfill',"./src/app.js"]
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    watch: true,
    module:{
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use:{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    devServer: {
        //publicPath: '/scripts/',
        contentBase: path.join(__dirname, 'dist'),
        watchContentBase: true,
        open: true
    }
}