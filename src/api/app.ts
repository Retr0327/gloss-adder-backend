import fs from "fs";
import Koa from "koa";
import cors from "@koa/cors";
import koaBody from "koa-body";
import corsConfig from "./helpers/corsConfig";
import { UPLOAD_DIR } from "./constants";
import { uploadGloss } from "./routes/uploadGloss";

if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR);
}

const app = new Koa();

app.use(cors(corsConfig));
app.use(koaBody({ urlencoded: true, multipart: true }));

app.use(uploadGloss.routes());
app.use(uploadGloss.allowedMethods());

export default app;
