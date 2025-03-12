import express from "express";
import dotenv from "dotenv";
import { db } from "./firebase.js";

const app = express();
const PORT = 3000;

dotenv.config();

app.use(express.json());

// db.doc("/recipes/BYZUog8Hq9V6mINOhoPX")
//   .get()
//   .then((res) => {
//     console.log(res);
//   });

app.listen(PORT, (error) => {
  if (!error) console.log("Server is listening on port " + PORT);
  else console.log("Error occurred, server can't start", error);
});
