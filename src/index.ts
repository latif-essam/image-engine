import express from "express";
import routes from "./routes/index";

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Main!");
});
app.use("/api", routes);

app.listen(port, () => console.log(`running on http://localhost:${port}`));
