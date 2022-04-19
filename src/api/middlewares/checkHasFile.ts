import { Context, Next } from "koa";

const checkHasFile = async (ctx: Context, next: Next) => {
  const hasFile = ctx.request.files !== null;

  if (!hasFile) {
    ctx.status = 400;
    ctx.body = { status: "failed", msg: "No file uploaded" };
    return 
  }

  return next();
};

export default checkHasFile;
