import cors, { Options } from "koa-cors";

const whitelList: string[] = ["http://localhost:3000", "http://localhost:3001"];

const corsConfig: Options = {
  origin: (request) => {
    console.log(request);
    return "*";
  },
  credentials: true,
  methods: ["GET", "POST"],
};

export default corsConfig;
