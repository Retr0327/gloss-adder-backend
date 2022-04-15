import { Context, Next } from "koa";
import redisCli from "../models/redisCli";
import { parseRequestFiles, removeTMPFiles } from "../helpers/uploadFile";

const ONE_HOUR = 60 * 60;

const cacheFile = async (ctx: Context, next: Next) => {
  const { token } = ctx.request.body;

  const bufferResult = await redisCli.hgetallBuffer(token);

  if (Object.keys(bufferResult).length) {
    Object.values(ctx.request.files!).map((file: any) => {
      removeTMPFiles(file);
    });

    return next();
  }

  const requestFiles = parseRequestFiles(ctx);

  await Promise.all([
    redisCli.hset(token, requestFiles),
    redisCli.expire(token, ONE_HOUR),
  ]);

  return next();
};

export default cacheFile;
