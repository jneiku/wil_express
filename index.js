var express = require('express')
// varjmongoose = require("mongoose")

// Connect to mongodb
// var MONGOHQ_URL="mongodb://wil_test:nonuvlutonm@c1104.candidate.11.mongolayer.com:11104/wil_test"
// var connect = function () {
//   var options = { server: { socketOptions: { keepAlive: 1 } } };
//   mongoose.connect(MONGOHQ_URL, options)
// };
// connect();

// mongoose.connection.on('error', console.log);
// mongoose.connection.on('disconnected', connect);
// var db = mongoose.connection

// init Express
var app = express()
var port = process.env.PORT || 5000;

// MODELS
// Records = mongoose.model('records', { station: String, temperature: Array })


// ROUTES
app.get('/', function (req, res) {
  return res.send('Hey, Dad!')
})

// app.get('/list', function (req, res) {
//   Records.find({}, function(err, documents) {
//     return res.json(documents)
//   })
// })

app.listen(port)