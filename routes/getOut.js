var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile');
var yukariVoice = require('../yukariVoice');
var sendFlag = true;
/* GET users listing. */
router.get('/', function(req, res, next) {
  jsonfile.readFile('./getOutInfo.json', {
    encoding: 'utf-8', 
    reviver: null, 
    throws: true
  }, function (err, data) {
    sendFlag = data.getOut;
  });
  jsonfile.writeFileSync('./getOutInfo.json', { getOut: !sendFlag }, {
      encoding: 'utf-8', 
      replacer: null, 
      spaces: null
  }, function (err) {
  });
  if(sendFlag){
    yukariVoice('おかえりなさい');
  } else {
    yukariVoice('いってらっしゃい');
  }
});

module.exports = router;