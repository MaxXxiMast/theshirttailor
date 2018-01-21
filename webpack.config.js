require('dotenv').config();

const path = require('path');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');


if (process.env.NODE_ENV === 'analyse') {
  plugins.push(new BundleAnalyzerPlugin());
}


module.exports =  {
  entry: './src/client.js',
  entry: {
    client: './src/client.js',
    vendor: ['react', 'react-dom', 'react-router-dom'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new HtmlWebpackPlugin({
      template: '!!raw-loader!./views/NOindex.ejs',
      filename: '../../views/index.ejs',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      chunksSortMode(a, b) {
        const order = ['client', 'vendor'];
        return order.indexOf(b.names[0]) - order.indexOf(a.names[0]);
      }
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer',
      preload: /\.(js|css)$/
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['client', 'vendor'],
      filename: '[name]-[hash].bundle.js',
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'public/build'),
    publicPath: `${process.env.PUBLIC_PATH || ''}/build/`,
    chunkFilename: '[name]-[chunkhash].chunk.js',
    filename: '[name]-bundle.js',
    sourceMapFilename: '[file].map'
  },
  target: 'web',
  watch: true,
  module: {
    loaders: [
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loader:'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }, 
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
      }
    ]
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['*', '.js', '.json'],
  },
  devtool: 'source-map',
};