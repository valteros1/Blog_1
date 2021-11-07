import express, {Application} from 'express';
import {getAllChallenges, getChallengeById, createChallenge} from './components/posts/controller'
import pingController from './components/ping/controller';

const app = express();

const port: number = 3000;

app.use(express.json());



app.get('/ping', pingController );


app.post('/challenges', createChallenge );


app.get('/challenges', getAllChallenges);


app.get('/challenges/:id', getChallengeById);




app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});