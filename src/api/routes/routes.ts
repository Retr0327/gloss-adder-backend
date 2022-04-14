import KoaRouter from "koa-router";

const router = new KoaRouter();

router.get("/blob", (ctx) => {
  ctx.body = "ss";
});

export default router;
