import Koa from "koa";
import cors from "@koa/cors";
import corsConfig from "./helpers/corsConfig";

const app = new Koa();

app.use(cors(corsConfig));

app.use(async (ctx) => {
  ctx.body = "hello world";
});

export default app;
