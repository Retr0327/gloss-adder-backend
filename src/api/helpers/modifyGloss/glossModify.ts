import fs from "fs";
import { getUploadedFileDir } from "../../constants";

async function glossModify(token: string, cliticOption: string) {
  const uploadedFileDir = getUploadedFileDir(token);

  console.log(uploadedFileDir);
}

export default glossModify;
