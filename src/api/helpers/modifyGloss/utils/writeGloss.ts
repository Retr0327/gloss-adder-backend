import { promises as fs } from "fs";
import { BufferEncoding, FileDataType } from "types";

async function writeGloss(
  fileName: string,
  data: FileDataType,
  encoding: BufferEncoding = "utf-8"
) {
  try {
    await fs.writeFile(fileName, data, { encoding });
    return ["success", null];
  } catch (error) {
    console.log("writeGloss: ", error);
    return [null, error];
  }
}

export default writeGloss;
