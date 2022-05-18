import express from "express";
import engine from "./engine/index";

const routes = express.Router();

routes.use("/engine", engine);

export default routes;
