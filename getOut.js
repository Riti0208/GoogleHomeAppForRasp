var jsonfile = require('jsonfile');
jsonfile.readFile('./getOutInfo.json', {
    encoding: 'utf-8', 
    reviver: null, 
    throws: true
  }, function (err, data) {
      console.log(data.getOut);
  });