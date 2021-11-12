import { Request, Response } from 'express';

import { Post, Post1, newChallenge } from './interfaces';

import challengeService from './service';

const getAllChallenges = (req: Request, res: Response) => {
  const challenges: Post[] = challengeService.getAllChallenges();
  return res.status(200).json({
    challenges,
  });
};

const getAllChallengesVaimule = (req: Request, res: Response) => {
  const challengesVaimule: Post1[] = challengeService.getAllChallengesVaimule();
  return res.status(200).json({
    challengesVaimule,
  });
};

const getAllChallengesToitumine = (req: Request, res: Response) => {
  const challengesToitumine: Post[] = challengeService.getAllChallengesToitumine();
  return res.status(200).json({
    challengesToitumine,
  });
};

const createChallenge = (req: Request, res: Response) => {
  const { title, content, author } = req.body;
  const newChallenge: newChallenge = {
    title,
    content,
    author,
  };
  const id: string = challengeService.createChallenge(newChallenge);

  return res.status(200).json({
    id,
  });
};

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
};

const getChallengeByIdVaimule = (req: Request, res: Response) => {
  const { id } = req.params;
  const challengesVaimule = challengeService.getChallengeByIdVaimule(id);
  if (!challengesVaimule) {
    return res.status(400).json({
      message: `No Challenges exists with id: ${id}`,
    });
  }
  return res.status(200).json({
    challengesVaimule,
  });
};

const getChallengeByIdToitumine = (req: Request, res: Response) => {
  const { id } = req.params;
  const challengesToitumine = challengeService.getChallengeByIdToitumine(id);
  if (!challengesToitumine) {
    return res.status(400).json({
      message: `No Challenges exists with id: ${id}`,
    });
  }
  return res.status(200).json({
    challengesToitumine,
  });
};

export {
  getAllChallenges, getAllChallengesVaimule, getAllChallengesToitumine, getChallengeById,
  createChallenge, getChallengeByIdVaimule, getChallengeByIdToitumine };
