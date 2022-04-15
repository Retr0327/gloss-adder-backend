import fs from "fs";
import path from "path";
import archiver from "archiver";
import { getUploadedFileDir } from "../constants";

async function zipFiles(token: string) {
  const uploadLocation = getUploadedFileDir(token);
  const zipPath = path.join(uploadLocation, token) + ".zip";
  const output = fs.createWriteStream(zipPath);
  const zipArchiver = archiver("zip", { zlib: { level: 9 } });

  return new Promise<void>((resolve, reject) => {
    zipArchiver.on("error", (err) => reject(err));
    zipArchiver.pipe(output);

    zipArchiver.glob("**", {
      cwd: uploadLocation,
      ignore: [".DS_Store", "*.zip"],
    });

    output.on("close", () => resolve());
    zipArchiver.finalize();
  });
}

export default zipFiles;
