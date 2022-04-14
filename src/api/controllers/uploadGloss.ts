import { Context } from "koa";
import redisCli from "../models/redisCli";
import { createUploadFiles } from "../helpers/uploadFile";

const handleUploadGloss = async (ctx: Context) => {
  const { token } = ctx.request.body;

  const bufferResult = await redisCli.hgetallBuffer(token);

  await createUploadFiles(token, bufferResult);
  
  ctx.status = 200;
  ctx.body = { status: "success" };
};

export default handleUploadGloss;
