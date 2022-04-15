import fs from "fs";
import path from "path";
import { Context } from "koa";

const handleDownload = async (ctx: Context) => {
  console.log(ctx.request.query);
};

export default handleDownload;
