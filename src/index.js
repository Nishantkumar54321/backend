import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`✅ MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("❌ MongoDB connection FAILED ", error);
    process.exit(1);
  }
};







/*
import express from "express"
const app = express()
( async () => {
    try{
      await  mongoose.connect('${process.env.MONGODB_URI}/${DB_NAME}')
      app.on("error", () => {
        console.log("ERR: ", error);
        throw error
      })

      app.listen(process.env.PORT, () => {
        console.log('App is listining on port ${process.env.PORT}');
      })
    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()
*/
