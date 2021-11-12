import express, { Router } from 'express';
import {
  getAllChallenges, getAllChallengesVaimule, getAllChallengesToitumine, getChallengeById,
  createChallenge, getChallengeByIdVaimule, getChallengeByIdToitumine } from './controller';
import createChallengeValidator from './middleware';

const router: Router = express.Router();
const router1: Router = express.Router();
const router2: Router = express.Router();

router
  .post('/', createChallengeValidator, createChallenge)
  .get('/', getAllChallenges)
  .get('/:id', getChallengeById);

router1
  .get('/:id', getChallengeByIdVaimule)
  .get('/', getAllChallengesVaimule);

router2
  .get('/', getAllChallengesToitumine)
  .get('/:id', getChallengeByIdToitumine);
  

export { router, router1, router2 };

