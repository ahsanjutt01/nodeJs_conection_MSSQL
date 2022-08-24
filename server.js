// Requiring modules
const express = require("express");
const app = express();

// Get request
app.get("/", function (req, res) {
  const sql = require("mssql/msnodesqlv8");

  let config = {
    database: "ahsan",
    server: "AHSAN",
    driver: "msnodesqlv8",
    options: {
      trustedConnection: true,
      enableArithAbort: true,
    },
  };
  sql.connect(config, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    request.query("select * from [ahsan].[dbo].[user]", function (err, result) {
      if (err) console.log(err);
      console.log(result);
      return res.json(result.recordset);
    });
  });
});

var server = app.listen(4000, function () {
  console.log("Server is listening at port 4000...");
});
