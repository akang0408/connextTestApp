const express = require('express');

const router = express.Router();

const authController = require('../controllers/auth-controller');
// const taskController = require('../controllers/task-controller');

router.post('/login', authController.userLogin, (req, res) => {
  res.send();
});

router.post('/create', authController.createUser, (req, res) => {
  res.send();
});

module.exports = router;
