import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();
dotenv.config();

const mongoURL = process.env.mongourl;
mongoose
  .connect(
    // "mongodb+srv://username:1234@clusterrahul.tjfsgqu.mongodb.net/test?retryWrites=true&w=majority&appName=ClusterRahul"
    mongoURL
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("Server Running on port 3000");
    });
  })
  .catch((e) => {
    console.log(e);
  });
app.get("/", (req, res) => {
  res.send("Hello World");
});
