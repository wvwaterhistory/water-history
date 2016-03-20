module.exports = {
    entry:  './src',
    output: {
        path:     'builds',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                include: __dirname + '/src',
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                },
            },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.less/, loaders: ['style', 'css', 'less'] },
            { test: /\.html/, loader: 'html' },
            { test: /\.json/, loader: 'style-loader'},
            { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },

            { test: /\.png$/, loader: "url-loader?mimetype=image/png" },
            { test: /\.jpg$/, loader: "url-loader?mimetype=image/jpeg" },


            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.woff2/,   loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" }
        ],
    }
};
