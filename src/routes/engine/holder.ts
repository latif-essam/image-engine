import express from "express";
import { createPlaceholder } from "../../helpers/utils";

const holder = express.Router();

holder.get("/", async (req: express.Request, res: express.Response) => {
  try {
    const { height, width, color } = req.query;
    if ((height && width) || color) {
      const image = createPlaceholder(
        parseInt(width as string),
        parseInt(height as string),
        color as string
      );
      res
        .status(200)
        .writeHead(200, { "Content-Type": "image/png" })
        .end(image.canvas.toBuffer("image/png"));
    } else
      res
        .status(404)
        .send(
          `invalid url parameters ${JSON.stringify(
            req.query
          )} is not equel to {height,width,color}`
        );
  } catch (error) {
    res.status(404).send(`invalid url parameters ==> ${error}`);
  }
});

export default holder;
