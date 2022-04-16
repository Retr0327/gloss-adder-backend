import fs from "fs";
import {
  removeUploadedFolder,
  downloadFileController,
} from "../helpers/download";
import { Context } from "koa";

const handleDownload = async (ctx: Context) => {
  const { token } = ctx.params;

  try {
    const downloadFile = await downloadFileController(token);

    ctx.attachment(downloadFile);
    ctx.status = 200;
    ctx.body = fs.createReadStream(downloadFile);
  } catch (error) {
    ctx.staus = 400;
    ctx.body = { status: "failed" };
  } finally {
    removeUploadedFolder(token);
  }
};

export default handleDownload;
