import { Options } from "@koa/cors";

const corsConfig: Options = {
  origin: (ctx) => {
    if (ctx.url === "/") {
      return "*";
    }

    return "http://client";
  },
  credentials: true,
  allowMethods: ["GET", "POST"],
};

export default corsConfig;
