import fs from "fs";
import path from "path";
import { Context } from "koa";
import { getUploadedFileDir } from "../constants";

const handleDownload = async (ctx: Context) => {
  const { token } = ctx.params;
  const uploadedFileDir = getUploadedFileDir(token);
  const allFiles = fs.readdirSync(uploadedFileDir);

  console.log(allFiles)

};

export default handleDownload;
