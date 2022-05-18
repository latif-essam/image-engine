"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
    res.sendFile("static/main.html", { root: __dirname });
});
app.use("/api", index_1.default);
app.get("/api/engine", (req, res) => {
    res.sendFile("static/engine.html", { root: __dirname });
});
app.get("/info", (req, res) => {
    res.sendFile("static/info.html", { root: __dirname });
});
app.get("/invalid", (req, res) => {
    res.sendFile("static/invalid.html", { root: __dirname });
});
app.get("*", (req, res) => {
    res.redirect(`${req.protocol}://${req.get("host")}/invalid`);
});
app.listen(port, () => console.log(`running on http://localhost:${port}`));
exports.default = app;
