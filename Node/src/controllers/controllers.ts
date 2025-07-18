import { Request, Response, NextFunction } from 'express';

export const get = (req: Request, res: Response, next: NextFunction) => {
  try {    
    res.status(200).json({ message: 'Hello World' });
  } catch (error) {
    next(error);
  }
};
