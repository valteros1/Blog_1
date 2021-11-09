import express, { Application } from 'express';
import loggerMiddleware from './components/general/middleware';
import postsRouter from './components/posts/routes';
import pingRouter from './components/ping/routes';

const app: Application = express();

const port: number = 3000;

app.use(express.json());

app.use(loggerMiddleware);
app.use('/ping', pingRouter);
app.use('/challenges', postsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
