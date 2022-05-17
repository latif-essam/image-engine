import express from "express";
import resizer from "./resizer";
import rotator from "./rotator";
import holder from "./holder";

const engine = express.Router();

engine.get("/", (req, res) => {
  res.send(`Engine: ${req.url}`);
});
engine.use("/resizer", resizer);
engine.use("/rotator", rotator);
engine.use("/holder", holder);

export default engine;
