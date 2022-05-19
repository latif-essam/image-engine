import express from "express";
import sharp from "sharp";
import { isImgAvailable } from "../../helpers/images";
import { getPath, writeFiles } from "../../helpers/utils";

const resizer = express.Router();

resizer.get("/", async (req: express.Request, res: express.Response) => {
  try {
    const { height, width, filename } = req.query;
    const imgName = `${filename}_${width}x${height}px`;
    const imgPath = `${getPath("source")}/${filename}.jpg`;
    await isImgAvailable(imgName as string, getPath("output")).then((value) => {
      if (value) {
        const imgPath = `${getPath("output")}/${imgName}.jpg`;
        res.type("jpg").sendFile(imgPath);
      } else {
        sharp(imgPath)
          .resize(parseInt(width as string), parseInt(height as string))
          .png()
          .toBuffer()
          .then((data) => {
            writeFiles(imgName, data as never);
            res.status(200).type("png").send(data);
          });
      }
    });
  } catch (error) {
    res.status(404).send(`
        <p>🙂Error🤷‍♂️: =>> <br/>${error} 🙄<p>`);
  }
});

export default resizer;
