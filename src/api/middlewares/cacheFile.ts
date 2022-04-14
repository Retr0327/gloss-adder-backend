import { Context, Next } from "koa";
import redisCli from "../models/redisCli";

const ONE_HOUR = 60 * 60;

const cacheFile = async (ctx: Context, next: Next) => {
  const { token } = ctx.request.body;

  // ctx.request.files;
};

export default cacheFile;
