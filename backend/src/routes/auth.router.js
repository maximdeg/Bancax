import express from 'express';
import { createUserController } from '../controllers/auth.controller.js';

const authRouter = express.Router();

authRouter.post('/signup', createUserController);

export default authRouter;
