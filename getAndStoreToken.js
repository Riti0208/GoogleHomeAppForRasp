var GoogleSpreadsheet = require('google-spreadsheet');

var test_sheet = new GoogleSpreadsheet('1Z2fHUIDDwX_sR6Az3wdfp4wvZNim-0wNzaTzWghchic');
var credentials = require('./AutomationHomeTest-203e246ecca2.json');

var sheet;
test_sheet.useServiceAccountAuth(credentials, function(err){
    test_sheet.getInfo(function(err, data){
        sheet = data; //あとから使えるように外部スコープに保存
        for(var i in sheet.worksheets) {
            if(sheet.worksheets[i].title === 'sheet1') {
                sheet.worksheets[i].getRows(function(err, rows) {
                    for(var i in rows) {
                        console.log(rows[i].id);
                        console.log(rows[i].name);
                        console.log(rows[i].age);
                    }
                });
            }
        }
    });

});
