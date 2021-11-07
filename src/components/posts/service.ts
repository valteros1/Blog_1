import {nanoid} from 'nanoid';
import db from '../../db'
import {Post, newChallenge} from './interfaces'


const challengeService = {
    getAllChallenges: () => {
        const {challenges} = db;
        return challenges;
    },
    getChallengeById: (id: string): Post | undefined =>{
    const challenges: Post | undefined = db.challenges.find((element: Post) => element.id === id);
    return challenges;
    },
    createChallenge: (newChallenge: newChallenge): string => {
        const {title, content, author} = newChallenge;
        const id = nanoid();
    const challenges: Post = {
        id,
        title,
        content,
        author
    };
    db.challenges.push(challenges);
    return id;
    },

};


export default challengeService;