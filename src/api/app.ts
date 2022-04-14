import Koa from "koa";
import cors from "@koa/cors";
import koaBody from "koa-body";
import corsConfig from "./helpers/corsConfig";
import { uploadGloss } from "./routes/uploadGloss";

const app = new Koa();

app.use(cors(corsConfig));
app.use(koaBody({ urlencoded: true, multipart: true }));

app.use(uploadGloss.routes());
app.use(uploadGloss.allowedMethods());

export default app;
