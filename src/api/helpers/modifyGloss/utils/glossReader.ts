import { promises as fs } from "fs";
import { BufferEncoding } from "types";

class GlossReader {
  fileName: string;
  encoding: BufferEncoding;

  constructor(fileName: string, encoding: BufferEncoding = "utf8") {
    this.fileName = fileName;
    this.encoding = encoding;
  }

  renumber(filePath: string[]) {
    let count = 0;
    for (const [index, element] of filePath.entries()) {
      const isNumber = /^\d\./;
      if (isNumber.test(element)) {
        filePath[index] = `${count + 1}.`;
        count++;
      }
    }
    return filePath;
  }

  readLines(file: string | undefined) {
    if (!file) {
      throw new Error("cannot readLines");
    }
    const splitedFile = file.split("\n");
    return splitedFile.map((value: string) => value.trim());
  }

  async processFile(filePath: string) {
    try {
      const output = await fs.readFile(filePath, { encoding: this.encoding });
      return output.toString();
    } catch (error: any) {
      console.error(error.message);
    }
  }

  async read() {
    const file = await this.processFile(this.fileName);
    const fileArray = this.readLines(file);
    return this.renumber(fileArray);
  }
}

export default GlossReader;
