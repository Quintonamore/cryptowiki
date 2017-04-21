var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/crypto_game', function(request, response) {
  response.render('pages/crypto_game');
});

app.get('/hashing', function(request, response) {
  response.render('pages/hashing');
});

app.get('/factoring', function(request, response){
  response.render('pages/factoring');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
