import { promises } from "fs";
import { createCanvas } from "canvas";

const writeFiles = async (
  name: string,
  data: "string | Stream | ArrayBufferView | Iterable<string | ArrayBufferView> | AsyncIterable<string | ArrayBufferView>"
): Promise<void> => await promises.writeFile(`images/output/${name}`, data);

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
  context.fillText(`${width}x${height}px`, width / 2, height / 2);
  return { context, canvas };
};

export { writeFiles, createPlaceholder };
