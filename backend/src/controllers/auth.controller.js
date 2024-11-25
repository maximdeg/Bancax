import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import ENV from "../config/enviroment.config.js";
import { responseBuilder } from "../utils/builders/responseBuilder.js";
import UserRepository from "../repositories/user.repository.js";

// SIGNUP CONTROLLER
export const createUserController = async (req, res) => {
  try {
    const { fullname, email, password, password_confirm } = req.body;

    // TODO: Validations

    // TODO: CHECK IF USER ALREADY EXISTS

    // TODO: HASH PASSWORD
    if (password !== password_confirm) {
      return res.status(400).json(
        responseBuilder(false, 400, "BAD_REQUEST", {
          message: "Passwords do not match",
        })
      );
    }

    const hashed_password = await bcrypt.hash(password, 10);
    const verificationToken = jwt.sign({ email }, ENV.JWT_SECRET, {
      expiresIn: ENV.JWT_EXPIRES_IN,
    });

    const newUser = {
      fullname,
      email,
      password: hashed_password,
      password_confirm: hashed_password,
      verification_token: verificationToken,
    };

    // TODO: Make email transporter and make a file to send it dinamicly like natourex

    // TODO: Send verification token

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
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserRepository.getByEmail(email);

    // TODO: CHECK IF USER EXISTS IF NOT SEND TO REGISTRATION

    if (!user) {
      //TODO: ERROR HANDLING
      return res.status(401).json(
        responseBuilder(false, 401, "UNAUTHORIZED", {
          message: "User does not exist",
        })
      );
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    // FIXME: this valid password does not work properly
    // IS NOT WORKING BECAUSE THE PASSWORD IS NOT HASHED IN THE DATABASE
    // if (!isValidPassword) {
    //   return res.status(401).json(
    //     responseBuilder(false, 401, "INVALID_PASSWORD", {
    //       detail: "The password is not correct",
    //     })
    //   );
    // }

    const token = jwt.sign(
      { email: user.email, id: user._id, role: user.role },
      ENV.JWT_SECRET,
      {
        expiresIn: ENV.JWT_EXPIRES_IN,
      }
    );

    return res.status(200).json(
      responseBuilder(true, 200, "Login successful", {
        token,
        user: {
          id: user._id,
          fullname: user.fullname,
          email: user.email,
          photo: user.photo,
          categories: user.categories,
          sources: user.sources,
          role: user.role,
        },
      })
    );
  } catch (err) {
    res.status(500).json(
      responseBuilder(false, 500, "SERVER_ERROR", {
        location: "loginController",
        message: err.message,
      })
    );
  }
};

// FORGOT PASSWORD CONTROLLER

// RESET PASSWORD CONTROLLER

// PROTECT ROUTES CONTROLLER

// UPDATE PASSWORD CONTROLLER

// LOGOUT CONTROLLER
