var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var engine = require('consolidate');

var appRoutes = require('./routes/appRoutes');
// var users = require('./routes/users');

var app = express();
///---------SET UP SEED DATA
// if (app.get('env') === 'development'){
//
//   var setupController = require('./controllers/setupController');
//   setupController(app);
//
// }
////------///




app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(__dirname + '/../../dist'));
app.use('/', express.static(__dirname + '/../public'));
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());

app.set('views', path.join(__dirname, 'src'));
app.engine('html', engine.handlebars);
app.set('view engine', 'html');

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE');
  next();
});

app.use(logger('dev'));

//mongoose stuff
mongoose.connect('thedaruma:test123@ds145677.mlab.com:45677/directory');

var db = mongoose.connection;
mongoose.Promise = global.Promise;

//routes
app.use('/', appRoutes);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

// all other routes are handled by Angular
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname,'/../../dist/index.html'));
});

app.listen(app.get('port'), function() {
  console.log('Codigo Directory listening on port ' + app.get('port'));
});
