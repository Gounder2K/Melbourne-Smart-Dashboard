import express, { Application } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import 'dotenv/config';
import cors from 'cors';

import indexRouter from './routes/index';
import usersRouter from './routes/users';
import weatherRouter from './routes/weather';

const app: Application = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/weather', weatherRouter);

console.log('API KEY:', process.env.OPENWEATHER_API_KEY);

export default app;
