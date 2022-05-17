import express from "express";
import sharp from "sharp";
import { writeFiles } from "../../helpers/utils";

const rotator = express.Router();

rotator.get("/", (req, res) => {
  const { filename, angle } = req.query;

  const imagePath = `images/source/${filename}.jpg`;
  const imageName = `${filename}_rotated_${angle}_deg.jpg`;

  sharp(imagePath)
    .flatten(true)
    .rotate(parseInt(angle as string))
    .png()
    .toBuffer()
    .then((data) => {
      writeFiles(imageName, data as never);

      res.status(200).type("png").send(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).send(`
      <p>🙂Error🤷‍♂️: there is no images with this name! =>> ${filename} : 🙄 :=>><br/> ${error} <p>`);
    });
});

export default rotator;
