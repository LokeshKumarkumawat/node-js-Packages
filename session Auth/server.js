import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';

import { APP_PORT } from './config';

const app = express();


app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }));








app.listen(APP_PORT, () => console.log(`listening on ${APP_PORT}`));