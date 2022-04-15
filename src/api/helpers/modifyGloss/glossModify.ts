import fs from "fs";
import { getUploadFileDir } from "../../constants";

async function glossModify(token: string, cliticOption: string) {
  const uploadedFileDir = getUploadFileDir(token);

  console.log(uploadedFileDir);
}

export default glossModify;
