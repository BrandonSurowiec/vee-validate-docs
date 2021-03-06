module.exports = {
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        stats: 'errors-only',
        contentBase: './docs',
        host: '0.0.0.0',
        port: '8080'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
            {
                test: /.styl$/,
                loaders: ['style', 'css', 'stylus']
            }
        ]
    }
};
