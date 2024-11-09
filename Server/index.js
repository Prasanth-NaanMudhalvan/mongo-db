import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });
const app = express();
app.use(express.json());
app.use(cors());

const mongoUri = process.env.DRIVER_LINK;

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to your MongoDB database successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

connectToMongo().then(() => {
  app.listen(3001, () => {
    console.log("App server is running on port 3001");
  });
  app.listen(3002, () => {
    console.log("App server is running on port 3002");
  });
  
});
