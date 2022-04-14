import KoaRouter from "@koa/router";
import { handleUploadGloss } from "../controllers";
import { checkHasToken, checkHasFile, cacheFile } from "../middlewares";

const router = new KoaRouter();

router.post(
  "/uploadGloss",
  checkHasFile,
  checkHasToken,
  cacheFile,
  handleUploadGloss
);

export { router as uploadGloss };
