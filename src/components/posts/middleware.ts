import { Request, Response, NextFunction } from 'express';

const createChallengeValidator = (req: Request, res: Response, next: NextFunction) => {
  const { title, content, author } = req.body;
  if (!title) {
    return res.status(400).json({
      message: 'No title provided!',
    });
  }
  if (!content) {
    return res.status(400).json({
      message: 'No content provided!',
    });
  }
  if (!author) {
    return res.status(400).json({
      message: 'No author provided!',
    });
  }
  return next();
};

export default createChallengeValidator;
