import fs from "fs";
import { getUploadFileDir } from "../../constants";

type bufferResultType = [field: Buffer, value: Buffer][];

async function createUploadFiles(
  token: string,
  bufferResult: bufferResultType
) {
  const uploadLocation = getUploadFileDir(token);

  fs.mkdir(uploadLocation, { recursive: true }, (error) => {
    if (error) {
      console.log("cannot upload to a new directory", error);
    }
  });

  const arrayOfFiles = Object.entries(bufferResult).map((value) => {
    const [timeStringName, buffer] = value;
    const fileName = timeStringName.match(/(?<=\d\-\d\-).*/g)![0];

    return { fileName, data: buffer };
  });

  return null;
}

export default createUploadFiles;
