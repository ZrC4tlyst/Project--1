// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env"
});

connectDB();

// First approach by making iffy func
/*const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR: Couldn't connect to Mongo");
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log("listening on port ${process.env.PORT}");
    });
  } catch (error) {
    console.error("error: ", error);
    throw err;
  }
})();
*/
