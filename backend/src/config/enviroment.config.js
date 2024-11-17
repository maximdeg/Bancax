import dotenv from "dotenv";

dotenv.config();

const ENV = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
  DB_PASS: process.env.DB_PASS,
  DB_USER: process.env.DB_USER,
  DB_NAME: process.env.DB_NAME,
};

export default ENV;
