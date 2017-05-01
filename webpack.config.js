//一个常见的Webpack配置文件
//html-webpack-plugin是webpack的一个自动生成html文件的插件
let HtmlWebpackPlugin = require('html-webpack-plugin');
//把CSS打包成一个独立CSS文件
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {//用object方式设置多个入口点，常用于多页面
    index:__dirname + "/src/index/index.js",
    about:__dirname + "/src/about/about.js"
  },
  output: {
    path: __dirname + "/build",
    filename: "[name]-[hash].js"
  },

    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: '"style-loader!css-loader"'
            }
            { 
                test: /\.scss$/, 
                loader: 'style!css!sass?sourceMap'
            },
        ]
    },
    //webpack插件项
    plugins:[
      new HtmlWebpackPlugin({
        chunks:["index"],
        title: 'index页面',
        filename: 'index.html',
        template: './src/template.html',//指定用于自动生成html文件的模板
      }),
      new HtmlWebpackPlugin({
        chunks:["about"],
        title: 'about页面',
        filename: 'about.html',
        template: './src/template.html',//指定用于自动生成html文件的模板
      }),
      // new ExtractTextPlugin("styles.css")
  ],
  postcss: [
    require('autoprefixer')
  ], 

  //其它解决方案配置
  resolve: {
      root: '/Users/wwx/workspace/demo-webpack', //绝对路径
      extensions: ['', '.js', '.json', '.scss'],
      alias: {
          pubJs : 'src/pub/pub.js',
          pubCss : 'src/pub/pub.css'
      }
  }
}