import express from 'express';
import appRouter from './routes/root';
import apiRouter from './routes/api';
import bodyParser from "body-parser";

// config
const app = express();
const PORT = process.env.PORT || 8080;

// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set routers
app.use('/', appRouter);
app.use('/tasks', apiRouter);

// start server
app.listen(PORT, error => (
  error
    ? console.error(error)
    : console.info(`Server na porta: ${PORT}`)
));