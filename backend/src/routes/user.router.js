import express from "express";
import {
  addSourceController,
  getAllUsersController,
  updateUserByIdController,
} from "../controllers/user.controller.js";
import { createUserController } from "../controllers/auth.controller.js";

const userRouter = express.Router();

userRouter.get("/", getAllUsersController);
userRouter.put("/:user_id", addSourceController);

export default userRouter;
