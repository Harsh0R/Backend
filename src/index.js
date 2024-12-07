// require("dotenv").config({ path: "./env" });

import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });


connectDB().then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log("⚙ Server is running on port => ", process.env.PORT);
    });
}).catch((err) => { 
    console.log("Error in connection database Failed => ", err);
});



/*
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);

    app.on("error", (err) => {
      console.log("While error in listening db in app => ", err);
      throw err;
    });

    app.listen(process.env.PORT, () => {
      console.log("Server is running on port => ", process.env.PORT);
    });
  } catch (e) {
    console.log("Error while connection database => ", e);
    throw e;
  }
})();
*/
