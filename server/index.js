import express from 'express';
import appRouter from './routes/root';
import tasksRouter from './routes/tasks';
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
app.use('/tasks', tasksRouter);

// start server
app.listen(PORT, error => (
  error
    ? console.error(error)
    : console.info(`Server na porta: ${PORT}`)
));