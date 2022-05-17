"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resizer_1 = __importDefault(require("./resizer"));
const engine = express_1.default.Router();
engine.get("/", (req, res) => {
    res.send(`Engine: ${req.url}`);
});
engine.use("/resizer", resizer_1.default);
exports.default = engine;
