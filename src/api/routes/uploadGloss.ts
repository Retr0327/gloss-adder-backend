import KoaRouter from "koa-router";

const router = new KoaRouter();

router.post("/uploadGloss", async (ctx) => {
  ctx.body = { msg: "hello" };
});

export { router as uploadGloss };
