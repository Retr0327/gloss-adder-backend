import { Context, Next } from "koa";

const checkHasToken = async (ctx: Context, next: Next) => {
  const { token } = ctx.request.body;

  if (!token) {
    ctx.status = 400;
    ctx.body = { status: "failed", msg: "No download token" };
  }

  return next();
};

export default checkHasToken;