import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  // public path we defined in config
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

// any request received end up returning index.html
app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    // open the browser using open package in npm
    open(`http://localhost:${port}`);
  }
});
