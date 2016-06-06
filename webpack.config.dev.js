import webpack from 'webpack';
import path from 'path';

export default {
  // display debug info
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  // display a list of all the files bundling
  noInfo: false,
  // entry points, inject middleware like hotreloading
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    './src/index' //apps entry point passed in last
  ],
  // targeting the web, bundle in a way that browser can understand; can use node as well
  target: 'web', 
  output: {
    // create bundles in memory that serves to browser
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  // webpack devserver where the source code is
  devServer: {
    contentBase: './src'
  },
  plugins: [
    // replace modules without full browser refresh
    new webpack.HotModuleReplacementPlugin(),
    // keep errors from breaking hot reloading experience, error msg in browser
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      // handle js and use babel
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loaders: ['style', 'css']},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};
