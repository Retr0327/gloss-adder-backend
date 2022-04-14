import fs from "fs";
import { Context } from "koa";

function parseRequestFiles(ctx: Context) {
  const fileEntries = Object.entries(ctx.request.files!);

  return fileEntries.reduce((acc: any, cur: any, index) => {
    const [fileName, file] = cur;
    const tmpPath = file["path"];
    acc[fileName] = fs.readFileSync(tmpPath);

    fs.unlink(tmpPath, (error) => {
      console.log(error);
    });

    return acc;
  }, {} as any);
}

export default parseRequestFiles;
