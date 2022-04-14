import KoaRouter from "@koa/router";
import { checkHasToken } from "../middlewares";
import { handleUploadGloss } from "../controllers";

const router = new KoaRouter();

router.post("/uploadGloss", checkHasToken, handleUploadGloss);

export { router as uploadGloss };
