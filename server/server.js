const express = require('express');
const next = require('next');
const authRouter = require('./routes/auth-router');

const PORT = 3000;

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();



app.prepare()
  .then(() => {
    const server = express();

    server.use(express.json());

    server.use((req, res, next) => {
      console.log(`
    **FLOW TEST**
    ${req.method}
    ${JSON.stringify(req.body)}
    `);
      next();
    });

    server.use('/auth', authRouter);

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, () => { console.log('ヾ(๑╹◡╹)ﾉ"'); });
  });
