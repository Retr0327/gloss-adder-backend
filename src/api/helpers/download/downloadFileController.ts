import fs from "fs";
import path from "path";
import zipFiles from "./zipFiles";
import { getUploadedFileDir } from "../../constants";

async function downloadFileController(token: string) {
  const uploadedFileDir = getUploadedFileDir(token);
  const allFiles = fs.readdirSync(uploadedFileDir);

  if (allFiles.length > 1) {
    await zipFiles(token);
    return path.join(uploadedFileDir, `${token}.zip`);
  }

  return path.join(uploadedFileDir, allFiles[0]);
}

export default downloadFileController;
