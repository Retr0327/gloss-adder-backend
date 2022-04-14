import { Context, Next } from "koa";
import redisCli from "../models/redisCli";
import fs from "fs";

const ONE_HOUR = 60 * 60;

const cacheFile = async (ctx: Context, next: Next) => {
  const { token } = ctx.request.body;

  const requestFiles = Object.entries(ctx.request.files!).reduce(
    (acc, cur: any, i) => {
      const [fileName, dataForm] = cur;
      const tmpPath = dataForm["path"];
      acc[fileName] = fs.readFileSync(tmpPath);

      fs.unlink(tmpPath, (error) => {
        console.log(error);
      });
      return acc;
    },
    {} as any
  );

  // await Promise.all([
  //   redisCli.hset(token, requestFiles),
  //   redisCli.expire(token, ONE_HOUR),
  // ]);

  const bufferResult = await redisCli.hgetallBuffer("1649940131630");

  // console.log('bufferResult', bufferResult )

  const arrayOfFiles = Object.entries(bufferResult).map((value) => {
    const [timeStringName, buffer] = value;
    const fileName = timeStringName.match(/(?<=\d\-\d\-).*/g)![0];

    return { fileName, data: buffer };
  });

  console.log(arrayOfFiles[0].data);

  console.log(arrayOfFiles[0].data.toString());
  fs.writeFile(
    __dirname + "upload.txt",
    arrayOfFiles[0].data.toString(),
    "utf-8",
    (err) => {
      if (err) console.log(err);
    }
  );
  return next();
};

export default cacheFile;
