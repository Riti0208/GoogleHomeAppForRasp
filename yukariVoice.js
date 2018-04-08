const googlehome = require('google-home-notifier');
const language = 'ja';

exports.playVoice = function(message){
    googlehome.device("Google-Home", language);
    googlehome.ip("192.168.179.5");
    googlehome.play('http://192.168.179.7:3000/yukariVoice/' + message, function(res) {
      console.log(res);
    });
}

