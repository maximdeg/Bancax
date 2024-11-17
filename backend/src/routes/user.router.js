import express from "express";
import { getAllUsersController } from "../controllers/user.controller.js";
import { createUserController } from "../controllers/auth.controller.js";

const userRouter = express.Router();

userRouter.get("/", getAllUsersController);

export default userRouter;
