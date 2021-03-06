const path = require('path')
const ExtractTextPlugin=require('extract-text-webpack-plugin');

module.exports = {
    entry:  './app/index.js', // 入口文件
    output: {
      path: path.resolve(__dirname, 'build'), // 必须使用绝对地址，输出文件夹
      filename: "bundle.js" // 打包后输出文件的文件名
  },
  module: {
  	rules: [
  	{
            // js 文件才使用 babel
            test: /\.js$/,
             // 使用哪个 loader
             use: 'babel-loader',
            // 不包括路径
            exclude: /node_modules/
        },
        {
        	test: /\.scss$/,
        	use: [{
          loader: "style-loader" // 将 JS 字符串生成为 style 节点
      }, {
          loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
      }, {
          loader: "sass-loader" // 将 Sass 编译成 CSS
      }]

  }
  ]
}
}