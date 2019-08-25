var path= require("path");
var webpack = require("webpack");
module.export ={
entry: path.resolve(__dirname, 'src/index.js'),
output: {
  path: path.resolve(__dirname,'dist'),
  filename: 'bundle.js',
  publicPath: '/'
},

module: {
  loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
          presets: ["es2015","stage-2","react"]
      }

  }]
}

};