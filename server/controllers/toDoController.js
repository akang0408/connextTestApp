const db = require('../database');

const toDoController = {};

toDoController.createTasks = (req, res, next) => {
  console.log('req.body: ', req.body);

  const { task, id } = req.body;
  // const { id } = res.locals;
  const numId = Number(id);

  const taskArr = [task, numId];
  console.log(numId);

  const queryString = 'INSERT INTO toDo (tasks, userid) VALUES ($1, $2);';

  db.query(queryString, taskArr, (err) => {
    if (err) {
      return next({
        log: 'error adding new task to db',
        message: { err },
      });
    }
    return next();
  });
};

toDoController.getAllTasks = (req, res, next) => {
  console.log(req.params);

  const params = [req.params.id];
  const queryString = 'SELECT * FROM toDo WHERE userid = $1';

  db.query(queryString, params, (err, response) => {
    if (err) {
      console.log('ERROR', err);
      return next({
        log: 'error in getAllTasks',
        message: { err },
      });
    }
    console.log(
      'allTasks from getAllTasks from response.rows ',
      response.rows,
    );
    res.locals.allTasks = response.rows;
    return next();
  });
};

toDoController.deleteTask = (req, res, next) => {
  const { id } = req.params;
  const arr = [id];
  const queryString = 'DELETE from toDo WHERE id=$1';
  db.query(queryString, arr, (err) => {
    if (err) {
      return next({
        log: 'error in getAllTasks',
        message: { err },
      });
    }
    return next();
  });
};

module.exports = toDoController;
