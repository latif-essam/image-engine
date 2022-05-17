import express from "express";
import routes from "./routes/index";

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Main!");
});

app.use("/api", routes);

app.get("/info", (req, res) => {
  res.send(`<div>
  <h2>Info</h2>
  </div>`);
});

app.get("/invalid", (req, res) => {
  res.send(`<div>
  <h2>Error : Invalid url</h2>
  go to <a href="${req.protocol}://${req.get("host")}/info">Info</a>
  </div>`);
});

app.get("*", (req, res) => {
  res.redirect(`${req.protocol}://${req.get("host")}/invalid`);
});
app.listen(port, () => console.log(`running on http://localhost:${port}`));
export default app;
