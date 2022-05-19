import express from "express";
import routes from "./routes/index";

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).sendFile("static/main.html", { root: __dirname });
});

app.use("/api", routes);

app.get("/api/engine", (req: express.Request, res: express.Response) => {
  res.status(200).sendFile("static/engine.html", { root: __dirname });
});

app.get("/info", (req: express.Request, res: express.Response) => {
  res.status(200).sendFile("static/info.html", { root: __dirname });
});

app.get("/invalid", (req, res) => {
  res.status(404).sendFile("static/invalid.html", { root: __dirname });
});

app.get("*", (req: express.Request, res: express.Response) => {
  res.redirect(`${req.protocol}://${req.get("host")}/invalid`);
});

app.listen(port, () => console.log(`running on http://localhost:${port}`));
export default app;
