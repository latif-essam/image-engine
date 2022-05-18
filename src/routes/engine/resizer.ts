import express from "express";
import sharp from "sharp";
import { writeFiles } from "../../helpers/utils";

const resizer = express.Router();

resizer.get("/", async (req, res) => {
  const { height, width, filename } = req.query;
  // image full path and name with format
  const path = `images/source/${filename}.jpg`;

  const name = `${filename}_${width}x${height}px.jpg`;
  sharp(path)
    .resize(parseInt(width as string), parseInt(height as string))
    .png()
    .toBuffer()
    .then((data) => {
      writeFiles(name, data as never);
      res.status(200).type("png").send(data);
    })
    .catch((err) => {
      res.status(404).send(`
      <p>🙂Error🤷‍♂️: there is no images with this name! =>> ${filename} 🙄<p>`);
    });
});

export default resizer;
