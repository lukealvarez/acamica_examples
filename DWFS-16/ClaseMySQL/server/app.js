//npx express-generator
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

import indexRouter from './routes/index';
import usersController from './routes/usersController';
import login from './helper/login';

var app = express();

// Setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

// ------------------------------------------------------

app.use((req, res, next) => {
    login(req, res, next);
});

app.use('/', indexRouter);
app.use('/users', usersController);

export default app;
