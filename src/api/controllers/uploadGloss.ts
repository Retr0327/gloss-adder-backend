import { Context } from "koa";
import redisCli from "../models/redisCli";
import { saveUploadFiles } from "../helpers/uploadFile";
import glossModify from "../helpers/modifyGloss/glossModify";

const handleUploadGloss = async (ctx: Context) => {
  const { token, cliticOption } = ctx.request.body;

  const bufferResult = await redisCli.hgetallBuffer(token);

  await saveUploadFiles(token, bufferResult);

  await glossModify(token, cliticOption);

  ctx.status = 200;
  ctx.body = { status: "success", token, message: "uploaded" };
};

export default handleUploadGloss;
