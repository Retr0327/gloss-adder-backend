import fs from "fs";
import writeUploadFile from "./writeUploadFile";
import { getUploadFileDir } from "../../constants";

type bufferResultType = [field: Buffer, value: Buffer][];

async function saveUploadFiles(token: string, bufferResult: bufferResultType) {
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

  arrayOfFiles.reduce((curFile: any, nextFile) => {
    writeUploadFile(uploadLocation, nextFile).then();
  }, writeUploadFile);
}

export default saveUploadFiles;
