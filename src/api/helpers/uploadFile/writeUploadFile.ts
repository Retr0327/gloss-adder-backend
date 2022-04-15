import fs from "fs";

type FileType = {
  fileName: string;
  data: Buffer;
};

function writeUploadFile(uploadLocation: string, file: FileType) {
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
