import KoaRouter from "@koa/router";
import { handleDownload } from "../controllers";

const router = new KoaRouter();

router.get("/download:token", handleDownload);

export { router as download };
