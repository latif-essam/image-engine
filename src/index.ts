import express from "express";

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello ola!");
});

app.listen(port, () => console.log(`running on http://localhost:${port}`));
