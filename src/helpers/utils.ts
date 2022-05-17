import { promises } from "fs";

const writeFiles = async (
  name: string,
  data: "string | Stream | ArrayBufferView | Iterable<string | ArrayBufferView> | AsyncIterable<string | ArrayBufferView>"
): Promise<void> => await promises.writeFile(`images/output/${name}`, data);
export { writeFiles };
