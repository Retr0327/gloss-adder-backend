import KoaRouter from "@koa/router";
import { handleUploadGloss } from "../controllers";
import { checkHasToken, checkHasFile } from "../middlewares";

const router = new KoaRouter();

router.post("/uploadGloss", checkHasFile, checkHasToken, handleUploadGloss);

export { router as uploadGloss };
