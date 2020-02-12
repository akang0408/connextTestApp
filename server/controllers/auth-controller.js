const db = 'db';

const authConteroller = {};

authConteroller.createUser = (req, res, next) => {
  const {
    name,
    email,
    username,
    password,
  } = req.body;

  const params = [name, email, username, password];
  const queryString = 'INSERT INTO userTable (name, email, username, password) VALUES ($1, $2, $3, $4)';

  db.query(queryString, params, (err, response) => {
    if (err) return next(err);
    if (response.rows[0]) {
      res.locals.user = response.rows[0];
    }
  });
  return next();
};

authConteroller.userLogin = (req, res, next) => {
  const { username, password } = req.body;

  const params = [username, password];
  const queryString = 'SELECT id FROM userTable WHERE username = $1 & password = $2'

  db.query(queryString, params, (err, response) => {
    if (err) return next(err);
    if (response.rows[0]) {
      res.locals.id = response.rows[0].id;
    };
    next();
  })
};

module.exports = authConteroller;
