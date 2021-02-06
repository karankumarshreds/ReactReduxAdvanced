import express from 'express';
// controllers
import {
  profileUserController,
  signinUserController,
  signupUserController,
} from '../controllers/user-controllers';
// middlewares
import { authenticate } from '../utils';

const router = express.Router();

/* Base URL => /api/user */
router.route('/signin').post(signinUserController);
router.route('/signup').post(signupUserController);
router.route('/profile').get(authenticate, profileUserController);
export { router as userRouter };
