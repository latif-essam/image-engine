import path from "path";
import { promises } from "fs";
import { createCanvas } from "canvas";

const getPath = (type: string): string =>
  path.join(__dirname, `../../images/${type}`);

const output = path.join(__dirname, "../../images/output");
const source = path.join(__dirname, "../../images/source");
const writeFiles = async (
  name: string,
  data: "string | Stream | ArrayBufferView | Iterable<string | ArrayBufferView> | AsyncIterable<string | ArrayBufferView>"
): Promise<void> => await promises.writeFile(`images/output/${name}.jpg`, data);

const createPlaceholder = (width: number, height: number, color: string) => {
  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");
  context.fillStyle = color;
  context.fillRect(0, 0, width, height);

  // add text
  context.font = "light 20px cursive";
  context.textAlign = "center";
  context.fillStyle = "#fff";
  context.fillText("Placeholder Image", width / 2, height / 3);
  context.fillText(`${width}x${height}_px`, width / 2, height / 2);
  return { context, canvas };
};

export { writeFiles, createPlaceholder, getPath, output, source };
