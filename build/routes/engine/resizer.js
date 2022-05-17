"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sharp_1 = __importDefault(require("sharp"));
const utils_1 = require("../../helpers/utils");
const resizer = express_1.default.Router();
resizer.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { height, width, filename } = req.query;
    // image full path and name with format
    const path = `images/source/${filename}.jpg`;
    const name = `${filename}_${width}x${height}px.jpg`;
    (0, sharp_1.default)(path)
        .resize(parseInt(width), parseInt(height))
        .png()
        .toBuffer()
        .then((data) => {
        (0, utils_1.writeFiles)(name, data);
        res.status(200).type("png").send(data);
    })
        .catch((err) => {
        console.log(err);
        res.status(404).send(`
      <p>🙂Error🤷‍♂️: there is no images with this name! =>> ${filename} 🙄<p>`);
    });
}));
exports.default = resizer;
