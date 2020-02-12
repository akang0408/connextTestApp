const db = require('../database');

const toDoController = {};

toDoController.createTasks = (req, res, next) => {
  console.log('req.body: ', req.body);

  const { task } = req.body;
  const { id } = res.locals;

  const taskArr = [task, id];

  const queryString = 'INSERT INTO toDo (task, userID) VALUES ($1, $2);';

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
  const queryString = 'SELECT task FROM toDo';

  db.query(queryString, (err, response) => {
    if (err) {
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
  const { taskID } = req.body;
  const arr = [taskID];
  const queryString = 'DELETE from toDo WHERE id=$1';
  db.query(queryString, arr, (err) => {
    if (err) {
      return next({
        log: 'error in getAllTasks',
        message: { err },
      });
    }
  });
  return next();
};

module.exports = toDoController;
