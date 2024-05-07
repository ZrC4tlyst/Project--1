import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MondoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    ); // please log this and check once serve has started
  } catch (error) {
    console.log("MongoDB Error: " + error);
    process.exit(1);
  }
};

export default connectDB;
