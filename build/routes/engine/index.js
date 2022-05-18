"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resizer_1 = __importDefault(require("./resizer"));
const rotator_1 = __importDefault(require("./rotator"));
const holder_1 = __importDefault(require("./holder"));
// import hs from "./../../static/engine.html";
const engine = express_1.default.Router();
engine.use("/resizer", resizer_1.default);
engine.use("/rotator", rotator_1.default);
engine.use("/holder", holder_1.default);
exports.default = engine;
