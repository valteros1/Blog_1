import {Post} from './components/posts/interfaces';

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

export default db;