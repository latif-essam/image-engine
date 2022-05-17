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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPlaceholder = exports.writeFiles = void 0;
const fs_1 = require("fs");
const canvas_1 = require("canvas");
const writeFiles = (name, data) => __awaiter(void 0, void 0, void 0, function* () { return yield fs_1.promises.writeFile(`images/output/${name}`, data); });
exports.writeFiles = writeFiles;
const createPlaceholder = (width, height, color) => {
    const canvas = (0, canvas_1.createCanvas)(width, height);
    const context = canvas.getContext("2d");
    context.fillStyle = color;
    context.fillRect(0, 0, width, height);
    // add text
    context.font = "light 20px cursive";
    context.textAlign = "center";
    context.fillStyle = "#fff";
    context.fillText("Placeholder Image", width / 2, height / 3);
    context.fillText(`${width}x${height}px`, width / 2, height / 2);
    return { context, canvas };
};
exports.createPlaceholder = createPlaceholder;
