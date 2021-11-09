import express, { Router } from 'express';
import { getAllChallenges, getChallengeById, createChallenge } from './controller';
import createChallengeValidator from './middleware';

const router: Router = express.Router();

router
  .post('/', createChallengeValidator, createChallenge)
  .get('/', getAllChallenges)
  .get('/:id', getChallengeById);

export default router;
