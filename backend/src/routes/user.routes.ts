import { Router } from 'express';
import { authenticate } from '../middleware/auth.middleware';
import { getProfile, updateProfile } from '../controllers/user.controller';

const router = Router();

// Get user profile (Protected route)
router.get('/profile', authenticate, getProfile);

// Update user profile (Protected route)
router.put('/profile', authenticate, updateProfile);

export default router;

