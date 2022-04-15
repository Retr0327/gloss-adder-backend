import { BufferEncoding } from "types";
import GlossReader from "./glossReader";

class GlossAdder {
  fileName: string;
  encoding: BufferEncoding;
  cliticSep: number;

  constructor(
    fileName: string,
    encoding: BufferEncoding = "utf-8",
    cliticSep: number = 1
  ) {
    this.fileName = fileName;
    this.encoding = encoding;
    this.cliticSep = cliticSep;
  }

  async readFile(): Promise<string[]> {
    const txtFile = new GlossReader(this.fileName);
    return await txtFile.read();
  }

  getGlaIndex(content: string[]) {
    let indexArray = [];
    for (const [index, element] of content.entries()) {
      const isNumber = /^\d.*\./;
      if (isNumber.test(element)) {
        indexArray.push(index + 1);
      }
    }
    return indexArray;
  }

  modifyGla(gla: string) {
    if (this.cliticSep) {
      let glaWithoutSpace = gla.replace(
        /([\^\<\>]|(L[\d@].)|\-\b|[\[\]]|)/g,
        ""
      );
      let glaWithSpace = glaWithoutSpace.replace(
        /(?<=a)\.\b|[\s]|(\b\=\b)+/g,
        " "
      );
      return glaWithSpace;
    } else {
      let glaWithoutSpace = gla.replace(
        /([\^\<\>]|(L[\d@].)|(\b\=\b)|\-\b|[\[\]]|)/g,
        ""
      );
      let glaWithSpace = glaWithoutSpace.replace(/(?<=a)\.\b|[\s]+/g, " ");
      return glaWithSpace;
    }
  }

  searchItem(glaIndex: number[], content: string[]) {
    let count = 0;
    for (let value of glaIndex) {
      let gla = content[value + count];
      content.splice(value + count, 0, this.modifyGla(gla));
      count++;
    }
    return content;
  }

  async add() {
    const content = await this.readFile();
    const glaIndex = this.getGlaIndex(content);
    const data = this.searchItem(glaIndex, content);
    return data.join("\n");
  }
}

export default GlossAdder;
