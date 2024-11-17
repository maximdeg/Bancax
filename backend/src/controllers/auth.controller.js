import { responseBuilder } from "../utils/builders/responseBuilder.js";
import UserRepository from "../repositories/user.repository.js";

// SIGNUP CONTROLLER
export const createUserController = async (req, res) => {
  try {
    const { fullname, email, password, password_confirm } = req.body;

    // TODO: Validations

    const newUser = { fullname, email, password, password_confirm };

    const user = await UserRepository.saveUser(newUser);

    return res.status(200).json(
      responseBuilder(true, 200, "User created successfully", {
        detail: user,
      })
    );
  } catch (err) {
    res.status(500).json(
      responseBuilder(true, 500, "SERVER_ERROR", {
        location: "createUserController",
        message: err.message,
      })
    );
  }
};

// LOGIN CONTROLLER

// FORGOT PASSWORD CONTROLLER

// RESET PASSWORD CONTROLLER

// PROTECT ROUTES CONTROLLER

// UPDATE PASSWORD CONTROLLER

// LOGOUT CONTROLLER
