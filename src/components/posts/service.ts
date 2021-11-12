import { nanoid } from 'nanoid';
import db from '../../db';
import { getChallengeById } from './controller';
import { Post, Post1, newChallenge } from './interfaces';

const challengeService = {
  getAllChallenges: () => {
    const { challenges } = db;
    return challenges;
  },
  getChallengeById: (id: string): Post | undefined => {
    const challenges: Post | undefined = db.challenges.find((element: Post) => element.id === id);
    return challenges;
  },
  createChallenge: (newChallenge: newChallenge): string => {
    const { title, content, author } = newChallenge;
    const id = nanoid();
    const challenges: Post = {
      id,
      title,
      content,
      author,
    };
    db.challenges.push(challenges);
    return id;
  },
  getAllChallengesVaimule: () => {
    const { challengesVaimule } = db;
    return challengesVaimule;
  },
  getChallengeByIdVaimule: (id: string): Post1 | undefined => {
    const challengesVaimule:
     Post1 | undefined = db.challengesVaimule.find((element: Post1) => element.id === id);
    return challengesVaimule;
  },
  getAllChallengesToitumine: () => {
    const { challengesToitumine } = db;
    return challengesToitumine;
  },
  getChallengeByIdToitumine: (id: string): Post | undefined => {
    const challengesToitumine:
     Post | undefined = db.challengesToitumine.find((element: Post) => element.id === id);
    return challengesToitumine;
  },

};

export default challengeService;
