import express, { Router } from 'express';
import { registerUser, loginUser, getUserProfile, updateUserProfile, deleteUser } from '../controllers/userController';
import { authenticateToken } from '../middleware/auth';

const userRoutes = (pool: any): Router => {
  const router = express.Router();

  router.post('/register', registerUser);
  router.post('/login', loginUser);
  router.get('/profile', authenticateToken, getUserProfile);
  router.put('/profile', authenticateToken, updateUserProfile);
  router.delete('/profile', authenticateToken, deleteUser);

  return router;
};

export default userRoutes;
