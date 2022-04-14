import Koa from "koa";
import cors from "@koa/cors";
import corsConfig from "./helpers/corsConfig";
import { uploadGloss } from "./routes/uploadGloss";

const app = new Koa();

app.use(cors(corsConfig));

app.use(uploadGloss.routes());
app.use(uploadGloss.allowedMethods());

export default app;
