import express from "express";
import { data } from "./data.mjs";


const TOTAL_SCORE_KEY="total_karakter";
const CHOSEN_AREA="OSLO";
const POSTAL_CODE_KEY="poststed";
const osloData = data.entries.filter(entry => entry[POSTAL_CODE_KEY] === CHOSEN_AREA);

const APP_PORT = 8080;
/**
 * - Top worst resturants
 * - Simple fuzzy "can I eat here"
 * Question how would you solve this for a
 */

const app = express();

app.use(express.static("public"));

app.get("/test", (req, res) => {
  res.send({ a: "Express er moderat lett" });
});

app.get("/best", (req, res) => {
  res.send(osloData.filter(entry => readKey(entry[TOTAL_SCORE_KEY]) === 0));
});

app.get("/worst", (req, res) => {
  res.send(osloData.filter(entry => readKey(entry[TOTAL_SCORE_KEY]) > 2));
});


app.listen(APP_PORT, () =>
  console.log(`Matilsynet lytter på port ${APP_PORT}`)
);


function readKey(value) {
  return parseInt(value, 10);
}
