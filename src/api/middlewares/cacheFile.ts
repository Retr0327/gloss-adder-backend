import { Context, Next } from "koa";
import redisCli from "../models/redisCli";
import { parseRequestFiles } from "../helpers/uploadFile";

const ONE_HOUR = 60 * 60;

const cacheFile = async (ctx: Context, next: Next) => {
  const { token } = ctx.request.body;

  const bufferResult = await redisCli.hgetallBuffer(token);

  if (Object.keys(bufferResult).length) {
    return next();
  }

  const requestFiles = parseRequestFiles(ctx);

  await Promise.all([
    redisCli.hset(token, requestFiles),
    redisCli.expire(token, ONE_HOUR),
  ]);

  return next();
  
  // const arrayOfFiles = Object.entries(bufferResult).map((value) => {
  //   const [timeStringName, buffer] = value;
  //   const fileName = timeStringName.match(/(?<=\d\-\d\-).*/g)![0];

  //   return { fileName, data: buffer };
  // });

  // console.log(arrayOfFiles[0].data);

  // console.log(arrayOfFiles[0].data.toString());
  // fs.writeFile(
  //   __dirname + "upload.txt",
  //   arrayOfFiles[0].data.toString(),
  //   "utf-8",
  //   (err) => {
  //     if (err) console.log(err);
  //   }
  // );
};

export default cacheFile;
