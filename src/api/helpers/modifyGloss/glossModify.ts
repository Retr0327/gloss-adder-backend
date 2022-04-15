import fs from "fs";
import { writeGloss, GlossAdder } from "./utils";
import { getUploadedFileDir } from "../../constants";

async function glossModify(token: string, cliticOption: string) {
  const uploadedFileDir = getUploadedFileDir(token);

  fs.readdir(uploadedFileDir, async (err, files) => {
    for (let file of files) {
      const fileName = `${uploadedFileDir}/${file}`;
      const gloss = new GlossAdder(fileName, "utf8", parseInt(cliticOption));
      const glossContent = await gloss.add();
      await writeGloss(fileName, glossContent, "utf8");
    }
  });
}

export default glossModify;
