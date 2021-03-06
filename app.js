require('babel-core/register')({
  presets: ['es2015', 'react', 'stage-1'],
  plugins: ['dynamic-import-webpack']
});
require.extensions['.scss'] = () => {
  return;
};


var express = require('express');
var path = require('path');
var app = express();

// request handler for server side rendering
var requestHandler = require('./requestHandler');

//Proxy
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer( {
  target:'http://localhost:3001'
});

app.use('/api', function(req,res){
  apiProxy.web(req,res);
})
//END PROXY


app.use(express.static(path.join(__dirname, 'public')));

// view engine setup;
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(requestHandler);
// app.get('*', function(req, res) {
//   res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
// })

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
