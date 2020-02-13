const express = require('express');

const router = express.Router();

const toDoController = require('../controllers/toDoController.js');

router.get('/:id', toDoController.getAllTasks, (req, res) => {
  console.log(res.locals.allTasks[0]);
  res.status(200).json(res.locals.allTasks);
});

router.post('/', toDoController.createTasks, toDoController.getAllTasks, (req, res) => {
  console.log(JSON.stringify(res.locals.allTasks));
  res.status(200).json(res.locals.allTasks);
});

router.delete('/:id', toDoController.deleteTask, toDoController.getAllTasks, (req, res) => {
  console.log(JSON.stringify(res.locals.allTasks));
  res.status(200).json(res.locals.allTasks);
});

module.exports = router;
