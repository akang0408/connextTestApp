const express = require('express');
const app = require('../server');

const router = express.Router();

const authController = require('../controllers/auth-controller');
// const taskController = require('../controllers/task-controller');

router.post('/login', authController.userLogin, (req, res) => {
  res.status(200).json({
    id: res.locals.id,
    status: res.locals.status,
  });
  // res.json('login worked');
  // return app.render(req, res, '../home', req.query);
});

router.post('/create', authController.createUser, (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
