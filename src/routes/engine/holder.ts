import express from "express";
import { createPlaceholder } from "../../helpers/utils";

const holder = express.Router();

holder.get("/", async (req, res) => {
  const { height, width } = req.query;
  // image full path and name with format
  if (!height || !width) res.redirect("/api/invalid");
  else {
    try {
      const image = createPlaceholder(
        parseInt(width as string),
        parseInt(height as string),
        "dodgerblue"
      );
      res
        .writeHead(200, { "Content-Type": "image/png" })
        .end(image.canvas.toBuffer("image/png"));
    } catch (error) {
      console.log({ error });
      res.status(404).send(`invalid url parameters ${error}`);
    }
  }
});

export default holder;
