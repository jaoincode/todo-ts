import mongoose from "mongoose";

import * as dotenv from "dotenv";
dotenv.config();

const dbURL: any = process.env.DATABASE_URL;

const connectDB = () => {
  mongoose
    .connect(dbURL)
    .then(() => {
      console.log("connected to db with success");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectDB;
