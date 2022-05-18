import express from "express";
import resizer from "./resizer";
import rotator from "./rotator";
import holder from "./holder";
// import hs from "./../../static/engine.html";

const engine = express.Router();

engine.use("/resizer", resizer);
engine.use("/rotator", rotator);
engine.use("/holder", holder);

export default engine;
