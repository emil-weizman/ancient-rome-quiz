import { Router, Request, Response } from 'express';
import { questions } from '../data/questions';

const router = Router();

router.get('/quiz', (req: Request, res: Response) => {
  // Shuffle the copy of the array and take the first 5
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, 5);

  res.json(selected);
});

export default router;
