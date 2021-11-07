import express, { Request, Response, Application} from 'express';
import {nanoid} from 'nanoid';

const app = express();

const port: number = 3000;

interface Post {
    id: string;
    title: string;
    content: string;
    author: string
}

interface Db{
    challenges: Post[];
}

const db: Db = {
    challenges: [
    {
        id: 'qwert',
        title: 'Esimene challenge',
        content: 'Tähtis postitus',
        author: 'Vltr',
    },
    {
        id: 'qwert',
        title: 'Teine challenge',
        content: 'Teine postitus',
        author: 'Vltr',
    },
   ],
   


};

app.use(express.json());

app.get('/ping', (req: Request, res: Response) => {

  return res.status(200).json({
        message:'Alive',
    });

});


app.post('/challenges', (req: Request, res: Response) => {

    
    const {title, content, author} = req.body;
    const id = nanoid();
    const challenges: Post = {
        id,
        title,
        content,
        author
    };
    db.challenges.push(challenges);
    
  return res.status(200).json({
       id: challenges.id,
});

});

app.get('/challenges/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const challenges = db.challenges.find((element: Post) => element.id === id);
        if (!challenges) {
           return res.status(400).json({
                message: `No posts exists with id: ${id}`,
            });
        }
    return res.status(200).json({
        challenges,
});

});


app.get('/challenges', (req: Request, res: Response) => {
    const {challenges} = db;
 return  res.status(200).json({
        challenges,
});

});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});