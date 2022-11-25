import express from "express";
import { data } from "./data.mjs";

const APP_PORT = 8080;
/**
 * - Top worst resturants
 * - Simple fuzzy "can I eat here"
 * Question how would you solve this for a
 */

const app = express();

app.use(express.static("public"));

app.get("/test", (req, res) => {
  res.send({ a: "Express er veldig lett" });
});

app.get("/best", (req, res) => {});

app.get("/worst", (req, res) => {});

app.listen(APP_PORT, () =>
  console.log(`Matilsynet lytter på port ${APP_PORT}`)
);
