import express from "express";
import routes from "./routes/index";

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.sendFile("static/main.html", { root: __dirname });
});

app.use("/api", routes);

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
export default app;
