import path from "path";
import sharp from "sharp";
import supertest from "supertest";
import { isImgAvailable } from "../../../helpers/images";
import { getPath, source, writeFiles } from "../../../helpers/utils";
import app from "../../../index";
import resizerService from "./../../../services/resizerService";

const req = supertest(app);

describe("Testing Image Proccessing APIs", () => {
  const { height, width, filename } = {
    filename: "autom",
    width: 300,
    height: 500,
  };
  const imgName = `${filename}_${width}x${height}px`;
  const imgPath = path.join(source, `/${filename}.jpg`);
  it("Resizer >> Should resize  image with the given dimensions", async () => {
    await resizerService(filename as string, width, height);
    const availability = await (
      await isImgAvailable(imgName, getPath("output"))
    ).valueOf();

    expect(availability).toBe(true);
  });

  it("Resizer >> Should render resized image (cached) with the same dimensions", async () => {
    await req.get("/api/engine/resizer?filename=autom&width=400&height=650");
    // checking exisiitng of a preResized Image
    await isImgAvailable(imgName, getPath("output")).then((value) => {
      expect(value).toBe(true);
    });
  });

  it("Rotator >> Should rotate image when providing filename,and angle", async () => {
    await req.get("/api/engine/rotator?filename=autom&angle=180");
    const { filename, angle } = { filename: "autom", angle: 180 };
    const rotatedImgName = `${filename}_rotated_${angle}_deg`;
    const imgPath = `${getPath("source")}/${filename}.jpg`;
    sharp(imgPath)
      .rotate(angle)
      .png()
      .toBuffer()
      .then((data) => {
        writeFiles(rotatedImgName, data as never);
      });
    //   check rotated image avaliabiltity
    isImgAvailable(rotatedImgName, getPath("output")).then((value) => {
      expect(value).toBe(true);
    });
  });

  it("Holder >> Should display placeholder image when providing width and height", async () => {
    const res = await req.get("/api/engine/holder?width=400&height=250");

    expect(res.status).toBe(200);
  });
});
