import fs from "fs";
import Koa from "koa";
import cors from "@koa/cors";
import koaBody from "koa-body";
import { UPLOAD_DIR } from "./constants";
import corsConfig from "./helpers/corsConfig";
import { rootRoute, uploadGloss } from "./routes";

if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR);
}

const app = new Koa();

app.use(cors(corsConfig));
app.use(koaBody({ urlencoded: true, multipart: true }));

app.use(uploadGloss.routes());
app.use(uploadGloss.allowedMethods());
app.use(rootRoute.routes());
app.use(rootRoute.allowedMethods());

export default app;
