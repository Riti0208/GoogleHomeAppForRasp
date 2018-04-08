
require('date-utils');
const https = require('https');
const request = require('request');

var dt = new Date();

console.log(dt.toFormat("YYYY/MM/DD/HH24時MI分SS秒"));
const URL = 'https://script.google.com/macros/s/AKfycbwJYNVMICtqDNwIsXS50LIsFEoPC_XeN41Eljj6o5_G2DjXmjU/exec?kitaku=帰宅&zikan=' + dt.toFormat("YYYY/MM/DD HH24時MI分SS秒");
https.get(URL, function (res) {
    console.log(URL);
});

request.get(URL, function(err, res, body) {
  console.log(body);
});