const { Pool } = require("pg");

const PG_URI =
  "postgres://rdsdxpwv:u4MS_8s5Os6II46-FngWtcg4eaCnI08c@rajje.db.elephantsql.com:5432/rdsdxpwv";

const pool = new Pool({
  connectionString: PG_URI
});

const createTaskTable =
  "CREATE TABLE IF NOT EXISTS toDo (id SERIAL PRIMARY KEY, tasks VARCHAR, userID INTEGER)";

const createUserTable =
  "CREATE TABLE IF NOT EXISTS userTable (id SERIAL PRIMARY KEY, name VARCHAR, email VARCHAR, username VARCHAR, password VARCHAR)";

pool.query(createTaskTable, err => {
  if (err) console.log("err from createTaskTable", err);
});

pool.query(createUserTable, err => {
  if (err) console.log("err from createUserTable", err);
});

module.export = {
  query: (text, params, callback) => {
    console.log("excecuted query", text);
    return pool.query(text, params, callback);
  }
};
