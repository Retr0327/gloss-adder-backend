import { Context } from "koa";

const handleUploadGloss = async (ctx: Context) => {
  console.log("ctx", ctx.request.body);
  ctx.status = 200;
  ctx.body = { status: "success" };
};

export default handleUploadGloss;
