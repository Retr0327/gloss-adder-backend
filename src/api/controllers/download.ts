import fs from "fs";
import path from "path";
import { Context } from "koa";
import zipFiles from "../helpers/zipFiles";
import { getUploadedFileDir } from "../constants";

const handleDownload = async (ctx: Context) => {
  const { token } = ctx.params;
  const uploadedFileDir = getUploadedFileDir(token);
  const allFiles = fs.readdirSync(uploadedFileDir);

  if (allFiles.length > 1) {
    await zipFiles(token);
    const zipFile = path.join(uploadedFileDir, `${token}.zip`);
    ctx.attachment(zipFile);
    ctx.status = 200;
    ctx.body = fs.createReadStream(zipFile);
    return;
  }

  const downloadFile = path.join(uploadedFileDir, allFiles[0]);
  ctx.set("Content-disposition", `attachment; filename=${downloadFile}`);
  ctx.status = 200;
  ctx.body = fs.createReadStream(downloadFile);
};

export default handleDownload;
