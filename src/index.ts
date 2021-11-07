import express, { Application } from 'express';
import { getAllChallenges, getChallengeById, createChallenge } from './components/posts/controller';
import pingController from './components/ping/controller';
import loggerMiddleware from './components/general/middleware';
import createChallengeValidator from './components/posts/middleware';

const app: Application = express();

const port: number = 3000;

app.use(express.json());

app.use(loggerMiddleware);

app.get('/ping', pingController);

app.post('/challenges', createChallengeValidator, createChallenge);

app.get('/challenges', getAllChallenges);

app.get('/challenges/:id', getChallengeById);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
