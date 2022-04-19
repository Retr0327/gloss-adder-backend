import { Context, Next } from "koa";

const checkHasToken = async (ctx: Context, next: Next) => {
  const { token } = ctx.request.body;

  if (!token) {
    ctx.status = 400;
    ctx.body = { status: "failed", message: "No download token" };
    return;
  }

  return next();
};

export default checkHasToken;
