# nodeJs_conection_MSSQL

Connect MSSQL to nodejs + express querying.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install express.

```bash

npm install express

npm install mssql

npm install msnodesqlv8

npm install tedious

```

## Usage

```javascript
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

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)
