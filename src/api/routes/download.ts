import KoaRouter from "@koa/router";
import { handleDownload } from "../controllers";

const router = new KoaRouter();

router.post("/download:token", handleDownload);

export { router as uploadGloss };
