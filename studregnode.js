var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/studreg.html', function (req, res) {
   res.sendFile( __dirname + "/" + "studreg.html" );
})

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      stud_name:req.query.sname,
      stud_contact:req.query.scon,
      stud_gender:req.query.g,
      stud_address:req.query.sadd,
      stud_hobbies:req.query.shob,
      stus_skillset:req.query.sss,
      stud_highest_qualification:req.query.shq,
      stud_district:req.query.sdis
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
