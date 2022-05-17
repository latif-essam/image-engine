import express from "express";
import engine from "./engine/index";

const routes = express.Router();

routes.get("/", (req, res) => {
  res.send(`API utilities ${req.url}`);
});
routes.use("/engine", engine);

export default routes;
