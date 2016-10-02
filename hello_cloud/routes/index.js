var express = require('express');
var router = express.Router();
var request = require('request');
var openWeatherKey = 'ca4eb2d0363241646921ca47a2869f77';
var url = 'http://api.openweathermap.org/data/2.5/weather?zip=68505,us&APPID=' + openWeatherKey;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/helloworld', function(req, res, next) {
  res.render('helloworld', {title: 'Hello, World!' });
});

router.get('/getWeather', function(req, res, next) {
  var weather_data = '';
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
      weather_data = String(body);
      res.render('getweather', {weather_data: body});
    }
    else {
      console.log(response.statusCode + body);
      res.render('helloworld', {title: 'Hello, World!' });
    }
  });
});

module.exports = router;
