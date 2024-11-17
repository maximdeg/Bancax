import UserRepository from "../repositories/user.repository.js";
import { responseBuilder } from "../utils/builders/responseBuilder.js";

export const getAllUsersController = (req, res) => {
  try {
    const users = UserRepository.getAllUsers();

    return res
      .status(200)
      .json(responseBuilder(true, 200, "Users", { message: users }));
  } catch (err) {
    return res.status(500).json(
      responseBuilder(false, 500, "SERVER_ERROR", {
        location: "getAllUsersController",
        message: err.message,
      })
    );
  }
};
