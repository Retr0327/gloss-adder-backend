import fs from "fs";
import { getUploadedFileDir } from "../constants";

async function removeUploadedFolder(token: string) {
  const downloadFolder = getUploadedFileDir(token);

  fs.rm(downloadFolder, { recursive: true }, (error) => {
    if (error) {
      console.log("cannot delete the download foler!");
    }
  });
}

export default removeUploadedFolder;
