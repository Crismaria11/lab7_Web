module.exports = {
    mode: 'development',
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: 'babel-loader'
        },
        {
            test: /\.(jpe?g|gif|png)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 10000
                },
                loader: 'file-loader',
                options: {
                    limit: 10000
                }
            }

        }
    ]

    },
    devServer: {
        contentBase: "dist"
    }
}