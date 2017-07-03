var express = require('express');
var app = express();

app.get('/', function(req,res){
  res.send('hello worldwmefwelkmfewlmfewl');
});

// app.put('/user', function (req, res) {
//   res.send('Got a PUT request at /user');
// });

// app.use('/user/:id', function(req, res, next){
//   console.log('Request Type:', req.method);
//   next();
// });

// app.get('/user/:id', function(req, res, next){
//   res.send('USER');
// });


app.get('/user/:id', function(req, res, next){
   if(req.params.id == 0) next();
   else next('route');
}, function (req, res, next) {
  res.send('User Info');
});

// 处理 /user/:id， 打印出用户 id
app.get('/user/:id', function(req, res, next){
  res.end("req.params.id:"+req.params.id);
});


app.listen(8080);
