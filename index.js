#!/usr/bin/env node

var hello = "Hello Cloud"
var openWeatherKey = "ca4eb2d0363241646921ca47a2869f77"
var url = "http://api.openweathermap.org/data/2.5/weather?zip=68505,us&APPID=" + openWeatherKey

var request = require("request");
request(url, function(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body)
}
})

