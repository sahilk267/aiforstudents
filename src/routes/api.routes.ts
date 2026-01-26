import { Router } from 'express';
import authRoutes from './auth.routes';
import userRoutes from './user.routes';
import progressRoutes from './progress.routes';

const router = Router();

// API version info
router.get('/', (req, res) => {
  res.json({
    message: 'AI for Students API',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      users: '/api/users',
      progress: '/api/progress'
    }
  });
});

// Route modules
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/progress', progressRoutes);

export default router;

