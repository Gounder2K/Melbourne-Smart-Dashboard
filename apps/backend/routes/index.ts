import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

/* GET home page. */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: 'Welcome to the Melbourne Smart Dashboard API!' });
});

export default router;
