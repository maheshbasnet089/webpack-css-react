const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'


module.exports = {
    devtool : !isProduction ? 'source-map' : false, 
    output : {
        path : path.resolve(__dirname,'dist'), 
        filename : '[name].[fullhash:8].js', 
        sourceMapFilename : '[name].[fullhash:8].map', 
        chunkFilename : '[id].[fullhash:8].js', 
        publicPath : "/",
    }, 
    resolve : {
        extensions : ['.ts','.tsx','.js','.json','.css']
    }, 
    target : 'web', 
    mode : isProduction ? 'production' : 'development',
    module : {
        rules : [
            {
                test : /\.(tsx|ts)$/, 
                exclude : /node_modules/, 
                use : {
                    loader : 'ts-loader', 
                    options : {
                        transpileOnly : true
                    }
                }
            }, 
            {
                test : /\.css$/, 
                use: [
                    {
                    loader: 'style-loader'
                    },
                    {
                    loader: 'css-loader',
                    options: {
                    modules: {
                    localIdentName: '[local]--[hash:base64:5]'
                    }
                    }
                    }
                    ]
            }
        ]
    }, 
    plugins : [
        new ForkTsCheckerWebpackPlugin(), 
        new HtmlWebpackPlugin({
            title : 'Haha Hehe Huhu', 
            template : './src/index.html', 
            filename : './index.html'
        })
    ], 
    optimization : {
        splitChunks : {
            cacheGroups : {
                default : false, 
                commons : {
                    test : /node_modules/, 
                    name : 'vendor', 
                    chunks : 'all'
                }
            }
        }
    }
}