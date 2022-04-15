import KoaRouter from "@koa/router";

const router = new KoaRouter();

router.get("/", (ctx) => {
  console.log(ctx);
  ctx.body = { message: "success" };
});

export { router as rootRoute };
