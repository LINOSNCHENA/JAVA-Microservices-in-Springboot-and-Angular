const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "presly",
  password: "Pemba2020",
  port: 5432,
});

// var mysql = require("mysql");
// const pool = mysql.createPool({
//   user: "root",
//   host: "localhost",
//   database: "presly",
//   password: "Pemba2020",
//   connectionLimit: 10,
//   debug: false,
// });

const getUsers = (request, response) => {
  pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    console.log(
      "=============GET-All===TYPE MYSQL VS POSTGRES================="
    );
    console.log(results);
    response.status(200).json(results.rows); // Postgresl
    //  response.send(results); //Mysql
    console.log(typeof true);// expected output: "boolean"
    console.log(typeof results);// expected output: "boolean"
    response.json(results)
  });
};

const getUserById = (request, response) => {
  const id = parseInt(request.params.id);
  console.log("============GET-one===TYPE MYSQL VS POSTGRES================");
  console.log(id);
  pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
    // response.send(results); //Mysql
  });
};

const createUser = (request, response) => {
  const { name, email } = request.body;

  pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2)",
    [name, email],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User added with ID: ${result.insertId}`);
      // response.status(201).send(`User added with ID: ${result.insertId}`);
    }
  );
};

const updateUser = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, email } = request.body;

  pool.query(
    "UPDATE users SET name = $1, email = $2 WHERE id = $3",
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${id}`);
    }
  );
};

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
