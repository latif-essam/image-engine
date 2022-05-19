import express from "express";
import resizerService from "./../../services/resizerService";
// import sharp from "sharp";
import { isImgAvailable } from "../../helpers/images";
import { getPath } from "../../helpers/utils";
// import { path } from "path";

const resizer = express.Router();

resizer.get("/", async (req: express.Request, res: express.Response) => {
  try {
    const { height, width, filename } = req.query;
    const imgName = `${filename}_${width}x${height}px`;
    const imgOutputPath = `${getPath("output")}/${imgName}.jpg`;
    const availability = await (
      await isImgAvailable(imgName as string, getPath("output"))
    ).valueOf();
    if (availability) {
      const imgPath = `${getPath("output")}/${imgName}.jpg`;
      res.type("jpg").sendFile(imgPath);
    } else {
      resizerService(
        filename as string,
        parseInt(width as string),
        parseInt(height as string)
      ).then(() => {
        res.status(200).type("jpg").sendFile(imgOutputPath);
      });
    }
  } catch (error) {
    res.status(404).send(`
        <p>🙂Error🤷‍♂️: =>> <br/>${error} 🙄<p>`);
  }
});

export default resizer;
