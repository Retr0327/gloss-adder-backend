import { Context } from "koa";
import redisCli from "../models/redisCli";

const handleUploadGloss = async (ctx: Context) => {
  const { token } = ctx.request.body;

  const bufferResult = await redisCli.hgetallBuffer(token);

  ctx.status = 200;
  ctx.body = { status: "success" };
};

export default handleUploadGloss;
