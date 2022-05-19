import path from "path";
import sharp from "sharp";
import { output, source } from "../helpers/utils";

const resizerService = async (
  filename: string,
  width: number,
  height: number
) => {
  const imgName = `${filename}_${width}x${height}px`;
  const sourcePath = path.join(source, `/${filename}.jpg`);
  const outputPath = path.join(output, `/${imgName}.jpg`);
  return await new Promise((resolve, reject) => {
    sharp(sourcePath)
      .resize(width, height)
      .toFormat("jpg")
      .toFile(outputPath)
      .then(() => {
        resolve("sucess");
      })
      .catch((error) => {
        reject(error);
      });
  }).catch((e) => {
    console.log(e);
  });
};

export default resizerService;
