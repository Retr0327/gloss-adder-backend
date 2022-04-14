import cors, { Options } from "@koa/cors";

const whitelList: string[] = ["http://localhost:3000", "http://localhost:3001"];

const corsConfig: Options = {
  origin: (ctx) => {
    console.log(ctx);
    return "*";
  },
  credentials: true,
  allowMethods: ["GET", "POST"],
};

export default corsConfig;
