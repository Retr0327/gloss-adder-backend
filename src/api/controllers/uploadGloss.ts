import { Context } from "koa";

const handleUploadGloss = async (ctx: Context) => {
  ctx.body = { msg: "hello" };
};

export default handleUploadGloss;
