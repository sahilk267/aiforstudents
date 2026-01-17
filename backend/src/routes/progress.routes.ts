import { Router } from 'express';
import { authenticate } from '../middleware/auth.middleware';
import { getProgress, saveGameProgress } from '../controllers/progress.controller';

const router = Router();

// Get user progress (Protected route)
router.get('/', authenticate, getProgress);

// Save game progress (Protected route)
router.post('/games/:gameId', authenticate, saveGameProgress);

export default router;

