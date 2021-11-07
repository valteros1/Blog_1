import { Request, Response} from 'express';

import {Post, newChallenge} from './interfaces'

import challengeService from './service';


const getAllChallenges = (req: Request, res: Response) => {
    const challenges: Post[] = challengeService.getAllChallenges();
 return  res.status(200).json({
        challenges,
});

}


const createChallenge = (req: Request, res: Response) => {

    const {title, content, author} = req.body;
    const newChallenge: newChallenge = {
        title,
        content,
        author
    }
    const id: string = challengeService.createChallenge(newChallenge);
    
    
  return res.status(200).json({
       id,
});

}





const getChallengeById = (req: Request, res: Response) => {
    const { id } = req.params;
    const challenges = challengeService.getChallengeById(id);
        if (!challenges) {
           return res.status(400).json({
                message: `No Challenges exists with id: ${id}`,
            });
        }
    return res.status(200).json({
        challenges,
});

}

export {getAllChallenges, getChallengeById, createChallenge }