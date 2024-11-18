import express from "express";
import {
  createUserController,
  loginController,
} from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/signup", createUserController);
authRouter.post("/login", loginController);

export default authRouter;
