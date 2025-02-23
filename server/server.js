import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";

import route from "./routes/productRoute.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URI;

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("\nDB connected successfully!");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));
  })
  .catch((error) => console.log(error));

app.use("/api", route);
