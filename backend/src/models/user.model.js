import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, "Please provide your name."],
  },
  email: {
    type: String,
    required: [true, "Please provide your email."],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email."],
  },
  password: {
    type: String,
    required: [true, "Please provide a password."],
    minlength: 8,
    // select: false,
  },
  password_confirm: {
    type: String,
    required: [true, "Please provide a password."],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not the same.",
    },
  },
  password_changed_at: {
    type: Date,
    default: Date.now(),
  },
  email_verified: {
    type: Boolean,
    default: false,
  },
  photo: {
    type: String,
    default: "default.jpg",
  },
  categories: {
    type: Array,
    default: [],
  },
  sources: {
    type: Array,
    default: [],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  is_active: {
    type: Boolean,
    default: true,
    // select: false,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  updated_at: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model("User", userSchema);

export default User;