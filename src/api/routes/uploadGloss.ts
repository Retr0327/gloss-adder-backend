import KoaRouter from "@koa/router";
import { handleUploadGloss } from "../controllers";

const router = new KoaRouter();

router.post("/uploadGloss", handleUploadGloss);

export { router as uploadGloss };
