import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        console.log("Connecting to database...");
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log("Database connectd");
        // console.log("Database connectd !! DB Host : ", connectionInstance.connection.host);
        
    } catch (error) {
        console.log("Error while connecting to database => ", error);
        process.exit(1);
    }
}

export default connectDB;