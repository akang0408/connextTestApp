const express = require('express');

const router = express.Router();

const authController = require('../controllers/auth-controller');
// const taskController = require('../controllers/task-controller');

router.post('/login', authController.userLogin, (req, res) => {
  res.json('login worked');
});

router.post('/create', authController.createUser, (req, res) => {
  console.log('res.locals: ', res.locals.user);
  res.json('res.locals.user');
});

module.exports = router;
