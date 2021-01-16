import mongoose from "mongoose";
import { app } from "./app";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;

const start = async () => {
  if (!process.env.mongoose_URI) {
    throw new Error("mongoose_URI must be defined");
  }
  try {
    await mongoose.connect(process.env.mongoose_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    app.listen(PORT, () => {
      console.log(`Backend server started at ${PORT}`);
    });
  } catch (err) {
    console.log("Error while connecting to DB", err);
  }
};

start();
