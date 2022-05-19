import express from "express";
import sharp from "sharp";
import { isImgAvailable } from "../../helpers/images";
import { getPath, writeFiles } from "../../helpers/utils";

const rotator = express.Router();

rotator.get("/", async (req: express.Request, res: express.Response) => {
  try {
    const { filename, angle } = req.query;
    const imgName = `${filename}_rotated_${angle}_deg`;
    const imagePath = `${getPath("source")}/${filename}.jpg`;
    await isImgAvailable(imgName as string, getPath("output")).then(
      (available) => {
        if (available) {
          const imgPath = `${getPath("output")}/${imgName}.jpg`;
          res.status(200).type("jpg").sendFile(imgPath);
        } else {
          sharp(imagePath)
            .rotate(parseInt(angle as string))
            .png()
            .toBuffer()
            .then((data) => {
              writeFiles(imgName, data as never);
              res.status(200).type("jpg").send(data);
            });
        }
      }
    );
  } catch (error) {
    res.status(404).send(`
    <p>🙂Error🤷‍♂️:  🙄 :=>><br/> ${error} <p>`);
  }
});

export default rotator;
