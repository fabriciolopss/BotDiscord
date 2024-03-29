var express = require("express");
var app = express();

app.get("/", function (req, res) {
  var sql = require("mssql");

  // config for your database
  var config = {
    server: "localhost",
    database: "discordBotMusic",
  };

  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    // create Request object
    var request = new sql.Request();

    // query to the database and get the records
    request.query("select * from Request_songs", function (err, recordset) {
      if (err) console.log(err);
      console.log(recordset);
      // send records as a response
      res.send(recordset);
    });
  });
});

var server = app.listen(5000, function () {
  console.log("Server is running..");
});
