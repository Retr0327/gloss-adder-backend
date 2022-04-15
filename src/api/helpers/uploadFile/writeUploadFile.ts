import fs from "fs";

function writeUploadFile(uploadLocation: string, file: any) {
  return new Promise<void>((resolve, reject) => {
    fs.writeFile(
      `${uploadLocation}/${file.fileName}`,
      file.data.toString(),
      "utf8",
      (error) => {
        if (error) {
          return reject(error);
        }

        return resolve();
      }
    );
  });
}
export default writeUploadFile;
