import { Router, Request, Response } from 'express';
import { questions } from '../data/questions';

const router = Router();

router.get('/quiz', (req: Request, res: Response) => {
  // Fisher-Yates algorithm shuffle for even mixing
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  const selected = shuffled.slice(0, 5);
  res.json(selected);
});

export default router;
