import express from "express";
import resizer from "./resizer";
import rotator from "./rotator";

const engine = express.Router();

engine.get("/", (req, res) => {
  res.send(`Engine: ${req.url}`);
});
engine.use("/resizer", resizer);
engine.use("/rotator", rotator);

export default engine;
