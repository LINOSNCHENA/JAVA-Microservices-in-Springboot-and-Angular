const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const app = express();
const db = require("./queries");
const portx = 8081;
const port = 8080;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

var blacklist = [
  "http://localhost:4200",
  "http://localhost:4600",
  "http://localhost:4800",
  "http://localhost:8080",
  "http://localhost:8081",
];
const corsOption = {
  origin: blacklist,
};
app.use(cors(corsOption));

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

// ROUTES
app.get("/employees", db.getUsers);
app.get("/employees/:id", db.getUserById);
app.post("/employees", db.createUser);
app.put("/employees/:id", db.updateUser);
app.delete("/employees/:id", db.deleteUser);

// BANKS
app.get("/full/accounts", db.getUsers);
app.get("/full/accounts/:id", db.getUserById);
app.post("/full/accounts", db.createUser);
app.put("/full/accounts/:id", db.updateUser);
app.delete("/full/accounts/:id", db.deleteUser);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
