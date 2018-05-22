const http = require('http');
const path = require('path');
const express = require('express');
const hbs = require('express-handlebars');

require('console-stamp')(console, "HH:MM:ss.l");

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV;
const isDev = ENV !== 'production';
const publicPath = path.join(__dirname, '..', 'public');
const app = express();

app.use(require('morgan')('short'));
app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// set up hmr for dev
if (isDev) {
  // Step 1: Create & configure a webpack compiler
  const webpack = require('webpack');
  const webpackConfig = require('../config/webpack.dev.config');
  const compiler = webpack(webpackConfig);

  // Step 2: Attach the dev middleware to the compiler & the server
  app.use(require("webpack-dev-middleware")(compiler, {
    logLevel: 'warn',
    publicPath: webpackConfig.output.publicPath
  }));

  // Step 3: Attach the hot middleware to the compiler & the server
  app.use(require("webpack-hot-middleware")(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
  }));

  app.use(express.static('public'));
} else {
  app.use(express.static(publicPath));
}

app.get("/", function(req, res) {
  res.render('home', {
    prod: !isDev
  });
});

if (require.main === module) {
  const server = http.createServer(app);

  console.log(`Server starting in ${ENV}`);

  server.listen(PORT, function() {
    console.log("Listening on %j", server.address());
  });
}
