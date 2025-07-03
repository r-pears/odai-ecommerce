import express from 'express';
import { registerUserController, loginUserController, updateUserProfileController } from '../controllers/userController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUserController);
router.post('/login', loginUserController);
router.put('/profile', authenticate, updateUserProfileController);

// underscore req is a common convention to indicate that the request is not used in the handler
router.get('/', async (_req, res) => {
    try {
      const users = await User.find().select('-password'); // Exclude passwords from the response
      res.status(200).json(users);
    } catch (error) {
      console.error('Error fetching users:', error.message);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

export default router;