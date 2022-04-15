import fs from "fs";

async function removeTMPFiles(file: any) {
  return new Promise<void>((resolve, reject) => {
    const tmpPath = file["path"];

    fs.unlink(tmpPath, (error) => {
      return reject(error);
    });

    return resolve();
  });
}

export default removeTMPFiles;
