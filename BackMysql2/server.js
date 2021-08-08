const express = require("express"),
  app = express(),
  bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

const cors = require("cors");
const allowlist = ["http://localhost:4200", "http://localhost:54938"];
app.use(cors(allowlist));


var routes = require("./app/routes/Routes");
routes(app);

port = process.env.PORT || 8080;
app.listen(port);
console.log("BackEnd #1, MySqlServer1 is listening at port :" + port);
